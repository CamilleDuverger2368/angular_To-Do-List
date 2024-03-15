import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllDoneToDoFiltersComponent } from './all-done-to-do-filters.component';

describe('AllDoneToDoFiltersComponent', () => {
  let component: AllDoneToDoFiltersComponent;
  let fixture: ComponentFixture<AllDoneToDoFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllDoneToDoFiltersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllDoneToDoFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
