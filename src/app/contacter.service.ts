import { HttpClient } from '@angular/common/http';
import { Injectable} from '@angular/core';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContacterService {
  private api = 'http://localhost:3000/sendemail';

  constructor(private http: HttpClient) { }

  postMessage(input: any) {
    return this.http.post(this.api, input).pipe(
      map(
        (response: any) => {
          if (response) {
            return response;
          }
          (error: any) => {
            return error;
          }
        })
    )
  }
}
