import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApirestinfoComponent } from './apirestinfo.component';

describe('ApirestinfoComponent', () => {
  let component: ApirestinfoComponent;
  let fixture: ComponentFixture<ApirestinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApirestinfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApirestinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
