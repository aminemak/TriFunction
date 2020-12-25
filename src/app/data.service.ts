import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tri } from './tri.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
 apiUrl = 'https://6268bbb4c4d2.ngrok.io/tri';

  constructor(private _http: HttpClient) { }

  getTri() {

    return this._http.get<Tri[]>(this.apiUrl);
  }
}
