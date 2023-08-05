import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DomComponent } from './Dom/dom.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './Navbar/navbar.component';
import { DesignComponent } from './design/design.component';
import { DevelopComponent } from './develop/develop.component';
import { DeployComponent } from './deploy/deploy.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DomComponent,
    NavbarComponent,
    DesignComponent,
    DevelopComponent,
    DeployComponent,
    FooterComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
