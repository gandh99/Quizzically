import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DraftQuizItemComponent } from './draft-quiz-item.component';

describe('DraftQuizItemComponent', () => {
  let component: DraftQuizItemComponent;
  let fixture: ComponentFixture<DraftQuizItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DraftQuizItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DraftQuizItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
