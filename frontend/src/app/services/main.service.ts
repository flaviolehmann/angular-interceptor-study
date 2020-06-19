import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(
    private httpClient: HttpClient
  ) { }

  makeRequest(desiredResponseStatus): Observable<any> {
    return this.httpClient.get(`${environment.api.url}/responses`, {
      params: {
        status: desiredResponseStatus
      }
    });
  }

}
