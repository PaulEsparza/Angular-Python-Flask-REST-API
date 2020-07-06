import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateComponent } from './product/create/create.component';
import { UpdateComponent } from './product/update/update.component';
import { ReadComponent } from './product/read/read.component';

import { HttpClientModule } from '@angular/common/http';
import { ProductServiceService } from '../app/service/product-service.service'

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    UpdateComponent,
    ReadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    ProductServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
