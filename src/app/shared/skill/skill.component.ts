import { Component, OnInit } from '@angular/core';
import { ISkill } from 'src/app/models/skill';
import { ITag } from 'src/app/models/tag';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {

  // Sommes-nous dans notre portfolio ? Par défaut: non
  isEditable: boolean = false;
  editing: boolean = false;

  nbOfTags: number = 2;

  model: ISkill;

  constructor() {
    const tags = [{ name: "Cloud"}, { name: "Javascript"}]
    this.model = { id: 0, skillTitle: "Mobile and Web Design", skillDescription: "", tags: tags}
  }

  ngOnInit(): void {
  }

}
