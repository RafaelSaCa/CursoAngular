import { Component } from '@angular/core';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent {
animals = [
  {name: 'TOM', type: 'DOG'},
  {name:  'RAMBO', type: 'DOG'},
  {name: 'THOR', type:'DOG'}

]

}
