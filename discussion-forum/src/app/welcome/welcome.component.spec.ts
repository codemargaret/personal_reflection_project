import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';

import { WelcomeComponent } from './welcome.component';

describe('WelcomeComponent', () => {
  let component: WelcomeComponent;
  let fixture: ComponentFixture<WelcomeComponent>;
  let de:      DebugElement;
  let el:      HTMLElement;

  beforeEach(async(() => { //needs to be placed in async, different from tutorial
    TestBed.configureTestingModule({
      declarations: [ WelcomeComponent ] // declare the test component
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeComponent);
    component = fixture.componentInstance; // WelcomeComponent test instance
    fixture.detectChanges();

    // query for the title <h1> by CSS element selector, //part of tutorial test, but perhaps not necessary for separated components?
    // de = fixture.debugElement.query(By.css('h1'));
    // el = de.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
