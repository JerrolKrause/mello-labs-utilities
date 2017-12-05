import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
//import { ConfirmationModalComponent } from './components/modals/confirmation/confirmation-modal.component';
//import { LogoutModalComponent } from './components/modals/logout/logout-modal.component';
//export * from './components/modals/confirmation/confirmation-modal.component';
//export * from './components/modals/logout/logout-modal.component';

// Services
import { UtilitiesService } from './services/utilities.service';
import { LoggingService } from './services/logging.service';
export * from './services/utilities.service'; 
export * from './services/logging.service';

// Pipes
import { SafeHtmlPipe } from './pipes/safeHtml.pipe';
import { PhoneNumberPipe } from './pipes/phoneNumber.pipe';
export * from './pipes/safeHtml.pipe';
export * from './pipes/phoneNumber.pipe';

// Only include components in declarations and exports if NOT used in entryComponents (IE Modals). 
// Modals need to be imported and injected in the core app so they are available to entryComponents

@NgModule({
	imports: [
		CommonModule
	],
	providers: [
		UtilitiesService, LoggingService
	],
	declarations: [
		// Components

		// Pipes
		SafeHtmlPipe, PhoneNumberPipe
	],
	exports: [
	// Components

		// Pipes
		SafeHtmlPipe, PhoneNumberPipe

	]
	// Someday this will work
	//,entryComponents: [ ConfirmationModalComponent, LogoutModalComponent ]
})
export class UtilitiesModule {
  static forRoot(): ModuleWithProviders {
    return {
		ngModule: UtilitiesModule,
		providers: [
			UtilitiesService, LoggingService
		]
    };
  }
}
