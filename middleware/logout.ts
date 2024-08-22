//SERVICES
//MIXINS
import { useauthStore } from '~/store/auth'

export default defineNuxtRouteMiddleware(async (to, from) => {
//     const auth = useauthStore();
//     const { login_account, login_accessToken, savecookies } = storeToRefs(auth);
//     //COOKIES
//     const clogin_account = useCookie('login_account');
//     const clogin_accessToken = useCookie('login_accessToken');
//     const csavecookies = useCookie('savecookies');
//     //
//     savecookies.value = `${csavecookies.value}` == 'true';
//     //STORE
//     login_account.value = null;
//     login_accessToken.value = null;
//     //COOKIES
//     clogin_account.value = null;
//     clogin_accessToken.value = null;
})