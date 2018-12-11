import { Component, OnInit } from '@angular/core';
// srevice
import { SappService} from '../../../service/sapp.service';
// router
import { Router} from "@angular/router";

@Component ({
  selector: 'app-teatre',
  templateUrl: './teatre.component.html',
  styleUrls: ['./teatre.component.scss']
})
export class TeatreComponent implements OnInit {
  public teatres: any;
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
}
