import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSubjectTopicComponent } from './create-subject-topic.component';

describe('CreateSubjectTopicComponent', () => {
  let component: CreateSubjectTopicComponent;
  let fixture: ComponentFixture<CreateSubjectTopicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateSubjectTopicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateSubjectTopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
