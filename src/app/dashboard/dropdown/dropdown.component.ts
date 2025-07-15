import {
  Component,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  signal,
  ViewChild,
} from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';

@Component({
  selector: 'app-dropdown',
  imports: [AngularSvgIconModule],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss',
})
export class DropdownComponent {
  @Input() text: string = '';
  items = ['1', '2', '3'];
  isActive: boolean = false;
  selectedItem = signal('');

  @ViewChild('dropdownRef', { static: true }) dropdownRef!: ElementRef;

  toggleDropdown(event: MouseEvent) {
    const el = event.target as HTMLElement;

    if (!el) return;

    if (el.classList.contains('dropdown__item')) {
      this.selectedItem.set(el.textContent || '');
    }

    this.isActive = !this.isActive;
  }

  @HostListener('document:click', ['$event'])
  onOutsideClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!this.dropdownRef.nativeElement.contains(target)) {
      this.isActive = false;
    }
  }
}
