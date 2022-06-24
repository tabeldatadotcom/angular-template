import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';

import {UiElementsRoutingModule} from './ui-elements-routing.module';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    UiElementsRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatTabsModule,
    MatIconModule,
    MatToolbarModule,
    SharedModule,
  ]
})
export class UiElementsModule {
}
