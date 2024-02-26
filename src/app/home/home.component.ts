import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CarouselModule } from 'primeng/carousel';
import { ImageModule } from 'primeng/image';
import { ButtonModule } from 'primeng/button';
import { FieldsetModule } from 'primeng/fieldset';
import { CardModule } from 'primeng/card';
import { AccordionModule } from 'primeng/accordion';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { BadgeModule } from 'primeng/badge';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CarouselModule,
    ButtonModule,
    ImageModule,
    FieldsetModule,
    CardModule,
    AccordionModule,
    AvatarModule,
    BadgeModule,
    AvatarGroupModule
  ], 
  standalone: true
})
export class HomeComponent {

  products = ["https://easyweeknightrecipes.com/wp-content/uploads/2021/06/meatloaf-recipe-4-1140x1710.jpg"]
}