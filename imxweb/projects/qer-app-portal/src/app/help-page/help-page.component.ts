import { Component, OnInit } from '@angular/core';


export interface PeriodicElement {
  contactInfo: string;
  headCoe: string;
  serviceNow: string;
  confluence: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {headCoe: '', contactInfo: '', serviceNow: '', confluence: ''},
  
];

@Component({
  selector: 'help-page',
  templateUrl: './help-page.component.html',
  styleUrls: ['./help-page.component.scss']
})

export class HelpPageComponent {
  displayedColumns: string[] = ['headCoe', 'contactInfo', 'serviceNow', 'confluence'];
  dataSource = ELEMENT_DATA;
}

