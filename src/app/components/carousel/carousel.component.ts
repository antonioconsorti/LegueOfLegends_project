import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {

  testi = [
    {
      id: 1,
      titolo: "COS'È LEAGUE OF LEGENDS?",
      descrizione: 'League of Legends è un gioco di strategia in cui due squadre di cinque potenti campioni si affrontano per distruggere la base degli avversari. Scegli tra oltre 150 campioni ed effettua giocate epiche, elimina i nemici e abbatti le torri mentre lotti per la vittoria.',
    },
    {
      id: 2,
      titolo: 'Nuovo campione: Naafiri',
      descrizione: "Un coro di ululati risuona tra le sabbie di Shurima. È il richiamo dei segugi delle dune, voraci predatori che vivono in branchi e lottano per il diritto di cacciare in queste lande desertiche. Tra questi, esiste un branco superiore a tutti gli altri, guidato oltre che dall'istinto anche dall'antico potere dei Darkin.",
      image: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltd458405617f35b4d/6491f1f3f71d779fbd00428f/naafiri-abiility-rundown-splash-banner.jpg'
    },
  ];}
