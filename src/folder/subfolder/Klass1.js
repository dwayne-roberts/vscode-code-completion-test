import BaseKlass from './BaseKlass';

export class SomeKlass extends BaseKlass {
  constructor() {
    super();

    this._opts = {
      foo: 'bar',
      bar: 1,
    };
  }

  ownMethod1() {}

  _ownHelper1 = () => {};
}

const instance = new SomeKlass();

export default instance;
