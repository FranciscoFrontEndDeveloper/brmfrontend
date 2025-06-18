import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { NameapidcardComponent } from './components/nameapidcard/nameapidcard.component';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ApinamesService } from './services/apinames.service';

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
    NameapidcardComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass',
})
export class AppComponent {
  constructor(private breakpointObserver: BreakpointObserver) {}
  private apiNamesService = inject(ApinamesService);
  apiNames = this.apiNamesService.apiRestName
  title = 'brmfrontend';
  drawerMode: 'side' | 'over' = 'over';
  drawerOpened: boolean = true;
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.breakpointObserver
      .observe(['(min-width: 1024px)'])
      .subscribe((result) => {
        if (result.matches) {
          this.drawerMode = 'side';
          this.drawerOpened = true;
        } else {
          this.drawerMode = 'over';
          this.drawerOpened = false;
        }
      });
  }
  public arrayNamesApi = [
    'nombre 1',
    'nombre 2',
    'nombre 3',
    'nombre 1',
    'nombre 2',
    'nombre 3',
    'nombre 1',
    'nombre 2',
    'nombre 3',
    'nombre 1',
    'nombre 2',
    'nombre 3',
    'nombre 1',
    'nombre 2',
    'nombre 3',
    'nombre 1',
    'nombre 2',
    'nombre 3',
    'nombre 1',
    'nombre 2',
  ];
}
