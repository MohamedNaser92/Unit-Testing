// describe("3-hero service (http) integration testing:", () => {

//     it("getHeroes function: send request and receive response successfully", () => { })
//     it("updateHero function: send request and receive response successfully", () => { })
// })

import { TestBed, inject } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HeroServiceForLab } from './hero.lab.service';
import { Hero } from '../../hero';

describe('3-hero service (http) integration testing:', () => {
  let service: HeroServiceForLab;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HeroServiceForLab],
    });

    service = TestBed.inject(HeroServiceForLab);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('getHeroes function: send request and receive response successfully', () => {
    const dummyHeroes: Hero[] = [
      { id: 1, name: 'Hero 1' },
      { id: 2, name: 'Hero 2' },
    ];

    service.getHeroes().subscribe((heroes) => {
      expect(heroes).toEqual(dummyHeroes);
    });

    const req = httpTestingController.expectOne('http://localhost:4200/heroes');
    expect(req.request.method).toBe('GET');
    req.flush(dummyHeroes);
  });

  it('updateHero function: send request and receive response successfully', () => {
    const updatedHero: Hero = { id: 1, name: 'Updated Hero' };

    service.updateHero(updatedHero).subscribe((response) => {
      expect(response).toBeTruthy();
    });

    const req = httpTestingController.expectOne('http://localhost:4200/heroes');
    expect(req.request.method).toBe('PUT');
    req.flush(updatedHero);
  });

  afterEach(() => {
    httpTestingController.verify();
  });
});
