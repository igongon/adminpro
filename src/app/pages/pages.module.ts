import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { PAGES_ROUTES } from './pages.routes';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { ProgressComponent } from './progress/progress.component';
import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from '../components/components.module';



@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        Graficas1Component,
        ProgressComponent
    ],
    imports: [
        PAGES_ROUTES,
        SharedModule,
        ComponentsModule
    ],
    exports: [
        PagesComponent,
        DashboardComponent,
        Graficas1Component,
        ProgressComponent
    ]
})
export class PagesModule { }

export const routedComponents = [PagesComponent];
