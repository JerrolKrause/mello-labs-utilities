import { Component, OnInit, EventEmitter} from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

export interface IErrorApi {
	errorMsg?: string;
	headers?: object;
	message?: string;
	ok?: boolean;
	status?: number;
	_body?: string;
	statusText?: string;
	type?: number;
	url?: string;
}

@Component({
    selector: 'confirmation-modal',
    templateUrl: './confirmation-modal.component.html'
})
export class ConfirmationModalComponent implements OnInit {

    public waiting: boolean = false;
    public error: IErrorApi;
    public data: any; // Data is actually passed through the modal service not here
	public dataAlt: any; // Data is actually passed through the modal service not here
	public onSuccess: EventEmitter<any> = new EventEmitter();

    constructor(
        private modalService: NgbModal,
        public activeModal: NgbActiveModal
    ) { }

    ngOnInit() {}
    
    /**
     * Submit the form
     */
    submit() {
		this.waiting = true;
		this.error = null;
		this.activeModal.close('Success');
    }//end submit

}
