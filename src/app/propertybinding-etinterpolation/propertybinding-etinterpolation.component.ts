import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-propertybinding-etinterpolation',
  templateUrl: './propertybinding-etinterpolation.component.html',
  styleUrls: ['./propertybinding-etinterpolation.component.css']
})
export class PropertybindingETinterpolationComponent implements OnInit {
  title: any;

  constructor() { }

  ngOnInit(): void {
    this.title= "je suis une variable titre dans le html propertybinding"
  }

}
