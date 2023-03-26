import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { ListsComponent } from './lists/lists.component';
import { ListComponent } from './list/list.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { AddListComponent } from './dialogs/add-list.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

import { DragDropModule } from  '@angular/cdk/drag-drop';
import { DeleteTableComponent } from './dialogs/delete-table.component';
import { AddElementComponent } from './dialogs/add-element.component';
import { MatRippleModule } from '@angular/material/core';
import { MatMenuModule } from '@angular/material/menu';
import { EditComponent } from './dialogs/edit.component';
import { ExpListComponent } from './exp-list/exp-list.component';
import { ElementComponent } from './element/element.component';
import { EditTitleComponent } from './dialogs/edit-title.component';


@NgModule({
  declarations: [
    ListsComponent,
    ListComponent,
    AddListComponent,
    DeleteTableComponent,
    AddElementComponent,
    EditComponent,
    ExpListComponent,
    ElementComponent,
    EditTitleComponent,
  ],
  imports: [
    MatButtonToggleModule,
    CommonModule,
    DashboardRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatDialogModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    DragDropModule,
    MatRippleModule,
    MatMenuModule,
    MatExpansionModule,
    MatSelectModule,
    MatCheckboxModule,
    MatSliderModule
  ]
})
export class DashboardModule { }
