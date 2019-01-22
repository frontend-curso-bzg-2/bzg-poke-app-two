import { TestBed } from '@angular/core/testing';
import { AngularFireAuth } from "@angular/fire/auth";

import { AuthService } from './auth.service';

describe('AuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [AngularFireAuth]
  }));

  it('should be created', () => {
    const service: AuthService = TestBed.get(AuthService);
    expect(service).toBeTruthy();
  });
});
