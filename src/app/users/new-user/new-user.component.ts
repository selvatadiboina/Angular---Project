import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from '../user';
import { UserFirebaseService } from '../user-firebase.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-new-user',
  standalone: true,
  imports: [ReactiveFormsModule,NgIf],
  templateUrl: './new-user.component.html',
  styleUrl: './new-user.component.css'
})
export class NewUserComponent {

  user: User = new User('', '', '', '')
  userForm: FormGroup
  userService = inject(UserFirebaseService)

  constructor(private fb: FormBuilder) {
  
    this.userForm = fb.group({
      fullname: new FormControl('',Validators.required),
      username: new FormControl('',Validators.required),
      email: new FormControl('',[Validators.required,Validators.email]),
      password: new FormControl('',[Validators.required,Validators.minLength(6)])
    })
  }

  createUser() {
    if(this.userForm.valid){
    this.user = this.userForm.value as User
    console.log(this.user)
    // TODO Hash the password so that the password is not stored as plain text
    this.userService.createUser(this.user).subscribe(response => console.log(response))
  }
  else{
    console.log("Form is invalid");
  }
  }
  
    
  }

