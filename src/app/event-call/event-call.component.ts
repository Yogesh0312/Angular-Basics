import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-call',
  templateUrl: './event-call.component.html',
  styleUrls: ['./event-call.component.css']
})
export class EventCallComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  getData(val:string){
    console.warn(val);
    
  }

}
