import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-function-call',
  templateUrl: './function-call.component.html',
  styleUrls: ['./function-call.component.css']
})
export class FunctionCallComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  Alert(name: string) {
    alert(name)
  }

}
