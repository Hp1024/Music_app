import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';
// import { Wishlist } from '../interface';

@Component({
  selector: 'app-myaccount',
  template: `
  <div class="container" padding-top="100px">
  <h2>My wishlist</h2> 
  <table class="table table-hover">
      <thead>
        <tr>
          <th></th>
          <th>Track</th>
          <th>Listeners</th>
          <th></th>
        </tr>
      </thead>
      <tbody >
        <tr *ngFor="let elem of loc_wishlist">
          <td><img  src="{{elem.image[0]['#text']}}"></td>
          <td>{{elem.name}}</td>
          <td>{{elem.listeners}}</td>
          <td ><a class="glyphicon glyphicon-trash" (click)="rem_from_wishlist(elem.id)"></a></td>  
        </tr>
      </tbody>
  </table>
  <button class="button" (click)="goback_home()">Add</button><span><button class="button" (click)="goback_home()">Back</button></span>
</div> 
  `,
  styles: ['a{color: dimgray;}a:hover{text-decoration: none;color: blue;}']
})
export class MyaccountComponent implements OnInit {
 private loc_wishlist;

  rem_from_wishlist(id){
  this.loc_serv.delete_fromwishlist(id).subscribe();
 window.location.reload();
  }
  goback_home(){
    this.loc_nav.navigate(['/home']);
  }
  constructor(private loc_serv:DataService,private loc_nav: Router,private loc_router : ActivatedRoute) { 
  }
  ngOnInit() {
    this.loc_serv.get_wishlist().subscribe(data=>this.loc_wishlist=data);
  }

}
