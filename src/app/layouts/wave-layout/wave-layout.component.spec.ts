import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaveLayoutComponent } from './wave-layout.component';

describe('WaveLayoutComponent', () => {
  let component: WaveLayoutComponent;
  let fixture: ComponentFixture<WaveLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WaveLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WaveLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
