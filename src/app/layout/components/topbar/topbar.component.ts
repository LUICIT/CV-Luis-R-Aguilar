import { CommonModule } from '@angular/common';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ScrollToModule, ScrollToService } from '@nicky-lenaers/ngx-scroll-to';
import * as data from '../../../../../public/assets/data/information.json';
import { InformationModel } from '../../../../../public/assets/data/Information.model';

@Component({
    selector: 'app-topbar',
    imports: [RouterLink, CommonModule, ScrollToModule],
    templateUrl: './topbar.component.html',
    styles: ``,
    providers: [ScrollToService],
})
export class TopbarComponent implements OnInit {

    isSidebarVisible: boolean = false;
    isOverlayActive: boolean = false;
    currentSection = 'list-item-1';

    readonly data: InformationModel = data;

    constructor(
        private readonly renderer: Renderer2
    ) {
    }

    ngOnInit(): void {
        // Dark mode is fixed, including for visitors with a saved light theme.
        this.renderer.removeClass(document.body, 'light-mode');
    }

    setActiveLink(link: string): void {
        this.currentSection = link;
    }

    toggleSidebar() {
        this.isSidebarVisible = !this.isSidebarVisible;
        this.isOverlayActive = this.isSidebarVisible;

        if (this.isSidebarVisible) {
            this.renderer.addClass(document.body, 'on-side');
        } else {
            this.renderer.removeClass(document.body, 'on-side');
        }
    }

    closeSidebar() {
        this.isSidebarVisible = false;
        this.isOverlayActive = false;
        this.renderer.removeClass(document.body, 'on-side');
    }
}
