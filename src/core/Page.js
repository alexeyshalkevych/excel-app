class Page {
  constructor(params) {
    this.params = params;
  }

  getRoot() {
    throw new Error('Method "getRoot" should be impemented.');
  }

  afterRender() {}

  destroy() {}
}

export default Page;
