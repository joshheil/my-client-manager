import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ClientService } from '../client.service';
import { DashboardClient } from '../dashboard/dashboardclient.model';
import { Location } from '@angular/common';

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.css']
})
export class ClientDetailComponent implements OnInit {

  dashboardClient: DashboardClient;

  constructor(private route: ActivatedRoute,
              private clientService: ClientService,
              private location: Location) { }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      if (params['id'] !== undefined) {
        const id = +params['id'];
        this.clientService.getClient(id).subscribe(dashboardClient => (this.dashboardClient = dashboardClient));
      } else {
        this.dashboardClient = new DashboardClient();
      }
    });
  }

  goBack(): void {
    this.location.back();
  }
}
