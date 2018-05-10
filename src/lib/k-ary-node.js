'use strict';

export default class KAryNode {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  appendChild(value) {
    this.children.push(new KAryNode(value));
  }
}
