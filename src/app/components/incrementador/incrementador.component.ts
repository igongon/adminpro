import { Component, OnInit, Input, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html'
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('txtValue') txtValue: ElementRef;
  @Input() caption: '';
  @Input() value = 50;

  @Output() valueChanged: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onModelChange(newValue: number) {
    if (newValue >= 100) {
      this.value = 100;
    } else if (newValue <= 0) {
      this.value = 0;
    } else {
      this.value = newValue;
    }
alert('muerte');
    this.txtValue.nativeElement.value = this.value;

    this.valueChanged.emit(this.value);
  }

  setValue(newValue: number) {
    // tslint:disable-next-line:curly
    if (((newValue + this.value) > 100) || ((newValue + this.value) < 0))
      return;

    this.value += newValue;
    this.valueChanged.emit(this.value);
  }
}
