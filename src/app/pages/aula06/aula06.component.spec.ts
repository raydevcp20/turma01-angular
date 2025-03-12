import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aula06Component } from './aula06.component';

describe('Aula06Component', () => {
  let component: Aula06Component;
  let fixture: ComponentFixture<Aula06Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Aula06Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Aula06Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
