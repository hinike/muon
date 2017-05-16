var binding = require('binding').Binding.create('cookies')

binding.registerCustomHook(function (bindingsAPI, extensionId) {
  var apiFunctions = bindingsAPI.apiFunctions
  // var cookies = bindingsAPI.compiledApi

  apiFunctions.setHandleRequest('getAll', function (details, cb) {
    var nothing = []
    cb(nothing)
  })

  apiFunctions.setHandleRequest('set', function (details, cb) {
    var noncookie = null
    cb(noncookie)
  })
})

exports.$set('binding', binding.generate())
