import { ServisService } from './../servis.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-giris',
  templateUrl: './giris.page.html',
  styleUrls: ['./giris.page.scss'],
})
export class GirisPage implements OnInit {
public kullanici:string;
public userr:string;
  constructor(private activatedRoute: ActivatedRoute,private auth:ServisService,private router:Router) { }

  ngOnInit() {

  }

token(username,password){
const tokenObj ={
  username: username.value,
  password: password.value
};
this.auth.GetToken(tokenObj).subscribe((resp:any) =>{
  console.log(resp);
 localStorage.setItem('token',resp.accessToken);
 this.router.navigate([ '/arama',username]);

});
}
}

