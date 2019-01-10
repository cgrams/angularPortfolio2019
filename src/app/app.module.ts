import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegistrationService } from './registration.service';

import { MatButtonModule, MatCheckboxModule} from '@angular/material';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

import * as vivus from 'vivus';
import { ScrollToModule } from 'ng2-scroll-to-el';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { LinehistoryComponent } from './linehistory/linehistory.component';
import { ButterflyComponent } from './butterfly/butterfly.component';
import { TitleSectionComponent } from './title-section/title-section.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { FormComponent } from './form/form.component';
import { BioComponent } from './bio/bio.component';
import { SkillsComponent } from './skills/skills.component';
import { ExamplesComponent } from './examples/examples.component';
import { CodeComponent } from './examples/code/code.component';
import { GraphicsComponent } from './examples/graphics/graphics.component';
import { WebComponent } from './examples/web/web.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    LinehistoryComponent,
    ButterflyComponent,
    TitleSectionComponent,
    FooterComponent,
    MenuComponent,
    FormComponent,
    BioComponent,
    SkillsComponent,
    ExamplesComponent,
    CodeComponent,
    GraphicsComponent,
    WebComponent,
    SideNavComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
	  HttpClientModule,
    ScrollToModule,
    BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule, MatTooltipModule, BrowserAnimationsModule, MatProgressBarModule, MatSidenavModule, MatToolbarModule
  ],
  providers: [ RegistrationService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
