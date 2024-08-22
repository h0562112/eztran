//SERVICES
//MIXINS
import { useauthStore } from "~/store/auth";

export default defineNuxtRouteMiddleware(async (to, from) => {






const auth = useauthStore();
  const { login_account, login_accessToken, savecookies } = storeToRefs(auth);
    //COOKIES
    
        const acc = useCookie("account");
        const tok = useCookie("token");

    
    
    if (!(acc.value && tok.value)) {

        return navigateTo("/auth/login");

    }
    
        auth.setlogin_account(acc.value);
        auth.setlogin_accessToken(tok.value);





});
