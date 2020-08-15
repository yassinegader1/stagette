import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators , FormControl } from '@angular/forms';
import {Poste} from '../shared/poste'
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms'
import {Router} from "@angular/router"





@Component({
  selector: 'app-formulaire-deux',
  templateUrl: './formulaire-deux.component.html',
  styleUrls: ['./formulaire-deux.component.css']
})
export class FormulaireDeuxComponent implements OnInit {

  form = new FormGroup({
  nomPoste: new FormControl('', Validators.required),

    competenceTechPoste: new FormControl('', Validators.required),
    competenceFonPoste: new FormControl('', Validators.required),
    descriptionPoste: new FormControl('', Validators.required),
    localisationPoste: new FormControl('', Validators.required),
    dateDebPoste: new FormControl('', Validators.required),
  tjmMax: new FormControl('', Validators.required)
})



  constructor(private router: Router) {
}


getcompetenceTechPoste(){
  return this.form.get('competenceTechPoste')
}


redirect() {

this.router.navigate(['/login']);

}


onSubmit(){
  alert(JSON.stringify(this.form.value));
}

  ngOnInit(): void {
  }

}
