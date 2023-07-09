import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-navegacao2',
  templateUrl: './navegacao2.page.html',
  styleUrls: ['./navegacao2.page.scss'],
})
export class Navegacao2Page implements OnInit {

  constructor(private nav: NavController) { }

  ngOnInit() {
  }

  //Função para ir para a navegação1
  showPageNavegacao1() {
    //Variável nav criada no construtor
    this.nav.navigateForward('navegacao');
  }
}
