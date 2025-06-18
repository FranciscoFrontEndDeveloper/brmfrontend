import { Component, Input } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-nameapidcard',
  imports: [MatCardModule, RouterModule],
  templateUrl: './nameapidcard.component.html',
  styleUrl: './nameapidcard.component.sass'
})
export class NameapidcardComponent {
@Input('titleApiname') titleApiname: string = ''
}
