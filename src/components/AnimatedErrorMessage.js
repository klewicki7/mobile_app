import React from 'react';
import {Animated, Text, StyleSheet} from 'react-native';
import Colors from '../constants/Colors';
import scale from '../utils/scaling/scale';
import PropTypes from 'prop-types';

class AnimatedErrorMessage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            opacity: new Animated.Value(0),
        }
    }

    componentDidMount() {
        if (this.props.errorPresent) {
            this._appear();
        }
    }


    _appear() {
        Animated.timing(this.state.opacity, {
            toValue: 1,
            duration: 600,
        }).start();
    }

    componentDidUpdate(prevProps) {
        if (!prevProps.errorPresent && this.props.errorPresent) {
            this._appear();
        } else if (prevProps.errorPresent && !this.props.errorPresent) {
            this.setState({
                opacity: new Animated.Value(0),
            })
        }
    }

    render() {
        return (
            <Animated.View style={[this.props.style, {opacity: this.state.opacity}]}>
                <Text style={styles.body}>
                    {(this.props.message !== '' && this.props.errorPresent) ? this.props.message : '.'}
                </Text>
            </Animated.View>
        );
    }
}

AnimatedErrorMessage.propTypes = ({
    errorPresent: PropTypes.bool.isRequired,
    message: PropTypes.string.isRequired,
});

const styles = StyleSheet.create({
    body: {
        color: Colors.errorColor,
        fontSize: 15,
        lineHeight: scale(15),
    }
});

export default AnimatedErrorMessage;