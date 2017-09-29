import { Component, Output, EventEmitter, ContentChildren, QueryList, AfterContentInit } from '@angular/core';
import { WizardNextStepComponent } from './wizard-step.component';
import { Animation } from './animation';

@Component({
  selector: 'form-wizard',
  animations: [Animation],
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.scss']
})
export class WizardNextComponent implements AfterContentInit {
  @ContentChildren(WizardNextStepComponent)
  wizardSteps: QueryList<WizardNextStepComponent>;

  private _steps: Array<WizardNextStepComponent> = [];
  private _isCompleted: boolean = false;

  @Output()
  onStepChanged: EventEmitter<WizardNextStepComponent> = new EventEmitter<WizardNextStepComponent>();

  constructor() { }

  ngAfterContentInit() {
    this.wizardSteps.forEach(step => this._steps.push(step));
    this.steps[0].isActive = true;
  }

  get steps(): Array<WizardNextStepComponent> {
    return this._steps.filter(step => !step.hidden);
  }

  get isCompleted(): boolean {
    return this._isCompleted;
  }

  get activeStep(): WizardNextStepComponent {
    return this.steps.find(step => step.isActive);
  }

  set activeStep(step: WizardNextStepComponent) {
    if (step !== this.activeStep && !step.isDisabled) {
      this.activeStep.isActive = false;
      step.isActive = true;
      this.onStepChanged.emit(step);
    }
  }

  public get activeStepIndex(): number {
    return this.steps.indexOf(this.activeStep);
  }

  get hasNextStep(): boolean {
    return this.activeStepIndex < this.steps.length - 1;
  }

  get hasPrevStep(): boolean {
    return this.activeStepIndex > 0;
  }

  public goToStep(step: WizardNextStepComponent): void {
    if (!this.isCompleted) {
      this.activeStep = step;
    }
  }

  public next(): void {
    if (this.hasNextStep) {
      let nextStep: WizardNextStepComponent = this.steps[this.activeStepIndex + 1];
      this.activeStep.onNext.emit();
      nextStep.isDisabled = false;
      this.activeStep = nextStep;
    }
  }

  public previous(): void {
    if (this.hasPrevStep) {
      let prevStep: WizardNextStepComponent = this.steps[this.activeStepIndex - 1];
      this.activeStep.onPrev.emit();
      prevStep.isDisabled = false;
      this.activeStep = prevStep;
    }
  }

  public complete(): void {
    this.activeStep.onComplete.emit();
    this._isCompleted = true;
  }

}
