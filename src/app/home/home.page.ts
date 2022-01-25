import { Component } from '@angular/core';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private faio: FingerprintAIO) {}
  public showFingeerprintAuthentication() {

    this.faio.isAvailable().then((result: any) => {

      this.faio.show({})
        .then((result1: any) => {
          console.log(result1);
          alert('Successfully Authenticated!');
        })
        .catch((error: any) => {
          console.log(error);
          alert('Match not found!');
        });

    })
      .catch((error: any) => {
        console.log(error);
      });
  }
}
