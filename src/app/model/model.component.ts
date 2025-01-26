import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-model',
  imports: [],
  templateUrl: './model.component.html',
  styleUrl: './model.component.css',
})
export class modelComponent {
  @Input() imgUrl: string = '';
  @Input() title: string = '';
  @Output() exitmodel: EventEmitter<void> = new EventEmitter<void>();

  onOuterContainerClick(event: Event): void {
    const outerContainer = event.target as HTMLElement;
    if (outerContainer.classList.contains('outerContainer')) {
      this.exitmodel.emit();
    }
  }

  @HostListener('document:keydown', ['$event'])
  closemodel(event: KeyboardEvent): void {
    if (event.key === 'Escape') {
      this.exitmodel.emit();
    }
  }
}
