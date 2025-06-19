import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, map } from 'rxjs';

export interface apiInfo {
  id: number;
  name: string;
  usersname: string;
  email: string;
  phone: string;
  website: string;
}
@Injectable({
  providedIn: 'root',
})
export class ApidetailsService {
  constructor(private httpClient: HttpClient) {}
  getApiInfo(apiParam: string): Observable<apiInfo[]> {
    return this.httpClient.get<any>(apiParam).pipe(map(response => {
      if (response.users && Array.isArray(response.users)) {
        return response.users;
      }
      if (Array.isArray(response)) {
        return response
      }
      return [];
    }));
  }
}
