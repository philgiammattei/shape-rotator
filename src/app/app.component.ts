import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'shape-rotator';
  squareAngle = 0;
  triangleAngle = 0;

  updateSquareAngle(value: number): void {
    this.squareAngle = value;
  }

  getSquareAngle(): string {
    return `rotate(${this.squareAngle}deg)`;
  }

  updatetriangleAngle(value: number): void {
    this.triangleAngle = value;
  }

  gettriangleAngle(): string {
    return `rotate(${this.triangleAngle}deg)`;
  }
}
