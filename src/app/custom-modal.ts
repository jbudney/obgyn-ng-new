import { Component } from '@angular/core';

import { DialogRef, ModalComponent, CloseGuard } from 'angular2-modal';
import { BSModalContext } from 'angular2-modal/plugins/bootstrap';

export class CustomModalContext extends BSModalContext {
  public num1: number;
  public num2: number;
  public dataIn: string;
  public title: string;
}

/**
 * A Sample of how simple it is to create a new window, with its own injects.
 */
@Component({
  selector: 'modal-content',
  styles: [`
        .modal-text { font: normal medium-caps normal 9px/.9 Georgia;
            font-weight: normal;
            color: black;
            text-align: left;
            }
        p { font: normal medium-caps normal 9px/.9 Georgia;
            font-weight: normal;
            color: black;
            text-align: left;
            }
        .modal-img-header{
            background: url("../assets/img/popupheader.png" );
            
        }
        .modal-data{
            background-color: #f9f2f2;
        }
        .custom-modal-container {
            padding: 15px;
            background-color: #f9f2f2;
        }

        .custom-modal-header {
            color: #f4d2dd;
            -webkit-box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.75);
            -moz-box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.75);
            box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.75);
            margin-top: -15px;
            margin-bottom: 10px;
        }
        .custom-modal-footer{
            color: #f4d2dd;
            -webkit-box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.75);
            -moz-box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.75);
            box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.75);
             
        }
    `],
  //TODO: [ngClass] here on purpose, no real use, just to show how to workaround ng2 issue #4330.
  // Remove when solved.
  /* tslint:disable */ 
     templateUrl: './custom-modal.html' 
     
})
export class CustomModal implements CloseGuard, ModalComponent<CustomModalContext> {
  context: CustomModalContext;

  public wrongAnswer: boolean;

  constructor(public dialog: DialogRef<CustomModalContext>) {
    this.context = dialog.context;
    this.wrongAnswer = true;
    dialog.setCloseGuard(this);
  } 

 // onKeyUp(value) {
  //  this.wrongAnswer = value != 5;
  //  this.dialog.close();
  //}
    
  exit(value) {
    this.wrongAnswer = false;
    this.dialog.close();
  }

  beforeDismiss(): boolean {
    return true;
  }

  beforeClose(): boolean {
    return this.wrongAnswer;
  }
}
