import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SignalComputedExample } from './signal-computed-example';

describe('SignalComputedExample', () => {
  let component: SignalComputedExample;
  let fixture: ComponentFixture<SignalComputedExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalComputedExample],
    }).compileComponents();

    fixture = TestBed.createComponent(SignalComputedExample);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
