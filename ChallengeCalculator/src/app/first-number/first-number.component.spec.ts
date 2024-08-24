import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstNumberComponent } from './first-number.component';

describe('FirstNumberComponent', () => {
  let component: FirstNumberComponent;
  let fixture: ComponentFixture<FirstNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirstNumberComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
