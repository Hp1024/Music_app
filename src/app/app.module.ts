import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {DataService} from './data.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartsComponent } from './charts/charts.component';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { MyaccountComponent } from './myaccount/myaccount.component';
import { SearchComponent } from './search/search.component';
import { DetailsComponent } from './details/details.component';
import { AlbumdetailsComponent } from './albumdetails/albumdetails.component';
import { MywishlistComponent } from './mywishlist/mywishlist.component';

@NgModule({
  declarations: [
    AppComponent,
    ChartsComponent,
    HomeComponent,
    MyaccountComponent,
    SearchComponent,
    DetailsComponent,
    AlbumdetailsComponent,
    MywishlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
