import { Component, OnInit } from '@angular/core';
import {MyServiceService} from "../my-service.service";

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  dataList : any;
  constructor(private MyService : MyServiceService) { }


  ngOnInit(): void {
    this.dataList = this.MyService.getData();
  }



}
