import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private API_URL: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  get<T>(url: string): Observable<T> {
    let completeUrl = this.API_URL + url;
    return this.http.get<T>(completeUrl).pipe(map((res) => res));
  }

  post<T>(url: string, body: string): Observable<T> {
    let completeUrl = this.API_URL + url;
    return this.http.post<T>(completeUrl, body).pipe(map((res) => res));
  }
 
}
