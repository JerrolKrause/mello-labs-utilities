import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FieldComponent } from './components/field/field.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';

export * from './components/field/field.component';
export * from './components/file-upload/file-upload.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
	  FieldComponent,
	  FileUploadComponent
  ],
  exports: [
	  FieldComponent,
	  FileUploadComponent
  ]
})
export class FormToolsModule {
  static forRoot(): ModuleWithProviders {
    return {
		ngModule: FormToolsModule,
      providers: []
    };
  }
}
