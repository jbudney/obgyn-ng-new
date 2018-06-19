/**
 * New typescript file
 */
import { Component, OnInit } from "@angular/core";
import { ProductsService } from './products.service';
import { Modal, BSModalContext } from 'angular2-modal/plugins/bootstrap';
import { ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { Overlay, overlayConfigFactory } from 'angular2-modal'; 
import { CustomModalContext, CustomModal } from './custom-modal';


 
@Component({
  selector: 'prenatalcare',  
  styleUrls: ['./app.component.css'],  
  template:`<span class = "light" [style.visibility]='linkShow' (click)="myFuncPrenatalcare(true)">
          <span class="glyphicon glyphicon-plus light"></span>
        </span>
`,
  providers: [Modal]

  }) 
     
export class PrenatalcareComponent implements OnInit{
aboutustextprenatalcare:string; 
 // bind to the css class   
linkHide = 'hidden';
linkShow= 'visible';
    
  constructor(private productsService:ProductsService, public modal: Modal){}
    
  ngOnInit(){
      //this.aboutustext.
  }

  myFuncPrenatalcare(status){
    console.log("function called");
      
    if(status) {
      //this.aboutustextobstetrics = "A new member of your family is always an exciting event, and a healthy outcome starts with the care that you can find with the doctors of Boca Raton Ob/Gyn Specialists. We offer comprehensive obstetric services, including complicated obstetrics. Our physicians do all the deliveries for our practice. We believe that each woman is an individual and will respond to pregnancy, labor and delivery uniquely. Accordingly, we do not have pre-defined labor protocols.  We believe that you are an active partner in your medical care. We will discuss available options together and encourage you to be an active participant in the decision-making process. Our goal is to have a healthy baby and a healthy you.";
     this.aboutustextprenatalcare = this.productsService.prenatalcareData();
     return this.modal.open(CustomModal,  overlayConfigFactory({ num1: 2, num2: 3,dataIn: this.aboutustextprenatalcare, title: "Prenatal Care", }, BSModalContext));
  }
  }
 }
