import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ListComponent } from './components/list/list.component';

@NgModule({
  declarations: [
    ListComponent
  ],
  exports: [
    ListComponent
  ],
  imports: [
    CommonModule
  ],
  providers: []
})
export class SharedModule {}
