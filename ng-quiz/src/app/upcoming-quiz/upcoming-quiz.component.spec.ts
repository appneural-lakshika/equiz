import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingQuizComponent } from './upcoming-quiz.component';

describe('UpcomingQuizComponent', () => {
  let component: UpcomingQuizComponent;
  let fixture: ComponentFixture<UpcomingQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpcomingQuizComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpcomingQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
