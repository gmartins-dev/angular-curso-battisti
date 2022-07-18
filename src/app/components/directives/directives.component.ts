import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css'],
})
export class DirectivesComponent implements OnInit {
  bgcolor = 'brown';
  classes = ['yellow-title', 'small-title'];
  constructor() {}

  ngOnInit(): void {}
}
