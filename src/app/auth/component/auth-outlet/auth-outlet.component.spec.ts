import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthOutletComponent } from './auth-outlet.component';

describe('AuthOutletComponent', () => {
  let component: AuthOutletComponent;
  let fixture: ComponentFixture<AuthOutletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthOutletComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthOutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
