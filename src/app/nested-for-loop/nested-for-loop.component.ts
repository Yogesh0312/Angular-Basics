import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nested-for-loop',
  templateUrl: './nested-for-loop.component.html',
  styleUrls: ['./nested-for-loop.component.css']
})
export class NestedForLoopComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
user = [
  {name:"one", fname:"two", socialAccounts:["insta","fb","linked"]},
  {name:"three", fname:"four", socialAccounts:["youtube","instalite","linked"]},
  {name:"five", fname:"six", socialAccounts:["snapchat","fblite","linked"]}
]
}
