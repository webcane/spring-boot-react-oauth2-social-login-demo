import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
  }

  get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    return this.http.get(`${environment.apiBaseUrl}${path}`, {params})
      .pipe(catchError(ApiService.formatErrors));
  }

  put(path: string, body: Object = {}): Observable<any> {
    return this.http.put(
      `${environment.apiBaseUrl}${path}`,
      JSON.stringify(body)
    ).pipe(catchError(ApiService.formatErrors));
  }

  post<T = unknown>(path: string, body: Object = {}): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.set('content-type', 'application/json');
    return this.http.post<T>(
      `${environment.apiBaseUrl}${path}`,
      JSON.stringify(body),
      {headers}
    ).pipe(catchError(ApiService.formatErrors));
  }

  delete(path): Observable<any> {
    return this.http.delete(
      `${environment.apiBaseUrl}${path}`
    ).pipe(catchError(ApiService.formatErrors));
  }

  private static formatErrors(error: any) {
    return throwError(error.error);
  }
}
