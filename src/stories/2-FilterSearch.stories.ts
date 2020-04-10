import {FilterSearchComponent, FilterSearchModule} from '../../projects/filter-search/src/public-api';
import {moduleMetadata} from '@storybook/angular';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {InputTagsComponent} from '../../projects/filter-search/src/lib/components/input-tags/input-tags.component';
import {SearchFormComponent} from '../../projects/filter-search/src/lib/components/search-form/search-form.component';

export default {
  title: 'Filter Search',
  // component: FilterSearchComponent
  decorators: [
    moduleMetadata({
      imports: [
        FilterSearchModule,
        BrowserAnimationsModule,
        ReactiveFormsModule
      ]
    })
  ]
};

export const FilterSearch = () => ({
  component: FilterSearchComponent,
});

export const ChipsInput = () => ({
  component: InputTagsComponent,
});

export const SearchForm = () => ({
  component: SearchFormComponent,
})
