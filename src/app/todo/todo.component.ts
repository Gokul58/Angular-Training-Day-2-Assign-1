import { Component } from '@angular/core';

@Component({
  selector: 'todo-app',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
  constructor() {}

  public array = [
    {
      id: 0,
      text: 'task name',
      status: 'status',
    },
  ];

  public text = '';
  public status = '';
  public edit = false;
  public index = -1;

  addTask() {
    let obj = {
      id: this.array.length,
      text: this.text,
      status: this.status,
    };
    this.array.push(obj);
    this.text = '';
    this.status = '';
  }

  saveChanges() {
    let id = this.array[this.index].id;
    let obj = {
      text: this.text,
      status: this.status,
      id,
    };
    this.array[id] = obj;
    this.status = '';
    this.text = '';
    this.index = -1;
    this.edit = false;
  }

  editTodo(id: any) {
    this.edit = true;
    let index = this.array.findIndex((obj) => obj.id === id);
    this.status = this.array[index].status;
    this.text = this.array[index].text;
    this.index = index;
  }

  deleteTodo(id: number) {
    let result = this.array.filter((todo) => todo.id !== id);
    this.array = result;
  }

  getTodoData(event: any) {
    this.text = event.target.value;
  }

  getStatus(event: any) {
    this.status = event.target.value;
  }
  ngOnInit(): void {}
}

