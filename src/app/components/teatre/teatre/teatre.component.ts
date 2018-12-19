import { Component, OnInit } from '@angular/core';
// srevice
import { SappService} from '../../../service/AppService/sapp.service';
// router
import { Router} from '@angular/router';
// _guard
import { _guardFn } from '../../../_guard';

@Component ({
  selector: 'app-teatre',
  templateUrl: './teatre.component.html',
  styleUrls: ['./teatre.component.scss']
})
export class TeatreComponent implements OnInit {
  public  teatres: any;
  public  authChang = _guardFn('2');
  constructor(private service: SappService, private router: Router) { }

  ngOnInit() {
    // get teatre
    this.service.get('/get-teatre').subscribe(
      res => {
        this.teatres = res;
      },
      err => {
        console.log(err);
      });
  }
// navigate teatre for id
  navigate (param) {
    this.router.navigate(['/teatres/teatre', param]);
  }
  //  Admin
  // update teatre
  update() {
    this.router.navigate(['/admin/table', '1']);
  }
}
