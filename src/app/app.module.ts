import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { SocketService } from './services/socket/socket.service';
import { DataService } from './services/data/data.service';
import { SharedService } from './services/shared/shared.service';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './services/in-memory-data/in-memory-data.service';

import { AppComponent } from './app.component';
import { ChatComponent } from './components/chat/chat.component';
import { SigninComponent } from './components/user/signin/signin.component';
import { AppRoutingModule } from './app-routing.module';
import { PageIndexComponent } from './components/page-index/page-index.component';
import { SignupComponent } from './components/user/signup/signup.component';

@NgModule({
    declarations: [
        AppComponent,
        ChatComponent,
        SigninComponent,
        PageIndexComponent,
        SignupComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpClientModule       
        // HttpClientInMemoryWebApiModule.forRoot(
        //     InMemoryDataService, { dataEncapsulation: false }
        // )
    ],  
    providers: [SocketService, DataService, SharedService],
    bootstrap: [AppComponent]
})
export class AppModule { }
