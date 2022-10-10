import { Component, Input, OnInit } from '@angular/core';
import { Supply } from 'src/app/shared/warehouse';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() title : string | undefined;
  @Input() data : Supply[] | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
