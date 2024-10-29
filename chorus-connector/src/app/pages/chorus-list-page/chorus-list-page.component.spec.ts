import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChorusListPageComponent } from './chorus-list-page.component';

describe('ChorusListPageComponent', () => {
  let component: ChorusListPageComponent;
  let fixture: ComponentFixture<ChorusListPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChorusListPageComponent]
    });
    fixture = TestBed.createComponent(ChorusListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
