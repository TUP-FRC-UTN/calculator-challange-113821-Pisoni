import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondNumberComponent } from './second-number.component';

describe('SecondNumberComponent', () => {
  let component: SecondNumberComponent;
  let fixture: ComponentFixture<SecondNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondNumberComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
