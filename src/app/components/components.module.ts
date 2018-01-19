import { NgModule } from '@angular/core';

// Módulos
import { FormsModule } from '@angular/forms';

// Componentes
import { IncrementadorComponent } from './incrementador/incrementador.component';
import { GraficoDonaComponent } from './grafico-dona/grafico-dona.component';
import { ChartsModule } from 'ng2-charts';


@NgModule({
    declarations: [
        IncrementadorComponent,
        GraficoDonaComponent
    ],
    imports: [
        FormsModule,
        ChartsModule
    ],
    exports: [
        IncrementadorComponent,
        GraficoDonaComponent
    ],
    providers: [],
})
export class ComponentsModule { }
