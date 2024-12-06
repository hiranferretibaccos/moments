import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewMomentComponent } from './new-moment.component';

describe('NewMomentComponent', () => {
  let component: NewMomentComponent;
  let fixture: ComponentFixture<NewMomentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewMomentComponent],
    });
    fixture = TestBed.createComponent(NewMomentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
