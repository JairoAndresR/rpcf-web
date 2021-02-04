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
  selectedGroupLacCode: string;
  mostWorkedThematicsByGroups: ThematicByGroup[] = [];
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

  captureData(idGruplacSelected): void {
    console.log(idGruplacSelected);
    this.thematicByGroupService.getMostWorkedThematics(this.selectedGroupLacCode).subscribe( thematicsByGroup => {
      this.mostWorkedThematicsByGroups = thematicsByGroup['thematics'];
    });
  }
}
