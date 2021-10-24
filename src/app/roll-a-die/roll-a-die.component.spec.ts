import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RollADieComponent } from './roll-a-die.component';

describe('RollADieComponent', () => {
  let component: RollADieComponent;
  let fixture: ComponentFixture<RollADieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RollADieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RollADieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
