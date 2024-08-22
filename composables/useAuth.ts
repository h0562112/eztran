export default function() {


    return {
      login(account: string, password: string) {
            return $fetch("http://192.168.2.71:3030/api/template/loginSystem", {
                method: "POST",
                body: {
                    account: account,
                    pw: password,
                },


            });
      },

      checkToken(account: string, token: string) {
        return $fetch("http://192.168.2.71:3030/api/template/checkLoginToken", {
          method: "POST",
          body: {
            login_account: account,
            login_accessToken: token,
          },
        });
      },
    };
}