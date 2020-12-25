import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tri } from './tri.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
 apiUrl = 'https://1305a43e4de0.ngrok.io'; // j'ai fait un tunnel vers localhost:3007 avec ngrok

  constructor(private _http: HttpClient) { }

  getTri() {

    return this._http.get<Tri[]>(this.apiUrl+"/tri");
  }

  postTri(data) {
      return this._http.post(this.apiUrl+"/trinumber",data);
  }
}
