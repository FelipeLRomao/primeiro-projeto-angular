import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent  implements OnInit {
 name: string = "Felipe Romão";
 age : number = 29;
 job: string = "Developer";
 pet: string = 'cachorro';
 nomePets =['Buzz', 'Kiara', 'Jhully'];
 hobbies = ["Estudar", "Programar", "Desenhar"];
 car ={
  name: "Agile",
  year: 2011,
 };


 constructor() {}

 ngOnInit(): void {

 }
}
