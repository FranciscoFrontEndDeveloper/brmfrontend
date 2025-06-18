import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterOutlet } from '@angular/router';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ApinamesService } from '../../services/apinames.service';
@Component({
  selector: 'app-apidashboard',
  imports: [
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    CommonModule,
    MatToolbarModule,
    MatCardModule,
    ToolbarComponent,
    RouterOutlet,
    // NameapidcardComponent
],
  templateUrl: './apidashboard.component.html',
  styleUrl: './apidashboard.component.sass',
})
export class ApidashboardComponent {
  constructor(private breakpointObserver: BreakpointObserver) {}
  private apiNamesService = inject(ApinamesService);
  apiNames = this.apiNamesService.apiRestName;
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
}
