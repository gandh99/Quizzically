import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TakeQuizMainComponent } from './take-quiz-main.component';

describe('TakeQuizMainComponent', () => {
  let component: TakeQuizMainComponent;
  let fixture: ComponentFixture<TakeQuizMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TakeQuizMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TakeQuizMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
