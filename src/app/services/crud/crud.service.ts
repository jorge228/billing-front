import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { ApiResponse } from '../../interfaces/api-response';
import { catchError } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { Location } from '@angular/common'

@Injectable({
  providedIn: 'root'
})
export class CrudService extends ApiService {

  constructor(http: HttpClient, private router: Router) {
    super(http);
  }

  //TODO pagination
  list(model: string): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${this.baseUrl}${model}`, { headers: this.getHeaders() });
  }

  getById(model: string, id: number): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${this.baseUrl}${model}/${id}`, { headers: this.getHeaders() })
      .pipe(
        catchError(e => {
          this.router.navigate([`/dashboard/${model}`]);
          Swal.fire('Error', e.error.message, 'error');
          return throwError(e);
        })
      );
  }

  create(model: string, data): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl + model, data, { headers: this.getHeaders() })
      .pipe(
        catchError(e => {
          this.router.navigate([`/dashboard/${model}`]);
          Swal.fire('Error', e.error.message, 'error');
          return throwError(e);
        })
      );
  }

  update(model: string, data, id: number): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(`${this.baseUrl}${model}/${id}`, data, { headers: this.getHeaders() })
      .pipe(
        catchError(e => {
          this.router.navigate([`/dashboard/${model}`]);
          Swal.fire('Error', e.error.message, 'error');
          return throwError(e);
        })
      );
  }

  delete(model: string, id: number): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(`${this.baseUrl}${model}/${id}`, { headers: this.getHeaders() })
      .pipe(
        catchError(e => {
          this.router.navigate([`/dashboard/${model}`]);
          Swal.fire('Error', e.error.message, 'error');
          return throwError(e);
        })
      );
  }

}
