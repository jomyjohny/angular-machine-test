import { TestBed, inject } from '@angular/core/testing';

import { ApiService } from './http.service';
import { HttpHandler, HttpClientModule, HttpClient } from '@angular/common/http';

describe('ApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiService,HttpClientModule, HttpClient, HttpHandler]
    });
  });

  it('should be created', inject([ApiService], (service: ApiService) => {
    expect(service).toBeTruthy();
  }));
});
