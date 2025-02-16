import { Routes } from '@angular/router';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { Aula02Component } from './pages/aula02/aula02.component';
import { Aula03Component } from './pages/aula03/aula03.component';
import { Aula04Component } from './pages/aula04/aula04.component';

export const routes: Routes = [
    { path: '', redirectTo: 'aula02', pathMatch: 'full' },
    { path: 'todo-list', component: TodoListComponent },
    { path: 'aula02', component: Aula02Component },
    { path: 'aula03', component: Aula03Component },
    { path: 'aula04', component: Aula04Component },
];
