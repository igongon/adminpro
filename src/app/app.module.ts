import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Rutas
import { APP_ROUTES } from './app.routes';

// Componentes
import { AppComponent } from './app.component';

// Módulos
import { ServiceModule } from './services/service.module';
import { PagesModule } from './pages/pages.module';
import { LoginComponent } from './login/login.component';
import { LoginModule } from './login/login.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    APP_ROUTES,
    BrowserModule,
    LoginModule,
    PagesModule,
    ServiceModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
