module.exports = {
  path: 'dummyTable',

  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('./dummyTable'))
    })
  }
}
