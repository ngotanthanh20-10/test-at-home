import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';

import { AppComponent } from './app.component';
import { AttributeComponent } from './homepage/components/attribute/attribute.component';
import { PreviewComponent } from './homepage/components/preview/preview.component';
import { SettingComponent } from './homepage/components/setting/setting.component';
import { HomepageDetailComponent } from './homepage/homepage-detail/homepage-detail.component';
import { ChildComponent } from './components/child/child.component';
import { ParentComponent } from './components/parent/parent.component';
import { FromToNumberComponent } from './components/from-to-number/from-to-number.component';
import { CoreModule } from './components/core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    HomepageDetailComponent,
    SettingComponent,
    PreviewComponent,
    AttributeComponent,
    ParentComponent,
    ChildComponent,
    FromToNumberComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,

    CoreModule,


    NzModalModule,
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    NzInputNumberModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
