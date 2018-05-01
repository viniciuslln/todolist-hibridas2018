import { TarefasService } from './../providers/tarefas-service';
import { ProjetosService } from './../providers/projetos-service';
import { TarefasPage, Filtro } from './../pages/tarefas/tarefas';
import { TarefaPage } from './../pages/tarefa/tarefa';
import { ProjetoPage } from './../pages/projeto/projeto';
import { TabsPage } from './../pages/tabs/tabs';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ProjetosPage } from '../pages/projetos/projetos';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    ProjetoPage,
    ProjetosPage,
    TarefaPage,
    TarefasPage,
    Filtro
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    ProjetoPage,
    ProjetosPage,
    TarefaPage,
    TarefasPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ProjetosService,
    TarefasService
  ]
})
export class AppModule { }