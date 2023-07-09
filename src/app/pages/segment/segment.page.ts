import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {

  opcaoSelecionada: string = 'Frutas';
  constructor() { }

  ngOnInit() {
  }

  selecionar(event) {
    console.log(event);

    this.opcaoSelecionada = event.detail.value;
  }

}
