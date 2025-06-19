import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, output, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-toolbar',
  imports: [MatIconModule, MatToolbarModule, CommonModule],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.sass',
})
export class ToolbarComponent {
  drawer: any;
  @Output('menuToogle') menuToogle = new EventEmitter<void>();
  @Input('hiddenMenuMobile') hiddenMenuMobile = true;
  onToggleMenu() {
    this.menuToogle.emit();
  }
}
