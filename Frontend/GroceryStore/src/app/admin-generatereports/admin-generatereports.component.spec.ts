import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminGeneratereportsComponent } from './admin-generatereports.component';

describe('AdminGeneratereportsComponent', () => {
  let component: AdminGeneratereportsComponent;
  let fixture: ComponentFixture<AdminGeneratereportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminGeneratereportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminGeneratereportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
