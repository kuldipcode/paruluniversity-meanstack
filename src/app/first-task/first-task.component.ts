import { Component } from '@angular/core';
import { FirstServiceService } from '../first-service.service';

@Component({
  selector: 'app-first-task',
  templateUrl: './first-task.component.html',
  styleUrl: './first-task.component.css'
})
export class FirstTaskComponent {

  items: string[];

  constructor(private dataService: FirstServiceService ) {
    this.items = this.dataService.getData();
  }

  addItem(newItem: string): void {
    this.dataService.addData(newItem);
    this.items = this.dataService.getData(); // Update the displayed items
  }
}
