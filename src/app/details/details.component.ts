import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  private det_index;
  private info;
  constructor(private loc_router : ActivatedRoute , private loc_nav: Router,private loc_serv:DataService ) { }
  
  ngOnInit() {

    let index= this.loc_router.snapshot.paramMap.get('index');
    this.det_index=index;
    this.loc_serv.const_url(this.det_index);    
    this.loc_serv.get_artistinfo().subscribe(data=>this.info=data.artist);
  }
  goback_home(){
    this.loc_nav.navigate(['/home']);
  }
  add_to_wishlist(song){
    
  }

}
