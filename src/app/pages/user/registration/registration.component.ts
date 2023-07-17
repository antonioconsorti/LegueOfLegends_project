import { PrimeNGConfig } from 'primeng/api';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  user: User[];

  constructor(private config: PrimeNGConfig, private ngbModal: NgbModal, private userService: UserService, private router: Router){}

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
    const user = {name: this.form.value.name, email: this.form.value.email}
    this.userService.datiUtente.next(user);
    const dati = {
      name: this.form.value.name,
      email: this.form.value.email,
      cellulare: this.form.value.cellulare,
      password: this.form.value.password
    };
    this.userService.insertUser(dati).subscribe();
    this.router.navigateByUrl('home');
  }
  controlloPassword(): boolean{
    if(this.form.value.password === this.form.value.ripeti){
      return true;
    } else {
      return false;
    }

  }
  createUser() {
    const userData = {
      name: this.form.value.name,
      email: this.form.value.email,
      cellulare: this.form.value.cellulare,
      password: this.form.value.password
    };
    this.userService.insertUser(userData).subscribe({
      next: (res) => {
        this.user = res;
      },
      error: (e) => {
        console.log(e)
      }
    }
    );
  }

  open(content: any) {
    this.ngbModal.open(content, {ariaLabelledBy: 'modale privacy', size: 'lg', centered: true});
	}
}
