import { Component, OnInit } from '@angular/core';
import {Gruplac} from '../../../core/models/gruplac.model';
import { GruplacService } from '../../../core/services/gruplac/gruplac.service';
import { ThematicByGroupService } from '../../../core/services/thematic-by-group/thematic-by-group.service';
import { ThematicByGroup } from '../../../core/models/thematic-by-group';

@Component({
  selector: 'app-group-report-selector',
  templateUrl: './group-report-selector.component.html',
  styleUrls: ['./group-report-selector.component.css']
})
export class GroupReportSelectorComponent implements OnInit {
  gruplacDefinitions: Gruplac[] = [];
  selectedGroupLacName: string;
  mostWorkedThematicsByGroups: ThematicByGroup[] = [];
  diplayGraphics = false;
  constructor(private gruplacService: GruplacService,
              private thematicByGroupService: ThematicByGroupService,
              ) { }

  ngOnInit(): void {
    this.getGruplacsDefinitions();
  }
  getGruplacsDefinitions(): void {
    this.gruplacService.getAllGruplacs().subscribe(gruplacDefinitions => {
      this.gruplacDefinitions = gruplacDefinitions['definitions']
    });
  }

  captureData(selectedGroupLacCode): void {
    console.log(selectedGroupLacCode);
    this.thematicByGroupService.getMostWorkedThematics(this.selectedGroupLacName).subscribe( thematicsByGroup => {
    this.mostWorkedThematicsByGroups = thematicsByGroup['reports'];
    console.log(this.mostWorkedThematicsByGroups);
    this.diplayGraphics = true;
    });
  }
}
