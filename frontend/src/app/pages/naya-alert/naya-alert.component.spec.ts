import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NayaAlertComponent } from './naya-alert.component';

describe('NayaAlertComponent', () => {
  let component: NayaAlertComponent;
  let fixture: ComponentFixture<NayaAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NayaAlertComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NayaAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
