import { Component} from '@angular/core';
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
  locations: any;
  result: any;
  query: any;
  show = true;

  constructor(public navCtrl: NavController, public http: Http) {
    this.http.get('http://api.apixu.com/v1/current.json?key=74d49cd76a79430cad0214409170805&q=89110').map(res => res.json()).subscribe(data => {
        this.data = data;
    });
  }

  getLocation(query){
    this.query = query;

    this.http.get('http://api.apixu.com/v1/search.json?key=74d49cd76a79430cad0214409170805&q='+ this.query).map(res => res.json()).subscribe(result => {
       this.locations = result;
    }, err => {
        console.log(err);
    });
  }

  setLocation(name){
    this.query = name;
      this.http.get('http://api.apixu.com/v1/current.json?key=74d49cd76a79430cad0214409170805&q='+ this.query).map(res => res.json()).subscribe(result => {
       this.data = result;
     }, err => {
        console.log(err);
     });
   }

   resetLocation(){
    this.http.get('http://api.apixu.com/v1/current.json?key=74d49cd76a79430cad0214409170805&q=Paris').map(res => res.json()).subscribe(result => {
       this.data = result;
     }, err => {
        console.log(err);
     });
   }

   hideSuggestions(){
      this.show = false;
   }

   showSuggestions(){
      this.show = true;
   }

}
