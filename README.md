# Atom-Typescript-React-Redux-Snippets

Typescript, React and Redux snippets for Atom (follow ES6 standard)


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

* **tsr4** : typescript react redux snippet

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

* **tsr4r** : typescript react redux snippet with 4 spaces indent

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


# Install

Search for `atom-typescript-react-redux-snippets` in `Install` page

Install and Restart Atom


# License 

MIT License
