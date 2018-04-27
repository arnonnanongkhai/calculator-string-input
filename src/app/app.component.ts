import { Component, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
})
export class AppComponent {
  public inputCal: string;
  public value = 0;
  public infix = '';

  constructor(
    private _cdr: ChangeDetectorRef,
  ) {

  }

  /**
   *
   *
   * @memberof AppComponent
   */
  public cal() {
    // tslint:disable-next-line:no-console
    console.info('this.inputCal: ', this.inputCal);
    this.infix = this._infixToPostfix();
    // tslint:disable-next-line:no-console
    console.info('this.infix: ', this.infix);
    // this.value = this._postfixCalculator(this.infix);
    this.value = this._isInt(this._postfixCalculator(this.infix));
    this._cdr.markForCheck();
    // tslint:disable-next-line:no-console
    console.info('this.value: ', this.value);
    // tslint:disable-next-line:no-console
    console.info('>>>>>>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<<<<<<');
  }

  /**
   *
   *
   * @private
   * @param {any} n
   * @returns
   * @memberof AppComponent
   */
  private _isInt(n: any) {
    if (!this._isNumber(n) || n === Infinity) {
      return n;
    }
    if (!(n % 1 === 0) && (n + '').split('.')[1].length > 3) {
      return parseFloat(n.toFixed(10));
    }
    return n;
  }

  /**
   *
   *
   * @private
   * @returns
   * @memberof AppComponent
   */
  private _infixToPostfix() {
    if (!this.inputCal) {
      return null;
    }
    let result = '';
    const rpn = [];
    const stack = [];
    const tokens = this.inputCal.match(/(-?(?:\d+\.?\d*|-?\.\d*))|[()+\-*/]/gi);
    const containsInvalidChars = /[^()+\-*/0-9.\s]/gi.test(this.inputCal);
    const operators = ['*', '/', '+', '-'];

    if (containsInvalidChars) {
      return;
    }
    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];
      if (this._isNumber(token)) {
        rpn.push(token);
        result += (' ' + token);
      } else if (token === '(') {
        stack.push(token);
      } else {
        if (token === ')') {
          let item = stack.pop();
          while (true) {
            if (item === '(') {
              break;
            }
            result += ' ' + item;
            item = stack.pop();
          }
        } else {
          if (stack.length > 0 && this._precedence(token) <= this._precedence(stack[stack.length - 1])) {
            const x = stack.pop();
            result += (' ' + x);
          }
          stack.push(token);
          if (i === tokens.length - 1) {
            while (stack.length) {
              const item = stack.pop();
              result += (' ' + item);
            }
          }
        }
      }
    }

    while (stack.length) {
      const item = stack.pop();
      result += (' ' + item);
    }
    return result;
  }

  /**
   *
   *
   * @private
   * @param {string} x
   * @returns
   * @memberof AppComponent
   */
  private _precedence(x: string) {
    if (x === '(') {
      return (0);
    }
    if (x === '+' || x === '-') {
      return (1);
    }
    if (x === '*' || x === '/' || x === '%') {
      return (2);
    }

    return (3);
  }

  /**
   *
   *
   * @private
   * @param {any} input
   * @returns
   * @memberof AppComponent
   */
  private _isNumber(input: any) {
    return !isNaN(input);
  }


  /**
   *
   *
   * @private
   * @param {any} infixString
   * @returns
   * @memberof AppComponent
   */
  private _postfixCalculator(infixString: any) {
    if (!infixString) {
      return null;
    }

    let result;
    const tokens = infixString.split(/\s+/);
    const stack = [];
    let first;
    let second;
    const containsInvalidChars = /[^()+\-*/0-9.\s]/gi.test(infixString);

    if (containsInvalidChars) {
      return null;
    }

    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];

      if (token === '*') {
        second = stack.pop();
        first = stack.pop();

        if (typeof first === 'undefined') {
          first = 1;
        }

        if (typeof second === 'undefined') {
          second = 1;
        }

        stack.push(first * second);
      } else if (token === '/') {
        second = stack.pop();
        first = stack.pop();
        stack.push(first / second);
      } else if (token === '+') {
        second = stack.pop();
        first = stack.pop();
        stack.push(first + second);
      } else if (token === '-') {
        second = stack.pop();
        first = stack.pop();
        stack.push(first - second);
      } else {
        if (!isNaN(token)) {
          stack.push(Number(token));
        }
      }
    }

    result = stack.pop();

    return result;
  }
}
