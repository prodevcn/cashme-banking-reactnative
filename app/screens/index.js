import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchStartAction } from "../redux/ducks/common";
import { Container, Text } from 'native-base';

class MainScreen extends React.Component {
    static propTypes = {
        loading: PropTypes.bool,
    }

    constructor(props) {
        super(props);
    }

    render() {
        this.props.fetchStart();
        
        return (
            <Container>
                <Text>Open up App.js to start working on your app!</Text>
            </Container>
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
        fetchStart: () => dispatch(fetchStartAction()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
