import {StyleSheet} from 'react-native';
import scale from '../../utils/scaling/scale';
import Colors from '../Colors';

export const buttonBorderRadius = scale(2);
export const bottomButtonMargin = scale(20);

const maInputStyle = {
    color: Colors.white,
    borderRadius: scale(buttonBorderRadius)
};

const maInputContainerStyle = {
    backgroundColor: 'white',
    borderRadius: scale(buttonBorderRadius)
};

const maInputContainerStyleDark = {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    borderRadius: scale(buttonBorderRadius),
};

const inputStyle = {
    color: Colors.white,
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
    borderRadius: scale(buttonBorderRadius)
};

const fullButton = {
    height: scale(42),
    alignSelf: 'stretch',
    marginHorizontal: scale(18),
    marginVertical: scale(2),
    borderRadius: buttonBorderRadius,
};

const smallFullButton = {
    height: scale(52),
    alignSelf: 'stretch',
    marginVertical: scale(2),
    borderRadius: buttonBorderRadius,
};

const primaryButton = {
    ...fullButton,
    justifyContent: 'center',
};

const titleContainer = {
    marginVertical: scale(12),
};

const logoContainer = {
    width: scale(80),
    height: scale(80),
    justifyContent: 'center',
    alignItems: 'center'
};

export default StyleSheet.create({
    transparentContainer: {
        backgroundColor: 'rgb(141,199,62)',
    },
    content: {
        paddingHorizontal: scale(10),
        backgroundColor: Colors.backgroundColor,
    },
    transparentContent: {
        paddingHorizontal: scale(10),
        backgroundColor: 'transparent',
    },
    appNameContainer: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: scale(12),
    },
    logoContainer,
    logoContainerSmall: {
        ...logoContainer,
        width: scale(80),
        height: scale(70)
    },
    logo: {
        
        width: scale(145),
        marginLeft:scale(65),
        resizeMode: 'contain',
        
        
    },
    fullButton,
    primaryButton,
    disabledPrimaryButton: {
        ...primaryButton,
        opacity: 0.6,
    },
    iconButton: {
        ...fullButton,
        justifyContent: 'flex-start'
    },
    smallIconButton: {
        ...smallFullButton,
        flex: 1,
        paddingHorizontal: scale(3),
        justifyContent: 'center',
        alignItems: 'center'
    },
    verticalIconButton: {
        ...fullButton,
        marginHorizontal: scale(4),
        height: scale(72),
        flexDirection: 'column',
        justifyContent: 'center'
    },
    nextButton: {
        backgroundColor: 'transparent',
        justifyContent: 'flex-end'
    },
    prevButton: {
        backgroundColor: 'rgb(141,199,62)',
        justifyContent: 'flex-start'
    },
    uploadButton: {
        ...fullButton,
        marginHorizontal: 0,
        justifyContent: 'space-around'
    },
    primaryButtonText: {
        fontSize: 15,
        lineHeight: scale(26),
        color: 'purple',
    },
    secondaryButton: {
        ...fullButton,
        flexDirection: 'row',
        backgroundColor: 'white',
        justifyContent: 'center',
    },
    secondaryButtonText: {
        alignSelf: 'center',
        color: Colors.primaryColor,
        fontSize: 12,
        lineHeight: scale(13),
    },
    form: {
        marginTop: scale(18),
        marginBottom: scale(6),
        paddingHorizontal: scale(4),
    },
    input: inputStyle,
    maInput: maInputStyle,
    maInputContainer: maInputContainerStyle,
    maInputContainerDark: maInputContainerStyleDark,
    notLastInput: {
        ...inputStyle,
        marginBottom: scale(15),
    },
    titleContainer,
    titleContainerNoMargin: {
        ...titleContainer,
        marginTop: 0,
    },
});
