import { PrimeNGConfig } from 'primeng/api';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  constructor(private config: PrimeNGConfig){}

  ngOnInit(): void {
    this.config.setTranslation({
      weak: 'povera',
      medium: 'media',
      strong: 'forte',
    })
  }

  form = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    cellulare: new FormControl('', Validators.pattern(/^[1-9]\d{9,10}$/)),
    password: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/)]),
    ripeti: new FormControl('', Validators.required),
    box: new FormControl(false, Validators.requiredTrue)
  })

  onSubmit(){
    this.form;
  }
  controlloPassword(): boolean{
    if(this.form.value.password === this.form.value.ripeti){
      return true;
    } else {
      return false;
    }

  }
}
