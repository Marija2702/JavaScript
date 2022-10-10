import { Component, OnInit } from '@angular/core';
// import { warehouseData } from '../shared/mockData';
import { Building } from '../shared/warehouse';
import { HttpClient } from '@angular/common/http';
import { map, Subscription, tap } from 'rxjs';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
@Component({
  selector: 'app-warehouse',
  templateUrl: './warehouse.component.html',
  styleUrls: ['./warehouse.component.scss']
})
export class WarehouseComponent implements OnInit {
  routeSub: Subscription | undefined
  warehouse: Building | undefined;
  passedData: Building[] | undefined;
  constructor(private http: HttpClient, private route : ActivatedRoute) {

  }
  ngOnInit(): void {
    this.route.firstChild?.params.subscribe(param => {

      if(param['id'] != ' '){
        this.http.get<Building>(`/assets/${param['id']}.json`)
        .subscribe(data =>
          {
          this.warehouse = data});
      }

    })
  }
}
