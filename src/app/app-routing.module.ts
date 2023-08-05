// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DomComponent } from './Dom/dom.component';
import { NavbarComponent } from './Navbar/navbar.component';
import { DesignComponent } from './design/design.component';
import { DeployComponent } from './deploy/deploy.component';
import { DevelopComponent } from './develop/develop.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', component: DomComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'design', component: DesignComponent },
  { path: 'deploy', component: DeployComponent },
  { path: 'develop', component: DevelopComponent },
  { path: 'about', component: AboutComponent}
  // Définissez d'autres routes ici si nécessaire
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
