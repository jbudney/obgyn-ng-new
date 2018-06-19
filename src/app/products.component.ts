/**
 * New typescript file
 */
import { Component, OnInit } from "@angular/core";
import { ProductsService } from './products.service';
import { Overlay, overlayConfigFactory } from 'angular2-modal';
import { Modal, BSModalContext } from 'angular2-modal/plugins/bootstrap';
import { CustomModalContext, CustomModal } from './custom-modal';
import { DrAlleyModal,DrAlleyModalContext } from './dralley/dralley-modal';
import { EndometriosisModal, EndometriosisModalContext} from './endometriosis-modal';
import { HormonereplacementtherapyComponent, HormonereplacementtherapyComponentContext} from './hormonereplacementtherapy.component';
import { UrodynamicstestingComponent,UrodynamicstestingComponentContext}  from './urodynamicstesting.component';
import { PelvicfloormuscletrainingComponent, PelvicfloormuscletrainingComponentContext}  from './pelvicfloormuscletraining.component';
//import { MonaLisaTouchComponent, MonaLisaTouchComponentContext }from './monalisatouch.component';
@Component({
  selector: 'products',  
  styleUrls: ['./app.component.css'],  
  template:`
        <ul>
        <li class="light" *ngFor="let product of products" [value]="product">
          {{product}}  
         <span *ngIf="product=='Obstetrics'" ><obstetrics></obstetrics></span>
         <span *ngIf="product=='Gynecologic Surgery'"><gynecology></gynecology></span>
         <span *ngIf="product=='Annual Exams'"><annualexams></annualexams></span>
         <span *ngIf="product=='Infertility'"><infertility></infertility></span>
         <span *ngIf="product=='Prenatal Care'"><prenatalcare></prenatalcare></span>
         <span *ngIf="product=='Urinary Dysfunction'"><urinarydysfunction></urinarydysfunction></span> 
         <span *ngIf="product=='Menopausal Medicine'"><menopausalmedicine></menopausalmedicine></span>   
         <span *ngIf="product=='Ultrasound'"><ultrasound></ultrasound></span> 
         <span *ngIf="product=='Robotic Surgery'"><roboticsurgery></roboticsurgery></span> 
         <span *ngIf="product=='Endometriosis'"><i (click)="openEndometriosisModal()"><span class="glyphicon glyphicon-plus light"></span></i>
  </span> 
         <span *ngIf="product=='Minimally Invasive Surgery'"><minimallyinvasivesurgery></minimallyinvasivesurgery></span>
         <span *ngIf="product=='Bone Density'"><bonedensity></bonedensity></span>
         <span *ngIf="product=='Hormone Replacement Therapy'"><i (click)="openHormonereplacementtherapyComponent()"><span class="glyphicon glyphicon-plus light"></span></i>
  </span> 
<span *ngIf="product=='Urodynamics Testing'"><i (click)="openUrodynamicstestingComponent()"><span class="glyphicon glyphicon-plus light"></span></i>
  </span> 
<span *ngIf="product=='Pelvic Floor Muscle Training'"><i (click)="openPelvicfloormuscletrainingComponent()"><span class="glyphicon glyphicon-plus light"></span></i>
  </span> 
  </li>
        </ul> 
` 
  }) 
     
export class ProductsComponent implements OnInit{
products:string[]; 
 // bind to the css class   
linkHide = 'hidden';
linkShow= 'visible';
    
  constructor(private productsService:ProductsService,public modal: Modal){
       this.products = this.productsService.getProducts();
      
      }
    
  ngOnInit(){
      //this.aboutustext.
  }

  myFuncProduct(status){
    console.log("function called");
      
    if(status) {
      //this.aboutustextobstetrics = "A new member of your family is always an exciting event, and a healthy outcome starts with the care that you can find with the doctors of Boca Raton Ob/Gyn Specialists. We offer comprehensive obstetric services, including complicated obstetrics. Our physicians do all the deliveries for our practice. We believe that each woman is an individual and will respond to pregnancy, labor and delivery uniquely. Accordingly, we do not have pre-defined labor protocols.  We believe that you are an active partner in your medical care. We will discuss available options together and encourage you to be an active participant in the decision-making process. Our goal is to have a healthy baby and a healthy you.";
      this.products = this.productsService.getProducts();
      this.linkHide = 'visible';
      this.linkShow= 'hidden';
    }
      else {
       this.products = null;
       this.linkHide = 'hidden';
       this.linkShow= 'visible';
      }
   
  }
   openDrAlleyModal() {
    return this.modal.open(DrAlleyModal,  overlayConfigFactory({ num1: 2, num2: 3 }, BSModalContext));
  }
    openEndometriosisModal() {
    return this.modal.open(EndometriosisModal,  overlayConfigFactory({ num1: 2, num2: 3 }, BSModalContext));
  }
    openHormonereplacementtherapyComponent() {
    return this.modal.open(HormonereplacementtherapyComponent,  overlayConfigFactory({ num1: 2, num2: 3 }, BSModalContext));
  }
    openUrodynamicstestingComponent() {
    return this.modal.open(UrodynamicstestingComponent,  overlayConfigFactory({ num1: 2, num2: 3 }, BSModalContext));
  }
    openPelvicfloormuscletrainingComponent(){
    return this.modal.open(PelvicfloormuscletrainingComponent,  overlayConfigFactory({ num1: 2, num2: 3 }, BSModalContext));
  }
 }
