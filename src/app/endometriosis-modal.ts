/**
 * New typescript file
 */
import { Component, OnInit } from "@angular/core";
import { DialogRef, ModalComponent, CloseGuard } from 'angular2-modal';
import { BSModalContext } from 'angular2-modal/plugins/bootstrap';
import { ProductsService } from './products.service';
import { ProductsComponent} from './products.component';
 


export class EndometriosisModalContext extends BSModalContext {
  public num1: number;
  public num2: number;
 }

/**
 * A Sample of how simple it is to create a new window, with its own injects.
 */
@Component({
  selector: 'endometriosismodal',
 //styleUrls: ['./endometriosis.component.css'],
   //styleUrls: ['../../node_modules/bootstrap/dist/css/bootstrap.min.css'],
   styleUrls: ['./app.component.css'],
 
  //TODO: [ngClass] here on purpose, no real use, just to show how to workaround ng2 issue #4330.
  // Remove when solved.
  /* tslint:disable */ 
  templateUrl: './endometriosis.component.html' 
   /* templateUrl: './testPage.html' */
  
})
    
   
export class EndometriosisModal implements OnInit, CloseGuard, ModalComponent<EndometriosisModalContext> {
  context: EndometriosisModalContext;

 public wrongAnswer: boolean;
 public aboutustextendometriosis:string; 
 // bind to the css class   
 linkHide = 'hidden';
 linkShow= 'visible';
    
constructor(public dialog: DialogRef<EndometriosisModalContext>) {
    this.context = dialog.context;
    this.wrongAnswer = true;
    dialog.setCloseGuard(this);
  } 
     
  ngOnInit(){
      //this.aboutustext.
  }
  

  exit(value) {
    this.wrongAnswer = false;
    this.dialog.close();
  }
  hideIt() { 
    this.dialog.close();
  }

  beforeDismiss(): boolean {
    return true;
  }

//  beforeClose(): boolean {
 //   return this.wrongAnswer;
 // }
    
}
   