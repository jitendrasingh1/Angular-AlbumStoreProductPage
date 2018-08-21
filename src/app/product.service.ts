import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Album } from './album';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Product } from './product';

@Injectable()
export class ProductService {

  private _albumUrl= "../assets/album.json"
  private _productsUrl = "../assets/products.json"
  constructor(private _http: Http) { }

  getAlbum (id: number) : Observable<Album> {
    return this._http.get(this._albumUrl).map( (response) => {
      return <Album> response.json() as Album;
    });
  }

  getProducts () : Observable<Product[]> {
    return this._http.get(this._productsUrl).map( (response) => {
      return <Product[]> response.json() as Product[];
    });
  }
}