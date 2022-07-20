import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
  FormArray,
} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'testing';
  personName!: string;
  form!: any;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      fname: ['', [Validators.required, Validators.maxLength(5)]],
      lname: ['', [Validators.required, Validators.maxLength(5)]],
      email: ['', [Validators.required, Validators.pattern('[^ @]*@[^ @]*')]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      skills: new FormArray([
        new FormControl(null,Validators.required),
       
      ])
    });
   
  }
  onAddSkills(){
    (<FormArray>this.form.get('skills')).push(new FormControl(null))
  }

  get f(){
    return this.form.controls;
  }

  login() {
    console.log(this.form.value);
    // if (this.form.valid) {
    //   this.loggedIn.emit(
    //       new User(
    //           this.form.value.email,
    //           this.form.value.password
    //       )
    //   );
    // }
  }
  // setName() {
  //   this.personName = 'Mahesh';
  // }
  // sendData() {
  //   console.log('---sendData---');
  //   //Call Service to send data over HTTP
  // }
  // editPerson(id: number) {
  //   console.log('---editPerson---', id);
  //   //Call Service to send data over HTTP
  // }
  isDoctorOnline(doctor: any) {
    if (doctor.status == 'active') {
      return true
    } else {
      return false;
    }
  }
}
