class Dom {
  constructor(selector) {
    this.$element =
      typeof selector === 'string'
        ? document.querySelector(selector)
        : selector;
  }

  html(html) {
    if (typeof html === 'string') {
      this.$element.innerHTML = html;
      return this;
    }

    return this.$element.outerHTML.trim();
  }

  text(text) {
    if (typeof text === 'string') {
      this.$element.textContent = text;
      return this;
    }

    if (this.$element.tagName.toLowerCase() === 'input') {
      return this.$element.value.trim();
    }

    return this.$element.textContent.trim();
  }

  clear() {
    this.html('');
    return this;
  }

  on(eventType, callback) {
    this.$element.addEventListener(eventType, callback);
  }

  off(eventType, callback) {
    this.$element.removeEventListener(eventType, callback);
  }

  append(node) {
    if (node instanceof Dom) {
      node = node.$element;
    }

    if (Element.prototype.append) {
      this.$element.append(node);
    } else {
      this.$element.appendChild(node);
    }

    return this;
  }

  get data() {
    return this.$element.dataset;
  }

  closest(selector) {
    return $(this.$element.closest(selector));
  }

  id(parse) {
    if (parse) {
      const [row, col] = this.id().split(':');

      return {
        row: Number(row),
        col: Number(col),
      };
    }
    return this.data.id;
  }

  focus() {
    this.$element.focus();
    return this;
  }

  getCoords() {
    return this.$element.getBoundingClientRect();
  }

  find(selector) {
    return $(this.$element.querySelector(selector));
  }

  findAll(selector) {
    return this.$element.querySelectorAll(selector);
  }

  css(styles = {}) {
    Object.keys(styles).forEach(
      key => (this.$element.style[key] = styles[key]),
    );
  }

  addClass(className) {
    this.$element.classList.add(className);
    return this;
  }

  removeClass(className) {
    this.$element.classList.remove(className);
    return this;
  }
}

export function $(selector) {
  return new Dom(selector);
}

$.create = (tagName, classes = '') => {
  const element = document.createElement(tagName);

  if (classes) {
    element.classList.add(classes);
  }

  return $(element);
};
