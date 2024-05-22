import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BluemoonComponent } from './bluemoon.component';

describe('BluemoonComponent', () => {
  let component: BluemoonComponent;
  let fixture: ComponentFixture<BluemoonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BluemoonComponent]
    });
    fixture = TestBed.createComponent(BluemoonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
