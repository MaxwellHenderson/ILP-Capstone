import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUpdateproductsComponent } from './admin-updateproducts.component';

describe('AdminUpdateproductsComponent', () => {
  let component: AdminUpdateproductsComponent;
  let fixture: ComponentFixture<AdminUpdateproductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminUpdateproductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUpdateproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
