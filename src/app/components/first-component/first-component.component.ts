import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent {
 name: string = 'Rafael';
 age: number = 29;
 job: string = 'Desenvolvedor';
 hobbies= ['jogos','musicas', 'filmes'];
 car = {
  name:'celta',
  year: 2001,
 };
}
