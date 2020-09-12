import { Component, OnInit } from '@angular/core';
import { ImageService } from '../services/image.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public images=[];
  public backroundImage = "";
  public image = '';
  constructor(
    private ImageService: ImageService
  ) { }

  ngOnInit(): void {
    this.ImageService.getImage().subscribe((data)=>{
      
      this.images = data;
      this.backroundImage = this.images[0].urls.full
    });
    this.getImages();
    this.getImagesRaw();

  }
  getImages() {
    this.ImageService.getImage().subscribe((data) => {
      this.images = data;
      this.image = this.images[0].urls.full;
      console.log(data)
    });
  }
  getImagesRaw() {
    this.ImageService.getImage().subscribe((data) => {
      this.images = data;
      this.image = this.images[0].urls.thumb;
      console.log(data)
    });
  }
}
