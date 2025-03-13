# PtgUiLibrary

--------React---------

Step 1 : npm i --f

Step 2 : npm run start:ptg-react //(For start react app)

Step 3 : npm run build:ng-lib //(For build react lib)

Step 4 : file:../../FOLDER_NAME/dist/libs/ptg-ui-react-lib //(For install react library in another project locally)

React lib folder path : lib/pgt-ui-react-lib/src/lib

React app example folder path : app/ptg-react-app/src/app/examples
.
.
.

---------Angular---------

Step 1 :
Step 2 :
Stem 3 :

This project was generated using [Nx](https://nx.dev).

<p style="text-align: center;"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="450"></p>

🔎 **Smart, Fast and Extensible Build System**

## Quick Start & Documentation

[Nx Documentation](https://nx.dev/angular)

[10-minute video showing all Nx features](https://nx.dev/getting-started/intro)

[Interactive Tutorial](https://nx.dev/react-tutorial/01-create-application)

## Adding capabilities to your workspace

Nx supports many plugins which add capabilities for developing different types of applications and different tools.

These capabilities include generating applications, libraries, etc as well as the devtools to test, and build projects as well.

Below are our core plugins:

- [Angular](https://angular.io)
  - `ng add @nrwl/angular`
- [React](https://reactjs.org)
  - `ng add @nrwl/react`
- Web (no framework frontends)
  - `ng add @nrwl/web`
- [Nest](https://nestjs.com)
  - `ng add @nrwl/nest`
- [Express](https://expressjs.com)
  - `ng add @nrwl/express`
- [Node](https://nodejs.org)
  - `ng add @nrwl/node`

There are also many [community plugins](https://nx.dev/community) you could add.

## Generate an application

Run `ng g @nrwl/angular:app my-app` to generate an application.

> You can use any of the plugins above to generate applications as well.

When using Nx, you can create multiple applications and libraries in the same workspace.

## Generate a library

Run `ng g @nrwl/angular:lib my-lib` to generate a library.

> You can also use any of the plugins above to generate libraries as well.

Libraries are shareable across libraries and applications. They can be imported from `@ptg-ui-library/mylib`.

## Development server

#### Install the nx and node_modules by following commands:

```shell
* npm install -g nx
* npm install
```

Run `npm start` or `npm run start:ptg-angular` for a dev server. Navigate to http://localhost:4200/.
The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng g component my-component --project=my-app` to generate a new component.

## Build

Run `ng build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `ng e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understand your workspace

Run `nx graph` to see a diagram of the dependencies of your projects.

## Further help

Visit the [Nx Documentation](https://nx.dev/angular) to learn more.

## ☁ Nx Cloud

### Distributed Computation Caching & Distributed Task Execution

<p style="text-align: center;"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-cloud-card.png"></p>

Nx Cloud pairs with Nx in order to enable you to build and test code more rapidly, by up to 10 times. Even teams that are new to Nx can connect to Nx Cloud and start saving time instantly.

Teams using Nx gain the advantage of building full-stack applications with their preferred framework alongside Nx’s advanced code generation and project dependency graph, plus a unified experience for both frontend and backend developers.

Visit [Nx Cloud](https://nx.app/) to learn more.

# Commit Message Guidelines

### Commit Message Format

Each commit message consists of a **header** and **body** . The header has a special
format that includes a **type**, a **scope** and a **subject**:

```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

The **header** is mandatory and the **scope** of the header is optional.

Any line of the commit message cannot be longer 100 characters! This allows the message to be easier
to read on GitHub as well as in various git tools.

### Revert

If the commit reverts a previous commit, it should begin with `revert: `, followed by the header of the reverted commit. In the body it should say: `This reverts commit <hash>.`, where the hash is the SHA of the commit being reverted.

### Type

Must be one of the following:

- **build**: Changes to local repository build system and tooling
- **ci**: Changes to CI configuration and CI specific tooling [2]
- **docs**: Changes which exclusively affects documentation.
- **feat**: Creates a new feature [1]
- **fix**: Fixes a previously discovered failure/bug [1]
- **perf**: Improves performance without any change in functionality or API [1]
- **refactor**: Refactor without any change in functionality or API (includes style changes)
- **release**: A release point in the repository [2]
- **test**: Improvements or corrections made to the project's test suite

<sup>[1] This type MUST have a scope. See the next section for more information.</sup><br/>
<sup>[2] This type MUST NOT have a scope. It only applies to general scripts and tooling.</sup>

### Scope

The scope should be the name of the feature affected.

### Subject

The subject contains succinct description of the change:

- use the imperative, present tense: "change" not "changed" nor "changes"
- don't capitalize first letter
- be concise and direct
- no dot (.) at the end

### Examples

Examples of valid commit messages:

- `fix(waf): add html template for waf form`
- `refactor(HA): Add datatable with integration`

Examples of invalid commit messages:

- `fix(waf): add a new XYZ command`

  This is a feature, not a fix.

- `ci(HA): fix publishing workflow`

  The `ci` type cannot have a scope.

### Body

Just as in the **subject**, use the imperative, present tense: "change" not "changed" nor "changes".
The body should include the motivation for the change and contrast this with previous behavior.
