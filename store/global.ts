import moment from 'moment';
import { defineStore } from 'pinia'

export const useglobalStore = defineStore('global', {
    state: () => ({
        setting_update: moment().format('YYYY-MM-DD HH:mm:ss'),
    }),
    actions: {
        // @ts-expect-error
        setsetting_update(value) {
            this.setting_update = value;
        },
    },
})