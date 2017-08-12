import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<movie-form></movie-form>'
})
export class AppComponent {


  // constructor(private http: HttpClient) {}

  // ngOnInit(): void {
  //   this.http.post('http://localhost:3000/api/movie', {
  //     "title": "new title",
  //     "release date": "this is release date",
  //     "duration": "this is duration",
  //     "genre": "this is genre",
  //     "synopsis": "this is synopsis"
  //   }).subscribe(data => {
  //     this.title = data['title'];
  //     this.releaseDate = data['release date'];
  //     this.duration = data['duration'];
  //     this.genre = data['genre'];
  //     this.synopsis = data['synopsis'];
  //   });
    
  //   this.http.get('http://localhost:3000/api/movie').subscribe(data => {
  //     this.title = data['title'];
  //     this.releaseDate = data['release date'];
  //     this.duration = data['duration'];
  //     this.genre = data['genre'];
  //     this.synopsis = data['synopsis'];
  //   });
  // }
}
