/**
 * New typescript file
 */

import { Component, OnInit } from "@angular/core";
import { ProductsService } from './products.service';
import { DialogRef, ModalComponent, CloseGuard } from 'angular2-modal';
import { BSModalContext } from 'angular2-modal/plugins/bootstrap';
 
export class HormonereplacementtherapyComponentContext extends BSModalContext {
  public num1: number;
  public num2: number;
 }
 
@Component({
   selector: 'hormonereplacementtherapy',  
   styleUrls: ['./app.component.css'],
   templateUrl: './hormonereplacementtherapy.component.html' 
  }) 
    


export class HormonereplacementtherapyComponent implements OnInit, CloseGuard, ModalComponent<HormonereplacementtherapyComponentContext> {
  context: HormonereplacementtherapyComponentContext; 
    
    public aboutustexthormonereplacementtherapy:string; 
    public wrongAnswer: boolean;
     // bind to the css class   
    linkHide = 'hidden';
    linkShow= 'visible';
     
     
    
     constructor(public dialog: DialogRef<HormonereplacementtherapyComponentContext>) {
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
