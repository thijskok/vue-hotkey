import Vue from 'vue'
import { mount } from '@vue/test-utils'

import hotkey from '@/../dist/directives.esm'


Vue.config.productionTip = false
Vue.config.devtools = false

Vue.use(hotkey)


describe('v-hotkey', () => {

    it('could be unit-tested if new Event() were working properly in the test environment', () => {
    })
})
