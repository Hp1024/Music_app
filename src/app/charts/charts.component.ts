import { Component, OnInit,Output ,EventEmitter} from '@angular/core';
import {DataService} from '../data.service';
@Component({
  selector: 'app-charts',
  template:`
  <h2>Top Artists</h2>
  <ul *ngFor="let id of top_artists">
    <li>{{id.name}}</li>
  </ul>
  `,
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {
 private top_artists=[];
 private top_albums=[];
 
  constructor(private loc_serv:DataService ) { }
  
  ngOnInit() {
    this.loc_serv.get_charts_topartists().subscribe(data=>this.top_artists=data.artists.artist);
    this.loc_serv.get_charts_topalbums().subscribe(data=>this.top_artists=data.tracks.track);
  }

}
