import { Component, OnInit } from '@angular/core';
import { Portfolio } from 'src/app/models/portfolio';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  // Sommes-nous dans notre portfolio ? Par défaut: non
  isEditable: boolean = true;

  // L'intro est-elle en train d'etre modifiee ?
  isIntroEditing: boolean = false;
  isContactEditing: boolean = false;

  model: Portfolio;

  // XXX: What to do when creating portfolio (first time accessing the portfolio)
  constructor(private _snackBar: MatSnackBar) {
    // TODO call to backend to get data
    this.model = new Portfolio(0, "Software Engineer", "Hello I am John Doe",
    "I am specialized in consulting and problem solving, I am ambitious and want to work my way up in the company", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
    "Ipsum eget libero elementum amet ultricies ut hac ultrices ullamcorper. " +
    "Enim nullam eu libero accumsan, nisl amet. Diam tristique nulla libero, " +
    "massa malesuada neque. Urna, cras fringilla placerat vulputate et.", "28 rue Evergreen terrasse, Springfield",
    "+33 6 50 50 50 50", "john.doe@epita.fr");
  }
  
  ngOnInit(): void {
  }

  //#region Intro

  validateIntro()
  {
    this.isIntroEditing = false;

    // If some fields are still inputs put notification
    if (this.isAnyFieldInput('intro')) {
      this.openSnackBar();
    }
    
    // Remet les elements en div et non en input
    this.inputsToFalse('intro')
  }

  closeIntro()
  {
    this.isIntroEditing = false;

    // Remet les elements en div et non en input
    this.inputsToFalse('intro')
  }

  temporaryUpdateIntroTitle(event: any)
  {
    this.model.intro.jobTitle = event.target.value;
    this.model.intro.isTitleInput = false;
  }

  temporaryUpdateIntroName(event: any)
  {
    this.model.intro.name = event.target.value;
    this.model.intro.isNameInput = false;
  }

  temporaryUpdateIntroDescription(event: any)
  {
    this.model.intro.description = event.target.value;
    this.model.intro.isDescriptionInput = false;
  }

  //#endregion

  //#region Contact
  validateContact()
  {
    this.isContactEditing = false;

    // If some fields are still inputs put notification
    if (this.isAnyFieldInput('contact')) {
      this.openSnackBar();
    }
    
    // Remet les elements en div et non en input
    this.inputsToFalse('contact')
  }

  closeContact()
  {
    this.isContactEditing = false;

    // Remet les elements en div et non en input
    this.inputsToFalse('contact')
  }

  temporaryUpdateContactDescription(event: any)
  {
    this.model.contact.description = event.target.value;
    this.model.contact.isDescriptionInput = false;
  }
  //#endregion

  //#region Inputs checking

  // who: 'intro' || ...
  inputsToFalse(who: string)
  {
    if (who == 'intro')
    {
      this.model.intro.isTitleInput = false;
      this.model.intro.isNameInput = false
      this.model.intro.isDescriptionInput = false;
    }
    else if (who == 'contact')
    {
      this.model.contact.isDescriptionInput = false;
      this.model.contact.isAdressInput = false;
      this.model.contact.isPhoneInput = false;
      this.model.contact.isMailInput = false;
    }
  }

  // who: 'intro' || ...
  isAnyFieldInput(who: string)
  {
    if (who == 'intro')
    {
      // jobTitle
      if (this.model.intro.isTitleInput)
        return true;
        
      // jobName
      if (this.model.intro.isNameInput)
        return true;

      // jobDescription
      if (this.model.intro.isDescriptionInput)
        return true;
    }

    if (who == 'contact')
    {
      const contact = this.model.contact;
      // Contact Description, Adress, Phone, Mail
      return contact.isDescriptionInput || contact.isAdressInput || contact.isPhoneInput || contact.isMailInput;
    }
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

  //#endregion


}
