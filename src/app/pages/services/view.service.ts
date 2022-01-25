import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ViewService {
  tenderDetailsView: boolean = false;

  constructor() { }
}
