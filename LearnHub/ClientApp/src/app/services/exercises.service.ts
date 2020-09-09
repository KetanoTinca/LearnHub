import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AmdahlModel } from '../models/amdahl';

@Injectable({
  providedIn: 'root'
})
export class ExercisesService {

  constructor(private htppClient: HttpClient) { }

  resolveAmdahl(reqBody:AmdahlModel){
    const options = {headers: {'Content-Type': 'application/json'}};
    return this.htppClient.post("https://localhost:44389/api/exercise/amdhal",JSON.stringify(reqBody),options);
  }

}
