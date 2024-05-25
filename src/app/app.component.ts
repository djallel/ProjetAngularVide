import { Component } from '@angular/core';
import { interval } from 'rxjs';
import { throttle } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProjetAngularVide';
  /*Debut Code pour @input*/
  parentData = 'Data from parent';
  /*Fin Code pour @input*/

  /*Debut Code pour @Output*/
  receivedData: string = '';
  receiveData(data: string) {
    this.receivedData = data;
  }
  /*Fin Code pour @Output*/


}
