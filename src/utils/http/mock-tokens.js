import settings from '../settings';

export default () => ({
    jwt: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjMjBlOWJlZjc0M2U1NzVhOTQ2MjEzMCIsImV4cGlyZXMiOjE1NDU5NDgwNzgxMTEsImFwcFZlcnNpb24iOiIwLjAuMSIsInJlZnJlc2giOmZhbHNlLCJpYXQiOjE1NDU5NDU2Nzh9.uGio_zrNnSiSuruDWFZOj3kCAlwZy0l4mOo8GCmU4yI",
    jwtExpiration: Date.now() + settings.mockJwtDuration,
    refreshToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjMjBlOWJlZjc0M2U1NzVhOTQ2MjEzMCIsImV4cGlyZXMiOjE1NDU5NjI0NzgxMTEsImFwcFZlcnNpb24iOiIwLjAuMSIsInJlZnJlc2giOnRydWUsImlhdCI6MTU0NTk0NTY3OH0.PPfXv45EZ_LZ4cy_3d7oSDcjaJxP_iwXJIm1A_t6-cI",
    refreshExpiration: Date.now() + settings.mockRefreshDuration,
    premium: false
});