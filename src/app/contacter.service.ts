import { HttpClient } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContacterService {
  private api = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  postMessage(Input: any) {
    return this.http.post(this.api, input, { responseType: 'text'}).pipe(
      map(
        (response) => {
          if (response) {
            return response;
        },
        (error: any) => {
          return error;
        }
      )
    )
  }
}
