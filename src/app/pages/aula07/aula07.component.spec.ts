import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aula07Component } from './aula07.component';

describe('Aula07Component', () => {
  let component: Aula07Component;
  let fixture: ComponentFixture<Aula07Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Aula07Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Aula07Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
