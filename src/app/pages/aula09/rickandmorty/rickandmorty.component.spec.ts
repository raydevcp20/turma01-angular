import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RickandmortyComponent } from './rickandmorty.component';

describe('RickandmortyComponent', () => {
  let component: RickandmortyComponent;
  let fixture: ComponentFixture<RickandmortyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RickandmortyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RickandmortyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
