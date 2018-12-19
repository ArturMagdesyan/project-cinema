import { Component, OnInit, OnChanges, Input, Output, EventEmitter, SimpleChanges, SimpleChange, ViewChild } from '@angular/core';
import { SappService } from '../../../service/AppService/sapp.service';

// Form Group
import { FormControl, FormGroup, Validators } from '@angular/forms';

// Modal
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component ({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnChanges {
  public loginForm: FormGroup;
  public data_err;
  public auth = JSON.parse(localStorage.getItem('cinemaUser'));

  @ViewChild('modalRef') childModal: ModalDirective;
  @Input() isActive;
  @Output() close = new EventEmitter();

  constructor(private service: SappService) { }

  ngOnChanges(changes: SimpleChanges): void {
    const _this = this;
    const isActive: SimpleChange = changes.isActive;
    if (isActive.currentValue) {
      setTimeout(() => {
        _this.childModal.show();
      }, 10);
    }
  }
  ngOnInit() {
    // Form Validator
    this.loginForm = new FormGroup({
      'email': new FormControl('', [
        Validators.required,
        Validators.email,
      ]),
      'password': new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ])
    });
  }
  // Go to service (login)
  SubLogin(form) {
    if (form.valid) {
      this.service.post('/signin', form.value).subscribe(
        res => {
          localStorage.setItem( 'cinemaUser', JSON.stringify(res[0]));
          this.auth = JSON.parse(localStorage.getItem('cinmeaUser'));
          // this.modalRef.hide();
          setTimeout( () => {

            window.location.reload();
          },100);
        },
        error => {
          console.log(error);
        });
    }
  }
  // Close modal
  closeModal() {
    this.childModal.hide();
    this.close.emit('login');
  }
}
