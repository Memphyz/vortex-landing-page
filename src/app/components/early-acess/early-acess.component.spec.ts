import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EarlyAcessComponent } from './early-acess.component';

describe('EarlyAcessComponent', () => {
  let component: EarlyAcessComponent;
  let fixture: ComponentFixture<EarlyAcessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EarlyAcessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EarlyAcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
