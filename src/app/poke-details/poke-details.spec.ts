import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeDetails } from './poke-details';

describe('PokeDetails', () => {
  let component: PokeDetails;
  let fixture: ComponentFixture<PokeDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokeDetails],
    }).compileComponents();

    fixture = TestBed.createComponent(PokeDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
