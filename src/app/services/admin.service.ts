import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private url = window["cfgApiBaseUrl"];
  constructor(
    private http: HttpClient
  ) { }
  createGame(data: FormData): Observable<any> {
    return this.http.post(this.url+"/game/", data);
  }
  withdrawRequest():Observable<any>{
    return this.http.get(this.url+"/user-withdraw-request/", );
  }
  upcomingMatches(): Observable<any> {
    return this.http.get(this.url + "/active-game");
  }
  ongoingMatches(): Observable<any> {
    return this.http.get(this.url + "/ongoing-game");
  }
  insertRoomDetails(data): Observable<any> {
    return this.http.post(this.url + "/room/",data);
  }
  updateGame(data: FormData,game_id): Observable<any> {
    return this.http.put(this.url+"/game/"+game_id+"/", data);
  }
  fetchJoinPlayer(data): Observable<any> {
    let form=new FormData()
    form.append("game_id",data)
    return this.http.post(this.url+"/fetch-join-player", form);
  }
  submitResult(data):Observable<any>{
    return this.http.post(this.url+"/result",data)
  }
  confirmWithdraw(id):Observable<any>{
    return this.http.get(this.url+"/user-withdraw-request/"+id)
  }
  refundWithdraw(data):Observable<any>{
    return this.http.post(this.url+"/refund",data)
  }
}
