import { ServisService } from './../servis.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;


  constructor(private activatedRoute: ActivatedRoute, private authservice: ServisService) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');


  }
  bas(username,email,password){
   const regobj ={
     username:username.value,
     email:email.value,
     password:password.value
   };
   this.authservice.kayıt(regobj).subscribe(resp =>{
     console.log(resp);
     this.authservice.showSuccess("Başarılı Kayıt İşlemi");
   });


  }
}



