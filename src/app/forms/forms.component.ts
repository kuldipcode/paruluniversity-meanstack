import { Component, OnInit} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css'
})
export class FormsComponent implements OnInit {
   userName:any; 
   formdata:any;
   ngOnInit() { 
      this.formdata = new FormGroup({ 
         userName: new FormControl("ReactiveTemplate")
      }); 
   } 
   onClickSubmit(data:any) {this.userName = data.userName;}

  onTemplateClickSubmit(result:any) {
    console.log("You have entered : " + result.username); 
 }
}
