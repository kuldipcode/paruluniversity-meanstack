import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class FirstServiceService {
  API_URL  =  'http://localhost:3001';
  constructor(private  httpClient:  HttpClient) {}

  private data: string[] = ['Item 1', 'Item 2', 'Item 3'];

  getData(): string[] {
    return this.data;
  }

  addData(newItem: string): void {
    this.data.push(newItem);
  }
      
    
    getServerRes(){
        return  this.httpClient.get(`${this.API_URL}/api`);
    }
}
