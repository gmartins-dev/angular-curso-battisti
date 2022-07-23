import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/Animal';
import { ListService } from 'src/app/services/list.service';
@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css'],
})
export class ListRenderComponent implements OnInit {
  animals: Animal[] = [
    { name: 'Ig', type: 'dog', age: 5 },
    { name: 'Schumacher', type: 'dog', age: 3 },
    { name: 'Olivia', type: 'cat', age: 6 },
    { name: 'Coragem', type: 'dog', age: 6 },
    { name: 'Boneco', type: 'horse', age: 10 },
    { name: 'Tornado', type: 'horse', age: 12 },
  ];

  animalDetails = '';

  constructor(private listService: ListService) {}

  ngOnInit(): void {}

  showAge(animal: Animal) {
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos.`;
  }

  removeAnimal(animal: Animal) {
    this.animals = this.listService.remove(this.animals, animal);
  }
}
