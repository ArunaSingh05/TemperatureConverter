import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'temperature-converter',
  templateUrl: './temperatureConverter.component.html',
  styleUrls: ['./temperatureConverter.component.scss']
})

export class TemperatureConverter implements OnInit {
  farenHeit: any;
  celsius: any;

  @ViewChild('farenHeitRef', { static: true }) farenHeitRef: ElementRef;
  @ViewChild('celsiusRef', { static: true }) celsiusRef: ElementRef;
  ngOnInit() {
    // C = (F − 32) × 5/9
    // F = C*9/5 + 32

  }

  setValue(value, type) {
    if (value === 0) {
      this.celsius = this.farenHeit = 0;
      return;
    }
    if (value) {
      if (type === 'c') {
        this.farenHeit = value * 9 / 5 + 32;
        this.farenHeit = parseFloat(this.farenHeit).toFixed(1);
      } else {
        this.celsius = (value - 32) * 5 / 9;
        this.celsius = parseFloat(this.celsius).toFixed(1);
      }
    } else {
      this.celsius = this.farenHeit = '';
    }
  }

}