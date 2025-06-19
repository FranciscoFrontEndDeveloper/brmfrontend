import { CommonModule } from '@angular/common';
import {
  apiInfo,
  ApidetailsService,
} from './../../services/apidetails.service';
import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { ApidetailsdialogComponent } from '../apidetailsdialog/apidetailsdialog.component';
import { ActivatedRoute } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { delay, finalize, pipe } from 'rxjs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
@Component({
  selector: 'app-apirestinfo',
  standalone: true,
  imports: [MatTableModule, CommonModule, MatIconModule, MatDialogModule, MatProgressSpinnerModule,MatFormFieldModule, MatInputModule],
  templateUrl: './apirestinfo.component.html',
  styleUrl: './apirestinfo.component.sass',
})
export class ApirestinfoComponent {
  constructor(
    private apidetailsService: ApidetailsService,
    private dialog: MatDialog,
    private route: ActivatedRoute
  ) {}
  apiInfoGet: apiInfo[] = [];
  loading = true;
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.route.queryParamMap.subscribe((params) => {
      this.loading = true;
      const url = params.get('apiUrl')!;
      this.apidetailsService
        .getApiInfo(url)
        .pipe(
          delay(1000),
          finalize(() => this.loading = false)
        )
        .subscribe((data) => {
          this.apiInfoGet = data;
          this.dataSource.data = data;
          this.displayedColumns = Object.keys(data[0]).splice(0, 4);
          this.displayedColumns.push('details');
        });
    });
  }
  openDetails(element: any): void {
    this.dialog.open(ApidetailsdialogComponent, {
      width: '400px',
      data: element,
    });
  }

    applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value
      .trim()
      .toLowerCase();
    this.dataSource.filter = filterValue;
  }

  clearFilter(input: HTMLInputElement) {
  input.value = '';
  this.dataSource.filter = '';
}

  displayedColumns: string[] = [];
  dataSource = new MatTableDataSource<any>();
  clickedRows = new Set<apiInfo>();
}
