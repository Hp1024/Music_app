import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mywishlist',
  templateUrl: './mywishlist.component.html',
  styleUrls: ['./mywishlist.component.css']
})
export class MywishlistComponent implements OnInit {
  private loc_wishlist=this.loc_serv.get_wishlist();
  rem_from_wishlist(song){
    this.loc_serv.remove(song);
    }
    goback_home(){
      this.loc_nav.navigate(['/home']);
    }
  constructor(private loc_serv:DataService,private loc_nav: Router) { }

  ngOnInit() {
  }

}
