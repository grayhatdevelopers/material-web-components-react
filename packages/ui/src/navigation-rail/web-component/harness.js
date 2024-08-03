/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { Harness } from '../../testing/harness.js'
import { NavigationTabHarness } from '@material/web/navigationtab/harness.js'
/**
 * Test harness for navigation bars.
 */
export class NavigationRailHarness extends Harness {
    constructor() {
        super(...arguments)
        this.tab = this.getTab()
    }
    /**
     * Returns the active tab to be used for interaction simulation.
     */
    async getInteractiveElement() {
        await this.element.updateComplete
        return (await this.tab).getInteractiveElement()
    }
    async getTab() {
        await this.element.updateComplete
        const tab = this.element.tabs[this.element.activeIndex]
        return new NavigationTabHarness(tab)
    }
}
//# sourceMappingURL=harness.js.map