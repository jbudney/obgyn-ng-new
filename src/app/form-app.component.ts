/*
import { Component } from '@angular/core';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

import 'rxjs/Rx';

class FormAppComponent {
     form: FormGroup;
     comment = new FormControl("", Validators.required);
     name = new FormControl("", Validators.required);
     email = new FormControl("", [Validators.required, Validators.pattern("^[ @]*@[^ @]*]")]);
    
    constructor(fb: FormBuilder) {
        this.form = fb.group({
            "comment" : this.comment,
            "name" : this.name,
            "email" : this.email
            });
        }
    onSubmit() {
        console.log("Thank you, Form submitted!");
        }    
    
    
    }
*/