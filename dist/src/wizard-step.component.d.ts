import { EventEmitter } from '@angular/core';
export declare class WizardStepComponent {
    title: string;
    hidden: boolean;
    isValid: boolean;
    showNext: boolean;
    showPrev: boolean;
    onNext: EventEmitter<any>;
    onPrev: EventEmitter<any>;
    onComplete: EventEmitter<any>;
    private _isActive;
    isDisabled: boolean;
    constructor();
    isActive: boolean;
}
