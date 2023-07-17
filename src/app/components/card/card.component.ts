import { Component, Input, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MessageService } from 'primeng/api';
import { Champion } from 'src/app/models/champion.model';
import { AuthService } from 'src/app/services/auth.service';
import { ChampionService } from 'src/app/services/champion.service';
import { UserService } from 'src/app/services/user.service';
import * as DecoupledEditor from "@ckeditor/ckeditor5-build-decoupled-document";
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() champions: Champion[];
  @ViewChild('activeModal') activeModal: any;
  @ViewChild('activeModal2') activeModal2: any;

  ruolo: any;
  recupera_ruolo = this.userService.ruoloUtente.subscribe(res => this.ruolo = res);
  isIconToggled = false;
  page = 1;
  champPerPagina = 6;
  champData = {
    _id: null,
    name: '',
    description: '',
    image: '',
  };
  champ: any;
  id_: any;
  image_: String;
  name_: String;
  form = new FormGroup({
    _id: new FormControl(),
    name: new FormControl(''),
    description: new FormControl(''),
    image: new FormControl(''),
  })

  editor: any = DecoupledEditor;

  onReady(editor) {
    editor.ui.view.editable.element.parentElement.insertBefore(
      editor.ui.view.toolbar.element,
      editor.ui.view.editable.element
    );
  }

  constructor(
    private championService: ChampionService,
    private userService: UserService,
    public auth: AuthService,
    private modalService: NgbModal,
    private messageService: MessageService,
    ){}

  paginate(e) {
    e.page = e.page +1;
    this.page = e.page;
    }

    openModal(champion: Champion): void {
      this.champ = champion;
      this.id_ = champion._id;
      this.form.patchValue({
        _id: champion._id,
        name: champion.name,
        description: champion.description,
        image: champion.image,
      });

      this.modalService.open(this.activeModal, { ariaLabelledBy: 'modal-title' });
    }
    openModal2(champion: Champion): void {
      this.champ = champion;
      this.image_ = champion.image;
      this.name_ = champion.name;

      this.modalService.open(this.activeModal2, { ariaLabelledBy: 'modal-body' });
    }

    toggleIcon() {
      this.isIconToggled = !this.isIconToggled;
    }

    deleteChampion(): void {
      this.championService.deleteChampion(this.champ)
        .subscribe(
          () => {
            console.log('Champion eliminato con successo');
            this.messageService.add({severity:'success', summary:'Successo', detail:'champion cancellato con successo', life: 3000});
          },
          error => {
            console.log('Errore', error);
            this.messageService.add({severity:'error', summary:'Errore', detail:'champion non cancellato'});
          }
        );
    }

    onSubmit(){
      this.updateChampion(this.form.getRawValue(),this.champ)
    }
    updateChampion(champion: Champion, championCompleto: Champion): void {
      championCompleto.name = champion.name;
      championCompleto.image = champion.image;
      championCompleto.description = champion.description;

      this.championService.updateChampion(championCompleto._id, championCompleto).subscribe({
        next: (res) => {
          console.log(res);
          this.messageService.add({severity:'success', summary:'Successo', detail:'champion modificato con successo', life: 3000});
        },
        error: (err) => {
           console.log(err);
           this.messageService.add({severity:'error', summary:'Errore', detail:'champion non modificato'});
        }
      })
    }

}
