import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardClient } from './dashboardclient.model';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  dashboardClients: DashboardClient[] = [];
  selectedRow : Number;
  setClickedRow : Function;
  // clients: Client[] = [];

  // constructor(private clientService: ClientService) { }
  constructor(private router: Router, private clientService: ClientService) { }

  ngOnInit() {
    this.getClients();
  }

  getClients(): void {
    this.clientService.getClients()
    .subscribe(dashboardClients => this.dashboardClients = dashboardClients);
  }

  selectedDashboardClient(dashboardClient):void{
    this.router.navigate(['./details/'+ dashboardClient.id]);
    // this.selectedRow = dashboardClient.id;
  }
}