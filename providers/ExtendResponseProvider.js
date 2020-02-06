'use strict'

const { ServiceProvider } = require('@adonisjs/fold')

class ExtendResponseProvider extends ServiceProvider {
  register() {
    //
  }

  boot() {
    require('../src')
  }
}

module.exports = ExtendResponseProvider