import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {GoogleAddressAutoCompleteDirective} from "../directives/google-address-auto-complete.directive";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GoogleAddressAutoCompleteDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  onAddressChange(data:any){
    console.log(data);
  }
}
