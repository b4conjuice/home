import createDOMPurify from 'dompurify'
import { JSDOM } from 'jsdom'

const sanitize = html => {
  const { window } = new JSDOM('')
  const DOMPurify = createDOMPurify(window)
  return DOMPurify.sanitize(html)
}

export default sanitize
