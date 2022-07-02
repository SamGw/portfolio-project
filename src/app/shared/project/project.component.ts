import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Project } from 'src/app/models/project';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  @Input("isEditable") isEditable: boolean = false;

  @ViewChild("descr") descrElement!: ElementRef;

  isEditing: boolean = false;
  
  initHeight: number = 15;
  seeMore:boolean = false;

  model: Project;

  constructor(private _snackBar: MatSnackBar) {
    this.model = new Project(0, "Mobile Development", "Android App about sharing ICE tech sheets", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " + 
    "Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. " +
    "Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. " +
    "Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. " +
    "Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. " +
    "Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. " +
    "Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. " +
    "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. " +
    "Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit.")
  }

  ngOnInit(): void {
  }

   // TODO with backend
  validate()
  {
    console.log("aazeazef");
    console.log(!this.model.isDescriptionInput && this.seeMore);
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
  temporaryUpdateTitle(event: any)
  {
    this.model.projectTitle = event.target.value;
    this.model.isTitleInput = false;
  }

  temporaryUpdateDomain(event: any)
  {
    this.model.projectDomain = event.target.value;
    this.model.isDomainInput = false;
  }

  temporaryUpdateDescription(event: any)
  {
    this.model.projectDescription = event.target.value;
    this.model.isDescriptionInput = false;
  }

  inputsToFalse()
  {
    this.model.isDomainInput = false;
    this.model.isTitleInput = false;
    this.model.isDescriptionInput = false;
  }

  isAnyFieldInput()
  {
    // Domain, Title and Description
    return this.model.isDomainInput || this.model.isTitleInput || this.model.isDescriptionInput
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

  averageNbOfLinesInProjectDescription()
  {

    // A window with window.innerWidth == around 1400
    // has on average 60 characters per lines
    // We need to adapt this to other resolutions
    const workingWidth = 14;
    const width = window.innerWidth / 100;
    const ratio = (width - 5)/ workingWidth;
    console.log(ratio)
    console.log(this.descrElement)
    if (this.descrElement)
    {
      console.log(this.descrElement.nativeElement.offsetHeight)
      console.log(this.descrElement.nativeElement.style.opacity)
      const emToPxRatio = 16;  
      const descrHeight = this.descrElement.nativeElement.offsetHeight;
      const addedHeight = descrHeight / emToPxRatio;
      console.log("Added height: " + addedHeight);
      return descrHeight / emToPxRatio;
    }
    // return (this.model.projectDescription.length / 60) / ratio;
    return 0;
  }




}
