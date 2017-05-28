module.exports = {
  path: 'dummyList',

  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('./dummyList'))
    })
  }
}
