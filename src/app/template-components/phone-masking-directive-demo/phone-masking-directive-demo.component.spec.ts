import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneMaskingDirectiveDemoComponent } from './phone-masking-directive-demo.component';

describe('PhoneMaskingDirectiveDemoComponent', () => {
  let component: PhoneMaskingDirectiveDemoComponent;
  let fixture: ComponentFixture<PhoneMaskingDirectiveDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhoneMaskingDirectiveDemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhoneMaskingDirectiveDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
