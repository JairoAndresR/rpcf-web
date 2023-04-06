import {Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import {CloudData, CloudOptions} from 'angular-tag-cloud-module';


@Component({
    selector: 'app-cloud',
    templateUrl: './wordcloud.component.html',
    styleUrls: ['./wordcloud.component.css']
})
export class WordcloudComponent implements OnChanges {
    @Input() thematicsList;
    options: CloudOptions = {
        // if width is between 0 and 1 it will be set to the width of the upper element multiplied by the value
        width: 1000,
        // if height is between 0 and 1 it will be set to the height of the upper element multiplied by the value
        height: 400,
        overflow: false,
    };

    data: CloudData[] = [];

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.thematicsList && changes.thematicsList.currentValue) {
            this.data = [];
            for (let i = 0; i < 14 && i < changes.thematicsList.currentValue.length; i++) {
                this.data.push({text: changes.thematicsList.currentValue[i].value, weight: changes.thematicsList.currentValue[i].count});
            }
        }
    }
}
