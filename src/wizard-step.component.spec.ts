import { TestBed } from '@angular/core/testing';

import { WizardNextStepComponent } from './wizard-step.component';
import { FormWizardModule } from '../index';

describe('Wizard Step Component', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [FormWizardModule]
        });
    });

    beforeEach(() => {
        TestBed.compileComponents();
    });

    describe('when create wizard step', () => {
        it('should have a title', () => {
            let fixture = TestBed.createComponent(WizardNextStepComponent);
            fixture.componentInstance.title = 'Step1';

            fixture.detectChanges();

            expect(fixture.componentInstance.title).toBe('Step1');
        });
    });

});
