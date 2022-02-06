
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { AppRoutes } from './app.routing';
import { AppComponent } from './app.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { FullComponent } from './layouts/full/full.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from './demo-material-module';

import { SharedModule } from './shared/shared.module';
import { SpinnerComponent } from './shared/spinner.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { MatPaginatorIntl } from '@angular/material';
import { CustomPaginator } from './shared/instances/CustomPaginatorConfiguration';
import { NgxUiLoaderModule } from 'ngx-ui-loader';

@NgModule({
  declarations: [
    AppComponent,
    FullComponent,
    SpinnerComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    FormsModule,
    FlexLayoutModule,
    HttpClientModule,
    SharedModule,
    RouterModule.forRoot(AppRoutes),
    NgxUiLoaderModule.forRoot({
      'bgsColor': 'red',
      'bgsOpacity': 0.5,
      'bgsPosition': 'bottom-right',
      'bgsSize': 60,
      'bgsType': 'ball-spin-clockwise',
      'blur': 0,
      'fgsColor': '#35557a',
      'fgsPosition': 'center-center',
      'fgsSize': 70,
      'fgsType': 'circle',
      'gap': 24,
      'logoPosition': 'center-center',
      'logoSize': 120,
      'logoUrl': '',
      'masterLoaderId': 'master',
      'overlayBorderRadius': '0',
      'overlayColor': 'rgba(255,255,255,0.68)',
      'pbColor': '#35557a',
      'pbDirection': 'ltr',
      'pbThickness': 3,
      'hasProgressBar': true,
      'text': 'Cargando',
      'textColor': '#393939',
      'textPosition': 'center-center'
}),

    NgMultiSelectDropDownModule.forRoot()
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy
    },
    {
      provide: MatPaginatorIntl,
      useValue: CustomPaginator()
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
