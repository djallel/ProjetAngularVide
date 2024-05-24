import { Component, OnInit } from '@angular/core';

import { LazyLoadImageModule } from 'ng-lazyload-image';

@Component({
  selector: 'app-lazyloadingimage',
  templateUrl: './lazyloadingimage.component.html',
  styleUrls: ['./lazyloadingimage.component.css']
})
export class LazyloadingimageComponent implements OnInit {
  imageUrl = 'assets/icon/logo-packdiscount.png';
  constructor() { }

  ngOnInit(): void {
  }
}
