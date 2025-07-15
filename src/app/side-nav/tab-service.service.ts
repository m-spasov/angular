import { Injectable, signal } from '@angular/core';

@Injectable()
export class TabServiceService {
  private _activeTab = signal('Dashboard');

  setActiveTab(tab: string) {
    this._activeTab.set(tab);
  }

  getActiveTab() {
    return this._activeTab;
  }
}
