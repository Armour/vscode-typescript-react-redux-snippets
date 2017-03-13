# Atom-Typescript-React-Redux-Snippets

[![Build Status](https://travis-ci.org/Armour/atom-typescript-react-redux-snippets.svg?branch=master)](https://travis-ci.org/Armour/atom-typescript-react-redux-snippets)
[![Dependencies Status](https://david-dm.org/Armour/atom-typescript-react-redux-snippets/status.svg)](https://david-dm.org/Armour/atom-typescript-react-redux-snippets)
[![DevDependencies Status](https://david-dm.org/Armour/atom-typescript-react-redux-snippets/dev-status.svg)](https://david-dm.org/Armour/atom-typescript-react-redux-snippets?type=dev)
[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php)

Typescript, React and Redux snippets for Atom (follows ES6 standard)


# Snippets

* **_tsr** : basic typescript react template (2 spaces)

  ```tsx
  import React from 'react';

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

* **_tsr4** : basic typescript react template (4 spaces)

  ```tsx
  import React from 'react';

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

* **_tsrr** : typescript react redux template (2 spaces)

  ```tsx
  import React from 'react';
  import { connect, Dispatch } from 'react-redux';

  interface I${1:ComponentName}StateProps {}

  interface I${1:ComponentName}DispatchProps {}

  type I${1:ComponentName}Props = I${1:ComponentName}StateProps & I${1:ComponentName}DispatchProps;

  interface I${1:ComponentName}State {}

  class ${1:ComponentName} extends React.Component<I${1:ComponentName}Props, I${1:ComponentName}State> {
    public render() {
      return (
        ${2:<span>Body</span>}
      );
    }
  }

  const mapStateToProps = (state: ${2:any}): I${1:ComponentName}StateProps => {
    return {
      // ...mapStateToProps
    };
  };

  const mapDispatchToProps = (dispatch: Dispatch<${2:any}>): I${1:ComponentName}DispatchProps => {
    return {
      // ...mapDispatchToProps
    };
  };

  export default connect(
    mapStateToProps,
    mapDispatchToProps,
  )(${1:ComponentName});
  ```

* **_tsrr4** : typescript react redux template (4 spaces)

  ```tsx
  import React from 'react';
  import { connect, Dispatch } from 'react-redux';

  interface I${1:ComponentName}StateProps {}

  interface I${1:ComponentName}DispatchProps {}

  type I${1:ComponentName}Props = I${1:ComponentName}StateProps & I${1:ComponentName}DispatchProps;

  interface I${1:ComponentName}State {}

  class ${1:ComponentName} extends React.Component<I${1:ComponentName}Props, I${1:ComponentName}State> {
      public render() {
          return (
            ${2:<span>Body</span>}
          );
      }
  }

  const mapStateToProps = (state: ${2:any}): I${1:ComponentName}StateProps => {
      return {
          // ...mapStateToProps
      };
  };

  const mapDispatchToProps = (dispatch: Dispatch<${2:any}>): I${1:ComponentName}DispatchProps => {
      return {
          // ...mapDispatchToProps
      };
  };

  export default connect(
      mapStateToProps,
      mapDispatchToProps,
  )(${1:ComponentName});
  ```

* **_con** : constructor (2 spaces)

  ```tsx
  constructor(props: I${1:ComponentName}Props) {
    super(props);
    ${2}
  }
  ${3}
  ```

* **_con4** : constructor (4 spaces)

  ```tsx
  constructor(props: I${1:ComponentName}Props) {
      super(props);
      ${2}
  }
  ${3}
  ```

* **_cwm** : componentWillMount (2 spaces)

  ```tsx
  public componentWillMount() {
    {1}
  }
  ${2}
  ```

* **_cwm4** : componentWillMount (4 spaces)

  ```tsx
  public componentWillMount() {
      {1}
  }
  ${2}
  ```

* **_cdm** : componentDidMount (2 spaces)

  ```tsx
  public componentDidMount() {
    {1}
  }
  ${2}
  ```

* **_cdm4** : componentDidMount (4 spaces)

  ```tsx
  public componentDidMount() {
      {1}
  }
  ${2}
  ```

* **_cwrp** : componentWillReceiveProps (2 spaces)

  ```tsx
  public componentWillReceiveProps(nextProps: I${1:ComponentName}Props) {
    ${2}
  }
  ${3}
  ```

* **_cwrp4** : componentWillReceiveProps (4 spaces)

  ```tsx
  public componentWillReceiveProps(nextProps: I${1:ComponentName}Props) {
      ${2}
  }
  ${3}
  ```

* **_scu** : shouldComponentUpdate (2 spaces)

  ```tsx
  public shouldComponentUpdate(nextProps: I${1:ComponentName}Props, nextState: I${1:ComponentName}State) {
    ${2}
  }
  ${3}
  ```

* **_scu4** : shouldComponentUpdate (4 spaces)

  ```tsx
  public shouldComponentUpdate(nextProps: I${1:ComponentName}Props, nextState: I${1:ComponentName}State) {
      ${2}
  }
  ${3}
  ```

* **_cwu** : componentWillUpdate (2 spaces)

  ```tsx
  public componentWillUpdate(nextProps: I${1:ComponentName}Props, nextState: I${1:ComponentName}State) {
    ${2}
  }
  ${3}
  ```

* **_cwu4** : componentWillUpdate (4 spaces)

  ```tsx
  public componentWillUpdate(nextProps: I${1:ComponentName}Props, nextState: I${1:ComponentName}State) {
      ${2}
  }
  ${3}
  ```

* **_cdu** : componentDidUpdate (2 spaces)

  ```tsx
  public componentDidUpdate(prevProps: I${1:ComponentName}Props, prevState: I${1:ComponentName}State) {
    ${2}
  }
  ${3}
  ```

* **_cdu4** : componentDidUpdate (4 spaces)

  ```tsx
  public componentDidUpdate(prevProps: I${1:ComponentName}Props, prevState: I${1:ComponentName}State) {
      ${2}
  }
  ${3}
  ```

* **_cwun** : componentWillUnmount (2 spaces)

  ```tsx
  public componentWillUnmount() {
    {1}
  }
  ${2}
  ```

* **_cwun4** : componentWillUnmount (4 spaces)

  ```tsx
  public componentWillUnmount() {
      {1}
  }
  ${2}
  ```


# Install

Search for `atom-typescript-react-redux-snippets` in `Install` page

Install and Restart Atom


# Development

```bash
$ cd ~/.atom/packages
$ git clone https://github.com/Armour/atom-typescript-react-redux-snippets
$ cd atom-typescript-react-redux-snippets
$ apm install
$ apm link
```


# Contributing

1. Fork this repo.
2. Create your own branch: git checkout -b feature/my-feature
3. Commit your changes: git commit -m 'add some new feature'
4. Push to your branch: git push origin feature/my-feature
5. Send me a pull request :)


# License 

MIT License
