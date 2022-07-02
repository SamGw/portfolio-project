import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Skill } from 'src/app/models/skill';
import { ITag } from 'src/app/models/tag';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {

  // TODO: make the tags length depend on its content length

  // Sommes-nous dans notre portfolio ? Par défaut: non
  @Input("isEditable") isEditable: boolean = false;
  isEditing: boolean = false;

  model: Skill;

  constructor(private _snackBar: MatSnackBar) {
    const tags = [{ name: "Cloud"}, { name: "Javascript"}]
    this.model = { id: 0, skillTitle: "Mobile and Web Design", skillDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit," +
    "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", tags: tags}
  }

  ngOnInit(): void {
  }

  edit(){
    this.isEditing = true;
  }

  // TODO with backend
  validate()
  {
    this.isEditing = false;

    // If some fields are still inputs put notification
    if (this.isAnyFieldInput()) {
      this.openSnackBar();
    }

    // Remet les elements en div et non en input
    this.inputsToFalse()
  }

  // TODO with backend
  close()
  {
    this.isEditing = false;

    // Remet les elements en div et non en input
    this.inputsToFalse()
  }

  addTag()
  {
    this.model.tags.push({name:""})
  }

  temporaryUpdateTitle(event: any)
  {
    this.model.skillTitle = event.target.value;
    this.model.isTitleInput = false;
  }

  temporaryUpdateTag(index: number, event: any)
  {
    this.model.tags[index].name = event.target.value;
    this.model.tags[index].isInput = false;
  }

  temporaryUpdateDescription(event: any)
  {
    this.model.skillDescription = event.target.value;
    this.model.isDescriptionInput = false;
  }

  destroyTag(index: number)
  {
    this.model.tags.splice(index, 1)
  }

  inputsToFalse()
  {
    this.model.isTitleInput = false;
    this.model.isDescriptionInput = false;
    this.model.tags.forEach(tag => tag.isInput = false)
  }

  isAnyFieldInput()
  {
    // Title
    if (this.model.isTitleInput)
      return true;
    
    // Description
    if (this.model.isDescriptionInput)
      return true;
    
    // Tags
    if (this.model.tags.some(tag => tag.isInput))
      return true;
    
    return false;
  }

  openSnackBar() {
    // this._snackBar.openFromComponent(MessageComponent, {
    //   horizontalPosition: 'center',
    //   verticalPosition: 'bottom',
    // });
    this._snackBar.open('Some modifications may have not been saved, if you want a field to be saved when validating the changes, please press \'Enter\' when changing the field and your modifications are done.', 'Got it!', {
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      panelClass: ['light-blue-bg-2', 'poppins', 'dark-blue', 'snackbar-bigger-font']
    });
  }
}
