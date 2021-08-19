import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CredentialInterceptor } from './interceptor/credential.interceptor';
import { PublicModule } from './public/public.module';
import { SecureModule } from './secure/secure.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SecureModule,
    PublicModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: CredentialInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
