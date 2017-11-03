import { AnalistasService } from './analista.service';
/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
//import { AnalistasService } from './analista.service';

describe('Service: Analistas', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AnalistasService]
    });
  });

  it('should ...', inject([AnalistasService], (service: AnalistasService) => {
    expect(service).toBeTruthy();
  }));
});
