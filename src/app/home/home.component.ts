import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CarouselModule } from 'primeng/carousel';
import { ImageModule } from 'primeng/image';
import { ButtonModule } from 'primeng/button';
import { FieldsetModule } from 'primeng/fieldset';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [
    CarouselModule,
    ButtonModule,
    ImageModule,
    FieldsetModule,
    CardModule
  ], 
  standalone: true
})
export class HomeComponent {

  products = ["https://easyweeknightrecipes.com/wp-content/uploads/2021/06/meatloaf-recipe-4-1140x1710.jpg"]
}