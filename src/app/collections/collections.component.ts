import { Component, OnInit } from '@angular/core';
import { ImageService } from '../services/image.service';
@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.scss']
})
export class CollectionsComponent implements OnInit {
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
  }

}
