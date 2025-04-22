import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EarnGrowthComponentComponent } from './earn-growth-component.component';

describe('EarnGrowthComponentComponent', () => {
  let component: EarnGrowthComponentComponent;
  let fixture: ComponentFixture<EarnGrowthComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EarnGrowthComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EarnGrowthComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
