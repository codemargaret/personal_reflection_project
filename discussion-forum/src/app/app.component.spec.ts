import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { AppComponent } from './app.component';

import { provideRoutes} from '@angular/router';
import { Routes, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing'; // important for recognizing router-outlet tags

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    // needs to be placed in async, different from tutorial
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [ RouterTestingModule ],
      providers: [ ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance; // AppComponent test instance
    fixture.detectChanges();
  });

  it('should create the app', async(() => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app works!'`, async(() => {
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app works!');
  }));

  it('should render title in a h1 tag', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('app works!');
  }));

  it('should display a different test title', () => {
    const app = fixture.debugElement.componentInstance;
    component.title = 'Test Title';
    expect(app.title).toContain('Test Title');
  });
});
