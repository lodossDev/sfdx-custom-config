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
* [`sfdx force:config:custom:set -k <string> -v <string> [--json] [--loglevel trace|debug|info|warn|error|fatal]`](#sfdx-forceconfigcustomset--k-string--v-string---json---loglevel-tracedebuginfowarnerrorfatal)

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
We recommend using the Visual Studio Code (VS Code) IDE for your plugin development. Included in the `.vscode` directory of this plugin is a `launch.json` config file, which allows you to attach a debugger to the node process when running your commands.

To debug the `hello:org` command: 
1. Start the inspector
  
If you linked your plugin to the sfdx cli, call your command with the `dev-suspend` switch: 
```sh-session
$ sfdx hello:org -u myOrg@example.com --dev-suspend
```
  
Alternatively, to call your command using the `bin/run` script, set the `NODE_OPTIONS` environment variable to `--inspect-brk` when starting the debugger:
```sh-session
$ NODE_OPTIONS=--inspect-brk bin/run hello:org -u myOrg@example.com
```

2. Set some breakpoints in your command code
3. Click on the Debug icon in the Activity Bar on the side of VS Code to open up the Debug view.
4. In the upper left hand corner of VS Code, verify that the "Attach to Remote" launch configuration has been chosen.
5. Hit the green play button to the left of the "Attach to Remote" launch configuration window. The debugger should now be suspended on the first line of the program. 
6. Hit the green play button at the top middle of VS Code (this play button will be to the right of the play button that you clicked in step #5).
<br><img src=".images/vscodeScreenshot.png" width="480" height="278"><br>
Congrats, you are debugging!
