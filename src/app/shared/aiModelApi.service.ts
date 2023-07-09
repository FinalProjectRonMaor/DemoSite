import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { AiApiResponse } from '../interfaces/ai-api-response';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'https://europe-west6-concrete-braid-385214.cloudfunctions.net/EmotionAnalysisAPI';
  response: AiApiResponse;
  hideEmojies: boolean = true;
  sentRequest: boolean = false;

  constructor(private http: HttpClient) { }

  public predict(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, data).pipe(tap(res=> this.hideEmojies = false));
  }
}