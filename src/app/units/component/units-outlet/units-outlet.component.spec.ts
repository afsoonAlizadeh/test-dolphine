import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitsOutletComponent } from './units-outlet.component';

describe('UnitsOutletComponent', () => {
  let component: UnitsOutletComponent;
  let fixture: ComponentFixture<UnitsOutletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UnitsOutletComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UnitsOutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
