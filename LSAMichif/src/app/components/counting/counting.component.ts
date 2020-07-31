import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counting',
  templateUrl: './counting.component.html',
  styleUrls: ['./counting.component.scss']
})
export class CountingComponent implements OnInit {
  numbers = ["One", "Two", "Three", "Four", "Five", "Count Them All"];
  videosrc = "../../../assets/videos/mukatooncounts.mp4";

  constructor() { }

  ngOnInit(): void {
  }

  pickVid(num: String){
    if (num == "One"){
      this.videosrc = "../../../assets/videos/peyak.mp4";
    }

    if (num == "Two"){
      this.videosrc = "../../../assets/videos/niso.mp4";
    }

    if (num == "Three"){
      this.videosrc = "../../../assets/videos/nisto.mp4";
    }

    if (num == "Four"){
      this.videosrc = "../../../assets/videos/newo.mp4";
    }

    if (num == "Five"){
      this.videosrc = "../../../assets/videos/niyanan.mp4";
    }

    if (num == "Count Them All"){
      this.videosrc = "../../../assets/videos/mukatooncounts.mp4";
    }
    console.log(this.videosrc);
  }

}
