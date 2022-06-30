import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  @Input("isEditable") isEditable: boolean = false;

  isEditing: boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }

}
