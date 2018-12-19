import { Component, OnInit } from '@angular/core';
// Router
import { Router } from '@angular/router';
//  service
import { SappService} from './service/AppService/sapp.service';
// _guard
import { _guardFn } from './_guard';

@Component ({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public user;
  public templateName: string;
  public _guardChange = _guardFn('1');
  constructor(private service: SappService,
              private router: Router ) { }
  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('cinemaUser'));
  }
  // logout
  logout() {
    localStorage.removeItem('cinemaUser');
    window.location.reload();
  }
  // // modal
  // openModal(template) {
  //   this.modalRef = this.modalService.show(data_err, {class: 'modal-md'});
  // }
}
