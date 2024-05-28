//SERVICES
import { checkLoginToken } from "~/composables/backadmin/services.cjs"
//MIXINS
import { useauthStore } from '~/store/auth'
import _ from "lodash";

export default defineNuxtRouteMiddleware(async (to, from) => {
    const auth = useauthStore();
    const { login_account, login_accessToken, savecookies, account_auth } = storeToRefs(auth);
    //COOKIES
    const clogin_account = useCookie('login_account');
    const clogin_accessToken = useCookie('login_accessToken');
    const csavecookies = useCookie('savecookies');
    //
    savecookies.value = `${csavecookies.value}` == 'true';
    //
    if (!login_account.value || !login_accessToken.value) {
        if (!clogin_account.value || !clogin_accessToken.value) return navigateTo('/backadmin/login');
        // @ts-expect-error
        login_account.value = clogin_account.value;
        // @ts-expect-error
        login_accessToken.value = clogin_accessToken.value;
    }
    //CHECKLOGINTOKEN
    {
        var data = {
            login_account: login_account.value,
            login_accessToken: login_accessToken.value,
        };
        let res = await checkLoginToken(data, {}, login_accessToken.value);
        if (!res.Success) {
            clogin_account.value = null;
            clogin_accessToken.value = null;
            login_account.value = null;
            login_accessToken.value = null;
            //
            return navigateTo('/backadmin/login');
        }
        // @ts-expect-error
        if (_.has(res.Data, 'account_auth') && !!res.Data.account_auth) {
            // @ts-expect-error
            account_auth.value = res.Data.account_auth;
        }
    }
    // 存cookies
    if (`${savecookies.value}` == 'true') {
        clogin_account.value = login_account.value;
        clogin_accessToken.value = login_accessToken.value;
    }
})