import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as DecoupledEditor from "@ckeditor/ckeditor5-build-decoupled-document";
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Champion } from 'src/app/models/champion.model';
import { ChampionService } from 'src/app/services/champion.service';

@Component({
  selector: 'app-new-champion',
  templateUrl: './new-champion.component.html',
  styleUrls: ['./new-champion.component.scss']
})
export class NewChampionComponent {

  id = 19;
  descrizione: SafeHtml;
  Editor: any = DecoupledEditor;

  onReady(editor) {
    editor.ui.view.editable.element.parentElement.insertBefore(
      editor.ui.view.toolbar.element,
      editor.ui.view.editable.element
    );
  }

  champion: Champion[];

  constructor(private ngbModal: NgbModal, private championService: ChampionService, private sanitizer: DomSanitizer,){}

  ngOnInit(): void {
  }

  form = new FormGroup({
    name: new FormControl('', Validators.required),
    image: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
  })
  createChampion() {

    let desc = this.sanitizer.bypassSecurityTrustHtml(this.form.value.description);
    const championData = {
      _id: this.id,
      name: this.form.value.name,
      image: this.form.value.image,
      description: this.form.value.description,
    };
    this.id = this.id + 1;

    this.championService.createChampion(championData).subscribe({
      next: (res) => {
        this.champion = res;
        console.log(this.champion);
        console.log(res.name);
      },
      error: (e) => {
        console.log(e)
      }
    }
    );
  }
  onSubmit(){
    this.form;
  }
  open(content: any) {
    this.ngbModal.open(content, {ariaLabelledBy: 'modale privacy', size: 'lg', centered: true});
	}
  clearForm() {
    this.form.reset();
  }
}
