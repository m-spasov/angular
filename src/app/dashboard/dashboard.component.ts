import { Component } from '@angular/core';
import { DropdownComponent } from './dropdown/dropdown.component';
import { PopularCardComponent } from './popular-card/popular-card.component';
import { RecommendedCardComponent } from './recommended-card/recommended-card.component';

@Component({
  selector: 'app-dashboard',
  imports: [DropdownComponent, PopularCardComponent, RecommendedCardComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {}
