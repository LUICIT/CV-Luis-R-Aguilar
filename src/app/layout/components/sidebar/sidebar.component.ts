import { Component, HostListener, Renderer2 } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GsapRevealDirective } from '../../../directives/gsap-reveal.directive';
import { CommonModule } from '@angular/common';
import { ClassManagerService } from '../../../services/classmanaer.service';
import { ScrollToModule, ScrollToService } from '@nicky-lenaers/ngx-scroll-to';
import { CounterDirective } from '../../../directives/counter.directive';
import * as data from '../../../../../public/assets/data/information.json';
import { InformationModel } from '../../../../../public/assets/data/Information.model';
import { SafeUrlPipe } from '../../../pipes/safe-url.pipe';

@Component({
    selector: 'app-sidebar',
    imports: [
        GsapRevealDirective,
        CounterDirective,
        CommonModule,
        RouterOutlet,
        ScrollToModule,
        SafeUrlPipe,
    ],
    templateUrl: './sidebar.component.html',
    styles: ``,
    providers: [ScrollToService],
})
export class SidebarComponent {

    currentSection = 'list-item-1';
    year = new Date().getFullYear();
    sectionIds = [
        'list-item-1',
        'list-item-2',
        'list-item-3',
    ];

    readonly data: InformationModel = data;

    constructor(
        private readonly renderer: Renderer2,
        public classManager: ClassManagerService
    ) {
    }

    @HostListener('window:scroll', [])
    onScroll(): void {
        this.checkActiveSection();
    }

    checkActiveSection(): void {
        for (let id of this.sectionIds) {
            const section = document.getElementById(id);
            if (section) {
                const rect = section.getBoundingClientRect();
                if (rect.top >= 0 && rect.top <= window.innerHeight / 3) {
                    this.currentSection = id;
                    break; // Stop checking once we find the first visible section
                }
            }
        }
    }

    setActiveLink(sectionId: string): void {
        this.currentSection = sectionId;
    }
}
