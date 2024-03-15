import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirstServiceService {

  constructor() { }

  private data: string[] = ['Item 1', 'Item 2', 'Item 3'];

  getData(): string[] {
    return this.data;
  }

  addData(newItem: string): void {
    this.data.push(newItem);
  }
}
