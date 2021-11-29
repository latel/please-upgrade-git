# Please upgrade git

> supporting semver checking, forked from please-upgrade-npm

> :information_desk_person: show a message to your users to upgrade git instead of a stacktrace

## Usage

```sh
npm install please-upgrade-git
```

Add `please-upgrade-git` at the top of your CLI

```js
#!/usr/bin/env node
const pkg = require('./package.json')
require('please-upgrade-git')(pkg) // <- Must run BEFORE requiring any other modules

// ...
```

Set in your `package.json` the required Node version

```js
{
  "engines": {
    "git": ">=2.20.1"
  }
}
```


## Options

You can set custom `exitCode` and `message` function if needed

```js
pleaseUpgradeGit(pkg, {
  exitCode: 0, // Default: 1
  message: function(requiredVersion) {
    return 'Oops this program require git ' +  requiredVersion
  }
})
```

__Important__: to keep `message` function compatible with older versions of Node, avoid using ES6 features like `=>` or string interpolation.