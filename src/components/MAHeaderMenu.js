import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Icon} from 'native-base';
import scale from '../utils/scaling/scale';
import Colors from '../constants/Colors';
import PropTypes from 'prop-types';
import {MALogoHorizontalMenu} from "../components/MALogo";

const MAHeaderMenu = ({navigation, transparent, back, onSettings}) => (
    <View style={back ? {...styles.mainBarContainer, borderBottomWidth: 0} : styles.mainBarContainer}>
        <View style={getMainbarStyle(transparent, back)}>
            {
                back ?
                    <Icon
                        style={{...styles.settingsIcon, paddingVertical: scale(4)}}
                        type={'Ionicons'} name={'md-arrow-back'}
                        onPress={() => navigation.goBack()}
                    /> :
                    navigation ?
                        <Icon
                            style={styles.settingsIcon}
                            type={'MaterialIcons'} name={'menu'}
                            onPress={navigation.toggleDrawer}
                        /> :
                        <Icon
                            style={styles.noIcon}
                            type={'MaterialIcons'} name={'menu'}
                        />
            }
            {
                !back &&
                <MALogoHorizontalMenu/>
            }
            <Icon
                            style={{color:'purple', width:scale(11)}}
                            type={'MaterialIcons'} name={'menu'}
                        />
            
        </View>
    </View>
);

const getMainbarStyle = (transparent, back) => {
    if (!transparent) {
        if (back) {
            return {...styles.mainBar, height: scale(30)}
        } else {
            return styles.mainBar
        }
    } else {
        if (back) {
            return {...styles.mainBar, backgroundColor: 'transparent', height: scale(12)}
        } else {
            return {...styles.mainBar, backgroundColor: 'transparent'}
        }
    }
};

MAHeaderMenu.propTypes = ({
    navigation: PropTypes.object,
    transparent: PropTypes.bool,
    onSettings: PropTypes.func,
});

const icon = {
    alignSelf: 'center',
    paddingHorizontal: scale(15),
};

const backArrowView = {
    width: scale(26),
    height: scale(26),
    borderRadius: scale(5),
    margin: scale(6),
    justifyContent: 'center',
    alignItems: 'center'
};

const styles = StyleSheet.create({
    mainBarContainer: {
        alignSelf: 'stretch',
        borderBottomColor: 'lightgrey',
        borderBottomWidth: 1
    },
    mainBar: {
        flexDirection: 'row',
        alignSelf: 'stretch',
        backgroundColor: Colors.primaryColor,
        height: scale(42),
        justifyContent: 'space-between',
        elevation: 5,
        zIndex: 999,
    },
    logo: {
        width: scale(90),
        height: scale(30),
        marginTop: scale(4),
        resizeMode: 'contain'
    },
    noIcon: {
        ...icon,
        color: 'transparent',
    },
    backIcon: {
        ...icon,
        color: 'white',
    },
    backArrow: {
        width: scale(13),
        height: scale(16),
        resizeMode: 'contain'
    },
    settingsIcon: {
        ...icon,
        color: Colors.white,
    },
});

export default MAHeaderMenu;
