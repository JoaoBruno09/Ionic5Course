import { Component, OnInit } from '@angular/core';
import { CepService } from 'src/app/services/cep.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-api',
  templateUrl: './api.page.html',
  styleUrls: ['./api.page.scss'],
})
export class ApiPage implements OnInit {

  cep: string = "26115470"
  constructor(private CepService: CepService, private usuarioService: UsuarioService) { }
  endereco: any = { cep: '', logradouro: '' };
  result: any;
  ngOnInit() {
  }

  consultarCep() {
    this.CepService.obterEndereco(this.cep)
      .then((json) => {
        console.log(json);
        this.endereco = json;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  get() {
    //Chama a tela de aguarde
    this.usuarioService.obterUsuaruioPorId(4)
      .then((response) => {
        this.result = JSON.stringify(response);
        //fecha a tela de aguarde
      })
      .catch((response) => {
        this.result = JSON.stringify(response);
        //fecha a tela de aguarde
      });
  }

  post() {

    let usuario = { id: 50, nome: 'Zeca' }
    //Chama a tela de aguarde
    this.usuarioService.adicionar(usuario)
      .then((response: any) => {
        this.result = JSON.stringify(response);
        //fecha a tela de aguarde
      })
      .catch((response) => {
        this.result = JSON.stringify(response);
        //fecha a tela de aguarde
      });
  }

  put() {
    let usuario = { id: 4, nome: 'Tereza' }
    //Chama a tela de aguarde
    this.usuarioService.atualizar(usuario)
      .then((response: any) => {
        this.result = JSON.stringify(response);
        //fecha a tela de aguarde
      })
      .catch((response) => {
        this.result = JSON.stringify(response);
        //fecha a tela de aguarde
      });
  }

  delete() {

    //Chama a tela de aguarde
    this.usuarioService.excluirPorId(4)
      .then((response: any) => {
        this.result = JSON.stringify(response);
        //fecha a tela de aguarde
      })
      .catch((response) => {
        this.result = JSON.stringify(response);
        //fecha a tela de aguarde
      });
  }

}
