import { Component, Input, OnInit } from '@angular/core';
// import { warehouseData } from 'src/app/shared/mockData';
import { Building, Warehouse } from 'src/app/shared/warehouse';

@Component({
  selector: 'app-data-view',
  templateUrl: './data-view.component.html',
  styleUrls: ['./data-view.component.scss']
})
export class DataViewComponent implements OnInit {

  constructor() { }
  @Input() warehouseData : Warehouse | undefined;
  ngOnInit(): void {
  }

}
