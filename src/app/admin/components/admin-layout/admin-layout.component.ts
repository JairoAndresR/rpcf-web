import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { NavItem } from "../../../core/models/nav-item.model";
import { NavService } from "../../../core/services/nav/nav.service";

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})

export class AdminLayoutComponent implements OnInit, AfterViewInit {
  @ViewChild('appDrawer') appDrawer: ElementRef;

  navItems: NavItem[] = [
    {
      displayName: 'Inicio',
      iconName: 'Home',
      route: '',
    },
    {
      displayName: 'Configuración recoletor',
      iconName: '',
      route: 'collector-configuration',
      children: [
        {
          displayName: `Definición de GrupLAC's`,
          route: 'collector-configuration/gruplac',
        },
        {
          displayName: 'Definición de productos',
          route: 'collector-configuration/products'
        }
      ]
    }
  ]

  constructor(private navService: NavService) { }
  
  ngAfterViewInit(): void {
    this.navService.appDrawer = this.appDrawer;
  }

  ngOnInit(): void {
    
  }

}
