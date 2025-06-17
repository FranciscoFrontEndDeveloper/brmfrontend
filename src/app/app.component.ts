import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import { ToolbarComponent } from "./components/toolbar/toolbar.component";
import { NameapidcardComponent } from "./components/nameapidcard/nameapidcard.component";
@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    CommonModule,
    MatToolbarModule,
    MatCardModule,
    ToolbarComponent,
    NameapidcardComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass',
})
export class AppComponent {
  title = 'brmfrontend';
  public arrayNamesApi = ['nombre 1', 'nombre 2', 'nombre 3','nombre 1', 'nombre 2', 'nombre 3','nombre 1', 'nombre 2', 'nombre 3','nombre 1', 'nombre 2', 'nombre 3','nombre 1', 'nombre 2', 'nombre 3','nombre 1', 'nombre 2', 'nombre 3','nombre 1', 'nombre 2',];
}
