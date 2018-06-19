/**
 * New typescript file
 */

import { Component } from '@angular/core';

@Component({
  selector: 'phone',
  styleUrls: ['./app.component.css'],
  template: `
       <div class="row vertical-bottom-row">
            <br><br><br>
             <p id="obgynphone" class="mainphone">1.561.392.7704</p>
       </div>
 
   `
})
export class PhoneComponent {
  name: string;
  constructor() {
    this.name = '1.561.392.7704'
  }
  sayMyName() {
    console.log('My name is', this.name)
  }
}
