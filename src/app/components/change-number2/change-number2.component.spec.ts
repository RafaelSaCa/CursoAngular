import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeNumber2Component } from './change-number2.component';

describe('ChangeNumber2Component', () => {
  let component: ChangeNumber2Component;
  let fixture: ComponentFixture<ChangeNumber2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeNumber2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeNumber2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
