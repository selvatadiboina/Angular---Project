import { Component, inject, OnInit } from '@angular/core';
import { Router,RouterOutlet } from '@angular/router';
import { TodosFirebaseService } from './todos-firebase.service';
import Todo from './todo';
import { NgFor } from '@angular/common';
import { LoremIpsum } from 'lorem-ipsum';
import { NewUserComponent } from './users/new-user/new-user.component';
import { LoginComponent } from './users/login/login.component';
import { PaymentComponent } from './users/payment/payment.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgFor, NewUserComponent,RouterOutlet,LoginComponent,PaymentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  todoService = inject(TodosFirebaseService)
  todos: Todo[] = []
  lorem = new LoremIpsum();
  constructor(private router: Router) {
  }
  goToLogin() {
    this.router.navigate(['/', 'login']);
  }
  goToLogout() {
    this.router.navigate(['/', 'register']);
  }
 gotoPayment(){
  this.router.navigate(['/','payment']);
 }

}
