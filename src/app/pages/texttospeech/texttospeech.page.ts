import { Component, OnInit } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';

@Component({
  selector: 'app-texttospeech',
  templateUrl: './texttospeech.page.html',
  styleUrls: ['./texttospeech.page.scss'],
})
export class TexttospeechPage implements OnInit {

  textoASerFalado: string = "Olá Mundo";
  constructor(private tts: TextToSpeech) { }

  ngOnInit() {
  }

  falar() {
    this.tts.speak({
      //texto a falar
      text: this.textoASerFalado,
      //lingua que o texto vai ser falado
      locale: 'pt_BR',
      //velocidade do texto a ser falado
      rate: 0.75
    })
      .then(() => console.log('Falou com sucesso!'))
      .catch((reason: any) => console.log(reason));
  }

}
