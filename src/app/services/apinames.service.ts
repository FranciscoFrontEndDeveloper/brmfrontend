import { Injectable, signal } from '@angular/core';
import { APINAMEREST } from '../../mock-nameapis';

@Injectable({
  providedIn: 'root',
})
export class ApinamesService {
  private _apiRestName = signal(APINAMEREST);
  readonly apiRestName = this._apiRestName.asReadonly();

  constructor() {}
}
