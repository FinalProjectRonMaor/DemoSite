import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { AiApiResponse } from '../interfaces/ai-api-response.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  response: AiApiResponse;

  constructor(private http: HttpClient) { }

  public predict(data: any, apiUrl: string): Observable<AiApiResponse> {
    return this.http.post<AiApiResponse>(apiUrl, data);
  }
}