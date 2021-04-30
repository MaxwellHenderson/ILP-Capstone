import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProudctTableComponent } from './proudct-table.component';

describe('ProudctTableComponent', () => {
  let component: ProudctTableComponent;
  let fixture: ComponentFixture<ProudctTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProudctTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProudctTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
