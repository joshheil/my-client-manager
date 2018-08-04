import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { DashboardClient } from './dashboard/dashboardclient.model';
import { Note } from './client-detail/note.model';

@Injectable({ providedIn: 'root' })
export class ClientService {
    dashboardClients: DashboardClient[]  = [{id: 1, 
    name: "Canfield Fairgrounds",
    representative: "Ryan",
    comodity: "Electric",
    startDate: "03/10/2010",
    endDate: "03/10/2019",
    price: "$0.59",
    notes: Note[1] = [{id: 1,
        subject: "Annual Fair",
        date: "07/10/2018", 
        details: "Try the cinnamon rolls"
        }]},
  {id: 2, 
    name: "Sheetz",
    representative: "Josh",
    comodity: "Gas",
    startDate: "05/17/2014",
    endDate: "05/17/2024",
    price: "$0.69",
    notes: Note[1] = [{id: 1,
        subject: "Good Food",
        date: "07/10/2018", 
        details: "Try the MTO"
        }]},
  {id: 3, 
    name: "North Hills Laundry",
    representative: "Les",
    comodity: "Electric",
    startDate: "05/15/2010",
    endDate: "05/15/2019",
    price: "$1.45",
    notes: Note[1] = [{id: 1,
        subject: "Big consumer",
        date: "07/10/2018", 
        details: "They use alot of electric"
        }]}];

  constructor() { }

  getClients(): Observable<DashboardClient[]> {
    return of(this.dashboardClients);
  }

  getClient(id: number): Observable<DashboardClient> {
    return of(this.dashboardClients[id-1]);
  }
}