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
sfdx-custom-vars/0.0.2 darwin-x64 node-v8.12.0
$ sfdx --help [COMMAND]
USAGE
  $ sfdx COMMAND
...
```
<!-- usagestop -->
<!-- commands -->
* [`sfdx force:config:var:delete -k <string> [--json] [--loglevel trace|debug|info|warn|error|fatal]`](#sfdx-forceconfigvardelete--k-string---json---loglevel-tracedebuginfowarnerrorfatal)
* [`sfdx force:config:var:get -k <string> [--json] [--loglevel trace|debug|info|warn|error|fatal]`](#sfdx-forceconfigvarget--k-string---json---loglevel-tracedebuginfowarnerrorfatal)
* [`sfdx force:config:var:list [--json] [--loglevel trace|debug|info|warn|error|fatal]`](#sfdx-forceconfigvarlist---json---loglevel-tracedebuginfowarnerrorfatal)
* [`sfdx force:config:var:set -k <string> -v <string> [-d <string>] [--json] [--loglevel trace|debug|info|warn|error|fatal]`](#sfdx-forceconfigvarset--k-string--v-string--d-string---json---loglevel-tracedebuginfowarnerrorfatal)

## `sfdx force:config:var:delete -k <string> [--json] [--loglevel trace|debug|info|warn|error|fatal]`

delete an entry in the custom config.

```
USAGE
  $ sfdx force:config:var:delete -k <string> [--json] [--loglevel trace|debug|info|warn|error|fatal]

OPTIONS
  -k, --key=key                                   (required) The key name.
  --json                                          format output as json
  --loglevel=(trace|debug|info|warn|error|fatal)  [default: warn] logging level for this command invocation

EXAMPLE
  $ sfdx force:config:var:delete -k laststoredate
```

_See code: [src/commands/force/config/var/delete.ts](https://github.com/lodossDev/sfdx-custom-config/blob/v0.0.2/src/commands/force/config/var/delete.ts)_

## `sfdx force:config:var:get -k <string> [--json] [--loglevel trace|debug|info|warn|error|fatal]`

return a specific config entry. 

```
USAGE
  $ sfdx force:config:var:get -k <string> [--json] [--loglevel trace|debug|info|warn|error|fatal]

OPTIONS
  -k, --key=key                                   (required) The key name.
  --json                                          format output as json
  --loglevel=(trace|debug|info|warn|error|fatal)  [default: warn] logging level for this command invocation

EXAMPLE
  $ sfdx force:config:var:get -k laststoredate

           Key            Value       Description
           ─────────────  ──────────  ───────────
           laststoredate  2019-04-17
```

_See code: [src/commands/force/config/var/get.ts](https://github.com/lodossDev/sfdx-custom-config/blob/v0.0.2/src/commands/force/config/var/get.ts)_

## `sfdx force:config:var:list [--json] [--loglevel trace|debug|info|warn|error|fatal]`

lists all custom config entries.

```
USAGE
  $ sfdx force:config:var:list [--json] [--loglevel trace|debug|info|warn|error|fatal]

OPTIONS
  --json                                          format output as json
  --loglevel=(trace|debug|info|warn|error|fatal)  [default: warn] logging level for this command invocation

EXAMPLE
  $ sfdx force:config:var:list
    
       Key        Value             Description
       ─────────  ────────────────  ─────────────
       status     Active            i like cheese
       nextlunch  Tomorrow is good
```

_See code: [src/commands/force/config/var/list.ts](https://github.com/lodossDev/sfdx-custom-config/blob/v0.0.2/src/commands/force/config/var/list.ts)_

## `sfdx force:config:var:set -k <string> -v <string> [-d <string>] [--json] [--loglevel trace|debug|info|warn|error|fatal]`

create a custom config entry.

```
USAGE
  $ sfdx force:config:var:set -k <string> -v <string> [-d <string>] [--json] [--loglevel 
  trace|debug|info|warn|error|fatal]

OPTIONS
  -d, --desc=desc                                 Description of config entry.
  -k, --key=key                                   (required) The key name for this entry.
  -v, --value=value                               (required) The value for the entry.
  --json                                          format output as json
  --loglevel=(trace|debug|info|warn|error|fatal)  [default: warn] logging level for this command invocation

EXAMPLE
  $ sfdx force:config:var:set -k laststoredate -v 2019-04-17 -d test

           Key            Value       Description
           ─────────────  ──────────  ───────────
           laststoredate  2019-04-17  test
```

_See code: [src/commands/force/config/var/set.ts](https://github.com/lodossDev/sfdx-custom-config/blob/v0.0.2/src/commands/force/config/var/set.ts)_
<!-- commandsstop -->
<!-- debugging-your-plugin -->
# Debugging your plugin
