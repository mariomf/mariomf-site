import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HomeComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
