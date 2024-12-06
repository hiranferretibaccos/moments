import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MomentComponent } from './moment.component';

describe('MomentComponent', () => {
  let component: MomentComponent;
  let fixture: ComponentFixture<MomentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MomentComponent],
    });
    fixture = TestBed.createComponent(MomentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
