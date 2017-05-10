import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  data: any;
  locationName: any;

  constructor(public navCtrl: NavController, public http: Http) {
    this.http.get('http://api.apixu.com/v1/current.json?key=74d49cd76a79430cad0214409170805&q=89110').map(res => res.json()).subscribe(data => {
        this.data = data;
    });
  }

  getLocation(query){
    this.http.get('http://api.apixu.com/v1/current.json?key=74d49cd76a79430cad0214409170805&q='+ query).map(res => res.json()).subscribe(data => {
        this.data = data;
    });
  }

}
