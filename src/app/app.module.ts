import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './shared/navbar/navbar.component';

import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AngularFireAuthModule} from '@angular/fire/auth';
import { AngularFireModule} from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth/services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,

    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule


  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
