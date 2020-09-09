import { Component, OnInit } from '@angular/core';
import { AmdahlModel } from '../models/amdahl';
import { FormGroup, FormControl } from '@angular/forms';
import { ExercisesService } from '../services/exercises.service';

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.css']
})
export class ExercisesComponent implements OnInit {

  amdahlRequestBody= new AmdahlModel();
  result = "";
  amdahlForm:FormGroup;
  constructor(private exercisesSvc:ExercisesService) { }

  ngOnInit() {
    this.amdahlForm=new FormGroup({
      'speedUp': new FormControl(),
      'ussageTime': new FormControl()
    });
  }

  onSubmit(){
    this.amdahlRequestBody.UsageTime = +this.amdahlForm.value.ussageTime;
    this.amdahlRequestBody.SpeedUp = +this.amdahlForm.value.speedUp;
    this.exercisesSvc.resolveAmdahl(this.amdahlRequestBody).subscribe(result=>this.result = JSON.stringify(result));
  }

}
