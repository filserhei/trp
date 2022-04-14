import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {Tender} from "../find-tender/find-tender.component";

@Injectable({providedIn: 'root'})
export class TendersResolver implements Resolve<Tender[]> {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Tender[]> | Promise<Tender[]> | Tender[] {


    const allTenders: Tender[] = [];
    const tender: Tender = {
      title: 'Tender Titlee',
      id: 44854,
      status: 'Active',
      transportMode: 'Air',
      tenderOwner: 'KJH',
      businessOwner: 'LJHJG',
      created: '10.10.2010',
      launched: '10.11.2010',
      deadline: '30.03.2040',
      customer: 'Vano',
      customerDeadline : '30.04.2060'
    };
    const statuses: string[] = ['Draft', 'Template', 'Open', 'Archived', 'Past deadline', 'Finished', 'Cancelled'];

    for (let i = 0; i < 24; i++) {
      const copyTender: Tender = { ...tender };
      copyTender.status = statuses[i % statuses.length];
      allTenders.push(copyTender);
    }

    return allTenders;
  }

}

