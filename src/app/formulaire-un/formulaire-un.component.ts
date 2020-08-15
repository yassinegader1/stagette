import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {Entreprise} from '../shared/entreprise';
import {Router} from "@angular/router"
@Component({
   selector: 'app-formulaire-un',
    templateUrl: './formulaire-un.component.html',
    styleUrls: ['./formulaire-un.component.css']

})
export class FormulaireUnComponent implements OnInit {
    form = new FormGroup({
    nomEntrprise: new FormControl('', Validators.required),
    adresseEntreprise: new FormControl('', Validators.required),
    siretEntreprise: new FormControl('', [Validators.required, Validators.minLength(14) , Validators.maxLength(14)]),
    nbEntreprise: new FormControl('', [Validators.required])

   });
    constructor(private router: Router) { }

    get nomEntrprise(){
      return this.form.get('nomEntrprise')
    }
    ngOnInit() {
    }

    redirect() {

  this.router.navigate(['/prop']);

}

    onSubmit(){
      alert(JSON.stringify(this.form.value));
    }

}
