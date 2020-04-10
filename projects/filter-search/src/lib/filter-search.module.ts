import { NgModule } from '@angular/core';
import { FilterSearchComponent } from './filter-search.component';
import {TagInputModule} from 'ngx-chips';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import { InputTagsComponent } from './components/input-tags/input-tags.component';
import { TagComponent } from './components/tag/tag.component';
import { SearchFormComponent } from './components/search-form/search-form.component';


@NgModule({
  declarations: [FilterSearchComponent, InputTagsComponent, TagComponent, SearchFormComponent],
  imports: [
    TagInputModule,
    FormsModule,
    CommonModule,
  ],
  exports: [FilterSearchComponent]
})
export class FilterSearchModule { }
