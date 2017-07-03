const path = require('path')
const BinWrapper = require('bin-wrapper')

const url = 'https://raw.githubusercontent.com/o2team/mozjpeg-bin-wrapper/master/vendor/'

module.exports = new BinWrapper()
	.src(`${url}macos/cjpeg`, 'darwin')
	.src(`${url}linux/cjpeg`, 'linux')
	.src(`${url}win/cjpeg.exe`, 'win32')
	.dest(path.join(__dirname, '../vendor'))
	.use(process.platform === 'win32' ? 'cjpeg.exe' : 'cjpeg')
