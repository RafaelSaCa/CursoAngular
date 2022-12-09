import { Animal } from './../../Animal';
import { Component } from '@angular/core';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent {
animals : Animal[]= [
  {name: 'TOM', type: 'DOG', age: 4},
  {name:  'RAMBO', type: 'DOG', age: 2},
  {name: 'THOR', type:'DOG', age: 3}

]

animalDetails = '';

constructor(private listService: ListService){}

showAge(animal: Animal): void {
  this.animalDetails = `o pet ${animal.name} tem ${animal.age} ano(s)!`;
}

removeAnimal(animal: Animal){
  console.log('Removendo animal...');
  this.animals = this.listService.remove(this.animals,animal);
}
}
