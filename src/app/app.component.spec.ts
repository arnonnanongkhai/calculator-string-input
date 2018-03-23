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
    fixture.componentInstance.inputCal = '1 + 1';
    fixture.componentInstance.cal();
    expect(fixture.componentInstance.value).toEqual(2);
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
});
