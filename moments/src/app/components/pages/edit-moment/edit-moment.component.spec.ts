import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditMomentComponent } from './edit-moment.component';

describe('EditMomentComponent', () => {
  let component: EditMomentComponent;
  let fixture: ComponentFixture<EditMomentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditMomentComponent],
    });
    fixture = TestBed.createComponent(EditMomentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
