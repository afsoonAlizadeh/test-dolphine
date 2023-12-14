import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleOutletComponent } from './role-outlet.component';

describe('RoleOutletComponent', () => {
  let component: RoleOutletComponent;
  let fixture: ComponentFixture<RoleOutletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoleOutletComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoleOutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
