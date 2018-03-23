import { Component, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
})
export class AppComponent {
  public inputCal: string;
  public value = 0;

  constructor(
    private _cdr: ChangeDetectorRef,
  ) {

  }
  public cal() {
    try {
      // tslint:disable-next-line:no-eval
      this.value = eval(this.inputCal);
    } catch (err) {
      console.error(err);
    }
  }
}
