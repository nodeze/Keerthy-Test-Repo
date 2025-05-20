# Latent View

### NetSuite Account Customization Project

This repository contains code for netsuite account customization scripting report and prints done prateek technosoft.

### Prerequisities

- Node js v22.14.0 installed (- [Download](https://nodejs.org/zh-cn/download) - )
- SuiteCloud Installed (- [Instruction Here](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_155929845760.html)-)
- Github Desktop Installed (-[Download](https://desktop.github.com/download/)-)
- Git installed (-[Instruction Here](https://git-scm.com/downloads/win)-)
- Visual Studio code (-[Download](https://code.visualstudio.com/download)-)

### Getting Started

### Method (Using Github Desktop-Windows)

- Open Code Dropdown button
- Select the option "Open with github Desktop"
- Allow the popup to open the Github Desktop application in windows
- Click on open with visual studio code to get started

## Installation

Code requires [Node.js](https://nodejs.org/) v22.14.0 to run.

Install the dependencies and devDependencies and start the server .

```sh
cd <projectname>
npm install
npm start lint //to run the linter
npm start test //to run the tests
suitecloud deploy //to deploy into account
```

For uat environments...

- Raise a merge request to uat branch from the feature branch
- Get the request approved by the maintainer
- Your feature will be merged to uat and ready for uat.

For Prod Environments...

- uat branch with the newly added features will be merged on main branch.
