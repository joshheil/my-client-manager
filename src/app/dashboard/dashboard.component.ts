import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardClient } from './dashboardclient.model';
import { ClientService } from '../client.service';
import {Sort} from '@angular/material/sort';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  dashboardClients: DashboardClient[] = [];
  selectedRow : Number;
  setClickedRow : Function;
  sortedData: DashboardClient[];
  // clients: Client[] = [];

  // constructor(private clientService: ClientService) { }
  constructor(private router: Router, private clientService: ClientService) { 
    
  }

  ngOnInit() {
    this.getClients();
    this.sortedData = this.dashboardClients.slice();
  }

  getClients(): void {
    this.clientService.getClients()
    .subscribe(dashboardClients => this.dashboardClients = dashboardClients);
  }

  selectedDashboardClient(dashboardClient):void{
    this.router.navigate(['./details/'+ dashboardClient.id]);
    // this.selectedRow = dashboardClient.id;
  }

  sortData(sort: Sort) {
    const data = this.dashboardClients.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'name': return this.compare(a.name, b.name, isAsc);
        case 'representative': return this.compare(a.representative, b.representative, isAsc);
        case 'comodity': return this.compare(a.comodity, b.comodity, isAsc);
        case 'startDate': return this.compare(a.startDate, b.startDate, isAsc);
        case 'endDate': return this.compare(a.endDate, b.endDate, isAsc);
        case 'price': return this.compare(a.price, b.price, isAsc);

        default: return 0;
      }
    });
  }

  compare(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }
}