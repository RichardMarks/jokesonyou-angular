import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JokeService {

  url = 'https://icanhazdadjoke.com/';

  constructor(private http: HttpClient) { }

  getJoke() {
    return this.http.get(this.url, {
      headers: new HttpHeaders({
        // 'User-Agent': 'com.ccpssolutions.jokesonyouangular6app',
        'Accept': 'application/json'
      })
    });
  }
}
