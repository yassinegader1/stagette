import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-formulaire-un',
  templateUrl: './formulaire-un.component.html',
  styleUrls: ['./formulaire-un.component.css']

})
export class FormulaireUnComponent implements OnInit {
  isLoading: boolean = false;
  formLogin: FormGroup = this.formBuilder.group({
    username: new FormControl('', [Validators.required,Validators.minLength(5)]),
    password: new FormControl('', [Validators.required]),
    remember: new FormControl(false)
  })

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
  }

  onLogin() {
    const username = this.formLogin.value.username;
    const password = this.formLogin.value.password;
    this.isLoading = false
    this.formLogin.reset()
  }

}
