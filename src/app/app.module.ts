import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { PhoneComponent } from './phone.component';
import { AwardsComponent } from './awards.component';
 
import { DialogService }  from './dialog.service';
import { Router } from '@angular/router';

import { ProductsService } from './products.service';
import { ProductsComponent} from './products.component'; 

import { ModalModule } from 'angular2-modal'; 
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap'

import { CustomModal } from './custom-modal'; 
import { EndometriosisModal } from './endometriosis-modal';
import { UrodynamicstestingComponent } from './urodynamicstesting.component';
import { PelvicfloormuscletrainingComponent } from './pelvicfloormuscletraining.component';

import { SubscribeComponent } from './subscribe.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus.component';
 
import { MinimallyinvasivesurgeryComponent } from './minimallyinvasivesurgery.component';
import { HormonereplacementtherapyComponent } from './hormonereplacementtherapy.component';
import { ObstetricsComponent } from './obstetrics.component';
import { GynecologyComponent } from './gynecology.component';
import { AnnualexamsComponent } from './annualexams.component';
import { BonedensityComponent } from './bonedensity.component';
import { InfertilityComponent } from './infertility.component';
import { PrenatalcareComponent } from './prenatalcare.component';
import { UrinarydysfunctionComponent } from './urinarydysfunction.component';
import { MenopausalmedicineComponent } from './menopausalmedicine.component';
import { UltrasoundComponent } from './ultrasound.component';
import { RoboticsurgeryComponent } from './roboticsurgery.component';
 

import { AppRoutingModule, routingComponents } from './app.routing.module';
import { DrMarkComponent} from './drmark/drmark.component';
import { DrMarkModal,DrMarkModalContext } from './drmark/drmark-modal';
 
import { DrAlleyComponent } from './dralley/dralley.component';
import { DrAlleyModal,DrAlleyModalContext } from './dralley/dralley-modal';

import { DrBrianComponent } from './drbrian/drbrian.component'; 
import { DrBrianModal,DrBrianModalContext } from './drbrian/drbrian-modal' 

import { PgNotFoundComponent } from './pgnotfound/pgnotfound.component'; 
import { PageNotFoundComponent }   from './not-found.component';
import { ComposeMessageComponent } from './compose-message.component'; 
 


@NgModule({
  declarations: [
    AppComponent, PhoneComponent, AwardsComponent,
      HormonereplacementtherapyComponent, BonedensityComponent, 
      MinimallyinvasivesurgeryComponent,PelvicfloormuscletrainingComponent,   
      RoboticsurgeryComponent, AboutusComponent,UltrasoundComponent,
      UrodynamicstestingComponent,
      MenopausalmedicineComponent ,ObstetricsComponent,ProductsComponent, 
      CustomModal,EndometriosisModal,
      GynecologyComponent,AnnualexamsComponent,InfertilityComponent,
      HomeComponent,UrinarydysfunctionComponent,  PrenatalcareComponent,
      SubscribeComponent, HomeComponent, routingComponents, 
      DrMarkComponent,DrAlleyComponent,DrBrianComponent,
     ComposeMessageComponent, PageNotFoundComponent, DrAlleyModal,DrMarkModal,DrBrianModal
   ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ModalModule.forRoot(), 
    AppRoutingModule,
    BootstrapModalModule
  ],
  providers: [ProductsService,DialogService],
  bootstrap: [AppComponent, PhoneComponent ], 
   entryComponents: [ CustomModal, DrAlleyModal,DrBrianModal,DrMarkModal,PelvicfloormuscletrainingComponent, UrodynamicstestingComponent,EndometriosisModal,
  HormonereplacementtherapyComponent  ]

 })
export class AppModule {
  constructor(router: Router) {
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  } 
}

 
