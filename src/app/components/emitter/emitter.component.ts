import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emitter',
  templateUrl: './emitter.component.html',
  styleUrls: ['./emitter.component.css'],
})
export class EmitterComponent implements OnInit {
  myNumber: number = 0;

  constructor() {}

  ngOnInit(): void {}

  onChangeNumber(): void {
    console.log('Evento emitido e recebido com sucesso!');
    this.myNumber = Math.floor(Math.random() * 10);
  }
}
