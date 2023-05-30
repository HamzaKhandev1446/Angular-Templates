import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateComponentsComponent } from './template-components.component';

describe('TemplateComponentsComponent', () => {
  let component: TemplateComponentsComponent;
  let fixture: ComponentFixture<TemplateComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateComponentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
