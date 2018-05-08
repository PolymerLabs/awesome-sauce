import {PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * # Awesome! An h1 heading
 * `<awesome-sauce>` injects a healthy dose of awesome into your page.
 * ## This is an h2 heading
 * In typical use, just slap some `<awesome-sauce>` at the top of your body:
 * <body>
 *   <awesome-sauce></awesome-sauce>
 * Wham! It's all awesome now!
 * @customElement
 * @polymer
 * @demo /demo/index.html
 * 
 */
class AwesomeSauce extends PolymerElement {
  static get template() {
    return `
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Page is awesome: [[isAwesome]]</h2>
    `;
  }
  static get properties() {
    return {
      /** 
       * Whether this element is currently awesome. 
       * 
       * Denote your property documentation with a JavaScript comment 
       * preceding the property declaration. The simplest property 
       * documentation can be a single line.
      */
      isAwesome: Boolean,

      /**
       * Metadata describing what has been made awesome on the page.
       * 
       * If the property doesn't specify a type, or that type is not 
       * primitive, be sure to annotate the type properly. For example:
       * 
       * @type {{elements: Array<HTMLElement>, level: number}}
       */
      sauce: Object,
      
      /**         
       *  An awesome message. 
       *  
       *  Private properties should be prefixed with an underscore (_). 
       */
      _message: String,

      /**
       * Fired when `element` changes its awesomeness level.
       * 
       * Events must be annotated explicitly with an @event tag.
       *
       * Event properties are documented with the @param tag, just like
       * method parameters.
       * 
       * For example:
       *  
       * @event awesome-change
       * @param {number} newAwesome New level of awesomeness.
       */
    };
  }

  /**
   * Applies awesomeness to `element`.
   * 
   * To document functions, follow the property guidelines. Additionally,
   * make sure the types for all params and return values are documented.
   * 
   * For example:
   * 
   * @param {HTMLElement} element The element to be made awesome.
   * @param {number} level The numeric level of awesomeness. A value
   *     between `1` and `11`.
   * @param {Array<HTMLElements>=} refs Optional referenced elements
   *     that become awesome by proxy.
   * @return {number} The cumulative level of awesomeness.
   */
  makeAwesome(element, level, refs) {
    console.log('Awesome implementation of makeAwesome');
  }
}

window.customElements.define('awesome-sauce', AwesomeSauce);
