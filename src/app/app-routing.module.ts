import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChartsComponent } from './charts/charts.component';
import { HomeComponent } from './home/home.component';
import { MyaccountComponent } from './myaccount/myaccount.component';
import { DetailsComponent } from './details/details.component';
import { AlbumdetailsComponent } from './albumdetails/albumdetails.component';
import { SearchComponent } from './search/search.component';
import { MywishlistComponent } from './mywishlist/mywishlist.component';

const routes: Routes = [
  {path:'', redirectTo:'/home',pathMatch:"full"},
  {path:'home/:index', component:DetailsComponent},
  {path:'chart',component:ChartsComponent},
  {path:'home',component:HomeComponent},
  {path:'myaccount',component:MywishlistComponent,pathMatch:"full"},
  {path:'myaccount/:add',component:MyaccountComponent},
  {path:'home/track/:alb/:art',component:AlbumdetailsComponent},
  {path:'search/:key', component:SearchComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
