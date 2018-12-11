import { Component, OnInit } from '@angular/core';
// service
import { SappService } from '../../service/sapp.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private service: SappService) { }

  ngOnInit() { }
}
