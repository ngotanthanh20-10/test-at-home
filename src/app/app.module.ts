import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AttributeComponent } from './homepage/components/attribute/attribute.component';
import { PreviewComponent } from './homepage/components/preview/preview.component';
import { SettingComponent } from './homepage/components/setting/setting.component';
import { HomepageDetailComponent } from './homepage/homepage-detail/homepage-detail.component';

import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';

@NgModule({
  declarations: [
    AppComponent,
    HomepageDetailComponent,
    SettingComponent,
    PreviewComponent,
    AttributeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NzModalModule,
    NzFormModule,
    NzInputModule,
    NzButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
