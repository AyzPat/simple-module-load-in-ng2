import { NgModule,CUSTOM_ELEMENTS_SCHEMA }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import {MyModule} from '@app/app/app.module'
@NgModule({
  imports:      [ BrowserModule,MyModule  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  
})
export class AppModule { }
