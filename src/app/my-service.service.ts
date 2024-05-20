import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor() {
  }

  getData() {
    return ['Data1', 'Data2', 'Data3'];
  }


}

