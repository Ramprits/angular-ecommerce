import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ListComponent } from './list/list.component';
import { ItemsRoutingModule } from './items.routing.module';

@NgModule({
  imports: [CommonModule, HttpClientModule, ItemsRoutingModule],
  declarations: [ListComponent],
  exports: [ListComponent]
})
export class ItemsModule {}
