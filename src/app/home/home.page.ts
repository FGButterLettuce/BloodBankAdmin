import { Component } from '@angular/core';
import { AmplifyService } from 'aws-amplify-angular';
import { AlertController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import * as moment from 'moment';

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

  emergencyblood;
  emergencyhname;
  alerts
  constructor(public afs: AngularFirestore, public amplify: AmplifyService, public alertController: AlertController) {
    this.init();
    this.alerts = this.afs.collection('inventoryalerts')
  }

  async presentAlert(head, data) {
    let alert = await this.alertController.create({
      header: head,
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
        if (res && res.length > 0) {
          this.outputvalues = res;
          this.recordres = true;
          this.loading = false;
        }
        else
          this.presentAlert("Error", "No records to show");
      }).catch(err => console.log(err))
    }
    else {
      await this.amplify.api().get('recordsapi', `/records/${this.input}`, {}).then((res) => {
        if (res && res.length > 0) {
          this.outputvalues = res;
          this.output = true;
          this.recordres = true;
          this.loading = false;
        }
        else
          this.presentAlert("Error", "No record found");
      })
    }
  }
  async donations() {
    this.toggle(); // reset all cards to false
    this.output = true;
    this.loading = true;
    if (!this.input) {
      await this.amplify.api().get('donationsapi', '/donations', {}).then((res) => {
        if (res && res.length > 0) {
          this.outputvalues = res;
          this.donationres = true;
          this.loading = false;
        }
        else
          this.presentAlert("Error", "No records to show");
      }).catch(err => console.log(err))

    }
    else {
      await this.amplify.api().get('donationsapi', `/donations/${this.input}`, {}).then((res) => {
        if (res && res.length > 0) {
          this.outputvalues = res;
          this.output = true;
          this.donationres = true;
          this.loading = false;
        }
        else
          this.presentAlert("Error", "No record found");
      })
    }
  }

  async donors() {
    this.toggle(); // reset all cards to false
    this.output = true;
    this.loading = true;

    if (!this.input) {
      await this.amplify.api().get('donor', '/donor', {}).then((res) => {
        if (res && res.length > 0) {
          this.outputvalues = res;
          this.donorres = true;
          this.loading = false;

        }
        else
          this.presentAlert("Error", "No records to show");
      }).catch(err => console.log(err))

    }
    else {
      await this.amplify.api().get('donor', `/donor/${this.input}`, {}).then((res) => {
        if (res && res.length > 0) {
          this.outputvalues = res;
          this.output = true;
          this.donorres = true;
          this.loading = false;

        }
        else
          this.presentAlert("Error", "No record found");
      })
    }
  }
  async hospitals() {
    this.toggle(); // reset all cards to false
    this.output = true;
    this.loading = true;
    if (!this.input) {
      await this.amplify.api().get('hospitalsapi', '/hospitals', {}).then((res) => {
        if (res && res.length > 0) {
          this.outputvalues = res;
          this.hospitalres = true;
          this.loading = false;
        }
        else
          this.presentAlert("Error", "No records to show");
      }).catch(err => console.log(err))



    }
    else {
      await this.amplify.api().get('hospitalsapi', `/hospitals/${this.input}`, {}).then((res) => {
        if (res && res.length > 0) {
          this.outputvalues = res;
          this.output = true;
          this.hospitalres = true;
          this.loading = false;
        }
        else
          this.presentAlert("Error", "No record found");
      })
    }
  }
  async inventory() {
    this.toggle(); // reset all cards to false
    this.output = true;
    this.loading = true;
    if (!this.input) {
      await this.amplify.api().get('inventoryapi', '/inventory', {}).then((res) => {
        if (res && res.length > 0) {
          this.outputvalues = res;
          this.inventoryres = true;
          this.loading = false;
        }
        else
          this.presentAlert("Error", "No records to show");
      }).catch(err => console.log(err))

    }
    else {
      await this.amplify.api().get('inventory', `/inventory/${this.input}`, {}).then((res) => {
        if (res && res.length > 0) {
          this.outputvalues = res;
          this.output = true;
          this.inventoryres = true;
          this.loading = false;
        }
        else
          this.presentAlert("Error", "No record found");
      })
    }
  }
  async points() {
    this.toggle(); // reset all cards to false
    this.output = true;
    this.loading = true;
    if (!this.input) {
      await this.amplify.api().get('points', '/points', {}).then((res) => {
        if (res && res.length > 0) {
          this.outputvalues = res;
          this.pointres = true;
          this.loading = false;

        }
        else
          this.presentAlert("Error", "No records to show");
      }).catch(err => console.log(err))


    }
    else {
      await this.amplify.api().get('points', `/points/${this.input}`, {}).then((res) => {
        if (res && res.length > 0) {
          this.outputvalues = res;
          this.pointres = true;
          this.loading = false;

        }
        else
          this.presentAlert("Error", "No record found");
      })
    }
  }



  async campaigns() {
    this.toggle(); // reset all cards to false
    this.output = true;
    this.loading = true;

    if (!this.input) {
      await this.amplify.api().get('campaignsapi', '/campaigns', {}).then((res) => {
        if (res && res.length > 0) {
          this.outputvalues = res;
          this.campaignres = true;
          this.loading = false;
        }
        else
          this.presentAlert("Error", "No records to show");
      }).catch(err => console.log(err))



    }
    else {
      await this.amplify.api().get('campaignsapi', `/campaigns/${this.input}`, {}).then((res) => {
        if (res && res.length > 0) {
          this.outputvalues = res;
          this.campaignres = true;
          this.loading = false;
        }
        else
          this.presentAlert("Error", "No record found");
      })
    }
  }
  emergency() {
    if (this.emergencyblood && this.emergencyhname) {
      var alrt = {
        blood: this.emergencyblood,
        hname: this.emergencyhname
      }
      this.alerts.add(alrt);
      this.emergencyblood = null;
      this.emergencyhname = null
    }
    else
      this.presentAlert("Error", "Enter details");
  }
  addpoints(eid) {
    this.loading = true;
    var donationsarr = this.outputvalues;
    var noeid = true;
    var pointsfound = false;
    this.points().then(res => {
      var pointsarr = this.outputvalues;
      for (let j of pointsarr) {
        if (j.eid == eid) {
          pointsarr = j;
          pointsfound = true;
          console.log("pointarr assigned", pointsarr)
        }
      }
      if (!pointsfound) {
        pointsarr = {
          eid: String,
          points: []
        }
      }
      for (let i of donationsarr) {
        if (i.eid == eid) {
          i.success = true;
          noeid = false;
          if (i.cid != null) {
            pointsarr.eid = eid;
            pointsarr.points.push({ date: moment(new Date()).format(), point: 500 })
            var point = {
              body: {
                eid: pointsarr.eid,
                points: pointsarr.points
              }
            }
            var donation = {
              body: i
            }
            this.amplify.api().post('points', '/points', point).catch(err => console.log("Error adding points", err))
            this.amplify.api().post('donationsapi', '/donations', donation).catch(err => console.log("Error adding donation", err))
            this.presentAlert("Success", "Accepted Donation and added Points");
            this.loading = false;
          }
          else if (i.hid != null) {
            pointsarr.eid = eid;
            pointsarr.points.push({ date: moment(new Date()).format(), point: 300 })
            var point = {
              body: {
                eid: pointsarr.eid,
                points: pointsarr.points
              }
            }
            var donation = {
              body: i
            }
            this.amplify.api().post('points', '/points', point).catch(err => console.log("Error adding points", err))
            this.amplify.api().post('donationsapi', '/donations', donation).catch(err => console.log("Error adding donation", err))
            this.presentAlert("Success", "Accepted Donation and added Points");
            this.loading = false;
          }
        }
      }
      if (noeid) {
        this.presentAlert("Error", "EID Incorrect");
      }
    });
  }


}
