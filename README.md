# docute-prefix-link

[![NPM version](https://img.shields.io/npm/v/docute-prefix-link.svg?style=flat)](https://npmjs.com/package/docute-prefix-link) [![NPM downloads](https://img.shields.io/npm/dm/docute-prefix-link.svg?style=flat)](https://npmjs.com/package/docute-prefix-link) [![Build Status](https://img.shields.io/circleci/project/egoist/docute-prefix-link/master.svg?style=flat)](https://circleci.com/gh/egoist/docute-prefix-link) [![donate](https://img.shields.io/badge/$-donate-ff69b4.svg?maxAge=2592000&style=flat)](https://github.com/egoist/donate)

## Install

```html
<script src="https://unpkg.com/docute-relative-link"></script> 
```

## Usage

```js
docute.init({
  plugins: [
    docutePrefixLink('http:/my-prefix.com/path)
  ]
})
```

Then it will convert relative link in markdown to absolute link:

```markdown
[foo](./foo)
[foo](foo)
[foo](/foo)
```

With `docutePrefixLink('http://example.com')` you got:

```html
<a href="http://example.com" target="_blank">foo</a>
<a href="http://example.com" target="_blank">foo</a>
<a href="http://example.com" target="_blank">foo</a>
```

Only links that are not started with `https://` will be prefixed.

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D


## Author

**docute-prefix-link** © [egoist](https://github.com/egoist), Released under the [MIT](./LICENSE) License.<br>
Authored and maintained by egoist with help from contributors ([list](https://github.com/egoist/docute-prefix-link/contributors)).

> [egoistian.com](https://egoistian.com) · GitHub [@egoist](https://github.com/egoist) · Twitter [@rem_rin_rin](https://twitter.com/rem_rin_rin)
