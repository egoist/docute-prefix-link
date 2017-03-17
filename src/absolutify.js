const $$ = document.querySelectorAll.bind(document)

export default function (linkPrefix) {
  if (linkPrefix) {
    [].forEach.call($$('.content a'), el => {
      const isJump = el.hasAttribute('jump-to-id')
      const isRouterLink = el.hasAttribute('router-link')
      const href = el.getAttribute('href')
      if (!isJump && !isRouterLink && isRelativeLink(href)) {
        el.setAttribute('href', ensurePrefix(linkPrefix) + cleanLink(href))
      }
    })
  }
}

function isRelativeLink(link) {
  return !/^https?:\/\//.test(link)
}

function cleanLink(link) {
  return link.replace(/^\.?\//, '')
}

function ensurePrefix(prefix) {
  if (prefix.slice(-1) !== '/') {
    return prefix + '/'
  }
  return prefix
}
