import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { ApiService } from './shared/aiModelApi.service';

@Injectable()
export class NoResGuard implements CanActivate {
    constructor(private apiService: ApiService, private router: Router) {}

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
      ): boolean {
      if (!this.apiService.sentRequest) {
        
        // Navigate to the desired relative route
        this.router.navigate(['questions']);
        
        return false;
      }
      return true;
    }
}