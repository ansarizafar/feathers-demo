import {Component, Host} from 'angular2/core';
import {NgFormModel} from 'angular2/common';
import {ValidationService} from '../services/validationservice';
     
@Component({
    selector: 'control-messages',
    inputs: ['controlName: control'],
    template: `<div style=" color: #E82C0C; margin-left: 1.2em; margin-top:.6em;" *ngIf="errorMessage !== null">{{errorMessage}}</div>`
     })
export class ControlMessages {
    controlName: string;
    constructor(@Host() private _formDir: NgFormModel) { }
     
    get errorMessage() {
        // Find the control in the Host (Parent) form
        let c = this._formDir.form.find(this.controlName);

        for (let propertyName in c.errors) {
	        // If control has a error
          
            if (c.errors.hasOwnProperty(propertyName) && c.touched) {
 		        // Return the appropriate error message from the Validation Service
                return ValidationService.getValidatorErrorMessage(propertyName);
            }
        }
        
        return null;
    }
}