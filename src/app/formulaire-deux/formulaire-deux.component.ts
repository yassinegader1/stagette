import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Poste} from '../shared/poste'
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms'




@Component({
  selector: 'app-formulaire-deux',
  templateUrl: './formulaire-deux.component.html',
  styleUrls: ['./formulaire-deux.component.css']
})
export class FormulaireDeuxComponent implements OnInit {

  posteForm : FormGroup;
  poste:  Poste;


  constructor(private fb: FormBuilder) {
    this.createForm();
}

createForm() {
    this.posteForm = this.fb.group({

      competenceTechPoste: '',
      competenceFonPoste: '',
      descriptionPoste: '',
      localisationPoste : '',
      dateDebPoste: '' ,
      tjmMax : ''



    });
}
  ngOnInit(): void {
  }
  onSubmit() {
this.poste = this.posteForm.value;
console.log(this.poste);
this.posteForm.reset();
}
}
