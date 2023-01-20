import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { EloverdeDocViewerComponent } from './document-viewer.component';

@NgModule({
  imports: [CommonModule],
  declarations: [EloverdeDocViewerComponent],
  exports: [EloverdeDocViewerComponent]
})
export class EloverdeDocViewerModule { }
