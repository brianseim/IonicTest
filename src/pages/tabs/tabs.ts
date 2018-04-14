import { Component } from '@angular/core';

import { ResearchPage } from '../research/research';
import { StdtemplatePage } from '../stdtemplate/stdtemplate';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ResearchPage;
  tab3Root = StdtemplatePage;

  constructor() {

  }
}
