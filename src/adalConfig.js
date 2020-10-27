import { AuthenticationContext, adalFetch, withAdalLogin } from 'react-adal';

export const adalConfig = {
  tenant: '<tenant-id>',
  clientId: '<client-id>',
  redirectUri: '<redirect-url>',
  endpoints: {
    api: '' // <-- The Azure AD-protected API
  },
  oauth2AllowIdTokenImplicitFlow: true,
  cacheLocation: 'localStorage'
}

export const authContext = new AuthenticationContext(adalConfig);

// returns token from local storage.
export const getToken = () => authContext.getCachedToken(adalConfig.clientId);

export const adalApiFetch = (fetch, url, options) => adalFetch(authContext, adalConfig.endpoints.api, fetch, url, options);

export const withAdalLoginApi = withAdalLogin(authContext, adalConfig.endpoints.api)