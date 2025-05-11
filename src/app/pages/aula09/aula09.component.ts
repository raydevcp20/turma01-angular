import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-aula09',
  imports: [],
  templateUrl: './aula09.component.html',
  styleUrl: './aula09.component.css'
})
export class Aula09Component {
constructor(private userService: UserService) {}

ngOnInit() {
    this.userService.listUsers();
}
}
