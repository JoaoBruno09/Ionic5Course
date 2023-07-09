import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-navegacao',
  templateUrl: './navegacao.page.html',
  styleUrls: ['./navegacao.page.scss'],
})
export class NavegacaoPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  //Função para ir para a navegação2
  showPageNavegacao2() {
    //Variável nav criada no construtor
    this.navCtrl.navigateForward('navegacao2');
  }

}
