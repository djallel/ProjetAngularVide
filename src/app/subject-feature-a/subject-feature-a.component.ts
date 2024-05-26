import { Component, OnInit } from '@angular/core';

import {SharedService} from "../shared.service";

@Component({
  selector: 'app-subject-feature-a',
  templateUrl: './subject-feature-a.component.html',
  styleUrls: ['./subject-feature-a.component.css']
})
export class SubjectFeatureAComponent implements OnInit {


  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {
  }

  newMessage() {
    this.sharedService.changeMessage('Hello from Feature A');
  }

}
