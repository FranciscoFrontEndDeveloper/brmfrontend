import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApimainComponent } from './apimain.component';

describe('ApimainComponent', () => {
  let component: ApimainComponent;
  let fixture: ComponentFixture<ApimainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApimainComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApimainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
