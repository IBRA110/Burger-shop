import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheeseBurgersComponent } from './cheese-burgers.component';

describe('CheeseBurgersComponent', () => {
  let component: CheeseBurgersComponent;
  let fixture: ComponentFixture<CheeseBurgersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheeseBurgersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheeseBurgersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
