import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aula05Component } from './aula05.component';

describe('Aula05Component', () => {
  let component: Aula05Component;
  let fixture: ComponentFixture<Aula05Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Aula05Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Aula05Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
