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

@NgModule({
  declarations: [
    AppComponent,
    DomComponent,
    NavbarComponent,
    DesignComponent,
    DevelopComponent,
    DeployComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
