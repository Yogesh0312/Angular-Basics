import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templete-driven-form',
  templateUrl: './templete-driven-form.component.html',
  styleUrls: ['./templete-driven-form.component.css']
})
export class TempleteDrivenFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  loginHere(item: any) {
    console.warn(item)
  }
}
