import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  list: any[] = []

  addtask(item: string) {

    this.list.push({ id: this.list.length, name: item })
    // console.warn(this.list)
  }

  removeTask(id: number) {
    this.list = this.list.filter(item => item.id !== id)
  }
}
