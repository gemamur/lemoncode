import {render, renderHook, act} from '@testing-library/react';
import {useConfirmationDialog} from './confirmation-dialog.hook';
import { createEmptyLookup, Lookup } from '../../../common/models';

describe('confirmation dialog hook specs', () => {
    it('should returns new isOpen value after called setIsOpen', () => {
        //arrange
            
        //act
        const {result} = renderHook(() => useConfirmationDialog());
        console.log(result.current.isOpen); //para comprobar que al iniciar es false
        act(() => {
            result.current.setIsOpen(true);
        });
        //assert
        expect(result.current.isOpen).toEqual(true);
        
    });

    it('should returns new itemToDelete after called setItemToDelete', () => {
        //arrange
        const newItemToDelete = createEmptyLookup(); 
        //act
        const {result} = renderHook(()=>useConfirmationDialog());
        act(()=>{
            result.current.setItemToDelete(createEmptyLookup());
        });

        //assert
        expect(result.current.itemToDelete).toEqual(newItemToDelete);
    });
});