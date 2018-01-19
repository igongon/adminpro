import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styles: []
})
export class GraficoDonaComponent implements OnInit {

  @Input() labels: string[] = [];
  @Input() data: number[] = [];
  @Input() legend: boolean = true;

  type: string = 'doughnut';

  constructor() { }

  ngOnInit() {

  }

}
