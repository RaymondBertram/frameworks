import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { DataComponentComponent } from './data-component/data-component.component';
import { InputComponent } from './input/input.component';

@NgModule({
  declarations: [
    AppComponent, 
    HelloWorldComponent, 
    DataComponentComponent, 
    InputComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
