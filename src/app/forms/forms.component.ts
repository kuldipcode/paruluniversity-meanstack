import { Component } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css'
})
export class FormsComponent {
  onClickSubmit(result:any) {
    console.log("You have entered : " + result.username); 
 }
}
