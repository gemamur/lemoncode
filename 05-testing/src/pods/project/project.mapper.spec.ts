import * as am from './api/project.api-model';
import { mapProjectFromApiToVm } from './project.mapper';
import * as vm from './project.vm';

describe('mapper specs', () => {
    it('should return empty array when it feeds undefined', () =>{
        //arrange
        const project: am.Project = undefined;

        //act
        const result: vm.Project = mapProjectFromApiToVm(project); 
        
        //assert
        expect(result).toEqual(vm.createEmptyProject());
    });

    it('should return empty array when it feeds null', () =>{
        //arrange
        const project: am.Project = null;

        //act
        const result: vm.Project = mapProjectFromApiToVm(project); 
        
        //assert
        expect(result).toEqual(vm.createEmptyProject());
    });

    it('should return expected result but feeding null employees list', () => {
        // Arrange
        const project: am.Project = {
            id: "test id",
            name: "test name",
            externalId: "test external id",
            comments: "test comments",
            isActive: true,
            employees: null
          };
    
        const expectedResult: vm.Project = {
            id: "test id",
            name: "test name",
            externalId: "test external id",
            comments: "test comments",
            isActive: true,
            employees: []
        };
    
        // Act
        const result = mapProjectFromApiToVm(project);
    
        // Assert
        expect(result).toEqual(expectedResult);
      });
      it('should return expected result but feeding undefined employees list', () => {
        // Arrange
        const project: am.Project = {
            id: "test id",
            name: "test name",
            externalId: "test external id",
            comments: "test comments",
            isActive: true,
            employees: undefined
          };
    
        const expectedResult: vm.Project = {
            id: "test id",
            name: "test name",
            externalId: "test external id",
            comments: "test comments",
            isActive: true,
            employees: []
        };
    
        // Act
        const result = mapProjectFromApiToVm(project);
    
        // Assert
        expect(result).toEqual(expectedResult);
      });
      it('should return expected result feeding correct values', () => {
        // Arrange
        const project: am.Project = {
            id: "test id",
            name: "test name",
            externalId: "test external id",
            comments: "test comments",
            isActive: true,
            employees: [{
                id: "test id",
                isAssigned: true,
                employeeName: "test employee name"
            }]
          };
    
        const expectedResult: vm.Project = {
            id: "test id",
            name: "test name",
            externalId: "test external id",
            comments: "test comments",
            isActive: true,
            employees: [{
                id: "test id",
                isAssigned: true,
                employeeName: "test employee name"
            }]
        };
    
        // Act
        const result = mapProjectFromApiToVm(project);
    
        // Assert
        expect(result).toEqual(expectedResult);
      });
});