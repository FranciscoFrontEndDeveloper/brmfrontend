import { Component, Input } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
@Component({
  selector: 'app-nameapidcard',
  imports: [MatCardModule],
  templateUrl: './nameapidcard.component.html',
  styleUrl: './nameapidcard.component.sass'
})
export class NameapidcardComponent {
@Input('titleApiname') titleApiname: string = ''
}
