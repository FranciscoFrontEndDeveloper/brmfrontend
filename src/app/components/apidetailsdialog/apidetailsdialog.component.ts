import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-apidetailsdialog',
  imports: [CommonModule],
  templateUrl: './apidetailsdialog.component.html',
  styleUrl: './apidetailsdialog.component.sass'
})
export class ApidetailsdialogComponent {
constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
