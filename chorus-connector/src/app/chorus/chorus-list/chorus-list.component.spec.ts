import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChorusListComponent } from './chorus-list.component';

describe('ChorusListComponent', () => {
  let component: ChorusListComponent;
  let fixture: ComponentFixture<ChorusListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChorusListComponent]
    });
    fixture = TestBed.createComponent(ChorusListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
