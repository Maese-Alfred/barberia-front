import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalBarberosComponent } from './modal-barberos.component';

describe('ModalBarberosComponent', () => {
  let component: ModalBarberosComponent;
  let fixture: ComponentFixture<ModalBarberosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalBarberosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalBarberosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
