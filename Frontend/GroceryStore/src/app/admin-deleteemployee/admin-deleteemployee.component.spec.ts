import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDeleteemployeeComponent } from './admin-deleteemployee.component';

describe('AdminDeleteemployeeComponent', () => {
  let component: AdminDeleteemployeeComponent;
  let fixture: ComponentFixture<AdminDeleteemployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDeleteemployeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDeleteemployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
