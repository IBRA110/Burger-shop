import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DobbleBurgersComponent } from './dobble-burgers.component';

describe('DobbleBurgersComponent', () => {
  let component: DobbleBurgersComponent;
  let fixture: ComponentFixture<DobbleBurgersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DobbleBurgersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DobbleBurgersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
