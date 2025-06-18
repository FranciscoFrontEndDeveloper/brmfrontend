import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';

export interface apiInfo {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
}
@Injectable({
  providedIn: 'root',
})
export class ApidetailsService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/users';
  constructor(private httpClient: HttpClient) {}
  getApiInfo(): Observable<apiInfo[]> {
    return this.httpClient.get<apiInfo[]>(this.apiUrl);
  }
}
