import { Component } from '@angular/core';

@Component({
  selector: 'app-list-group',
  templateUrl: './list-group.component.html',
  styleUrls: ['./list-group.component.css']
})
export class ListGroupComponent {

 public items: any[] = [
  {
    "alumno": "Juan Martinez",
    "nota": 8.5
  },
  {
    "alumno": "Laura Fernandez",
    "nota": 6.7
  },
  {
    "alumno": "Carlos Rodriguez",
    "nota": 9.2
  },
  {
    "alumno": "Pedro Garcia",
    "nota": 7.3
  },
  {
    "alumno": "Valentina Lopez",
    "nota": 8.8
  },
  {
    "alumno": "Sofia Perez",
    "nota": 6.5
  },
  {
    "alumno": "Diego Gonzalez",
    "nota": 7.9
  },
  {
    "alumno": "Maria Sanchez",
    "nota": 9.7
  },
  {
    "alumno": "Luisa Martinez",
    "nota": 6.8
  },
  {
    "alumno": "Andres Garcia",
    "nota": 8.3
  }
]

}
