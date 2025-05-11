import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aula08Component } from './aula08.component';

describe('Aula08Component', () => {
  let component: Aula08Component;
  let fixture: ComponentFixture<Aula08Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Aula08Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Aula08Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
