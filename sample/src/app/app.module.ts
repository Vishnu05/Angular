import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsComponent } from './components/forms/forms.component';
import { FormslistComponent } from './components/forms/formslist/formslist.component';
import { ModalsComponent } from './components/modals/modals.component';

@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    FormslistComponent,
    ModalsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
