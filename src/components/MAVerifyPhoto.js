import React, {useState, useEffect} from 'react';
import {Image, StyleSheet, View} from "react-native";
import {Spinner} from 'native-base';
import scale from "../utils/scaling/scale";
import {H5} from "./MAText";
import Colors from "../constants/Colors";
import i18n from "../utils/i18n";
import {PrimaryButton} from "./MAButton";
import ImageZoom from 'react-native-image-pan-zoom';

const MAVerifyPhoto = (props) => {
    const [imageUri, setImageUri] = useState();

    useEffect(() => {
        if(props.image) {
            setImageUri(props.image)
        }
    }, [props.image]);
    
    return (
        <View style={{...props.style}}>
            <View style={styles.imageContainer}>
                {imageUri &&
                <ImageZoom cropWidth={scale(300)}
                cropHeight={scale(300)} 
                imageWidth={scale(230)}
                imageHeight={scale(320)}
                pinchToZoom={true}
                panToMove={true}
                minScale={1}
                maxScale={5}>
                	
                <Image key={props.image} style={{...styles.image, ...props.imageStyle}}
                 source={{uri: imageUri}}/>
                </ImageZoom> 
                }
            </View>
            {
                props.pending ?
                    <Spinner color={Colors.primaryColor}/> :
                    <View style={{flexDirection: 'row', flex: 1}}>
                        <PrimaryButton
                            style={{...styles.button, marginRight: scale(1)}}
                            color={Colors.secondaryColor}
                            disabled={false}
                            onPress={props.onNoPress}
                        >
                            <H5 color='white'>{i18n.t('no').toUpperCase()}</H5>
                        </PrimaryButton>
                        <PrimaryButton
                            style={{...styles.button, marginLeft: scale(1)}}
                            disabled={false}
                            onPress={props.onYesPress}
                        >
                            <H5 color='purple'>{i18n.t('fotoOk').toUpperCase()}</H5>
                        </PrimaryButton>
                    </View>
            }
        </View>
    )
};

const styles = StyleSheet.create({
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        height: scale(60),
    },
    button: {
        flex: 1,
        height: scale(24),
        marginHorizontal: 0,
        marginVertical: 0,
        marginTop: scale(6)
    }
});

export default MAVerifyPhoto;
