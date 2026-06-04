import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokeDetails, Pokemon, PokeResponse } from '../models/pokemon';

@Injectable({
  providedIn: 'root',
})
export class PokeService {
  private url = "https://pokeapi.co/api/v2"
  private http = inject(HttpClient)

  getPokes():Observable<PokeResponse>{
    return this.http.get<PokeResponse>(`${this.url}/pokemon`);
  }

  getPokeById(id:number){
    return this.http.get<PokeDetails>(`${this.url}/pokemon/${id}`)
  }
}
