import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ng-filter-search',
  templateUrl: './filter-search.component.html',
  styleUrls: ['foundation-theme.scss']
})
export class FilterSearchComponent implements OnInit {
  fields = ['user', 'createdAt', 'updatedAt', 'list'];

  constructor() { }

  ngOnInit(): void {
  }

}
