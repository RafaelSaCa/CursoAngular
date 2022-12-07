import { Animal } from './../../Animal';
import { Component } from '@angular/core';


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

animalDetails = ''

showAge(animal: Animal): void {
  this.animalDetails = `o pet ${animal.name} tem ${animal.age} ano(s)!`;
}
}
