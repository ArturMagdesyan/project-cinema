import { Component, OnInit } from '@angular/core';
// Form Group
import { FormControl, FormGroup, Validators } from '@angular/forms';
// Router
import { Router } from '@angular/router';
// service
import { SappService} from '../../service/AppService/sapp.service';

@Component ({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})

export class SignupComponent implements OnInit {
  public loginForm: FormGroup;
  constructor( private service: SappService, private router: Router ) { }

  ngOnInit() {
    // Form Validator
    this.loginForm = new FormGroup({
      'name': new FormControl('', [
        Validators.required,
      ]),
      'email': new FormControl('', [
        Validators.required,
        Validators.email,
      ]),
      'username': new FormControl('', [
        Validators.required,
      ]),
      'password': new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ])
    });
  }
  SubLogin(form) {
    if (form.valid) {
      this.service.post('/signup', form.value).subscribe(
        res => {
          this.router.navigate(['/']);
        },
        error => {
          console.log(error);
        });
    }
  }

}
