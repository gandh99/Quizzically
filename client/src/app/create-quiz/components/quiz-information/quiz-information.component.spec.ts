import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizInformationComponent } from './quiz-information.component';

describe('QuizInformationComponent', () => {
  let component: QuizInformationComponent;
  let fixture: ComponentFixture<QuizInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
