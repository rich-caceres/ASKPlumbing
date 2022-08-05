import { HttpClient } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContacterService {
  private api = 'https://mailthis.to/you@mail.com';

  constructor(private http: HttpClient) {

    postMessage(Input: any){

    }
  }
}
