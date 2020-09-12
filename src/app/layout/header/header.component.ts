import { Component, OnInit } from '@angular/core';
import { ImageService } from '../../../app/services/image.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {



  constructor(
    private ImageService: ImageService
  ) { }

  ngOnInit(): void {
  

  }

}
