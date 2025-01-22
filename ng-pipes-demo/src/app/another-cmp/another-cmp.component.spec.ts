import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnotherCmpComponent } from './another-cmp.component';

describe('AnotherCmpComponent', () => {
  let component: AnotherCmpComponent;
  let fixture: ComponentFixture<AnotherCmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnotherCmpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnotherCmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
