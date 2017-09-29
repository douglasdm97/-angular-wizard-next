import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WizardNextComponent } from './src/wizard.component';
import { WizardNextStepComponent } from './src/wizard-step.component';

export * from './src/wizard.component';
export * from './src/wizard-step.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    WizardNextComponent,
    WizardNextStepComponent
  ],
  exports: [
    WizardNextComponent,
    WizardNextStepComponent
  ]
})
export class FormWizardNextModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: FormWizardNextModule
    };
  }
}
