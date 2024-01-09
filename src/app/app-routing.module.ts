import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProfileComponent } from './students/components/profile/profile.component';
import { ArticlesListComponent } from './articles/components/articles-list/articles-list.component';
import { ErrorComponent } from './core/components/error/error.component';
const routes: Routes = [
  { path: '', redirectTo: '/articles', pathMatch: 'full' },
  { path: 'profile', component: ProfileComponent },
  { path: 'articles', component: ArticlesListComponent },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
