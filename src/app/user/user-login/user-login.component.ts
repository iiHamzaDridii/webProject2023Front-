import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.css'
})
export class UserLoginComponent implements OnInit{

  signupUsers: any[] = [];

  signupNormalObj: any = {
    userName: '',
    email: '',
    password: ''
  };

  signupOrganizerObj: any = {
    userName: '',
    email: '',
    password: '',
    address: '',
    dateOfEvent: '',
    organizationLocation: ''
  };

  loginObj: any = {
    userName: '',
    email: '',
    password: ''
  };

  selectedUserType: string | null = null;

  constructor() {
  }

  selectUserType(userType: string) {
    this.selectedUserType = userType;
  }

  ngOnInit(): void {
    const localData = localStorage.getItem('signupUser');
    if (localData!=null){
      this.signupUsers = JSON.parse(localData);
    }
  }

  signUp() {
    if ( this.selectedUserType == 'normal' ) {
      this.signupUsers.push(this.signupNormalObj);
      localStorage.setItem('signupUser',JSON.stringify(this.signupUsers));
      this.signupNormalObj = {
        userName: '',
        email: '',
        password: ''
      };
    } else {
      this.signupUsers.push(this.signupOrganizerObj);
      localStorage.setItem('signupUser',JSON.stringify(this.signupUsers));
      this.signupOrganizerObj = {
        userName: '',
        email: '',
        password: '',
        address: '',
        dateOfEvent: '',
        organizationLocation: ''
      };
    }

  }

  logIn() {
    debugger
    const userExists = this.signupUsers.find(m => m.userName == this.loginObj.userName && m.password == this.loginObj.password);
    if (userExists){
      alert("successfully logged in");
    } else {
      alert("wrong credentials");
    }
  }
}
