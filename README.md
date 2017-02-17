# Atom-Typescript-React-Redux-Snippets

[![Build Status](https://travis-ci.org/Armour/atom-typescript-react-redux-snippets.svg?branch=master)](https://travis-ci.org/Armour/atom-typescript-react-redux-snippets)
[![Dependency Status](https://gemnasium.com/badges/github.com/Armour/atom-typescript-react-redux-snippets.svg)](https://gemnasium.com/github.com/Armour/atom-typescript-react-redux-snippets)

Typescript, React and Redux snippets for Atom (follows ES6 standard)


# Snippets

* **tsr** : basic typescript react snippet

  ```tsx
  import React from "react";

  interface IComponentNameProps {};

  interface IComponentNameState {};

  class ComponentName extends React.Component<IComponentNameProps, IComponentNameState> {
    public render() {
      return (<span>Body</span>);
    }
  }

  export default ComponentName;
  ```

* **tsr4** : basic typescript react snippet with 4 spaces indent

  ```tsx
  import React from "react";

  interface IComponentNameProps {};

  interface IComponentNameState {};

  class ComponentName extends React.Component<IComponentNameProps, IComponentNameState> {
      public render() {
          return (<span>Body</span>);
      }
  }

  export default ComponentName;
  ```

* **tsrr** : typescript react redux snippet

  ```tsx
  import React from "react";
  import { connect } from "react-redux";

  interface IComponentNameProps {};

  interface IComponentNameState {};

  class ComponentName extends React.Component<IComponentNameProps, IComponentNameState> {
    public render() {
      return (<span>Body</span>);
    }
  }

  const mapStateToProps = (state) => ({
    // ..mapStateToProps
  });

  const mapDispatchToProps = (dispatch) => ({
    // ..mapDispatchToProps
  });

  export default connect(
    mapStateToProps,
    mapDispatchToProps,
  )(ComponentName);
  ```

* **tsrr4** : typescript react redux snippet with 4 spaces indent

  ```tsx
  import React from "react";
  import { connect } from "react-redux";

  interface IComponentNameProps {};

  interface IComponentNameState {};

  class ComponentName extends React.Component<IComponentNameProps, IComponentNameState> {
      public render() {
          return (<span>Body</span>);
      }
  }

  const mapStateToProps = (state) => ({
      // ..mapStateToProps
  });

  const mapDispatchToProps = (dispatch) => ({
      // ..mapDispatchToProps
  });

  export default connect(
      mapStateToProps,
      mapDispatchToProps,
  )(ComponentName);
  ```

* **cdm** : componentDidMount

  ```tsx
  public componentDidMount() {
    {1}
  }
  ${2}
  ```

* **cdm4** : componentDidMount with 4 spaces indent

  ```tsx
  public componentDidMount() {
      {1}
  }
  ${2}
  ```

* **cdu** : componentDidUnmount

  ```tsx
  public componentDidUnmount() {
    {1}
  }
  ${2}
  ```

* **cdu4** : componentDidUnmount with 4 spaces indent

  ```tsx
  public componentDidUnmount() {
      {1}
  }
  ${2}
  ```

* **cwm** : componentWillMount

  ```tsx
  public componentWillMount() {
    {1}
  }
  ${2}
  ```
  
* **cwm4** : componentWillMount with 4 spaces indent

  ```tsx
  public componentWillMount() {
      {1}
  }
  ${2}
  ```
  
* **cwu** : componentWillUnmount

  ```tsx
  public componentWillUnmount() {
    {1}
  }
  ${2}
  ```
  
* **cwu4** : componentWillUnmount with 4 spaces indent

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
