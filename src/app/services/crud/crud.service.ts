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

  // TODO send model and change it in environment url
  list(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl, { headers: this.getHeaders() });
  }
}
