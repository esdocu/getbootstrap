/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): popover.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

import { defineJQueryPlugin } from './util/index'
import Tooltip from './tooltip'

/**
 * Constants
 */

const NAME = 'popover'
const DATA_KEY = 'bs.popover'
const EVENT_KEY = `.${DATA_KEY}`

const SELECTOR_TITLE = '.popover-header'
const SELECTOR_CONTENT = '.popover-body'

const Default = {
  ...Tooltip.Default,
  placement: 'right',
  offset: [0, 8],
  trigger: 'click',
  content: '',
  template: '<div class="popover" role="tooltip">' +
              '<div class="popover-arrow"></div>' +
              '<h3 class="popover-header"></h3>' +
              '<div class="popover-body"></div>' +
            '</div>'
}

const DefaultType = {
  ...Tooltip.DefaultType,
  content: '(null|string|element|function)'
}

const Event = {
  HIDE: `hide${EVENT_KEY}`,
  HIDDEN: `hidden${EVENT_KEY}`,
  SHOW: `show${EVENT_KEY}`,
  SHOWN: `shown${EVENT_KEY}`,
  INSERTED: `inserted${EVENT_KEY}`,
  CLICK: `click${EVENT_KEY}`,
  FOCUSIN: `focusin${EVENT_KEY}`,
  FOCUSOUT: `focusout${EVENT_KEY}`,
  MOUSEENTER: `mouseenter${EVENT_KEY}`,
  MOUSELEAVE: `mouseleave${EVENT_KEY}`
}

/**
 * Class definition
 */

class Popover extends Tooltip {
  // Getters
  static get Default() {
    return Default
  }

  static get DefaultType() {
    return DefaultType
  }

  static get NAME() {
    return NAME
  }

  static get Event() {
    return Event
  }

  // Overrides
  _isWithContent() {
    return this._getTitle() || this._getContent()
  }

  // Private
  _getContentForTemplate() {
    return {
      [SELECTOR_TITLE]: this._getTitle(),
      [SELECTOR_CONTENT]: this._getContent()
    }
  }

  _getContent() {
    return this._resolvePossibleFunction(this._config.content)
  }

  // Static
  static jQueryInterface(config) {
    return this.each(function () {
      const data = Popover.getOrCreateInstance(this, config)

      if (typeof config !== 'string') {
        return
      }

      if (typeof data[config] === 'undefined') {
        throw new TypeError(`No method named "${config}"`)
      }

      data[config]()
    })
  }
}

/**
 * jQuery
 */

defineJQueryPlugin(Popover)

export default Popover
