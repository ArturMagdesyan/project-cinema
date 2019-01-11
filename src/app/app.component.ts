import { Component, OnInit } from '@angular/core';
// Router
import { Router } from '@angular/router';
//  service
import { SappService } from './service/AppService/sapp.service';
// _guard
import { _guardFn } from './_guard';
// color

@Component ({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  public searchValue: string;
  public user;
  public templateName: string;
  public _guardChange = _guardFn('1');
  public teatre_data = [];
  public kino_data = [];
  public cuyc = false;
  public bgColor = 'black';

  constructor(private service: SappService,
              private router: Router ) { }
  ngOnInit() {
    document.addEventListener('click', (e) => {
      this.cuyc ? this.cuyc = false : this.cuyc = false;

    });
    document.getElementById('search').addEventListener(
      'click', (e) => {
        e.preventDefault();
        e.stopPropagation();
    });
    this.user = JSON.parse(localStorage.getItem('cinemaUser'));
  }
  // logout
  logout() {
    localStorage.removeItem('cinemaUser');
    window.location.reload();
  }
  // search
  search() {
    this.teatre_data = [];
    this.kino_data = [];
    if (!this.searchValue) {
      return false;
    }
    // search
    this.service.get(`/search/${this.searchValue}`).subscribe(
      res => {
        this.cuyc = true;
        for (let i = 0; i < res.length; i++) {
          if (res[i].different_id === 1) {
            this.teatre_data.push(res[i]);
          } else {
            this.kino_data.push(res[i]);
          }
        }
      },
      err => {
        console.log(err);
      }
    );
  }
  // background color
  test (e) {
    this.bgColor = e;
  }
}
