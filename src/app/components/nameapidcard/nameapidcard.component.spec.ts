import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NameapidcardComponent } from './nameapidcard.component';

describe('NameapidcardComponent', () => {
  let component: NameapidcardComponent;
  let fixture: ComponentFixture<NameapidcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NameapidcardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NameapidcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
