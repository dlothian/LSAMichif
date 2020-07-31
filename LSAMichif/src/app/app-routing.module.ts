import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CountingComponent } from './components/counting/counting.component';
import { MoveComponent } from './components/move/move.component';
import { SharingComponent } from './components/sharing/sharing.component';
import { StoriesComponent } from './components/stories/stories.component';
import { AboutComponent } from './components/about/about.component';
import { ColorsComponent } from './components/colors/colors.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'counting', component: CountingComponent },
  { path: 'move', component: MoveComponent },
  { path: 'sharing', component: SharingComponent },
  { path: 'stories', component: StoriesComponent },
  { path: 'about', component: AboutComponent },
  { path: 'colours', component: ColorsComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
