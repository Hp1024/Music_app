import {Injectable ,Input} from '@angular/core';
import {HttpClient,HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  private charts_topartists_url='http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=e99d88c19c501cc1ae5a8a2331245f47&format=json';
  private charts_topalbums_url='http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=e99d88c19c501cc1ae5a8a2331245f47&format=json';
  private geo_topartists_url='http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=india&limit=24&api_key=e99d88c19c501cc1ae5a8a2331245f47&format=json';
  private geo_topalbums_url='http://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=india&limit=24&api_key=e99d88c19c501cc1ae5a8a2331245f47&format=json';
  private getartist_info_url;
  private getalbum_info_url;
  private search_artist_url;
  private search_track_url;
  private wishlist_url="http://localhost:3000";
  private arr=[];
  const_url(par){               
    let artist_name=par;
    this.getartist_info_url="http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=" + artist_name+ "&api_key=e99d88c19c501cc1ae5a8a2331245f47&format=json";
  }
  const_url1(par1,par2){
    let alb_name=par1;
    let art_name=par2;
    this.getalbum_info_url="http://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=e99d88c19c501cc1ae5a8a2331245f47&artist="+art_name+"&track="+alb_name+"&format=json";
  }
  const_url2(artist){
    let search_art=artist;
    this.search_artist_url="http://ws.audioscrobbler.com/2.0/?method=artist.search&artist="+ search_art+"&api_key=e99d88c19c501cc1ae5a8a2331245f47&format=json&limit=28";
  }
  const_url3(track){
    let search_track=track;
    this.search_track_url="http://ws.audioscrobbler.com/2.0/?method=track.search&track="+search_track+"&api_key=e99d88c19c501cc1ae5a8a2331245f47&format=json&limit=28";
  }
  check(elem){
    this.get_wishlist().subscribe(data=>{this.arr=data
      console.log(this.arr.length);
      let flag=1;
      for(var i=0 ; i<this.arr.length&&flag===1;i++){
          if(elem.name=== this.arr[i].name){
            alert("Fail");
            flag=0;
          }
          
        }
        if(flag===1)
        {this.push_wishlist(elem).subscribe();
          alert("Success!!"); }
      
    });
    
    
    
  }
  constructor(private http:HttpClient) { }
 
  get_charts_topartists():Observable<any>{
    return this.http.get<any>(this.charts_topartists_url);
  }
  get_charts_topalbums():Observable<any>{
    return this.http.get<any>(this.charts_topalbums_url);
  }
  get_geo_topartists():Observable<any>{
    return this.http.get<any>(this.geo_topartists_url);
  }
  get_geo_topalbums():Observable<any>{
    return this.http.get<any>(this.geo_topalbums_url);
  }
  get_artistinfo():Observable<any>{
    return this.http.get<any>(this.getartist_info_url);
  }
  get_albuminfo():Observable<any>{
    return this.http.get<any>(this.getalbum_info_url);
  }
  get_search_artist():Observable<any>{
    return this.http.get<any>(this.search_artist_url);
  }
  get_search_track():Observable<any>{
    return this.http.get<any>(this.search_track_url);
  }
  get_wishlist():Observable<any>{
    return this.http.get<any>(this.wishlist_url+'/wishlist');
    console.log("tested");
  }
  push_wishlist(elem):Observable<any>{
    return this.http.post<any>(this.wishlist_url+'/wishlist',elem);
  }
  delete_fromwishlist(id:number):Observable<{}>{
    return this.http.delete(`${'http://localhost:3000/wishlist'}/${id}`);
  }
  
}
