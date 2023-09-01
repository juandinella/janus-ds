import { JSDOM } from 'jsdom'
const dom = new JSDOM()

global.document = dom.window.document
global.document.execCommand = () => null
global.window = dom.window
global.navigator = dom.window.navigator
global.URL.createObjectURL = () => null
