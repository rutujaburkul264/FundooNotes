import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllRemindersComponent } from './get-all-reminders.component';

describe('GetAllRemindersComponent', () => {
  let component: GetAllRemindersComponent;
  let fixture: ComponentFixture<GetAllRemindersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAllRemindersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAllRemindersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
