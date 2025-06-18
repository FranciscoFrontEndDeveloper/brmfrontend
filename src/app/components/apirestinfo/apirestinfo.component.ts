import { CommonModule } from '@angular/common';
import {
  apiInfo,
  ApidetailsService,
} from './../../services/apidetails.service';
import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-apirestinfo',
  standalone: true,
  imports: [MatTableModule, CommonModule, MatIconModule],
  templateUrl: './apirestinfo.component.html',
  styleUrl: './apirestinfo.component.sass',
})
export class ApirestinfoComponent {
  constructor(private apidetailsService: ApidetailsService) {}
  apiInfoGet: apiInfo[] = [];
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.apidetailsService.getApiInfo().subscribe((data) => {
      this.apiInfoGet = data;
      this.dataSource.data = data
      console.log(this.apiInfoGet);
      this.displayedColumns = Object.keys(data[0]).splice(0, 4)
      this.displayedColumns.push('details')
      console.log(this.displayedColumns)
    });

  }
  openDetails(element: any){}



  displayedColumns: string[] = [

  ];
  dataSource = new MatTableDataSource<any>();
  clickedRows = new Set<PeriodicElement>();
}
