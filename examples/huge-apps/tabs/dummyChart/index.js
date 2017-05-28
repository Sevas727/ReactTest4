module.exports = {
  path: 'dummyChart',

  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('./dummyChart'))
    })
  }
}
