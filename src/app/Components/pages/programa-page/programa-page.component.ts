import { Component, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-programa-page',
  templateUrl: './programa-page.component.html',
  styleUrls: ['./programa-page.component.css']
})
export class ProgramaPageComponent implements OnInit {
  model?:NgbDateStruct;
  constructor() { }

  ngOnInit(): void {
  }

}
