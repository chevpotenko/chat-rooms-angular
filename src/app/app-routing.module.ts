import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { PageIndexComponent }   from './components/page-index/page-index.component';
import { SigninComponent }   from './components/user/signin/signin.component';
import { SignupComponent }   from './components/user/signup/signup.component';

const routes: Routes = [
	{ path: 'user/signin', component: SigninComponent },
	{ path: 'user/signup', component: SignupComponent },
	{ path: '', component: PageIndexComponent }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule { }
