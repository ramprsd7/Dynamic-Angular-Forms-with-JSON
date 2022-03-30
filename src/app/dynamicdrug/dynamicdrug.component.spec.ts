import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicdrugComponent } from './dynamicdrug.component';

describe('DynamicdrugComponent', () => {
  let component: DynamicdrugComponent;
  let fixture: ComponentFixture<DynamicdrugComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicdrugComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicdrugComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
