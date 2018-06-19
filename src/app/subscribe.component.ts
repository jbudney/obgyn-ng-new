import { Component } from '@angular/core';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


@Component({
  selector: 'subscribe',
  styleUrls: ['./app.component.css'],
  template: `
    <form #form="ngForm" (ngSubmit)="submitForm(form.value)"> 
     <div class="form-group">
           
            <input  type="text" class="form-control" [(ngModel)]="model.email" id="email" name="email" #name="ngModel" />
            <button class="button" type="submit" class="btn btn-default">Sign Up</button>
            
            <div *ngIf="email.touched && !email.valid" class="alert alert-danger">Email is required.</div> 
            
    </div> 
 </form>
   `
   
 })
    
export class SubscribeComponent {
   submitForm(form: any): void{
    console.log('Form Data: ');
    console.log(form);
  }
    
}
 