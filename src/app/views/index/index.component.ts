import { Component } from '@angular/core';
import { ClassManagerService } from '../../services/classmanaer.service';
import { InformationModel } from '../../../../public/assets/data/Information.model';
import * as data from '../../../../public/assets/data/information.json';

@Component({
    selector: 'app-index',
    imports: [],
    templateUrl: './index.component.html',
    styles: ``
})
export class IndexComponent {

    readonly data: InformationModel = data;

    constructor(
        private readonly classManager: ClassManagerService
    ) {
        this.classManager.setClass('main-hero-area2');
    }

}
