import * as React from 'react';
import { InjectedI18nProps, InjectedTranslateProps, translate } from 'react-i18next';
import { connect } from 'react-redux';
import { AnyAction, Dispatch } from 'redux';

import i18ns from './i18n';

// Component

interface IComponentNameStateProps { }

interface IComponentNameDispatchProps { }

interface IComponentNameProps extends IComponentNameStateProps, IComponentNameDispatchProps, InjectedI18nProps, InjectedTranslateProps { }

interface IComponentNameState { }

class ComponentName extends React.Component<IComponentNameProps, IComponentNameState> {
  constructor(props: IComponentNameProps) {
    super(props);
    this.loadI18ns();
  }

  public loadI18ns() {
    const { i18n } = this.props;
    for (const key in i18ns) {
      if (i18ns.hasOwnProperty(key)) {
        i18n.addResourceBundle(key, 'ComponentName', i18ns[key]);
      }
    }
  }

  public render() {
    const { t } = this.props;
    return (
      <span>{t('text')}</span>
    );
  }
}

// Container

interface IComponentNameOwnProps { }

const mapStateToProps = (state: any, ownProps: IComponentNameOwnProps): IComponentNameStateProps => {
  return {
    // ...mapStateToProps
  };
};

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>, ownProps: IComponentNameOwnProps): IComponentNameDispatchProps => {
  return {
    // ...mapDispatchToProps
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(translate('ComponentName')(ComponentName));
