import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrismComponent } from './components/prism/prism.component';

import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-yaml';
import 'prismjs/components/prism-scss';
// Add more prism language if need!

@NgModule({
  declarations: [
    PrismComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PrismComponent
  ]
})
export class SharedModule { }
