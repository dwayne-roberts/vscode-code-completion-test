import BaseKlass from './BaseKlass';

export class AnotherKlass extends BaseKlass {
  constructor() {
    super();

    this._opts = {
      foo: 2,
      bar: 'foo',
    };
  }

  ownMethod2() {}

  _ownHelper2 = () => {};
}

const instance = new AnotherKlass();

export default instance;
