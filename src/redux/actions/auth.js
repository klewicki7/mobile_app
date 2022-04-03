export const AUTHENTICATED_REQUEST = 'AUTHENTICATED_REQUEST';
export const SET_TOKENS = 'SET_TOKENS';
export const SETTING_TOKENS = 'SETTING_TOKENS';

export default {
    authenticatedRequest: (request, noRedirection) => ({type: AUTHENTICATED_REQUEST, request, noRedirection}),
    setTokens: (tokens) => ({type: SET_TOKENS, tokens}),
    settingTokens: (refreshPromise) => ({type: SETTING_TOKENS, refreshPromise}),
};

