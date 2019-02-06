import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class MovieService {
  private movie_url = "https://api.themoviedb.org/3/";
  private api_key = "910eff21701b7947983c845f5296e47a";
  private movie_string: string;
  private id: number;

  constructor(public http: HttpClient) {}

  searchMovie(movie: string) {
    this.movie_string = movie;
    return this.http.get(
      this.movie_url +
        "search/movie?query=" +
        this.movie_string +
        "&api_key=" +
        this.api_key
    );
  }

  getPopularMovies() {
    return this.http.get(this.movie_url + 'discover/movie?sort_by=popularity.desc' + '&api_key=' + this.api_key);
  }

  getMovie(id: number) {
    return this.http.get(this.movie_url + "movie/" + id + "?api_key=" + this.api_key);
  }
}
