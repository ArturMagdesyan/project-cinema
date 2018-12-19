import { Component, OnInit } from '@angular/core';
// service
import { SappService } from '../../../service/AppService/sapp.service';
// table settings
import { settingsTeatre, settingsKino, settingsKinoDate, settingsKinoReserve } from '../settings-table/table-settings';
// activ router
import {  ActivatedRoute } from '@angular/router';
// Admin Service
import { AdminService } from '../../../service/AdminService/admin.service';

@Component ({
  selector: 'app-table1',
  templateUrl: './table1.component.html',
  styleUrls: ['./table1.component.scss']
})
export class Table1Component implements OnInit {
  public user = JSON.parse(localStorage.getItem('cinemaUser'));
  public settingsTeatre      = settingsTeatre;
  public settingsKino        = settingsKino;
  public settingsKinoDate    = settingsKinoDate;
  public settingsKinoReserve = settingsKinoReserve;
  public settings_keys       = [ 'settingsTeatre', 'settingsKino', 'settingsKinoDate', 'settingsKinoReserve'];
  public data = [];
  public index;
  public int;
  public settings: object;
  // sequriti number
  // 1 number user id
  // 2 number data teble
  // 3 number data id
  public seqNumber;

  constructor( private service: SappService,
               private ruter: ActivatedRoute,
               private adminservice: AdminService) { }

  ngOnInit() {
    this.int      = this.ruter.snapshot.params.id;
    this.index    = this.ruter.snapshot.params.id.charAt(0);
    const name    = this.settings_keys[this.index - 1];
    this.settings = this[name];
    this.service.get(`/get-all/${this.int}`).subscribe(
      res => {
          this.data = res;
      },
      err => {
        console.log(err);
      });
  }
  // table delete fn
  onDeleteConfirm (param) {
    const int = this.user.id;
    this.seqNumber = int + '.' + this.int + '.' + param.data.id;
    if (window.confirm('Are you sure you want to delete?')) {
        param.confirm.resolve();
        this.adminservice.delete(`/delete-data/${this.seqNumber}`).subscribe(
          res => {
            console.log(res['protocol41']);
          },
          err => {
            console.log(err);
          });
    } else {
        param.confirm.reject();
    }
  }
  // table updata fn
  onSaveConfirm (param) {
    const int = this.user.id;
    this.seqNumber = int + '.' + this.int + '.' + param.data.id;
    if (window.confirm('Are you sure you want to save?')) {
        // event.newData['name'] += ' + added in code';
        param.confirm.resolve(param.newData);
        this.adminservice.put(`/updata/${this.seqNumber}`, param.newData).subscribe(
          res => {
            console.log(res.message);
          },
          err => {
            console.log(err);
          });
    } else {
      param.confirm.reject();
    }
  }
  // table new data create fn
  onCreateConfirm (param) {
    const int = this.user.id;
    this.seqNumber = int + '.' + this.int;
    if (window.confirm('Are you sure you want to create?')) {
       // event.newData['name'] += ' + added in code';
       param.confirm.resolve(param.newData);
       this.adminservice.post(`/create/${this.seqNumber}`, param.newData).subscribe(
         res => {
           console.log(res);
         },
         err => {
           console.log(err);
         });
    } else {
       param.confirm.reject();
    }
  }
}
