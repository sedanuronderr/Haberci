import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profilduzenleme',
  templateUrl: './profilduzenleme.page.html',
  styleUrls: ['./profilduzenleme.page.scss'],
})
export class ProfilduzenlemePage implements OnInit {
  public job4: string;
  public job5: string ;
  public job6: string ;
  constructor() { }

  ngOnInit() {

  }
  addJob(value1,value2,value3){
    if (value1 !== "") {
      this.job4 = value1;
       console.log(this.job4)  // Tarayıcı console penceresine log düşürebiliriz

    }
    if(value2 !== ""){
      this.job5 = value2;
    }
    if(value3 !== ""){
      this.job6 = value3;
    }
     else {
      alert('Bir görev girmelisin... ;)')
   }
  }
}
