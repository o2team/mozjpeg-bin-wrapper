const os = require('os')
const BinBuild = require('bin-build')
const log = require('logalot')
const bin = require('.')

const cpuNum = os.cpus().length

bin.run(['-version'], function(err) {
  console.log(err)
  if (err) {
      console.log(err)
  } else {
      console.log('mozjpeg  pre-build test passed successfully')
  }
})
