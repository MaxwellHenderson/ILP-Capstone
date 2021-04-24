import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDeleteproductsComponent } from './admin-deleteproducts.component';

describe('AdminDeleteproductsComponent', () => {
  let component: AdminDeleteproductsComponent;
  let fixture: ComponentFixture<AdminDeleteproductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDeleteproductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDeleteproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
