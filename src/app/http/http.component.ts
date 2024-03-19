import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {FirstServiceService} from '../first-service.service';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrl: './http.component.css'
})
export class HttpComponent {
  
  constructor(private http: HttpClient, private  apiService:  FirstServiceService) { }
  ngOnInit() {
    // this.http.get('http://localhost:3001/api')
    // .subscribe(data => {
    //   // Handle the response data
    //   console.log(data);
    // });

    this.getServRes()
    
  }
  public  getServRes(){
    this.apiService.getServerRes().subscribe(data => {
        console.log("Data using service"+JSON.stringify(data));
    });
}
}
