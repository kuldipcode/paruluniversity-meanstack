import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrl: './http.component.css'
})
export class HttpComponent {
  constructor(private http: HttpClient) { }
  ngOnInit() {
    this.http.get('http://localhost:3001/api')
    .subscribe(data => {
      // Handle the response data
      console.log(data);
    });
  }
}
