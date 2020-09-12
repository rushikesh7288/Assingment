import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactComponent } from './react/react.component';
import { HomeComponent } from './home/home.component';
import { CollectionsComponent } from './collections/collections.component';
import { ExploreComponent } from './explore/explore.component';
 import { HeaderComponent } from './layout/header/header.component';
 import { ImageService } from './services/image.service';
@NgModule({
  declarations: [
    AppComponent,
    ReactComponent,
    HomeComponent,
    CollectionsComponent,
    ExploreComponent,
    HeaderComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
