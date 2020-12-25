import { Component, OnInit } from '@angular/core';
import { Tri } from './tri.model';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  tris$: Tri[];
  tri$ :string;
  constructor(private dataService : DataService) {}

  ngOnInit() {
    return this.dataService.getTri()
    .subscribe(data => this.tris$ = data);
  }

  onSubmit(data)
  {
  return  this.dataService.postTri(data)
    .subscribe(result => this.tri$ = result);

  }
}
