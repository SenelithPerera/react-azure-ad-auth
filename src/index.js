import { runWithAdal } from 'react-adal';
import { authContext } from './adalConfig';

// set DO_NOT_LISTEN to true to stop login in from index.js 
const DO_NOT_LISTEN = false;
/**
 * 
 * wraps indexApp.js with the runWithAdal 
 * method from react-adal, which ensures 
 * the user is signed with Azure AD before 
 * loading indexApp.js:
 * 
 */
runWithAdal(authContext, () => {
  /**
   * This index wrap is needed because ADAL 
   * use iframes for token silent refresh, 
   * and we do not want to have duplicated 
   * ReactApp started on iframes too!
   */
  require('./indexApp')

}, DO_NOT_LISTEN);
