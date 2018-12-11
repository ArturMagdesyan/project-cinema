import { Injectable } from '@angular/core';
// Base Service
import {BaseService} from './base.service';

@Injectable({
  providedIn: 'root'
})
export class SappService {

  constructor(private baseService: BaseService) { }
  // Request
  get (param) {
    return this.baseService.get(param);
  }
  post (param1, param2) {
    return this.baseService.post(param1, param2);
  }
}
