import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UtilitiesService } from './services/utilities.service';
import { LoggingService } from './services/logging.service';

export * from './services/utilities.service'; 
export * from './services/logging.service';

@NgModule({
  imports: [
	  CommonModule
  ],
  declarations: [
  ],
  exports: [
  ]
})
export class UtilitiesModule {
  static forRoot(): ModuleWithProviders {
    return {
		ngModule: UtilitiesModule,
		providers: [ UtilitiesService, LoggingService ]
    };
  }
}
