import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';

@Component({
  selector: 'workspace-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  items: any[];
  constructor(private itemService: ItemService) {}

  ngOnInit() {
    this.itemService.getItems().subscribe(res => {
      this.items = res;
    });
  }
}
