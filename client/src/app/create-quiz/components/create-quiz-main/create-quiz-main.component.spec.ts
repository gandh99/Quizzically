import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateQuizMainComponent } from './create-quiz-main.component';

describe('CreateQuizMainComponent', () => {
  let component: CreateQuizMainComponent;
  let fixture: ComponentFixture<CreateQuizMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateQuizMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateQuizMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
