import React from 'react';
import { Text } from 'react-native';
import scale from '../utils/scaling/scale';

const H001 = (props) => (
    <Text style={{
        ...props.style,
        fontFamily: props.bold ? 'VWHead-Bold' : 'VWHead',
        fontSize: scale(40),
        color: props.color,
        textAlign: props.align
    }}>
        {props.children}
    </Text>
);
const H1 = (props) => (
    <Text style={{
        ...props.style,
        fontFamily: props.bold ? 'VWHead-Bold' : 'VWHead',
        fontSize: scale(28),
        color: props.color,
        textAlign: props.align
    }}>
        {props.children}
    </Text>
);

const H2 = (props) => (
    <Text style={{
        ...props.style,
        fontFamily: props.bold ? 'VWHead-Bold' : 'VWHead',
        fontSize: scale(22),
        color: props.color,
        textAlign: props.align
    }}>
        {props.children}
    </Text>
);

const H3 = (props) => (
    <Text style={{
        ...props.style,
        fontFamily: props.bold ? 'VWText-Bold' : 'VWText',
        fontSize: scale(18),
        color: props.color,
        textAlign: props.align
    }}>
        {props.children}
    </Text>
);
const H3_5 = (props) => (
    <Text style={{
        ...props.style,
        fontFamily: props.bold ? 'VWText-Bold' : 'VWText',
        fontSize: scale(16),
        color: props.color,
        textAlign: props.align
    }}>
        {props.children}
    </Text>
);

const H4 = (props) => (
    <Text
        selectable = {true}
     style={{
        ...props.style,
        fontFamily: props.bold ? 'VWText-Bold' : 'VWText',
        fontSize: scale(14),
        color: props.color,
        textAlign: props.align,
    }}>
        {props.children}
    </Text>
);

const H5 = (props) => (
    <Text style={{
        ...props.style,
        fontFamily: props.bold ? 'VWText-Bold' : 'VWText',
        fontSize: scale(12),
        color: props.color,
        textAlign: props.align
    }}>
        {props.children}
    </Text>
);
const H5_5 = (props) => (
    <Text style={{
        ...props.style,
        fontFamily: props.bold ? 'VWText-Bold' : 'VWText',
        fontSize: scale(10),
        color: props.color,
        textAlign: props.align
    }}>
        {props.children}
    </Text>
);
const H5_8 = (props) => (
    <Text style={{
        ...props.style,
        fontFamily: props.bold ? 'VWText-Bold' : 'VWText',
        fontSize: scale(11),
        color: props.color,
        textAlign: props.align
    }}>
        {props.children}
    </Text>
);

const H6 = (props) => (
    <Text style={{
        ...props.style,
        fontFamily: props.bold ? 'VWText-Bold' : 'VWText',
        fontSize: scale(8),
        color: props.color,
        textAlign: props.align
    }}>
        {props.children}
    </Text>
);

export {H001, H1, H2, H3,H3_5, H4, H5,H5_5,H5_8, H6 }