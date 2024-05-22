import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarbequeComponent } from './barbeque.component';

describe('BarbequeComponent', () => {
  let component: BarbequeComponent;
  let fixture: ComponentFixture<BarbequeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BarbequeComponent]
    });
    fixture = TestBed.createComponent(BarbequeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
