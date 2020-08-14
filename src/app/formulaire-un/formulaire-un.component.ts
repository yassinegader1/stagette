import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Entreprise} from '../shared/entreprise'
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms'
@Component({
  selector: 'app-formulaire-un',
  templateUrl: './formulaire-un.component.html',
  styleUrls: ['./formulaire-un.component.css']

})
export class FormulaireUnComponent implements OnInit {

  entrepriseForm : FormGroup;
  entreprise:  Entreprise;


  constructor( private fb: FormBuilder ) {
    this.createForm();
}

  ngOnInit(): void {
  }


  createForm() {
      this.entrepriseForm = this.fb.group({
      nomentreprise: '',
        adresseEntreprise: '',
        siretEntreprise: 0,
        nbEntreprise: ''




      });
    }
    onSubmit() {
  this.entreprise = this.entrepriseForm.value;
  console.log(this.entreprise);
  this.entrepriseForm.reset();
}
}
