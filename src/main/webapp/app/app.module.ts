import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { DevPresidentialLibrarySharedModule } from 'app/shared/shared.module';
import { DevPresidentialLibraryCoreModule } from 'app/core/core.module';
import { DevPresidentialLibraryAppRoutingModule } from './app-routing.module';
import { DevPresidentialLibraryHomeModule } from './home/home.module';
import { DevPresidentialLibraryEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    DevPresidentialLibrarySharedModule,
    DevPresidentialLibraryCoreModule,
    DevPresidentialLibraryHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    DevPresidentialLibraryEntityModule,
    DevPresidentialLibraryAppRoutingModule
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent]
})
export class DevPresidentialLibraryAppModule {}
