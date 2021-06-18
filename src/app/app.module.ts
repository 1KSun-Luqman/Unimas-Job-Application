import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { FormsModule } from '@angular/forms';


//Firebase
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule} from '@angular/fire/auth';
import { environment } from '../environments/environment';

//Auth
import { AuthService } from './services/auth.service';

//Auth GUARD
import { AuthGuard } from './guards/auth.guard';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, IonicModule.forRoot(), FormsModule, 
    AppRoutingModule,AngularFireModule.initializeApp(environment.firebase), 
    AngularFireAuthModule, AngularFireAuthModule, AngularFireStorageModule],
  providers: [
      AuthService,
      AuthGuard, 
      { provide: RouteReuseStrategy, useClass: IonicRouteStrategy,}],
  bootstrap: [AppComponent],
})
export class AppModule {}
