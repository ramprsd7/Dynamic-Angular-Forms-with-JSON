import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicJsonSchemaComponent } from './dynamic-json-schema.component';

describe('DynamicJsonSchemaComponent', () => {
  let component: DynamicJsonSchemaComponent;
  let fixture: ComponentFixture<DynamicJsonSchemaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicJsonSchemaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicJsonSchemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
