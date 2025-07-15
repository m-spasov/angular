import { Component, inject, Input } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { TabServiceService } from '../tab-service.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-button',
  imports: [AngularSvgIconModule, RouterLink],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() text: string = '';
  @Input() svg: string = '';
  @Input() to: string = '';

  private tabService = inject(TabServiceService);

  get isActive() {
    return this.tabService.getActiveTab()() === this.text;
  }

  changeActiveTab(tab: string) {
    this.tabService.setActiveTab(tab);
  }
}
