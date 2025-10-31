import { Component, EventEmitter, HostBinding, HostListener, Output } from '@angular/core';

interface SidebarNavItem {
  label: string;
  route?: string;
  icon?: string;
  iconLibrary?: 'pi' | 'mat';
  routerLinkActiveOptions?: { exact: boolean };
  isActive?: boolean;
  isSubItem?: boolean;
}

interface SidebarNavSection {
  label: string;
  items: SidebarNavItem[];
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  standalone: false
})
export class SidebarComponent {
  @Output() collapsedChange = new EventEmitter<boolean>();
  isCollapsed = true;
  private isHovering = false;

  @HostBinding('class.is-collapsed')
  get hostIsCollapsed(): boolean {
    return this.isCollapsed;
  }

  @HostBinding('class.is-hover-expanded')
  get hostIsHoverExpanded(): boolean {
    return this.isCollapsed && this.isHovering;
  }

  get isHoverExpanded(): boolean {
    return this.isCollapsed && this.isHovering;
  }

  get shouldShowCollapsedState(): boolean {
    return this.isCollapsed && !this.isHovering;
  }

  readonly primaryItems: SidebarNavItem[] = [
    {
      label: 'Dashboard',
      route: '/home',
      icon: 'dashboard',
      iconLibrary: 'mat',
      routerLinkActiveOptions: { exact: true }
    },
    {
      label: 'Enter My Pricing',
      route: '/enter-pricing',
      icon: 'pi-chart-bar',
      iconLibrary: 'pi'
    },
    {
      label: 'Insights',
      icon: 'pi-chart-line',
      iconLibrary: 'pi'
    }
  ];

  readonly sections: SidebarNavSection[] = [
    {
      label: 'Vendor Spend',
      items: [
        { label: 'Vendor Spend Analysis', isActive: true, isSubItem: true },
        { label: 'Items for Review', isSubItem: true }
      ]
    },
    {
      label: 'Procedure Analysis',
      items: [
        { label: 'Case Review', isSubItem: true },
        { label: 'Procedure Details', isSubItem: true },
        { label: 'Procedure Savings', isSubItem: true }
      ]
    },
    {
      label: 'Item Match Detail',
      items: [
        { label: 'Item Match Summary', isSubItem: true },
        { label: 'Item List', isSubItem: true }
      ]
    }
  ];

  @HostListener('mouseenter')
  handleMouseEnter(): void {
    if (this.isCollapsed) {
      this.isHovering = true;
    }
  }

  @HostListener('mouseleave')
  handleMouseLeave(): void {
    if (this.isCollapsed) {
      this.isHovering = false;
    }
  }

  toggleCollapsed(): void {
    this.isCollapsed = !this.isCollapsed;
    if (!this.isCollapsed) {
      this.isHovering = false;
    }
    this.collapsedChange.emit(this.isCollapsed);
  }
}
