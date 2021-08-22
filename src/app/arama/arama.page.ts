import { Haber } from './../haber';
import { Post } from './../post';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServisService } from '../servis.service';


@Component({
  selector: 'app-arama',
  templateUrl: './arama.page.html',
  styleUrls: ['./arama.page.scss'],
})
export class AramaPage implements OnInit {
public gunler: any;
public haberler: any;
public folder: string;
public ruyalar:string;
public ruya :string;
public kullanici2: string;
public posts:any;
public user:any;
public sonuc:number;
 kelimeler:string[];

 anahtarekle: Post[]=[];
  constructor(private activatedRoute: ActivatedRoute ,private authservice: ServisService) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    this.kullanici2= this.activatedRoute.snapshot.paramMap.get('anahtar');

   this.gunler=[{'gun':'bugun','sayi':'3'},{'gun':'dun','sayi':'3'},
    {'gun':'06 Haziran 2021','sayi':'5'},{'gun':'5 Haziran 2021','sayi':'5'},
    {'gun':'4 Haziran 2021'},{'gun':'3 Haziran 2021','sayi':'3'}];


  }

 ruyabul(ruya){


  this.authservice.GetAll(ruya).subscribe(resp =>{
    this.posts=resp;
  });

  }



  Created(val ){
    const deger:Post ={
      value : val.value
  };
  this.authservice.Create(deger).subscribe((resp:Post)=>{
  console.log(resp)
  this.anahtarekle.unshift(resp);
  val.value ="";
  });


 }
 deleted(güncelle:number ,silme:Post){
   this.authservice.delete(güncelle).subscribe(resp=>{

        const index = this.anahtarekle.indexOf(silme);
        this.anahtarekle.splice(index,1);


   });



 }

}

