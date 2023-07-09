import { Component, OnInit } from '@angular/core';
import { Zoom } from '@ionic-native/zoom/ngx';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-zoom',
  templateUrl: './zoom.page.html',
  styleUrls: ['./zoom.page.scss'],
})
export class ZoomPage implements OnInit {
  API_KEY = 'ZOOM_API_KEY';
  API_SECRET = 'ZOOM_API_SECRET';
  zoom: any = {
    usuario: 'ZoomUser',
    senha: 'ZoomPassword',
    usuarioSala: 'ZoomRoomUser',
    senhaSala: 'ZoomRoomPassword',
    nickUsuarioSala: 'ZoomRoomNickname',
  };
  constructor(private zoomService: Zoom, private toastCtrl: ToastController) {}

  ngOnInit() {}

  inicializarZoom() {
    // Initialize Zoom SDK, need to be called when app fired up.
    this.zoomService
      .initialize(this.API_KEY, this.API_SECRET)
      .then((success: any) => {
        this.showToast('Inicializou o zoom com sucesso');
      })
      .catch((error: any) => {
        this.showToast('erro ao inicializar');
        console.log(error);
      });
  }

  logarNoZoom() {
    // Log user in with Zoom username and password.
    this.zoomService
      .login(this.zoom.usuario, this.zoom.senha)
      .then((success: any) => {
        this.showToast('Logado com sucesso');
      })
      .catch((error: any) => {
        this.showToast('Login com erro');
        console.log(error);
      });
  }

  entrarNaSalaDoZoom() {
    const options = {
      no_driving_mode: true,
      no_invite: true,
      no_meeting_end_message: true,
      no_titlebar: false,
      no_bottom_toolbar: false,
      no_dial_in_via_phone: true,
      no_dial_out_to_phone: true,
      no_disconnect_audio: true,
      no_share: true,
      no_audio: true,
      no_video: true,
      no_meeting_error_message: true,
    };

    // Join meeting.
    this.zoomService
      .joinMeeting(
        this.zoom.usuarioSala,
        this.zoom.senhaSala,
        this.zoom.nickUsuarioSala,
        options
      )
      .then((success: any) => {
        this.showToast('entrei na sala');
        console.log('entrei');
      })
      .catch((e) => {
        this.showToast('deu erro ao entrar na sala');
        console.log(e);
      });
  }

  sairDaSalaDoZoom() {
    // Log user out.
    this.zoomService
      .logout()
      .then((success: boolean) => {
        this.showToast('Saiu com sucesso');
      })
      .catch((error: any) => {
        console.log(error);
      });
  }

  async showToast(msg: string = 'olá') {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 2000,
    });

    toast.present();
  }
}
