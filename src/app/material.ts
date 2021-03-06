import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { NgModule } from '@angular/core';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSelectModule} from '@angular/material/select';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatRadioModule} from '@angular/material/radio';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatChipsModule} from '@angular/material/chips';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatBadgeModule} from '@angular/material/badge';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
    imports: [MatButtonModule, MatCheckboxModule, MatSidenavModule, MatToolbarModule,
        MatIconModule, MatMenuModule, MatCardModule, MatGridListModule,
        MatSelectModule, MatPaginatorModule, MatSortModule, MatTableModule,
        MatDialogModule, MatExpansionModule, MatRadioModule, MatProgressSpinnerModule,
        MatFormFieldModule, MatInputModule, MatChipsModule, MatDatepickerModule,
        MatAutocompleteModule,MatSlideToggleModule,MatBadgeModule,MatStepperModule,
        MatTabsModule,
    ],
    exports: [MatButtonModule, MatCheckboxModule, MatSidenavModule, MatToolbarModule,
        MatIconModule, MatMenuModule, MatCardModule, MatGridListModule,
        MatSelectModule, MatPaginatorModule, MatSortModule, MatTableModule,
        MatDialogModule, MatExpansionModule, MatRadioModule, MatProgressSpinnerModule,
        MatFormFieldModule, MatInputModule, MatChipsModule, MatDatepickerModule,
        MatAutocompleteModule,MatSlideToggleModule,MatBadgeModule,MatStepperModule,
        MatTabsModule,
    ],
})
export class MaterialModule { }

// Comentario
