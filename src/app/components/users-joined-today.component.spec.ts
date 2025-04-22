import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersJoinedTodayComponent } from './users-joined-today.component';

describe('UsersJoinedTodayComponent', () => {
  let component: UsersJoinedTodayComponent;
  let fixture: ComponentFixture<UsersJoinedTodayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersJoinedTodayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersJoinedTodayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
