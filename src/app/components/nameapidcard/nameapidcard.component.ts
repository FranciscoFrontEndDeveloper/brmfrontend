import { CommonModule } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { ApinamesService } from '../../services/apinames.service';
CommonModule
@Component({
  selector: 'app-nameapidcard',
  imports: [MatCardModule, RouterModule,CommonModule],
  templateUrl: './nameapidcard.component.html',
  styleUrl: './nameapidcard.component.sass',
})
export class NameapidcardComponent {
  @Input('titleApiname') titleApiname: string = '';
    private apiNamesService = inject(ApinamesService);
  apiNames = this.apiNamesService.apiRestName;
}
