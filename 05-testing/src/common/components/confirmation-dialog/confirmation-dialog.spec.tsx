import React from 'react';
import { ConfirmationDialogComponent } from './confirmation-dialog.component';
import {render, screen} from '@testing-library/react';
import { Typography } from '@mui/material';
import userEvent from '@testing-library/user-event';

describe('Confirmation dialog component specs', () => {
    it('should be render as expected passing required properties', ()=>{
      //arrange
      

      const props = {
        isOpen: true,
        onAccept: jest.fn(),
        onClose: jest.fn(),
        labels: { closeButton: "close", acceptButton: "accept"},
        title: "title"
      }
      //Act
      render(<ConfirmationDialogComponent {...props}>
        <Typography />
          
      </ConfirmationDialogComponent>);
      const title = screen.getByText("title");
      //assert
      expect(title).toBeInTheDocument();

    });

    it('should display a button with text "accept"', () => {
        //arrange
        

          const props = {
            isOpen: true,
            onAccept: jest.fn(),
            onClose: jest.fn(),
            labels: { closeButton: "close", acceptButton: "accept"},
            title: "title"
          }
        //Act
            render(<ConfirmationDialogComponent {...props}>
                <Typography />
                  
              </ConfirmationDialogComponent>);
              const acceptButton = screen.getByRole("button", {name: 'accept', });
        //Assert
        expect(acceptButton).toBeInTheDocument();
        
    });
    it('should call onClick property when it clicks on the "accept" button', async() => {
      //arrange
      const props = {
        isOpen: true,
        onAccept: jest.fn(),
        onClose: jest.fn(),
        labels: { closeButton: "close", acceptButton: "accept"},
        title: "title"
      }
      //act
      render(<ConfirmationDialogComponent {...props}>
        <Typography />
          
      </ConfirmationDialogComponent>);
        const acceptButton = screen.getByRole('button', {name: "accept"});
        await userEvent.click(acceptButton);
      //assert
        expect(props.onAccept).toHaveBeenCalled();
    });
    it('should call onClick property when it clicks on the "close" button', async() => {
      //arrange
      const props = {
        isOpen: true,
        onAccept: jest.fn(),
        onClose: jest.fn(),
        labels: { closeButton: "close", acceptButton: "accept"},
        title: "title"
      }
      //act
      render(<ConfirmationDialogComponent {...props}>
        <Typography />
          
      </ConfirmationDialogComponent>);
        const closeButton = screen.getByRole('button', {name: "close"});
        await userEvent.click(closeButton);
      //assert
        expect(props.onClose).toHaveBeenCalled();
    });
});