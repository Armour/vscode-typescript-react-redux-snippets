# VSCode-Typescript-React-Redux-Snippets

[![CircleCI](https://circleci.com/gh/Armour/vscode-typescript-react-redux-snippets/tree/master.png?style=shield)](https://circleci.com/gh/Armour/vscode-typescript-react-redux-snippets/tree/master)
[![devDependencies Status](https://david-dm.org/Armour/vscode-typescript-react-redux-snippets/dev-status.png)](https://david-dm.org/Armour/vscode-typescript-react-redux-snippets?type=dev)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.png?style=flat)](http://makeapullrequest.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.png)](https://opensource.org/licenses/MIT)
[![Template from jarvis](https://img.shields.io/badge/Hi-Jarvis-ff69b4.png)](https://github.com/Armour/Jarvis)

Typescript, React and Redux snippets for VSCode (followed ES6 standard)

## Snippets

* **_tsr** : basic typescript react template

  ```tsx
  import * as React from 'react';

  interface I${1:ComponentName}Props {}

  interface I${1:ComponentName}State {}

  class ${1:ComponentName} extends React.Component<I${1:ComponentName}Props, I${1:ComponentName}State> {
    public render() {
      return (
        ${2:<span>Body</span>}
      );
    }
  }

  export default ${1:ComponentName};
  ```

* **_tsrr** : typescript react redux template

  ```tsx
  import * as React from 'react';
  import { connect } from 'react-redux';
  import { AnyAction, Dispatch } from 'redux';

  // Component

  interface I${1:ComponentName}StateProps {}

  interface I${1:ComponentName}DispatchProps {}

  type I${1:ComponentName}ComponentProps = I${1:ComponentName}StateProps & I${1:ComponentName}DispatchProps;

  interface I${1:ComponentName}ComponentState {}

  class ${1:ComponentName}Component extends React.Component<I${1:ComponentName}ComponentProps, I${1:ComponentName}ComponentState> {
    public render() {
      return (
        ${3:<span>Body</span>}
      );
    }
  }

  // Container

  interface I${1:ComponentName}Props {}

  const mapStateToProps = (state: ${2:IGlobalState}, ownProps: I${1:ComponentName}Props): I${1:ComponentName}StateProps => {
    return {
      // ...mapStateToProps
    };
  };

  const mapDispatchToProps = (dispatch: Dispatch<AnyAction>, ownProps: I${1:ComponentName}Props): I${1:ComponentName}DispatchProps => {
    return {
      // ...mapDispatchToProps
    };
  };

  export default connect(
    mapStateToProps,
    mapDispatchToProps,
  )(${1:ComponentName}Component);
  ```

* **_con** : constructor

  ```tsx
  constructor(props: I${1:ComponentName}Props) {
    super(props);
    ${2}
  }
  ${3}
  ```

* **_cwm** : componentWillMount

  ```tsx
  public componentWillMount() {
    {1}
  }
  ${2}
  ```

* **_cdm** : componentDidMount

  ```tsx
  public componentDidMount() {
    {1}
  }
  ${2}
  ```

* **_cwr** : componentWillReceiveProps

  ```tsx
  public componentWillReceiveProps(nextProps: I${1:ComponentName}Props) {
    ${2}
  }
  ${3}
  ```

* **_scup** : shouldComponentUpdate

  ```tsx
  public shouldComponentUpdate(nextProps: I${1:ComponentName}Props, nextState: I${1:ComponentName}State): boolean {
    ${2}
    return true;
  }
  ${3}
  ```

* **_cwup** : componentWillUpdate

  ```tsx
  public componentWillUpdate(nextProps: I${1:ComponentName}Props, nextState: I${1:ComponentName}State) {
    ${2}
  }
  ${3}
  ```

* **_cdup** : componentDidUpdate

  ```tsx
  public componentDidUpdate(prevProps: I${1:ComponentName}Props, prevState: I${1:ComponentName}State) {
    ${2}
  }
  ${3}
  ```

* **_cwun** : componentWillUnmount

  ```tsx
  public componentWillUnmount() {
    {1}
  }
  ${2}
  ```

## Install

Launch VS Code Quick Open (⌘+P), paste the following command, and press enter.

```bash
ext install vscode-typescript-react-redux-snippets
```

## Development

```bash
cd ~/.vscode/extensions
git clone https://github.com/Armour/vscode-typescript-react-redux-snippets
cd vscode-typescript-react-redux-snippets
```

This will load our snippets each time VS Code runs

## Contributing

See [CONTRIBUTING.md](https://github.com/Armour/vscode-typescript-react-redux-snippets/blob/master/.github/CONTRIBUTING.md)

## License

[MIT License](https://github.com/Armour/vscode-typescript-react-redux-snippets/blob/master/LICENSE)
