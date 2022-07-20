import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule],
      declarations: [AppComponent],
    });
    //  component = new AppComponent();
    // create component and test fixture
    fixture = TestBed.createComponent(AppComponent);

    // get test component from the fixture
    component = fixture.componentInstance;
    component.ngOnInit();
    2;
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'testing'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('testing');
  });

  it('form invalid when empty', () => {
    expect(component.form.valid).toBeFalsy();
  });

  it('email field validity', () => {
    let email = component.form.controls['email'];
    1;
    expect(email.valid).toBeFalsy();
    2;
  });
  it('email field validity', () => {
    let errors = {};
    let email = component.form.controls['email'];
    errors = email.errors || {};
    expect(errors).toBeTruthy();
  });
  it('submitting a form emits a user', () => {
    expect(component.form.valid).toBeFalsy();
    component.form.controls['fname'].setValue(' ');
    component.form.controls['lname'].setValue(' ');
    component.form.controls['email'].setValue('test@test.');
    component.form.controls['password'].setValue('123456789');

    expect(component.form.valid).toBeTruthy();
  });
  it('H1 tag should be Hello World', () => {
    var h1: HTMLElement = fixture.nativeElement.querySelector('h1');
    expect(h1.textContent).toEqual('Form Validation');
  });
  it('H1 tag should be Hello World', () => {
    var p: HTMLElement = fixture.nativeElement.querySelector('p');
    expect(p.textContent).toEqual('This is group');
  });
  it('image should have alt tag of "Login Image"', () => {
    let a: HTMLElement = fixture.nativeElement.querySelector('a');
    expect(a.getAttribute('alt')).toEqual('login');
  });
  it('image should have alt tag of "Login Image"', () => {
    let image: HTMLElement = fixture.nativeElement.querySelector('img');
    expect(image.getAttribute('alt')).toEqual('aaa');
  });
  it('image should have alt tag of "Login Image"', () => {
    let image: HTMLElement = fixture.nativeElement.querySelector('img');
    expect(image.getAttribute('src')).toBeTruthy();
  });
  // it('should click Send button with async', async(() => {
  //   let buttonElement = fixture.debugElement.query(By.css('.send-button'));

  //   spyOn(component, 'sendData');
  //   //Trigger click event after spyOn
  //   buttonElement.triggerEventHandler('click', null);

  //   fixture.whenStable().then(() => {
  //     expect(component.sendData).toHaveBeenCalled();
  //   });

  // }));
  // it('should click Send button with async', async(() => {
  //   let buttonElement = fixture.debugElement.query(By.css('.set-button'));

  //   spyOn(component, 'setName');
  //   //Trigger click event after spyOn
  //   buttonElement.triggerEventHandler('click', null);

  //   fixture.whenStable().then(() => {
  //     expect(component.setName).toHaveBeenCalled();
  //   });

  // }));
  // it('should click Send button with async', async(() => {
  //   let buttonElement = fixture.debugElement.query(By.css('.edit-button'));

  //   spyOn(component, 'editPerson');
  //   //Trigger click event after spyOn
  //   buttonElement.triggerEventHandler('click', null);

  //   fixture.whenStable().then(() => {
  //     expect(component.editPerson).toHaveBeenCalled();
  //   });

  // }));

  it('doctorlin status is active', () => {
    const doctor = { status: 'active' };
    const res = component.isDoctorOnline(doctor);
    expect(res).toBeTruthy();
  });
  it('doctor status is inactive ', () => {
    const doctor = { status: 'inactive' };
    const res = component.isDoctorOnline(doctor);
    expect(res).toBeFalsy();
  });
  it('test form group element', () => {
    const formElement =
      fixture.debugElement.nativeElement.querySelector('form');
    const inputElement = formElement.querySelectorAll('input');
    expect(inputElement.length).toEqual(4);
  });
  it('check initial form values', () => {
    const loginFormGroup = component.form;
    const loginFormValue = {
      fname: '',
      lname: '',
      email: '',
      password: '',
    };
    expect(loginFormGroup.value).toEqual(loginFormValue);
  });
  it('Check username valuebefore entering some value and validation', () => {
    const LoginFormUserElement: HTMLInputElement =
      fixture.debugElement.nativeElement
        .querySelector('form')
        .querySelectorAll('input')[0];
    const fnameValueFormGroup = component.form.get('fname');
    expect(LoginFormUserElement.value).toEqual(fnameValueFormGroup.value);
    expect(fnameValueFormGroup.errors).not.toBeNull();
    expect(fnameValueFormGroup.errors.required).toBeTruthy();
  });
  it('check the login form is valid when validation are fulfilled', () => {
    const loginFormFname: HTMLInputElement = fixture.debugElement.nativeElement
      .querySelector('form')
      .querySelectorAll('input')[0];
    const loginFormLname: HTMLInputElement = fixture.debugElement.nativeElement
      .querySelector('form')
      .querySelectorAll('input')[1];
    const loginFormEmail: HTMLInputElement = fixture.debugElement.nativeElement
      .querySelector('form')
      .querySelectorAll('input')[2];
    const loginFormPassword: HTMLInputElement =
      fixture.debugElement.nativeElement
        .querySelector('form')
        .querySelectorAll('input')[3];
        loginFormFname.value = "pawana";
        loginFormLname.value = "kumari";
        loginFormEmail.value = "pawana@gmail.com";
        loginFormPassword.value = "123456"
        loginFormFname.dispatchEvent(new Event('input'));
        loginFormLname.dispatchEvent(new Event('input'));
        loginFormEmail.dispatchEvent(new Event('input'));
        loginFormPassword.dispatchEvent(new Event('input'))
        const isLoginFormValid = component.form.valid;
        fixture.whenStable().then(()=>{
          expect(isLoginFormValid).toBeTruthy();
        })

  });
  // it('image should have width of 250px and height of 150px', () => {
  //   let image: HTMLElement = fixture.nativeElement.querySelector("img");
  //   expect(image.getAttribute("style")).toEqual("width:250px");
  //   expect(image.getAttribute("style")).toEqual("height:250px");
  // });
});
