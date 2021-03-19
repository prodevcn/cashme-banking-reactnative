import React from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import { connect } from "react-redux";
import { withTranslation } from 'react-i18next';
import commonSlice from "../../redux/commonSlice";
import { Container, Text } from 'native-base';
import Screen from "../../components/Screen";

class Home extends React.Component {
  static propTypes = {
    loading: PropTypes.bool,
  }

  constructor(props) {
    super(props);
  }

  render() {
    const { t } = this.props;

    return (
      <Screen>
        <Container>
          <Text>{t('hello')}</Text>
        </Container>
      </Screen>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.common.loading,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchStart: () => dispatch(commonSlice.actions.fetchStart()),
  };
}

export default compose(
  withTranslation('translations'),
  connect(mapStateToProps, mapDispatchToProps)
)(Home);
