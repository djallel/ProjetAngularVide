import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-childcomponent',
  templateUrl: './childcomponent.component.html',
  styleUrls: ['./childcomponent.component.css']
})
export class ChildcomponentComponent implements OnInit {
  @Input() childData: string = '';
  @Output() dataEmitter: EventEmitter<string> = new EventEmitter<string>();

  sendDataToParent() { //methode pour @output
    this.dataEmitter.emit('Data from child');
  }

  constructor() { }

  ngOnInit(): void {
  }

}
