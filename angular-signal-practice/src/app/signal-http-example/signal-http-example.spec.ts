import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SignalHttpExample } from './signal-http-example';

describe('SignalHttpExample', () => {
  let component: SignalHttpExample;
  let fixture: ComponentFixture<SignalHttpExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalHttpExample],
    }).compileComponents();

    fixture = TestBed.createComponent(SignalHttpExample);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
