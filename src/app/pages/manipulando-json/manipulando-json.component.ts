import { Component } from '@angular/core';
import studentData from '../../students.json';

interface Student{
  id: number;
  name: String;
  email: String;
  gender: String;
}

@Component({
  selector: 'app-manipulando-json',
  templateUrl: './manipulando-json.component.html',
  styleUrls: ['./manipulando-json.component.css']
})
export class ManipulandoJsonComponent {

  students: Student[] = studentData;
  constructor(){}
  
}  
