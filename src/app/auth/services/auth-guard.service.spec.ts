import { TestBed } from '@angular/core/testing';
import { AngularFireAuth } from "@angular/fire/auth";

import { AuthGuardService } from './auth-guard.service';

describe('AuthGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [AngularFireAuth]
  }));

  it('should be created', () => {
    const service: AuthGuardService = TestBed.get(AuthGuardService);
    expect(service).toBeTruthy();
  });
});
