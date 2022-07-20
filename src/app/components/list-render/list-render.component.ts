import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css'],
})
export class ListRenderComponent implements OnInit {
  animals = [
    { name: 'Ig', type: 'dog' },
    { name: 'Schumacher', type: 'dog' },
    { name: 'Olivia', type: 'cat' },
    { name: 'Coragem', type: 'dog' },
    { name: 'Boneco', type: 'horse' },
    { name: 'Tornado', type: 'horse' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
