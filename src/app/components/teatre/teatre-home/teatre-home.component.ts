import { Component, OnInit } from '@angular/core';
// router
import { ActivatedRoute , Router} from '@angular/router';
// service
import { SappService} from '../../../service/AppService/sapp.service';
// _guard
import { _guardFn } from '../../../_guard';

@Component({
  selector: 'app-teatre-home',
  templateUrl: './teatre-home.component.html',
  styleUrls: ['./teatre-home.component.scss']
})
export class TeatreHomeComponent implements OnInit {
  private id: number;
  public teatre_data: any = [{}];
  public  authChang = _guardFn('3');
  constructor(private route: ActivatedRoute, private router: Router, private service: SappService ) { }
  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.service.get (`/get-teatre/${this.id}`).subscribe(
      res => {
        this.teatre_data = res;
      },
      err => {
        console.log(err);
      });
  }
  navigate (param) {
    this.router.navigate(['/teatres/teatre/kino/', param]);
  }
  // update kino
  updateTeatre() {
    const param = '2' + '.' + this.id;
    this.router.navigate(['/admin/table', param]);
  }
}
