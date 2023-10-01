import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {  HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ContentComponent } from './content/content.component';

import {MatAutocompleteSelectedEvent, MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatChipInputEvent, MatChipsModule} from '@angular/material/chips'
import { NgFor, AsyncPipe } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import { FilterPipe } from './filter.pipe';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import {MatCardModule} from '@angular/material/card';
@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
     MatInputModule, MatSelectModule,
     ReactiveFormsModule,
     HttpClientModule,
     MatSnackBarModule,
     MatSelectModule,
     FormsModule,
    MatFormFieldModule,
    MatChipsModule,
    NgFor,
    MatIconModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    AsyncPipe,
    NgMultiSelectDropDownModule.forRoot(),
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
