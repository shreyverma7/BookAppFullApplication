import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/Services/DataServices/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent{
  constructor(private dataservice:DataService){}
  SearchNotes(event: any) {
    console.log(event.target.value);
    this.dataservice.SendData(event.target.value)
  }
}
