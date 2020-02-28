import { Injectable } from "@angular/core";
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/from';

import { of } from "rxjs/observable/of";
import { Observable } from "rxjs/Observable";


@Injectable()
export class HikeService {


  private data: any;
  private observable: Observable<any>;
  private url: string = 'app/api/hikes.json';

  constructor(private _http: Http) { }


  GetHikesFromApi() {
    return this._http.get('app/api/hikes.json')
      .do(x => console.log(x))
      .map(hikes => hikes.json())
      .catch(error => {
        let errorMsg = `une erreur ${error.status} est survenue en tentant de joindre ${error.url}`;
        return errorMsg;
      })
  }

  GetHikesFromApiWithCache = () => {
    //propriéte qui servira de cache

    //les données sont elles déja en cache

    // oui en cache , une requette est elle en chemin

    //non pas en cache , une requette est en chemin

    // si pas de données en cache et pas de requette en cours , requette au service web
    if(this.data) {
      let d = of(this.data);
      return d;
  } else if(this.observable) {
      return this.observable;
  } else {
      this.observable = this._http
              .get(this.url)
              .map(response => {
                  this.observable = null;
                  this.data = response.json();
                  return this.data;
              })
              .catch(error =>{
                  let errorMessage = `Une erreur ${error.status} est survenue en tentant de joindre ${error.url}`;
                  return Observable.throw(errorMessage);
              });
              return this.observable;
  }
  }
}
