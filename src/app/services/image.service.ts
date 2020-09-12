import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { map } from 'rxjs/operators';
// import 'rxjs/add/operator/map'

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(
    private http: Http
  ) { }
  getImage(){
   return this.http.get('https://api.unsplash.com/collections/1580860/photos/?client_id=rrJCJ0Bl2kFu-sk9ErBQnnGl63L3DKcs4GEi5CEXpkg').pipe(map(res => res.json()));
  }

}
