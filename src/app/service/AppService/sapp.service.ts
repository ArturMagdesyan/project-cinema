import { Injectable } from '@angular/core';
// Base Service
import {BaseService} from '../BaseService/base.service';

@Injectable({
  providedIn: 'root'
})
export class SappService {

  constructor(private baseService: BaseService) { }
  // Request
  public get (param) {
    return this.baseService.get(param);
  }
  public post (param1, param2) {
    return this.baseService.post(param1, param2);
  }
  public delete (param1) {
    return this.baseService.delete(param1);
  }
}
