import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfirmationModalComponent } from './components/modals/confirmation/confirmation-modal.component';
import { LogoutModalComponent } from './components/modals/logout/logout-modal.component';

import { UtilitiesService } from './services/utilities.service';
import { LoggingService } from './services/logging.service';

export * from './services/utilities.service'; 
export * from './services/logging.service';

export * from './components/modals/confirmation/confirmation-modal.component';
export * from './components/modals/logout/logout-modal.component';

@NgModule({
  imports: [
	  CommonModule
  ],
  declarations: [
	  ConfirmationModalComponent, LogoutModalComponent
  ],
  exports: [
	  ConfirmationModalComponent, LogoutModalComponent
  ]//,entryComponents: [ ConfirmationModalComponent, LogoutModalComponent ]
})
export class UtilitiesModule {
  static forRoot(): ModuleWithProviders {
    return {
		ngModule: UtilitiesModule,
		providers: [ UtilitiesService, LoggingService ]
    };
  }
}
