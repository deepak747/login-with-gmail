import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Service/common.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
         location:any;
         locationJs:any;
  constructor(private commonService:CommonService) { }

  ngOnInit(): void {
     
       this.commonService.getLocation().subscribe(res=>{
          this.location=res;   
        console.log("-------",res)
       })


                // Secound way with javascript
                navigator.geolocation.getCurrentPosition((position)=>{
                     this.locationJs=position.coords;
                       console.log(this.locationJs)
                })
  }

}
