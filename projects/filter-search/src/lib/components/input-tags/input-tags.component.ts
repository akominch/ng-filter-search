import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ng-chip-input',
  templateUrl: './input-tags.component.html',
  styleUrls: ['./input-tags.component.css']
})
export class InputTagsComponent implements OnInit {
  values = ['item1'];

  constructor() { }

  ngOnInit(): void {
  }

}
