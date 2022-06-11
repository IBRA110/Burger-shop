import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllBurgersComponent } from './all-burgers.component';

describe('AllBurgersComponent', () => {
  let component: AllBurgersComponent;
  let fixture: ComponentFixture<AllBurgersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllBurgersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllBurgersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
