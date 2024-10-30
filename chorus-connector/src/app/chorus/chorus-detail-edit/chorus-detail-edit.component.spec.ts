import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChorusDetailEditComponent } from './chorus-detail-edit.component';

describe('ChorusDetailEditComponent', () => {
  let component: ChorusDetailEditComponent;
  let fixture: ComponentFixture<ChorusDetailEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChorusDetailEditComponent]
    });
    fixture = TestBed.createComponent(ChorusDetailEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
