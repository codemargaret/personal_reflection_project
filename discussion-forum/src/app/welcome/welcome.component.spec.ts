import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { WelcomeComponent } from './welcome.component';
import { AppComponent } from '../app.component';

import { provideRoutes} from '@angular/router';
import { Routes, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Post } from '../post.model';

// import { ComponentFixtureAutoDetect } from '@angular/core/testing';
// import { AppModule } from '../app.module';

describe('WelcomeComponent', () => {
  let component: WelcomeComponent;
  let fixture: ComponentFixture<WelcomeComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    // needs to be placed in async, different from tutorial
    TestBed.configureTestingModule({
      declarations: [ WelcomeComponent ], // declare the test component
      imports: [ RouterTestingModule, AngularFireDatabaseModule ], // important for recognizing router-outlet tags
      providers: [
        // { provide: ComponentFixtureAutoDetect, useValue: true }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeComponent);
    component = fixture.componentInstance; // WelcomeComponent test instance
    fixture.detectChanges();
    de = fixture.debugElement.query(By.css('h1'));
    el = de.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
