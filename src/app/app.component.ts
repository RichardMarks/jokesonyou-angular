import { Component } from '@angular/core';
import { JokeService } from './joke.service';
import { Joke } from './Joke';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jokesonyou';
  joke: Joke;

  constructor(private jokeService: JokeService) {}

  ngOnInit() {
    this.fetchARandomJoke();
  }

  fetchARandomJoke() {
    this.jokeService.getJoke().subscribe((data: Joke) => {
      this.joke = data;
    });
  }
}
