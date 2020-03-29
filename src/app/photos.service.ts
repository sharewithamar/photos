import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { pluck } from "rxjs/operators";

interface UnsplashResponse {
  urls: {
    regular: string;
  };
}

@Injectable({
  providedIn: "root"
})
export class PhotosService {
  constructor(private http: HttpClient) {}

  getPhoto() {
    return this.http
      .get<UnsplashResponse>("https://api.unsplash.com/photos/random", {
        headers: {
          Authorization: "Client-ID uyJUQzEgwoq_FIxm1mSgn2WnmuybkeStS-616MA7QCI"
        }
      })
      .pipe(pluck("urls", "regular"));
  }
}
