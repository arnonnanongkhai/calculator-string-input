import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        FormsModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', async(() => {
    expect(component).toBeTruthy();
  }));

  it('test method cal', async(() => {
    component.inputCal = '1 + 1';
    component.cal();
    expect(component.value).toEqual(2);
  }));

  it('test method _infixToPostfix 1 + 50 / 20 * (1 + 1)', async(() => {
    component.inputCal = '1 + 50 / 20 * (1 + 1)';
    expect(component['_infixToPostfix']()).toEqual(' 1 50 20 / 1 1 + * +');
  }));

  it('test method _precedence', async(() => {
    expect(component['_precedence']('+')).toEqual(1);
  }));

  it('test method _isNumber +', async(() => {
    expect(component['_isNumber']('+')).toEqual(false);
  }));

  it('test method _isNumber 50', async(() => {
    expect(component['_isNumber']('50')).toEqual(true);
  }));

  it('test method _postfixCalculator 1 50 20 / 1 1 + * +', async(() => {
    expect(component['_postfixCalculator']('1 50 20 / 1 1 + * +')).toEqual(6);

  }));

  it('input 1 + 1', async(() => {

    const elementInput = fixture.debugElement.query(By.css('input')).nativeElement;
    elementInput.value = '1 + 1';
    elementInput.dispatchEvent(new Event('input'));

    const elementBtn = fixture.debugElement.nativeElement.querySelector('button');
    elementBtn.click();

    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const value = fixture.debugElement.query(By.css('h2'));
      expect(value.nativeElement.textContent).toEqual('2');
    });
  }));

  it('input 2 + 2', async(() => {

    const elementInput = fixture.debugElement.query(By.css('input')).nativeElement;
    elementInput.value = '2 + 2';
    elementInput.dispatchEvent(new Event('input'));

    const elementBtn = fixture.debugElement.nativeElement.querySelector('button');
    elementBtn.click();

    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const value = fixture.debugElement.query(By.css('h2'));
      expect(value.nativeElement.textContent).toEqual('4');
    });
  }));


  it('input 4 * 4', async(() => {

    const elementInput = fixture.debugElement.query(By.css('input')).nativeElement;
    elementInput.value = '4 * 4';
    elementInput.dispatchEvent(new Event('input'));

    const elementBtn = fixture.debugElement.nativeElement.querySelector('button');
    elementBtn.click();

    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const value = fixture.debugElement.query(By.css('h2'));
      expect(value.nativeElement.textContent).toEqual('16');
    });
  }));

  it('input 999/0', async(() => {

    const elementInput = fixture.debugElement.query(By.css('input')).nativeElement;
    elementInput.value = '999/0';
    elementInput.dispatchEvent(new Event('input'));

    const elementBtn = fixture.debugElement.nativeElement.querySelector('button');
    elementBtn.click();

    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const value = fixture.debugElement.query(By.css('h2'));
      expect(value.nativeElement.textContent).toEqual('Infinity');
    });
  }));

  it('input 0/999', async(() => {

    const elementInput = fixture.debugElement.query(By.css('input')).nativeElement;
    elementInput.value = '0/999';
    elementInput.dispatchEvent(new Event('input'));

    const elementBtn = fixture.debugElement.nativeElement.querySelector('button');
    elementBtn.click();

    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const value = fixture.debugElement.query(By.css('h2'));
      expect(value.nativeElement.textContent).toEqual('0');
    });
  }));


  it('input 2 - 1', async(() => {

    const elementInput = fixture.debugElement.query(By.css('input')).nativeElement;
    elementInput.value = '2 - 1';
    elementInput.dispatchEvent(new Event('input'));

    const elementBtn = fixture.debugElement.nativeElement.querySelector('button');
    elementBtn.click();

    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const value = fixture.debugElement.query(By.css('h2'));
      expect(value.nativeElement.textContent).toEqual('1');
    });
  }));

  it('input 1 - 2', async(() => {

    const elementInput = fixture.debugElement.query(By.css('input')).nativeElement;
    elementInput.value = '1 - 2';
    elementInput.dispatchEvent(new Event('input'));

    const elementBtn = fixture.debugElement.nativeElement.querySelector('button');
    elementBtn.click();

    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const value = fixture.debugElement.query(By.css('h2'));
      expect(value.nativeElement.textContent).toEqual('-1');
    });
  }));

  it('input 1 / 2', async(() => {

    const elementInput = fixture.debugElement.query(By.css('input')).nativeElement;
    elementInput.value = '1 / 2';
    elementInput.dispatchEvent(new Event('input'));

    const elementBtn = fixture.debugElement.nativeElement.querySelector('button');
    elementBtn.click();

    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const value = fixture.debugElement.query(By.css('h2'));
      expect(value.nativeElement.textContent).toEqual('0.5');
    });
  }));

  it('input 3 / 5', async(() => {

    const elementInput = fixture.debugElement.query(By.css('input')).nativeElement;
    elementInput.value = '3 / 5';
    elementInput.dispatchEvent(new Event('input'));

    const elementBtn = fixture.debugElement.nativeElement.querySelector('button');
    elementBtn.click();

    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const value = fixture.debugElement.query(By.css('h2'));
      expect(value.nativeElement.textContent).toEqual('0.6');
    });
  }));

  // ---------------------------------------------------------------------------------


  it('input 1 + 1 + 3 + 5 + 4', async(() => {

    const elementInput = fixture.debugElement.query(By.css('input')).nativeElement;
    elementInput.value = '1 + 1 + 3 + 5 + 4';
    elementInput.dispatchEvent(new Event('input'));

    const elementBtn = fixture.debugElement.nativeElement.querySelector('button');
    elementBtn.click();

    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const value = fixture.debugElement.query(By.css('h2'));
      expect(value.nativeElement.textContent).toEqual('14');
    });
  }));

  it('input 1 * 2 * 3 * 4 * 5', async(() => {

    const elementInput = fixture.debugElement.query(By.css('input')).nativeElement;
    elementInput.value = '1 * 2 * 3 * 4 * 5';
    elementInput.dispatchEvent(new Event('input'));

    const elementBtn = fixture.debugElement.nativeElement.querySelector('button');
    elementBtn.click();

    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const value = fixture.debugElement.query(By.css('h2'));
      expect(value.nativeElement.textContent).toEqual('120');
    });
  }));

  it('input 1 + 2 * 3 - 1 / 20', async(() => {

    const elementInput = fixture.debugElement.query(By.css('input')).nativeElement;
    elementInput.value = '1 + 2 * 3 - 1 / 20';
    elementInput.dispatchEvent(new Event('input'));

    const elementBtn = fixture.debugElement.nativeElement.querySelector('button');
    elementBtn.click();

    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const value = fixture.debugElement.query(By.css('h2'));
      expect(value.nativeElement.textContent).toEqual('6.95');
    });
  }));

  it('input 1 / 20 / 30 * 50 + 10', async(() => {

    const elementInput = fixture.debugElement.query(By.css('input')).nativeElement;
    elementInput.value = '1 / 20 / 30 * 50 + 10';
    elementInput.dispatchEvent(new Event('input'));

    const elementBtn = fixture.debugElement.nativeElement.querySelector('button');
    elementBtn.click();

    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const value = fixture.debugElement.query(By.css('h2'));
      expect(value.nativeElement.textContent).toEqual('10.083333333333334');
    });
  }));

  it('input 1 + (29 + 45) * 100', async(() => {

    const elementInput = fixture.debugElement.query(By.css('input')).nativeElement;
    elementInput.value = '1 + (29 + 45) * 100';
    elementInput.dispatchEvent(new Event('input'));

    const elementBtn = fixture.debugElement.nativeElement.querySelector('button');
    elementBtn.click();

    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const value = fixture.debugElement.query(By.css('h2'));
      expect(value.nativeElement.textContent).toEqual('7401');
    });
  }));

  it('input 1 + 50 / 20 * (1 + 1)', async(() => {

    const elementInput = fixture.debugElement.query(By.css('input')).nativeElement;
    elementInput.value = '1 + 50 / 20 * (1 + 1)';
    elementInput.dispatchEvent(new Event('input'));

    const elementBtn = fixture.debugElement.nativeElement.querySelector('button');
    elementBtn.click();

    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const value = fixture.debugElement.query(By.css('h2'));
      expect(value.nativeElement.textContent).toEqual('6');
    });
  }));

  it('input 90 / 10 * (20 + 0) - 1', async(() => {

    const elementInput = fixture.debugElement.query(By.css('input')).nativeElement;
    elementInput.value = '90 / 10 * (20 + 0) - 1';
    elementInput.dispatchEvent(new Event('input'));

    const elementBtn = fixture.debugElement.nativeElement.querySelector('button');
    elementBtn.click();

    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const value = fixture.debugElement.query(By.css('h2'));
      expect(value.nativeElement.textContent).toEqual('179');
    });
  }));


});
