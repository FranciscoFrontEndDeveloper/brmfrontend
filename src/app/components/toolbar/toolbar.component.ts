import { Component, EventEmitter, output, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
@Component({
  selector: 'app-toolbar',
  imports: [MatIconModule, MatToolbarModule],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.sass',
})
export class ToolbarComponent {
  drawer: any;
  @Output('menuToogle') menuToogle = new EventEmitter<void>();
  onToggleMenu() {
    this.menuToogle.emit()
  }
}
