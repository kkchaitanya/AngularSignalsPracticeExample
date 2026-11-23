import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SignalItemChild } from './signal-item-child';

describe('SignalItemChild', () => {
  let component: SignalItemChild;
  let fixture: ComponentFixture<SignalItemChild>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalItemChild],
    }).compileComponents();

    fixture = TestBed.createComponent(SignalItemChild);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
