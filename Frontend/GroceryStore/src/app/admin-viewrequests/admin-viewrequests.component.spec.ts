import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewrequestsComponent } from './admin-viewrequests.component';

describe('AdminViewrequestsComponent', () => {
  let component: AdminViewrequestsComponent;
  let fixture: ComponentFixture<AdminViewrequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminViewrequestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminViewrequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
