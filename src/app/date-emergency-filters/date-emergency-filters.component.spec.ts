import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateEmergencyFiltersComponent } from './date-emergency-filters.component';

describe('DateEmergencyFiltersComponent', () => {
  let component: DateEmergencyFiltersComponent;
  let fixture: ComponentFixture<DateEmergencyFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DateEmergencyFiltersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DateEmergencyFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
