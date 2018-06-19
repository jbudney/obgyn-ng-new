 
  /**
 * New typescript file
 */

import { Component } from '@angular/core';

@Component({
  selector: 'awards',
  templateUrl:'./awards.component.html',
  styleUrls: ['./awards.component.css'] 
})
export class AwardsComponent {
  name: string;
  constructor() {
    this.name = '1.561.392.7704'
  }
  sayMyName() {
    console.log('My name is', this.name)
  }
}
