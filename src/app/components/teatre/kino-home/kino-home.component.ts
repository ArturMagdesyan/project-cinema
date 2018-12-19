import { Component, OnInit } from '@angular/core';
// router
import { Router, ActivatedRoute } from '@angular/router';
// service
import {SappService} from '../../../service/AppService/sapp.service';
// for iframe
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
// Modal
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
// _guard
import { _guardFn } from '../../../_guard';

@Component ({
  selector: 'app-kino-home',
  templateUrl: './kino-home.component.html',
  styleUrls: ['./kino-home.component.scss']
})
export class KinoHomeComponent implements OnInit {
  public chair_number: number;
  public chair_row;
  public chair_col;
  public chir_n = 10;
  public id;
  public kino_data: object = {};
  public date: any[] = [];
  public _reserve = [];
  public reserveDate: number;
  // for iframe
  public kino_url: SafeResourceUrl;
  // Modal
  public modalRef: BsModalRef;
  public modalRef2: BsModalRef;
  public message: string;
  public _guardKinoDate = _guardFn('4');
  public _guardReserve = _guardFn('5');
  public _guardCanseleReserve = _guardFn('6');

  constructor(private route: ActivatedRoute,
              private router: Router,
              private service: SappService,
              public sanitizer: DomSanitizer,
              private modalService: BsModalService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    // get kino data for id
    this.service.get(`/get-kino/${this.id}`).subscribe(
      res => {
        this.kino_data = res[0];
        // for iframe
        const kino1_url = this.kino_data['kino_url'];
        this.kino_url = this.sanitizer.bypassSecurityTrustResourceUrl(kino1_url);
      },
      err => {
        console.log(err);
      });
    // get date for id
    this.service.get(`/get-date/${this.id}`).subscribe(
      res => {
        this.date = res;
      },
      err => {
        console.log(err);
      });
  }
  // modal
  openModal(template, param) {
    if ( !this._guardReserve ) {
      this.message = 'Plise Sign up';
      return false;
    }
    this.modalRef = this.modalService.show(template, {class: 'modal-md'});
    // for chair row & col
    this.chair_number = param;
    this.chair_row = Math.ceil(this.chair_number / this.chir_n);
    this.chair_col = Math.ceil(this.chair_number / this.chair_row);
  }
  openModal2(template) {
    if (this._reserve.length) {
      this.modalRef.hide();
      this.modalRef2 = this.modalService.show(template, {class: 'second'});
    }
  }
  closeModal2() {
    this.modalRef2.hide();
    this.modalRef = null;
  }
  // reserve
  reserve(row, col) {
    // get user id
    let id = JSON.parse(localStorage.getItem('cinemaUser'));
    id = id['id'];
    const obj = {user_id: id, date_id: this.reserveDate, row: row, col: col};
    this._reserve.push(obj);
    const ell = document.getElementById(`row-${row}col-${col}`);
    ell.className = 'icolor';
  }
  // delete reserve
  delete_res(item) {
    const ell = document.getElementById(`row-${item.row}col-${item.col}`);
    const index = this._reserve.indexOf(item);
    this._reserve.splice(index, 1);
    ell.className = '';
  }
  // fn for *ngFor
  arrayOne(param) {
    return Array(param);
  }
  arrayTwo(param) {
    return Array(param);
  }
  // save reserve
  save_res() {
    this.service.post('/save-reserve', this._reserve).subscribe(
      res => {
        this._reserve = [];
      },
      err => console.log(err));
  }
  // get reserve data
  getReserve(id) {
    if ( !this._guardReserve ) {
      return false;
    }
    this.reserveDate = id;
    this.service.get(`/get-reserve/${id}`).subscribe(
      res => {
        this._reserve = [];
        for (let i = 0; i < res.length; i++) {
          const ell = document.getElementById(`row-${res[i].row}col-${res[i].col}`);
          ell.className = 'icolor';
        }
        },
      err => {
        console.log(err);
      });
  }
  // ADMIN
  // update date
  update() {
    const param = '3' + '.' + this.id;
    this.router.navigate(['/admin/table', param]);
  }
  // cansle reserve
  cancelReserve(id) {
   const param = '4' + id;
   this.router.navigate(['/admin/table', param]);
  }
}
