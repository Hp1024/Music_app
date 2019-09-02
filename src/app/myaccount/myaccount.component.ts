import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-myaccount',
  template: `
    <h2>My wishlist</h2> 
    <div  *ngFor="let elem of loc_wishlist">
   
      {{elem}} <span><button (click)="rem_from_wishlist(elem)">Remove</button></span>
    </div>
    <button (click)="goback_home()">Add</button><span><button (click)="goback_home()">Back</button></span>
    
  `,
  styles: []
})
export class MyaccountComponent implements OnInit {
  private loc_add;
  private exp=true;
  private loc_wishlist=this.loc_serv.get_wishlist();
  rem_from_wishlist(song){
  this.loc_serv.remove(song);
  }
  goback_home(){
    this.loc_nav.navigate(['/home']);
  }
  constructor(private loc_serv:DataService,private loc_nav: Router,private loc_router : ActivatedRoute) { }
  ngOnInit() {
    let add= this.loc_router.snapshot.paramMap.get('add');
      this.loc_add=add;
      for( var i = 0; i < this.loc_wishlist.length; i++){ 
        if ( this.loc_wishlist[i] === this.loc_add) {
          this.exp=false;
          break;
        }
     } 
     if(this.exp){this.loc_serv.append(this.loc_add);}
     
  }

}
