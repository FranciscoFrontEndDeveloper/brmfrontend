import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { IsobjectPipe } from '../../pipes/isobject.pipe';
import {MatDividerModule} from '@angular/material/divider';
@Component({
  selector: 'app-apidetailsdialog',
  imports: [CommonModule,MatDialogModule,MatButtonModule,IsobjectPipe,MatDividerModule],
  templateUrl: './apidetailsdialog.component.html',
  styleUrl: './apidetailsdialog.component.sass'
})
export class ApidetailsdialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: Record<string, any>) { 
  }
}
