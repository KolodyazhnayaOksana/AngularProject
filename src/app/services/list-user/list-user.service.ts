import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {server} from '../../constants';

@Injectable({
  providedIn: 'root'
})
export class ListUserService {

  constructor(private http: HttpClient) {
  }

  getListUsers(page) {
    return this.http.get(server + '/api/users?page=' + page);
  }
}
