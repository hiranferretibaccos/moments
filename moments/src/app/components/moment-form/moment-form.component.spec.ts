import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MomentFormComponent } from './moment-form.component';

describe('MomentFormComponent', () => {
  let component: MomentFormComponent;
  let fixture: ComponentFixture<MomentFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MomentFormComponent],
    });
    fixture = TestBed.createComponent(MomentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
