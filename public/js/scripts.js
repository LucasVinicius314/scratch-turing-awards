/*!
 * Start Bootstrap - Small Business v5.0.0 (https://startbootstrap.com/template/small-business)
 * Copyright 2013-2021 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-small-business/blob/master/LICENSE)
 */
// This file is intentionally blank
// Use this file to add JavaScript to your project

const container = document.getElementById('container'),
  panel = document.getElementById('panel')

const mouse = {
  _x: 0,
  _y: 0,
  x: 0,
  y: 0,
  updatePosition: function (event) {
    const e = event || window.event
    this.x = e.clientX - this._x
    this.y = (e.clientY - this._y) * -1
  },
  setOrigin: function (e) {
    this._x = e.offsetLeft + Math.floor(e.offsetWidth / 2)
    this._y = e.offsetTop + Math.floor(e.offsetHeight / 2)
  },
  show: function () {
    return `(${this.x}, ${this.y})`
  },
}

mouse.setOrigin(container)

var counter = 0
const refreshRate = 10
const isTimeToUpdate = () => {
  return counter++ % refreshRate === 0
}

container.onmouseenter = (event) => {
  update(event)
}

container.onmouseleave = () => {
  panel.style = ''
}

container.onmousemove = (event) => {
  if (isTimeToUpdate()) {
    update(event)
  }
}

const update = (event) => {
  mouse.updatePosition(event)
  updateTransformStyle(
    (mouse.y / panel.offsetHeight / 2).toFixed(2),
    (mouse.x / panel.offsetWidth / 2).toFixed(2)
  )
}

const updateTransformStyle = (x, y) => {
  const style = `rotateX(${x * 20}deg) rotateY(${
    y * 40
  }deg) scale3d(1.03, 1.03, 1.03)`
  panel.style.transform = style
  panel.style.mozTranform = style
  panel.style.msTransform = style
  panel.style.oTransform = style
}
