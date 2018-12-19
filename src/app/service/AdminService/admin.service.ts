import { Injectable } from '@angular/core';
import {BaseService} from '../BaseService/base.service';
// Base Service
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private baseService: BaseService ) { }
  public delete (param1) {
    return this.baseService.delete(param1);
  }
  public put (param1, param2) {
    return this.baseService.put(param1, param2);
  }
  public post (param1, param2) {
    return this.baseService.post(param1, param2);
  }
}
