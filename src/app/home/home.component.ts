import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import {DataService} from '../data.service';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private top_artists=[];
  private top_albums=[];
  constructor(private loc_serv:DataService , private loc_router:Router) { }
  display_details(elem){
     this.loc_router.navigate(['/home' , elem.name]);

  }
  display_albdetails(elem1){
    this.loc_router.navigate(['/home/track' , elem1.name,elem1.artist.name]);

 }
  ngOnInit() {
    this.loc_serv.get_geo_topartists().subscribe(data=>this.top_artists=data.topartists.artist);
    this.loc_serv.get_geo_topalbums().subscribe(data=>this.top_albums=data.tracks.track);
  }

}
