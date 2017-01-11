import { Component, Input } from '@angular/core';
 import {DEFAULT_STYLES} from './styles.js'
@Component({
  selector: 'my-re-table',
  templateUrl:'../node_modules/@app/app/table.html',
 styles:[DEFAULT_STYLES]
 
})
export class TableComponent {
 @Input() items:any[]
  @Input() headers


  
 }
 