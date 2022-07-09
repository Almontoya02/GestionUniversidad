import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})

export class SearchPageComponent implements OnInit {
  foods = [
    {value: 'Estudiante', viewValue: 'Estudiante'},
    {value: 'Programa', viewValue: 'Programa'},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
