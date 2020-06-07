import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizOverviewCardComponent } from './quiz-overview-card.component';

describe('QuizOverviewCardComponent', () => {
  let component: QuizOverviewCardComponent;
  let fixture: ComponentFixture<QuizOverviewCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizOverviewCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizOverviewCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
