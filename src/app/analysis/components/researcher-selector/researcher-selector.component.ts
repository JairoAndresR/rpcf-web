import { Component, OnInit } from '@angular/core';
import {GruplacService} from '../../../core/services/gruplac/gruplac.service';
import {Gruplac} from '../../../core/models/gruplac.model';
import {Researcher} from '../../../core/models/researcher.model';
import { ResearcherService } from '../../../core/services/researcher/researcher.service';
import {ThematicByGroup} from "../../../core/models/thematic-by-group";

@Component({
  selector: 'app-researcher-selector',
  templateUrl: './researcher-selector.component.html',
  styleUrls: ['./researcher-selector.component.css']
})
export class ResearcherSelectorComponent implements OnInit {
  gruplacDefinitions: Gruplac[] = [];
  // mostWorkedThematicsByResearcher: ThematicByGroup[] = [];
  selectedGroupLacName: string;
  disableResearchers = true;
  researchers: Researcher[] = [];
  selectedGroupLacCode: string;
  diplayGraphics = false;

  mostWorkedThematicsByResearcher =  [
      {
        "value": "fuzzy",
        "count": 16
      },
      {
        "value": "digital",
        "count": 14
      },
      {
        "value": "search",
        "count": 14
      },
      {
        "value": "logic",
        "count": 14
      },
      {
        "value": "open",
        "count": 14
      },
      {
        "value": "resources",
        "count": 13
      },
      {
        "value": "repositories",
        "count": 13
      },
      {
        "value": "aprendizaje",
        "count": 12
      },
      {
        "value": "gestión",
        "count": 12
      },
      {
        "value": "visual",
        "count": 12
      },
      {
        "value": "análisis",
        "count": 12
      },
      {
        "value": "systems",
        "count": 11
      },
      {
        "value": "environments",
        "count": 11
      },
      {
        "value": "platforms",
        "count": 11
      },
      {
        "value": "case",
        "count": 11
      },
      {
        "value": "basado",
        "count": 11
      },
      {
        "value": "quality",
        "count": 10
      },
      {
        "value": "management",
        "count": 10
      },
      {
        "value": "networks",
        "count": 10
      },
      {
        "value": "network",
        "count": 10
      },
      {
        "value": "optimization",
        "count": 9
      },
      {
        "value": "evaluate",
        "count": 9
      },
      {
        "value": "linked",
        "count": 9
      },
      {
        "value": "software",
        "count": 9
      },
      {
        "value": "decision",
        "count": 9
      },
      {
        "value": "evaluation",
        "count": 9
      },
      {
        "value": "proposal",
        "count": 9
      },
      {
        "value": "business",
        "count": 8
      },
      {
        "value": "trust",
        "count": 8
      },
      {
        "value": "educational",
        "count": 8
      },
      {
        "value": "methods",
        "count": 8
      },
      {
        "value": "virtual",
        "count": 8
      },
      {
        "value": "datos",
        "count": 8
      },
      {
        "value": "institutions",
        "count": 8
      },
      {
        "value": "redes",
        "count": 8
      },
      {
        "value": "applications",
        "count": 7
      },
      {
        "value": "dominio",
        "count": 7
      },
      {
        "value": "algorithm",
        "count": 7
      },
      {
        "value": "social",
        "count": 7
      },
      {
        "value": "interfaces",
        "count": 7
      },
      {
        "value": "techniques",
        "count": 7
      },
      {
        "value": "bogotá",
        "count": 7
      },
      {
        "value": "improve",
        "count": 7
      },
      {
        "value": "knowledge",
        "count": 7
      },
      {
        "value": "notes",
        "count": 7
      },
      {
        "value": "sistema",
        "count": 7
      },
      {
        "value": "lms",
        "count": 7
      },
      {
        "value": "mobile",
        "count": 7
      },
      {
        "value": "agua",
        "count": 7
      },
      {
        "value": "herramienta",
        "count": 6
      },
      {
        "value": "canvas",
        "count": 6
      },
      {
        "value": "viability",
        "count": 6
      },
      {
        "value": "innovación",
        "count": 6
      },
      {
        "value": "comparison",
        "count": 6
      },
      {
        "value": "sistemas",
        "count": 6
      },
      {
        "value": "influence",
        "count": 6
      },
      {
        "value": "aplicación",
        "count": 6
      },
      {
        "value": "conocimiento",
        "count": 6
      },
      {
        "value": "application",
        "count": 6
      },
      {
        "value": "analytics",
        "count": 6
      },
      {
        "value": "desarrollo",
        "count": 6
      },
      {
        "value": "ipv6",
        "count": 6
      },
      {
        "value": "control",
        "count": 6
      },
      {
        "value": "making",
        "count": 6
      },
      {
        "value": "issues",
        "count": 6
      },
      {
        "value": "variables",
        "count": 6
      },
      {
        "value": "colombia",
        "count": 6
      },
      {
        "value": "contenidos",
        "count": 6
      },
      {
        "value": "visualization",
        "count": 5
      },
      {
        "value": "ingeniería",
        "count": 5
      },
      {
        "value": "lcms",
        "count": 5
      },
      {
        "value": "dispositivos",
        "count": 5
      },
      {
        "value": "modelos",
        "count": 5
      },
      {
        "value": "academic",
        "count": 5
      },
      {
        "value": "process",
        "count": 5
      },
      {
        "value": "tecnologías",
        "count": 5
      },
      {
        "value": "machine",
        "count": 5
      },
      {
        "value": "modules",
        "count": 5
      },
      {
        "value": "economic",
        "count": 5
      },
      {
        "value": "language",
        "count": 5
      },
      {
        "value": "tecnología",
        "count": 5
      },
      {
        "value": "plataforma",
        "count": 5
      },
      {
        "value": "basada",
        "count": 5
      },
      {
        "value": "calidad",
        "count": 5
      },
      {
        "value": "modeling",
        "count": 5
      },
      {
        "value": "propuesta",
        "count": 5
      },
      {
        "value": "red",
        "count": 5
      },
      {
        "value": "engineering",
        "count": 5
      },
      {
        "value": "behavior",
        "count": 5
      },
      {
        "value": "neural",
        "count": 5
      },
      {
        "value": "service",
        "count": 5
      },
      {
        "value": "architecture",
        "count": 5
      },
      {
        "value": "design",
        "count": 5
      },
      {
        "value": "levels",
        "count": 5
      },
      {
        "value": "user",
        "count": 5
      },
      {
        "value": "mechanism",
        "count": 5
      },
      {
        "value": "utilizando",
        "count": 5
      },
      {
        "value": "higher",
        "count": 5
      },
      {
        "value": "security",
        "count": 4
      }];

  constructor(private gruplacService: GruplacService,
              private researchService: ResearcherService) { }

  ngOnInit(): void {
    this.getGruplacsDefinitions();
  }

  getGruplacsDefinitions(): void {
    this.gruplacService.getAllGruplacs().subscribe(gruplacDefinitions => {
      this.gruplacDefinitions = gruplacDefinitions['definitions'];
    });
  }

  getResearchers(selectedGroupLacCode): void {
    this.researchService.getAllResearchers(selectedGroupLacCode).subscribe(researchers => {
      this.researchers = researchers['authors'];
    });
  }

  captureData(selectedGroupLacCode): void {
    console.log(selectedGroupLacCode);
    // this.thematicByGroupService.getMostWorkedThematics(this.selectedGroupLacName).subscribe( thematicsByGroup => {
    //  this.mostWorkedThematicsByResearcher = thematicsByGroup['reports'];
    //  console.log(this.mostWorkedThematicsByGroups);
    //  this.diplayGraphics = true;
    // });
    this.diplayGraphics = true;
  }
  onChangeGroup(): void {
    console.log(this.selectedGroupLacCode);
    this.getResearchers(this.selectedGroupLacCode);
    this.disableResearchers = false;
  }
}
