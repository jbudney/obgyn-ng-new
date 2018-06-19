/**
 * New typescript file
 */
import { Component, OnInit } from "@angular/core";
import { ProductsService } from './products.service';

import { ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { Overlay, overlayConfigFactory } from 'angular2-modal';
import { Modal, BSModalContext } from 'angular2-modal/plugins/bootstrap';
import { CustomModalContext, CustomModal } from './custom-modal';

export class AboutusComponentContext extends BSModalContext {
  public aboutustext: string;
  
}

@Component({
  selector: 'aboutus',  
  styleUrls: ['./app.component.css'],  
  template:`<span [style.visibility]='linkShow' (click)="mainInfoFunc(true)">
             <span class="glyphicon glyphicon-plus light"></span>
        </span>  
`,
  providers: [Modal]

  }) 
     
export class AboutusComponent implements OnInit {
 context: AboutusComponentContext;

 aboutustext:string; 
 // bind to the css class   
linkHide = 'hidden';
linkShow= 'visible';
    
   constructor(private productsService:ProductsService, public modal: Modal) {}
    
  ngOnInit(){
      //this.aboutustext.
  }
 doSomething(){
    console.log("function called");
     alert('hello it' );
   
  }

  mainInfoFunc(status){
    console.log("function called");
     
    if(status) {
      this.aboutustext = "At Boca Raton Ob/Gyn Specialists, we are your partner in health care. <br><br>We recognize your unique concerns and fears and will approach your care as a partnership, taking the time to get to know you and to answer your questions. <br><br>We realize that we're not just providing quality Ob/Gyn care, but we are building lasting relationships as well. <br><br>At Boca Raton Ob/Gyn Specialists, we are devoted to making your experience a pleasant one and promise to treat you as an individual and not just a name on a chart. <br><br>From scheduling to billing; from conception to birth; from adolescence through menopause and after, we promise to be here for you";
      return this.modal.open(CustomModal,  overlayConfigFactory({ num1: 2, num2: 3,dataIn: this.aboutustext, title: "About Us", }, BSModalContext));
 
        }
      
     }
    
    }
