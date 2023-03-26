import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private url = "https://mailthis.to/andrechavira"

  constructor(private http: HttpClient) { }

  sendEmail(input: any) {
    return this.http.post(this.url, input, {responseType: 'text'})
  }


}
