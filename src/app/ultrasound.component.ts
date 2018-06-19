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
  selector: 'ultrasound',  
  styleUrls: ['./app.component.css'],  
  template:`<span class = "light" [style.visibility]='linkShow' (click)="myFuncUltrasound(true)">
          <span class="glyphicon glyphicon-plus light"></span>
        </span>
`,
  providers: [Modal]

  }) 
     
export class UltrasoundComponent implements OnInit{
aboutustextultrasound:string; 
 // bind to the css class   
linkHide = 'hidden';
linkShow= 'visible';
    
  constructor(private productsService:ProductsService , public modal: Modal){}
    
  ngOnInit(){
      //this.aboutustext.
  }

  myFuncUltrasound(status){
    console.log("function called");
      
    if(status) {
      //this.aboutustextobstetrics = "A new member of your family is always an exciting event, and a healthy outcome starts with the care that you can find with the doctors of Boca Raton Ob/Gyn Specialists. We offer comprehensive obstetric services, including complicated obstetrics. Our physicians do all the deliveries for our practice. We believe that each woman is an individual and will respond to pregnancy, labor and delivery uniquely. Accordingly, we do not have pre-defined labor protocols.  We believe that you are an active partner in your medical care. We will discuss available options together and encourage you to be an active participant in the decision-making process. Our goal is to have a healthy baby and a healthy you.";
     this.aboutustextultrasound = this.productsService.ultrasoundData();
      return this.modal.open(CustomModal,  overlayConfigFactory({ num1: 2, num2: 3,dataIn: this.aboutustextultrasound , title: "Ultrasound", }, BSModalContext));
 

      }
   
  }
 }
