import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aula09Component } from './aula09.component';

describe('Aula09Component', () => {
  let component: Aula09Component;
  let fixture: ComponentFixture<Aula09Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Aula09Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Aula09Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
