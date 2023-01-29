import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private _snackBar: MatSnackBar) {
    // Email format
    let emailRegex: string = '^[a-z]+@[a-z]+\\.[a-z]{2,3}$';
    // Eight characters, at least one uppercase letter, one lowercase letter, one number and one special character
    let passwordRegex: string = '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$'
    this.form = formBuilder.group({
      email: ['', [Validators.required, Validators.pattern(emailRegex)]],
      userName: ['', Validators.required],
      password: ['', [Validators.required, Validators.pattern(passwordRegex)]]
    })
  }

  registration() {
    this._snackBar.open("Registro exitoso!");
  }
}
