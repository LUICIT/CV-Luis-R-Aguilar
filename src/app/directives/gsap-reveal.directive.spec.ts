import { ElementRef } from '@angular/core';
import { GsapRevealDirective } from './gsap-reveal.directive';
import { GsapService } from '../services/gsap.service';

describe('GsapRevealDirective', () => {
  it('should pass the host element to the animation service after rendering', () => {
    const element = document.createElement('div');
    const service = jasmine.createSpyObj<GsapService>('GsapService', ['animateReveal']);
    const directive = new GsapRevealDirective(new ElementRef(element), service);
    directive.ngAfterViewInit();
    expect(service.animateReveal).toHaveBeenCalledOnceWith(element);
  });
});
