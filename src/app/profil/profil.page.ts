import { ServisService } from './../servis.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage implements OnInit {
public person:string;
public job4: string ;
  public job5: string ;
  public job6: string ;
  public bilgiler:string;

  constructor(private activatedRoute: ActivatedRoute,private auth:ServisService) { }

  ngOnInit() {
    this.person= this.activatedRoute.snapshot.paramMap.get('users');


  }

 /* addJob(value1,value2,value3){
    if (value1 !== "") {

      this.job4 = value1;
        // Tarayıcı console penceresine log düşürebiliriz
        value1 = "";
    }
    if(value2 !== ""){
      this.job5 = value2;
    }
    if(value3 !== ""){
      this.job6 = value3;
    }
     else {
      alert('Bir görev girmelisin... ;)')
   }*/
  }



