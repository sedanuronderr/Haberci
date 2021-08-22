import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-haberliste',
  templateUrl: './haberliste.page.html',
  styleUrls: ['./haberliste.page.scss'],
})
export class HaberlistePage implements OnInit {

 public baslik: string;
 public site: string;
 public tarih: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.baslik = this.activatedRoute.snapshot.paramMap.get('baslik');
    this.site = this.activatedRoute.snapshot.paramMap.get('site');

  }

}
