import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


export interface PeriodicElement {
  contactInfo: string;
  headCoe: string;
  serviceNow: string;
  confluence: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    headCoe: 'John Doe',
    contactInfo: 'johnDoe@mail.com', 
    serviceNow: 'testing service', 
    confluence: 'confluence-link.com'
  }
];

@Component({
  selector: 'help-page',
  templateUrl: './help-page.component.html',
  styleUrls: ['./help-page.component.scss']
})

export class HelpPageComponent {
  displayedColumns: string[] = ['headCoe', 'contactInfo', 'serviceNow', 'confluence'];
  dataSource = ELEMENT_DATA;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchAuth();
  }

  private fetchAuth() {
    this.http 
      .post('http://10.0.0.41/apiserver/ING_ApplicationGovernance/UnclaimEntitlement',{},
        {
          observe: 'response'
        }
      )
      .subscribe(data => {
        console.log(data);
      });
  }
}

