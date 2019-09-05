import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  private searched_artists = [];
  private searched_tracks = [];
  private search_param;
  constructor(private loc_router: ActivatedRoute, private loc_serv: DataService, private loc_nav: Router) {

  }
    display_details(elem){
      this.loc_nav.navigate(['/home' , elem.name]);

   }
   display_albdetails(elem1){
     this.loc_nav.navigate(['/home/track' , elem1.name ,elem1.artist]);
   }
   add_to_wishlist(elem){
    this.loc_serv.check(elem);
  } 
  ngOnInit() {

    let key = this.loc_router.snapshot.paramMap.get('key');
    this.search_param = String(key);
    this.loc_serv.const_url2(this.search_param);
    this.loc_serv.const_url3(this.search_param);
    this.loc_serv.get_search_artist().subscribe(data => this.searched_artists = data.results.artistmatches.artist);
    this.loc_serv.get_search_track().subscribe(data =>this.searched_tracks = data.results.trackmatches.track);
  }
  goback_home() {
    this.loc_nav.navigate(['/home']);
  }

}
