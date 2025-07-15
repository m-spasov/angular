import { Component, inject } from '@angular/core';
import { ButtonComponent } from './button/button.component';
import { TabServiceService } from './tab-service.service';

@Component({
  selector: 'app-side-nav',
  imports: [ButtonComponent],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss',
  providers: [TabServiceService],
})
export class SideNavComponent {}
