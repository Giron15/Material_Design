import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AutocompleteComponent } from './componentes/autocomplete/autocomplete.component';
import { BadgeComponent } from './componentes/badge/badge.component';
import { ButtonComponent } from './componentes/button/button.component';
import { ButtonToggleComponent } from './componentes/button-toggle/button-toggle.component';
import { CardComponent } from './componentes/card/card.component';
import { CheckboxComponent } from './componentes/checkbox/checkbox.component';
import { ChipsComponent } from './componentes/chips/chips.component';
import { DividerComponent } from './componentes/divider/divider.component';
import { ExpansionComponent } from './componentes/expansion/expansion.component';
import { FormFieldComponent } from './componentes/form-field/form-field.component';
import { GridListComponent } from './componentes/grid-list/grid-list.component';
import { IconComponent } from './componentes/icon/icon.component';
import { InputComponent } from './componentes/input/input.component';
import { ListComponent } from './componentes/list/list.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { PaginatorComponent } from './componentes/paginator/paginator.component';
import { ProgressBarComponent } from './componentes/progress-bar/progress-bar.component';
import { ProgressSpinnerComponent } from './componentes/progress-spinner/progress-spinner.component';
import { RadioButtonComponent } from './componentes/radio-button/radio-button.component';
import { SelectComponent } from './componentes/select/select.component';

import { SlideToggleComponent } from './componentes/slide-toggle/slide-toggle.component';
import { SliderComponent } from './componentes/slider/slider.component';
import { SnackbarComponent } from './componentes/snackbar/snackbar.component';
import { SortHeaderComponent } from './componentes/sort-header/sort-header.component';
import { StepperComponent } from './componentes/stepper/stepper.component';
import { TableComponent } from './componentes/table/table.component';
import { TabsComponent } from './componentes/tabs/tabs.component';
import { ToolbarComponent } from './componentes/toolbar/toolbar.component';
import { TooltipComponent } from "./componentes/tooltip/tooltip.component";
import { TreeComponent } from './componentes/tree/tree.component';

@Component({
  selector: 'app-root',
  standalone: true,

  imports: [RouterOutlet,
    AutocompleteComponent,
    BadgeComponent,
    ButtonComponent,
    ButtonToggleComponent,
    CardComponent,
    CheckboxComponent,
    ChipsComponent,
    DividerComponent,
    ExpansionComponent,
    FormFieldComponent,
    GridListComponent,
    IconComponent,
    InputComponent,
    ListComponent,
    MenuComponent,
    PaginatorComponent,
    ProgressBarComponent,
    ProgressSpinnerComponent,
    RadioButtonComponent,
    SelectComponent,
    
    SlideToggleComponent,
    SliderComponent,
    SnackbarComponent,
    SortHeaderComponent,
    StepperComponent,
    TableComponent,
    TabsComponent,
    ToolbarComponent,
    TooltipComponent,
    TreeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'UnidadDos';
}
