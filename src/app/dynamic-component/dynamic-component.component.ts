import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dynamic-component',
  templateUrl: './dynamic-component.component.html',
  styleUrls: ['./dynamic-component.component.css']
})
export class DynamicComponentComponent implements OnInit {
  @Input() state: string;

  constructor() { }

  ngOnInit() {
  }

  contentLoading() {
    return this.state === 'LOADING';
  }

  contentReady() {
    return this.state === 'READY';
  }
}
