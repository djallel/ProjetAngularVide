import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  isVisible: any;
  items: any;
  i: number = 0;
  count: number = 0;

  constructor() {
    this.i = this.i + 1;
  }

  increment(): number {
    for (let i = 0; i < 4; i++) {
      this.count++;
    }
    return this.count;
  }

  ngOnInit(): void {
    this.items = ['data1', 'data1', 'data1', 'data1'];
    this.i = this.i + 1;
  }
}
