import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SignalEffectsExample } from './signal-effects-example';

describe('SignalEffectsExample', () => {
  let component: SignalEffectsExample;
  let fixture: ComponentFixture<SignalEffectsExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalEffectsExample],
    }).compileComponents();

    fixture = TestBed.createComponent(SignalEffectsExample);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
