import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  @Input() todoLists: Todo[] = [];
  @Output() todoRemoveEvent = new EventEmitter<Todo>();
  constructor() {}

  ngOnInit() {}

  concluirTarefa(tarefa: Todo) {
    this.todoLists.find((todos: Todo) => {
      if (todos.valor === tarefa.valor) {
        todos.status = !todos.status;
      }
    });
  }

  enviarTodoParaExcluir(tarefa: Todo) {
    this.todoRemoveEvent.emit(tarefa);
  }
}
