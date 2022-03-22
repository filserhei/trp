import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ports',
  templateUrl: './ports.component.html',
  styleUrls: ['./ports.component.scss']
})
export class PortsComponent implements OnInit {
  tabIndex: number = 0;
  tableOcean = [
    {country: 'Country', location: 'Locat', port: 'port', cfs: 'cfs', terminal: 'Trminal', cluster: 'Cluster', comments: 'CCC'},
    {country: 'Country', location: 'Locat', port: 'port', cfs: 'cfs', terminal: 'Trminal', cluster: 'Cluster', comments: 'CCC'},
    {country: 'Country', location: 'Locat', port: 'port', cfs: 'cfs', terminal: 'Trminal', cluster: 'Cluster', comments: 'CCC'}
    ];
  tableAir = [
    {country: 'Country22', location: 'Locat22', port: 'port22', cfs: 'cfs22', terminal: 'Trminal22', cluster: 'Cluster22', comments: 'CCC22'},
    {country: 'Country22', location: 'Locat22', port: 'port22', cfs: 'cfs22', terminal: 'Trminal22', cluster: 'Cluster22', comments: 'CCC22'},
    {country: 'Country22', location: 'Locat22', port: 'port22', cfs: 'cfs22', terminal: 'Trminal22', cluster: 'Cluster22', comments: 'CCC22'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
