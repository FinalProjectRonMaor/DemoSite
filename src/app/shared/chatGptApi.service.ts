import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { gptResponse } from './gpt-res.interface'

@Injectable({
    providedIn: 'root'
  })
export class GptService {
  private apiUrl = 'https://api.openai.com/v1/chat/completions';
  private apiKey = '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'; 
  res: string;

  constructor(private http: HttpClient) {}

  sendMessage(message: string): Observable<gptResponse> {
    const body = {
      model: "gpt-3.5-turbo",
      messages: [{"role":'user', "content": message}],
      max_tokens: 500
    };

    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.apiKey}`
    };

    return this.http.post<gptResponse>(this.apiUrl, body, { headers });
  }
}