import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, map } from 'rxjs';

export interface apiInfo {
  id: number;
  name: string;
  usersname?: string;
  email?: string;
  phone?: string;
  website?: string;
  image?: string;
}
@Injectable({
  providedIn: 'root',
})
export class ApidetailsService {
  constructor(private httpClient: HttpClient) {}
getApiInfo(apiParam: string): Observable<apiInfo[]> {
  return this.httpClient.get<any>(apiParam).pipe(

    // 1) Normalizo la forma de obtener el array
    map(response => {
      if (response.users && Array.isArray(response.users)) {
        return response.users;
      }
      if (Array.isArray(response)) {
        return response;
      }
      return [];
    }),

    // 2) Transformo cada objeto para que siempre tenga .image (o un placeholder)
    map(items => items.map((item: { id: any; name: any; username: any; email: any; }) => ({
      id:        item.id,
      name:      item.name ?? item.username ?? '—',
      email:     item.email ?? '—',
      // si viene image (DummyJSON), úsala; si no, deja undefined o tu URL de placeholder
      image:     (item as any).image ?? 'assets/avatar-placeholder.png',
      // copia cualquier otro campo que necesites…
    })))
  );
}
}
