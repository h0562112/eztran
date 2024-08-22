import { defineStore } from 'pinia'

export const useauthStore = defineStore("auth", {
  state: () => ({
    login_account: null,
    login_accessToken: null,
    account_auth: null,
    savecookies: true,
  }),
  getters: {
    account: (state) => state.login_account,
    token: (state) => state.login_accessToken,
  },
  actions: {
    // @ts-expect-error
    setlogin_account(value) {
      this.login_account = value;
    },
    // @ts-expect-error
    setlogin_accessToken(value) {
      this.login_accessToken = value;
    },
    // @ts-expect-error
    setsavecookies(value) {
      this.savecookies = value;
    },
    // @ts-expect-error
    setaccount_auth(value) {
      this.account_auth = value;
    },
  },
});