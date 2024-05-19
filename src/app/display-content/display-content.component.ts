import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-content',
  templateUrl: './display-content.component.html',
  styleUrls: ['./display-content.component.css']
})
export class DisplayContentComponent implements OnInit {
  isContentVisible = false;

  toggleContent() {
    this.isContentVisible = !this.isContentVisible;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
