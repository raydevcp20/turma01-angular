import { Routes } from '@angular/router';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { Aula02Component } from './pages/aula02/aula02.component';
import { Aula03Component } from './pages/aula03/aula03.component';
import { Aula04Component } from './pages/aula04/aula04.component';
import { Aula05Component } from './pages/aula05/aula05.component';
import { Aula06Component } from './pages/aula06/aula06.component';
import { ProdutoDetailComponent } from './pages/produto-detail/produto-detail.component';

export const routes: Routes = [
    { path: '', redirectTo: 'aula02', pathMatch: 'full' },
    { path: 'todo-list', component: TodoListComponent },
    { path: 'aula02', component: Aula02Component },
    { path: 'aula03', component: Aula03Component },
    { path: 'aula04', component: Aula04Component },
    { path: 'aula05', component: Aula05Component },
    { path: 'aula06', component: Aula06Component },
    { path: 'produto/:id', component: ProdutoDetailComponent}// Rota com parâmetro
    // O :id é um parâmetro que será passado para a rota. Ele pode ser acessado pelo componente
    // através do ActivatedRoute. Exemplo: this.route.snapshot.params['id'];
];

// A aula 06 foi dedicada para roteamento, por isso a rota é diferente das demais.
// Glossário de termos:
// - Routes: Tipo que representa um array de rotas.
// - path: Caminho da rota. Não precisa começar com barra.
// - redirectTo: Redireciona para outra rota. Precisa começar com barra.
// - pathMatch: Define como a rota deve ser combinada. Pode ser 'full' ou 'prefix'.
// - component: Componente que será renderizado. Pode ser uma classe ou um módulo.