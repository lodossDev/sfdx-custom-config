sfdx-custom-vars
================



[![Version](https://img.shields.io/npm/v/sfdx-custom-vars.svg)](https://npmjs.org/package/sfdx-custom-vars)
[![CircleCI](https://circleci.com/gh/Documents/sfdx-custom-vars/tree/master.svg?style=shield)](https://circleci.com/gh/Documents/sfdx-custom-vars/tree/master)
[![Appveyor CI](https://ci.appveyor.com/api/projects/status/github/Documents/sfdx-custom-vars?branch=master&svg=true)](https://ci.appveyor.com/project/heroku/sfdx-custom-vars/branch/master)
[![Codecov](https://codecov.io/gh/Documents/sfdx-custom-vars/branch/master/graph/badge.svg)](https://codecov.io/gh/Documents/sfdx-custom-vars)
[![Greenkeeper](https://badges.greenkeeper.io/Documents/sfdx-custom-vars.svg)](https://greenkeeper.io/)
[![Known Vulnerabilities](https://snyk.io/test/github/Documents/sfdx-custom-vars/badge.svg)](https://snyk.io/test/github/Documents/sfdx-custom-vars)
[![Downloads/week](https://img.shields.io/npm/dw/sfdx-custom-vars.svg)](https://npmjs.org/package/sfdx-custom-vars)
[![License](https://img.shields.io/npm/l/sfdx-custom-vars.svg)](https://github.com/Documents/sfdx-custom-vars/blob/master/package.json)

<!-- toc -->
* [Debugging your plugin](#debugging-your-plugin)
<!-- tocstop -->
<!-- install -->
<!-- usage -->
```sh-session
$ npm install -g sfdx-custom-vars
$ sfdx COMMAND
running command...
$ sfdx (-v|--version|version)
sfdx-custom-vars/0.0.0 darwin-x64 node-v8.12.0
$ sfdx --help [COMMAND]
USAGE
  $ sfdx COMMAND
...
```
<!-- usagestop -->
<!-- commands -->
* [`sfdx force:config:custom:get -k <string> [--json] [--loglevel trace|debug|info|warn|error|fatal]`](#sfdx-forceconfigcustomget--k-string---json---loglevel-tracedebuginfowarnerrorfatal)
* [`sfdx force:config:custom:list [--json] [--loglevel trace|debug|info|warn|error|fatal]`](#sfdx-forceconfigcustomlist---json---loglevel-tracedebuginfowarnerrorfatal)
* [`sfdx force:config:custom:set -k <string> -v <string> [--json] [--loglevel trace|debug|info|warn|error|fatal]`](#sfdx-forceconfigcustomset--k-string--v-string---json---loglevel-tracedebuginfowarnerrorfatal)

## `sfdx force:config:custom:get -k <string> [--json] [--loglevel trace|debug|info|warn|error|fatal]`

get custom config var value.

```
USAGE
  $ sfdx force:config:custom:get -k <string> [--json] [--loglevel trace|debug|info|warn|error|fatal]

OPTIONS
  -k, --key=key                                   (required) The key name.
  --json                                          format output as json
  --loglevel=(trace|debug|info|warn|error|fatal)  [default: warn] logging level for this command invocation

EXAMPLE
  $ sfdx force:config:custom:get -k laststoredate
```

_See code: [src/commands/force/config/custom/get.ts](https://github.com/Documents/sfdx-custom-vars/blob/v0.0.0/src/commands/force/config/custom/get.ts)_

## `sfdx force:config:custom:list [--json] [--loglevel trace|debug|info|warn|error|fatal]`

lists all custom config vars.

```
USAGE
  $ sfdx force:config:custom:list [--json] [--loglevel trace|debug|info|warn|error|fatal]

OPTIONS
  --json                                          format output as json
  --loglevel=(trace|debug|info|warn|error|fatal)  [default: warn] logging level for this command invocation

EXAMPLE
  $ sfdx force:config:custom:list
```

_See code: [src/commands/force/config/custom/list.ts](https://github.com/Documents/sfdx-custom-vars/blob/v0.0.0/src/commands/force/config/custom/list.ts)_

## `sfdx force:config:custom:set -k <string> -v <string> [--json] [--loglevel trace|debug|info|warn|error|fatal]`

create custom config vars.

```
USAGE
  $ sfdx force:config:custom:set -k <string> -v <string> [--json] [--loglevel trace|debug|info|warn|error|fatal]

OPTIONS
  -k, --key=key                                   (required) The key name.
  -v, --value=value                               (required) The value for the key.
  --json                                          format output as json
  --loglevel=(trace|debug|info|warn|error|fatal)  [default: warn] logging level for this command invocation

EXAMPLE
  $ sfdx force:config:custom:set -k laststoredate -v 2019-04-17
```

_See code: [src/commands/force/config/custom/set.ts](https://github.com/Documents/sfdx-custom-vars/blob/v0.0.0/src/commands/force/config/custom/set.ts)_
<!-- commandsstop -->
<!-- debugging-your-plugin -->
# Debugging your plugin
