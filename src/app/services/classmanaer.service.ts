import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClassManagerService {
  private currentClass: string = 'main-hero-area2';

  setClass(className: string) {
    this.currentClass = className;
  }

  getClass(): string {
    return this.currentClass;
  }
}
