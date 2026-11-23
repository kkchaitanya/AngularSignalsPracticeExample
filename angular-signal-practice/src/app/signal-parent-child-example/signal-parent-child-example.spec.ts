import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SignalParentChildExample } from './signal-parent-child-example';

describe('SignalParentChildExample', () => {
  let component: SignalParentChildExample;
  let fixture: ComponentFixture<SignalParentChildExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalParentChildExample],
    }).compileComponents();

    fixture = TestBed.createComponent(SignalParentChildExample);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
