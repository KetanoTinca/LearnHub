import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  pdfSrc: any;
  constructor(private coursesSvc :CoursesService) { }

  ngOnInit() {
    this.getPdf();
  }

  async getPdf(){
     this.pdfSrc ="./../assets/1.pdf";
    
  }
 
}
