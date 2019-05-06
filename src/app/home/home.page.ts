import { Component } from '@angular/core';
import { AmplifyService } from 'aws-amplify-angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  username = "7841996383554351"
  password = "superrocket"
  recordres = false;
  donorres = false;
  inventoryres = false;
  hospitalres = false;
  campaignres = false;
  donationres = false;
  pointres = false;

  output;
  outputvalues;
  input;
  loading = false;

  constructor(public amplify: AmplifyService, public alertController: AlertController) {
    this.init();
  }

  async presentAlert(data) {
    let alert = await this.alertController.create({
      header: 'Error',
      message: data,
      buttons: ['OK']
    });
    alert.present();
  }

  async init() {
    const user = await this.amplify.auth().signIn("7841996383554351", "superrocket")
  }

  toggle() {
    this.recordres = false;
    this.donorres = false;
    this.inventoryres = false;
    this.hospitalres = false;
    this.campaignres = false;
    this.donationres = false;
    this.pointres = false;
  }
  async records() {
    this.toggle(); // reset all cards to false
    this.output = true;
    this.loading = true;
    if (!this.input) {
      await this.amplify.api().get('recordsapi', '/records', {}).then((res) => {
        console.log("reached api call")
        if (res && res.length > 0) {
          this.outputvalues = res;
          console.log(this.outputvalues)
          this.recordres = true;
          this.loading = false;
        }
        else
          this.presentAlert("Error issa blanka");
      }).catch(err => console.log(err))
    }
    else {
      await this.amplify.api().get('recordsapi', `/records/${this.input}`, {}).then((res) => {
        if (res && res.length > 0) {
          this.outputvalues = res;
          console.log(this.outputvalues)
          this.output = true;
          this.recordres = true;
          this.loading = false;
        }
        else
          this.presentAlert("No record found");
      })
    }
  }
  async donations() {
    this.toggle(); // reset all cards to false
    this.output = true;
    this.loading = true;
    if (!this.input) {
      await this.amplify.api().get('donationsapi', '/donations', {}).then((res) => {
        console.log("reached api call")
        if (res && res.length > 0) {
          this.outputvalues = res;
          console.log(this.outputvalues)
          this.donationres = true;
          this.loading = false;
        }
        else
          this.presentAlert("Error issa blanka");
      }).catch(err => console.log(err))

    }
    else {
      await this.amplify.api().get('donationsapi', `/donations/${this.input}`, {}).then((res) => {
        if (res && res.length > 0) {
          this.outputvalues = res;
          console.log(this.outputvalues)
          this.output = true;
          this.donationres = true;
          this.loading = false;
        }
        else
          this.presentAlert("No record found");
      })
    }
  }

  async donors() {
    this.toggle(); // reset all cards to false
    this.output = true;
    this.loading = true;

    if (!this.input) {
      await this.amplify.api().get('donor', '/donor', {}).then((res) => {
        console.log("reached api call")
        if (res && res.length > 0) {
          this.outputvalues = res;
          console.log(this.outputvalues)
          this.donorres = true;
          this.loading = false;

        }
        else
          this.presentAlert("Error issa blanka");
      }).catch(err => console.log(err))

    }
    else {
      await this.amplify.api().get('donor', `/donor/${this.input}`, {}).then((res) => {
        if (res && res.length > 0) {
          this.outputvalues = res;
          console.log(this.outputvalues)
          this.output = true;
          this.donorres = true;
          this.loading = false;

        }
        else
          this.presentAlert("No record found");
      })
    }
  }
  async hospitals() {
    this.toggle(); // reset all cards to false
    this.output = true;
    this.loading = true;
    if (!this.input) {
      await this.amplify.api().get('hospitalsapi', '/hospitals', {}).then((res) => {
        console.log("reached api call")
        if (res && res.length > 0) {
          this.outputvalues = res;
          console.log(this.outputvalues)
          this.hospitalres = true;
          this.loading = false;
        }
        else
          this.presentAlert("Error issa blanka");
      }).catch(err => console.log(err))



    }
    else {
      await this.amplify.api().get('hospitalsapi', `/hospitals/${this.input}`, {}).then((res) => {
        if (res && res.length > 0) {
          this.outputvalues = res;
          console.log(this.outputvalues)
          this.output = true;
          this.hospitalres = true;
          this.loading = false;
        }
        else
          this.presentAlert("No record found");
      })
    }
  }
  async inventory() {
    this.toggle(); // reset all cards to false
    this.output = true;
    this.loading = true;
    if (!this.input) {
      await this.amplify.api().get('inventory', '/inventory', {}).then((res) => {
        console.log("reached api call")
        if (res && res.length > 0) {
          this.outputvalues = res;
          console.log(this.outputvalues)
          this.inventoryres = true;
          this.loading = false;

        }
        else
          this.presentAlert("Error issa blanka");
      }).catch(err => console.log(err))



    }
    else {
      await this.amplify.api().get('inventory', `/inventory/${this.input}`, {}).then((res) => {
        if (res && res.length > 0) {
          this.outputvalues = res;
          console.log(this.outputvalues)
          this.output = true;
          this.inventoryres = true;
          this.loading = false;
        }
        else
          this.presentAlert("No record found");
      })
    }
  }
  async points() {
    this.toggle(); // reset all cards to false
    this.output = true;
    this.loading = true;
    if (!this.input) {
      await this.amplify.api().get('points', '/points', {}).then((res) => {
        console.log("reached api call")
        if (res && res.length > 0) {
          this.outputvalues = res;
          console.log(this.outputvalues)
          console.log("TCL: this.outputvalues", this.outputvalues[0].points[0])
          this.pointres = true;
          this.loading = false;

        }
        else
          this.presentAlert("Error issa blanka");
      }).catch(err => console.log(err))


    }
    else {
      await this.amplify.api().get('points', `/points/${this.input}`, {}).then((res) => {
        if (res && res.length > 0) {
          this.outputvalues = res;
          // console.log(this.outputvalues)
          this.pointres = true;
          this.loading = false;

        }
        else
          this.presentAlert("No record found");
      })
    }
  }



  async campaigns() {
    this.toggle(); // reset all cards to false
    this.output = true;
    this.loading = true;

    if (!this.input) {
      await this.amplify.api().get('campaignsapi', '/campaigns', {}).then((res) => {
        console.log("reached api call")
        if (res && res.length > 0) {
          this.outputvalues = res;
          console.log(this.outputvalues)
          this.campaignres = true;
          this.loading = false;
        }
        else
          this.presentAlert("Error issa blanka");
      }).catch(err => console.log(err))



    }
    else {
      await this.amplify.api().get('campaignsapi', `/campaigns/${this.input}`, {}).then((res) => {
        if (res && res.length > 0) {
          this.outputvalues = res;
          console.log(this.outputvalues)
          this.campaignres = true;
          this.loading = false;
        }
        else
          this.presentAlert("No record found");
      })
    }
  }
}
