import { Router, ActivatedRoute } from '@angular/router';
import { ServisService } from './../servis.service';
import { Component, OnInit } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-ekle',
  templateUrl: './ekle.page.html',
  styleUrls: ['./ekle.page.scss'],
})
export class EklePage implements OnInit {
   anahtarekle: Post;
   kelime:string;
  constructor(private auth: ServisService,private router:ActivatedRoute) { }

  ngOnInit() {
    this.router.params.subscribe(params=>{
     this.auth.GetById(params.güncelle).subscribe((resp: Post)=>{
        this.anahtarekle=resp;
      });
    });
  }



}

