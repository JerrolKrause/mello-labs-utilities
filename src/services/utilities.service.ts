import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UtilitiesService {

	/** Holds postmessage response */
	private postMessage$: Subject<MessageEvent> = new Subject();
	/** Holds event listener for postMessage */
	private postMessageListener;
	/** The origin domain to whitelist incoming post messages */
	private postMessageOrigin: string;

	constructor(
	) {
		this.postMessage$ = new Subject();
	}

	/**
	 * Listen to postMessage events
	 * @param origin OPTIONAL: The origin domain that the post message is expected from for whitelisting. IE 'http://localhost:4200'.
	 * Leave blank if origin checking not needed or is done manually
	 */
	public postMessageListen(origin: string = null) {
		this.postMessageListener = window.addEventListener('message', this.messageReceived.bind(this), false); // Add an event listener
		this.postMessageOrigin = origin; // Set origin
		return this.postMessage$.asObservable(); // Return observable
	}

	/**
	 * When a message is received from postMessage
	 * @param event
	 */
	private messageReceived(event: MessageEvent) {
		// Make sure this isn't a null message event
		// Ignore requests where the originator matches the current domain
		if (event.data && event.data.type != 'webpackOk' && event.origin != window.location.origin) {
			// console.warn('messageReceived', event)
			// If this is from the correct original url and has a token
			if ((this.postMessageOrigin && event.origin == this.postMessageOrigin) || this.postMessageOrigin == null) {
				this.postMessage$.next(event);
			}
			// Add some error messaging to check for origin
			else if (event.origin != this.postMessageOrigin) {
				console.error('This workstation was loaded from an unauthorized client');
			}
		}
	}
    
	/**
	* Copy the selected string to the clipboard
	*/
	public copyToClipboard(text: string) {
		if ((<any>window).clipboardData && (<any>window).setData) {
			// IE specific code path to prevent textarea being shown while dialog is visible.
			return (<any>window).clipboardData.setData("Text", text);
		} else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
			var textarea = document.createElement("textarea");
			textarea.textContent = text;
			textarea.style.position = "fixed";  // Prevent scrolling to bottom of page in MS Edge.
			document.body.appendChild(textarea);
			textarea.select();
			try {
				return document.execCommand("copy");  // Security exception may be thrown by some browsers.
			} catch (ex) {
				console.warn("Copy to clipboard failed.", ex);
				return false;
			} finally {
				document.body.removeChild(textarea);
			}
		}
	}
	
}
