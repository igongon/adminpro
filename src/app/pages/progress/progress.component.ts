import { Component, OnInit } from '@angular/core';
import { IncrementadorComponent } from './../../components/incrementador/incrementador.component';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {

  blueProgressValue = 0;
  greenProgressValue = 0;

  constructor() {
  }

  ngOnInit() {

  }
}
