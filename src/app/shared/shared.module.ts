import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { CdkTableModule } from '@angular/cdk/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTreeModule } from '@angular/material/tree';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatRadioModule } from '@angular/material/radio';

@NgModule({
  declarations: [],
  imports: [
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    CdkTableModule,
    MatTabsModule,
    MatSlideToggleModule,
    MatTreeModule,
    MatCheckboxModule,
    MatCardModule,
    MatDividerModule,
    MatExpansionModule,
    MatRadioModule,
  ],
  exports: [
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    CdkTableModule,
    MatTabsModule,
    MatSlideToggleModule,
    MatTreeModule,
    MatCheckboxModule,
    MatCardModule,
    MatDividerModule,
    MatExpansionModule,
    MatRadioModule,
  ],
})
export class SharedModule {}
