'use strict';

Polymer({
  is: 'pe-consumer',

  properties: {
    object: {
      type: Object
    }
  },

  observers: [
    '_objectChanged(object.value)'
  ],

  ready() {
    this.object = this.$.peService.data;
  },

  logValue() {
    console.log(this.object.value);
  },

  _objectChanged() {
    console.log('Changed');
  }
});
