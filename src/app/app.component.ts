import { Component ,OnInit} from '@angular/core';
import { ProductsService } from './products.service';

import { Router, Routes, RouterModule, NavigationEnd, ActivatedRoute } from '@angular/router';

import { ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { Overlay, overlayConfigFactory } from 'angular2-modal';
import { Modal, BSModalContext } from 'angular2-modal/plugins/bootstrap';
import { CustomModalContext, CustomModal } from './custom-modal';

import { AppRoutingModule, routingComponents } from './app.routing.module';

import { DrMarkComponent} from './drmark/drmark.component'; 
import { DrMarkModal,DrMarkModalContext } from './drmark/drmark-modal';

import { DrAlleyComponent } from './dralley/dralley.component';
import { DrAlleyModal,DrAlleyModalContext } from './dralley/dralley-modal';

import { DrBrianComponent } from './drbrian/drbrian.component';
import { DrBrianModal,DrBrianModalContext } from './drbrian/drbrian-modal' 

import { PgNotFoundComponent } from './pgnotfound/pgnotfound.component';
import { Title } from '@angular/platform-browser';

import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
   providers: [Modal]
})
export class AppComponent implements OnInit {
     title = 'OBGYN Specialist LLC'; 
     message:string;
     aboutustext:string;
    
    constructor(private productsService:ProductsService, public modal: Modal, private titleService: Title,
    public router: Router, private activatedRoute: ActivatedRoute) {}
    
    productsDatain:string = '';
    obstetricsDatain:string = '';
    gynecologicDatain:string = '';
    annualExamsDatain:string = '';
    
    
    ngOnInit(){   
        console.log(this.productsService.products);
        
        this.productsDatain = this.productsService.productsData();
        this.obstetricsDatain = this.productsService.obstetricsData();
        this.gynecologicDatain = this.productsService.gynecologicData();
        this.annualExamsDatain = this.productsService.annualExamsData();
        
  
          
        this.router.events
          .filter((event) => event instanceof NavigationEnd)
          .map(() => this.router.routerState.root)
          .subscribe((event) => {
            console.log('jo NavigationEnd:', event);
          });     
        
         this.titleService.setTitle(this.title);
        
        }
    
       get version(): string {
       return "2";
         }
    
     
     
     
   onClick() {
    this.modal.alert()
        .size('sm')
        .showClose(true)
        .title('A simple Alert style modal window')
        .body(`
            <h4>Alert is a classic (title/body/footer) 1 button modal window that 
            does not block.</h4>
            <b>Configuration:</b>
            <ul>
                <li>Non blocking (click anywhere outside to dismiss)</li>
                <li>Size large</li>
                <li>Dismissed with default keyboard key (ESC)</li>
                <li>Close wth button click</li>
                <li>HTML content</li>
            </ul>`)
        .open();
  }
     onClickEndometriosis() {
        this.modal.alert()
        .size('sm')
        .showClose(true)
        .title('A simple Alert style modal window')
        .body(`
            <h4>onClickEndometriosis</h4>
            <b>Configuration:</b>
            <ul>
                <li>Non blocking (click anywhere outside to dismiss)</li>
                <li>Size large</li>
                <li>Dismissed with default keyboard key (ESC)</li>
                <li>Close wth button click</li>
                <li>HTML content</li>
            </ul>
         `)
        .open();
  }
    openCustom() {
    return this.modal.open(CustomModal,  overlayConfigFactory({ num1: 2, num2: 3 }, BSModalContext));
  }
   openDrAlleyModal() {
    return this.modal.open(DrAlleyModal,  overlayConfigFactory({ num1: 2, num2: 3 }, BSModalContext));
  }
    openDrMarkModal() {
    return this.modal.open(DrMarkModal,  overlayConfigFactory({ num1: 2, num2: 3 }, BSModalContext));
  }
    openDrBrianModal() {
    return this.modal.open(DrBrianModal,  overlayConfigFactory({ num1: 2, num2: 3 }, BSModalContext));
  }    
    onResize(event) {
        this.message = "1050 NW 15th Street,215A, Boca Raton, FL 33486 Phone: 1.561.392.7704 ";
        event.target.innerWidth;
        
       //document.documentElement("obgynphone").color
   } 
    getUrl(value) {
    }
    
}