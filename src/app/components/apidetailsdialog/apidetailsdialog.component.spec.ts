import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApidetailsdialogComponent } from './apidetailsdialog.component';

describe('ApidetailsdialogComponent', () => {
  let component: ApidetailsdialogComponent;
  let fixture: ComponentFixture<ApidetailsdialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApidetailsdialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApidetailsdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
