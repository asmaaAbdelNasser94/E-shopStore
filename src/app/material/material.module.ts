import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatRadioModule } from '@angular/material/radio';

const material = [
  MatIconModule ,
  MatToolbarModule ,
  MatListModule ,
  MatButtonModule ,
  MatDialogModule ,
  MatTabsModule ,
  MatTableModule ,
  MatMenuModule ,
  MatRippleModule ,
  MatFormFieldModule ,
  MatInputModule ,
  MatSidenavModule ,
  MatRadioModule
]


@NgModule({
  declarations: [],
  imports: [
    material
  ] ,
  exports : [
    material
  ]
})
export class MaterialModule { }
