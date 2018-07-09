import { Component } from '@angular/core';

import {SelectPage} from "../select/select";
import {CardsPage} from "../cards/cards";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = SelectPage;
  tab2Root = CardsPage;

  constructor() {

  }
}
