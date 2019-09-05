import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { DataService } from '../data.service';
import { MyaccountComponent } from '../myaccount/myaccount.component';

@Component({
  selector: 'app-albumdetails',
  templateUrl: './albumdetails.component.html',
  styleUrls: ['./albumdetails.component.css']
})
export class AlbumdetailsComponent implements OnInit {
  private det_alb;
  private det_art;
  private albinfo;
  constructor(private loc_router : ActivatedRoute , private loc_nav: Router,private loc_serv:DataService) { }
  ngOnInit() {
    let alb= this.loc_router.snapshot.paramMap.get('alb');
    let art= this.loc_router.snapshot.paramMap.get('art');
    this.det_alb=alb;
    this.det_art=art;
    this.loc_serv.const_url1(this.det_alb,this.det_art);
    this.loc_serv.get_albuminfo().subscribe(data=>this.albinfo=data.track);
  }
  goback_home(){
    this.loc_nav.navigate(['/home']);
  }
  
    

}

