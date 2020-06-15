import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FacturaComponent } from './componentes/factura/factura.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { PlatosService } from './servicio/platos.service';

@NgModule({
  declarations: [
    AppComponent,
    FacturaComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
 
  ],
  providers: [
    PlatosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
