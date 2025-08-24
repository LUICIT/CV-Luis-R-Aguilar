import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
    name: 'appSafeUrl',
    standalone: true
})
export class SafeUrlPipe implements PipeTransform {

    constructor(
        private readonly domSanitizer: DomSanitizer
    ) {
    }

    transform(url: string): any {
        return this.domSanitizer.bypassSecurityTrustUrl(url);
    }
}
