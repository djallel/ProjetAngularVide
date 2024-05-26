import { Component, OnInit } from '@angular/core';
import {SharedService} from "../shared.service";

@Component({
  selector: 'app-subject-feature-b',
  templateUrl: './subject-feature-b.component.html',
  styleUrls: ['./subject-feature-b.component.css']
})
export class SubjectFeatureBComponent implements OnInit {
  message: string = "";
  constructor(private sharedService: SharedService) {}


  ngOnInit(): void {
    this.sharedService.currentMessage.subscribe((message) => (this.message = message));
  }

}
