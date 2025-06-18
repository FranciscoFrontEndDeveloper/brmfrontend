import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApidashboardComponent } from './apidashboard.component';

describe('ApidashboardComponent', () => {
  let component: ApidashboardComponent;
  let fixture: ComponentFixture<ApidashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApidashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApidashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
