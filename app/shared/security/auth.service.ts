import { Injectable } from '@angular/core';
import { AuthHttp, tokenNotExpired } from 'angular2-jwt';

// Avoid name not found warnings
declare var Auth0Lock: any;

@Injectable()
export class AuthService {
    
  constructor() {
      // Add callback for lock `authenticated` event
    this.lock.on("authenticated", (authResult:any) => {
      alert("got callback");
      localStorage.setItem('id_token', authResult.idToken);
      localStorage.setItem('test', "123");
    });
  }

options = {
  auth: {
    redirectUrl: 'http://be4c9c39.ngrok.io', // replace with your ngrok URL if running on localhost or behind a firewall
    responseType: 'token'
  }
};  

  // Configure Auth0
  lock = new Auth0Lock('0fGZyHCsBImAYwrHhFKci4NZqtxDqC39', 'zodd.auth0.com', this.options);

  // getThing() {
  //   this.authHttp.get('http://example.com/api/thing')
  //     .subscribe(
  //       data => this.thing = data.toString(),
  //       err => console.log(err),
  //       () => console.log('Request Complete')
  //     );
  // }
  
  login() {
    // Call the show method to display the widget.
    
      localStorage.setItem('login', "123");
    this.lock.show();
  }

  isAuthenticated() {
    // Check if there's an unexpired JWT
    // This searches for an item in localStorage with key == 'id_token'
    return tokenNotExpired();
  }

  logout() {
    // Remove token from localStorage
    localStorage.removeItem('id_token');
  }
}