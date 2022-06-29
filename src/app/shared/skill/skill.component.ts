import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/models/skill';
import { ITag } from 'src/app/models/tag';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {

  // Sommes-nous dans notre portfolio ? Par défaut: non
  isEditable: boolean = true;
  isEditing: boolean = false;

  nbOfTags: number = 2;

  model: Skill;

  constructor() {
    const tags = [{ name: "Cloud"}, { name: "Javascript"}]
    this.model = { id: 0, skillTitle: "Mobile and Web Design", skillDescription: "WOWOWWOOO", tags: tags}
  }

  ngOnInit(): void {
  }

  edit(){
    this.isEditing = true;
  }

  // TODO
  validate()
  {
    this.isEditing = false;
  }

  // TODO
  close()
  {
    this.isEditing = false;
  }

  addTag()
  {
    this.model.tags.push({name:""})
  }

  temporaryUpdateTag(index: number, event: any)
  {
    this.model.tags[index].name = event.target.value;
    this.model.tags[index].isInput = false;
  }
  destroyTag(index: number)
  {
    this.model.tags.splice(index, 1)
  }

}
