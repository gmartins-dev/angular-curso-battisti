import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css'],
})
export class FirstComponentComponent implements OnInit {
  name: string = 'Guilherme Martins';
  age: number = 29;
  job: string = 'Software Engineer - Frontend';

  constructor() {}

  ngOnInit(): void {}
}
