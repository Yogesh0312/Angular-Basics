import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-for-loop',
  templateUrl: './for-loop.component.html',
  styleUrls: ['./for-loop.component.css']
})
export class ForLoopComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  user1 = ["one", "two", "three", "four"]
  user2 = [
    { name: "one", fname: "one1", lname: "one2" },
    { name: "two", fname: "two1", lname: "two2" },
    { name: "three", fname: "three1", lname: "three2" }
  ]

}
