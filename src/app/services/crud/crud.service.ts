import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse } from '../../interfaces/api-response';

@Injectable({
  providedIn: 'root'
})
export class CrudService extends ApiService {

  constructor(http: HttpClient) {
    super(http);
  }

  //TODO pagination
  list(model: string): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${this.baseUrl}${model}`, { headers: this.getHeaders() });
  }

  getById(model: string, id: number): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${this.baseUrl}${model}/${id}`, { headers: this.getHeaders() });
  }

  create(model: string, data): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl + model, data, { headers: this.getHeaders() });
  }

  update(model: string, data, id: number): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(`${this.baseUrl}${model}/${id}`, data, { headers: this.getHeaders() });
  }

  delete(model: string, id: number): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(`${this.baseUrl}${model}/${id}`, {headers: this.getHeaders()});
  }

}
