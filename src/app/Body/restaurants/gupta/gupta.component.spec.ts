import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuptaComponent } from './gupta.component';

describe('GuptaComponent', () => {
  let component: GuptaComponent;
  let fixture: ComponentFixture<GuptaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GuptaComponent]
    });
    fixture = TestBed.createComponent(GuptaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
