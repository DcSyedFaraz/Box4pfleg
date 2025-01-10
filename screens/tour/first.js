import React, { useRef, useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import Svg, { Path, Circle } from 'react-native-svg';
import AsyncStorage from '@react-native-async-storage/async-storage';

const slides = [
    {
        key: '0',
        title: 'Pflegeprodukte auswählen',
        text: 'Stellen Sie sich Ihr individuelles Pflegehilfsmittel Paket zusammen.',
        image: require('../../assets/First.png'),
        backgroundColor: '#ffffff',
    },
    {
        key: '1',
        title: 'Formular ausfüllen',
        text: 'Unser Formular direkt online ausfüllen und einreichen.',
        image: require('../../assets/Second.png'),
        backgroundColor: '#ffffff',
    },
    {
        key: '2',
        title: 'Track Progress',
        text: 'Easily monitor your progress anytime.',
        image: require('../../assets/Third.png'),
        backgroundColor: '#ffffff',
    },
    {
        key: '3',
        title: 'Get Support',
        text: 'Reach out for support whenever you need.',
        image: require('../../assets/Fourth.png'),
        backgroundColor: '#ffffff',
    },
];

const First = ({ navigation }) => {

    const handleDone = async () => {
        await AsyncStorage.setItem('hasSeenTour', 'true');
        navigation.replace('Last');
    };

    const sliderRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleSkipOrDone = () => {
        if (currentIndex < slides.length - 1) {
            // Navigate to the next slide
            sliderRef.current.goToSlide(currentIndex + 1, true);
        } else {
            handleDone();
            console.log('Intro Finished');
        }
    };

    const renderSlide = ({ item, index }) => (

        <View style={[styles.slide, { backgroundColor: item.backgroundColor }]}>
            <View>
                <Svg width="189" height="47" viewBox="0 0 189 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <Path fill-rule="evenodd" clip-rule="evenodd" d="M57.4084 27.2588C57.4084 21.4995 55.8819 20.1464 52.158 20.1464C51.3136 20.1464 50.1282 20.3141 50.1282 20.3141V12.6928C50.1282 12.6928 49.6194 12.5251 48.9428 12.5251C48.0985 12.5251 47.5897 12.6928 47.5897 12.6928V35.2156C47.5897 35.2156 49.1162 35.5567 51.6547 35.5567C55.8875 35.5567 57.414 32.677 57.414 27.7676V27.2588H57.4084ZM54.8699 27.7676C54.8699 31.3239 54.1933 33.1859 51.6491 33.1859C50.8048 33.1859 50.296 33.0181 50.296 33.0181V22.3494C50.296 22.3494 51.4814 22.1817 52.3257 22.1817C54.5288 22.1817 54.8643 23.026 54.8643 27.0911V27.7676H54.8699Z" fill="#4D4E4E" />
                    <Path fill-rule="evenodd" clip-rule="evenodd" d="M66.5562 27.5999C66.5562 31.4972 66.2151 33.1858 64.3531 33.1858C62.4912 33.1858 62.1501 31.4916 62.1501 27.5999V26.9233C62.1501 23.026 62.4912 22.1817 64.3531 22.1817C66.2151 22.1817 66.5562 23.026 66.5562 26.9233V27.5999ZM69.0948 27.0911C69.0948 22.0083 68.2505 19.9786 64.3531 19.9786C60.4558 19.9786 59.6115 22.0083 59.6115 27.0911V27.7676C59.6115 33.3536 61.138 35.7244 64.3531 35.7244C67.5683 35.7244 69.0948 33.3536 69.0948 27.7676V27.0911Z" fill="#4D4E4E" />
                    <Path fill-rule="evenodd" clip-rule="evenodd" d="M78.7458 35.3889H81.6254L77.9015 27.5999L81.4577 20.1464H78.7458L76.375 25.7323L74.0042 20.1464H71.2923L74.8485 27.7676L71.1245 35.5567H74.0042L76.5427 29.9707L78.7458 35.3889Z" fill="#4D4E4E" />
                    <Path fill-rule="evenodd" clip-rule="evenodd" d="M90.4321 35.3889V30.815H81.1166V26.9177L90.941 12.3517H94.6649V27.0855H97.5446V30.6417H94.6649V35.2156H90.4321V35.3833V35.3889ZM90.7732 27.2588V18.6199L85.0139 27.2588H90.7732Z" fill="#214184" />
                    <Path fill-rule="evenodd" clip-rule="evenodd" d="M108.554 27.2588C108.554 21.4995 107.028 20.1464 103.304 20.1464C100.592 20.1464 98.73 20.4874 98.73 20.4874V42.1659C98.73 42.1659 99.2388 42.3336 99.9154 42.3336C100.76 42.3336 101.269 42.1659 101.269 42.1659V35.3945C101.269 35.3945 101.945 35.5623 102.622 35.5623C106.855 35.5623 108.549 33.0237 108.549 27.941V27.2644L108.554 27.2588ZM106.184 27.7676C106.184 31.665 105.507 33.0181 102.968 33.0181C102.124 33.0181 101.615 32.8504 101.615 32.8504V22.5228C101.615 22.5228 102.801 22.355 103.645 22.355C105.675 22.355 106.184 23.1993 106.184 27.0967V27.7732V27.7676ZM115.835 14.7281H117.02C117.02 14.7281 117.188 14.2193 117.188 13.5427C117.188 12.8662 117.02 12.3573 117.02 12.3573H115.835C113.631 12.3573 111.261 13.5427 111.261 16.2546V35.2212C111.261 35.2212 111.77 35.3889 112.446 35.3889C113.123 35.3889 113.799 35.2212 113.799 35.2212V22.5172H116.679C116.679 22.5172 116.847 22.0083 116.847 21.3318C116.847 20.6552 116.679 20.1464 116.679 20.1464H113.799V16.5901C113.799 15.4047 114.985 14.7281 115.829 14.7281H115.835ZM121.253 12.5251L118.541 13.3694V35.3833C118.541 35.3833 119.05 35.5511 119.894 35.5511C120.571 35.5511 121.079 35.3833 121.079 35.3833V12.5251H121.247H121.253ZM124.132 27.9354C124.132 33.0181 125.827 35.3889 130.059 35.3889C132.771 35.3889 133.957 34.2035 133.957 34.2035C133.957 34.2035 133.957 33.0181 133.448 31.8327C133.448 31.8327 132.43 33.0181 130.233 33.0181C128.203 33.0181 127.018 31.8327 127.018 28.2765H134.639V26.2467C134.639 21.8462 132.777 19.8109 129.73 19.8109C126.514 19.8109 124.144 22.1817 124.144 27.2644V27.941L124.132 27.9354ZM129.551 22.3494C131.245 22.3494 131.921 23.5348 131.754 26.0734H126.844C126.844 23.7026 127.862 22.3494 129.556 22.3494H129.551ZM136.495 27.9354C136.495 33.8624 138.022 35.3889 141.578 35.3889C142.763 35.3889 143.608 35.0478 143.608 35.0478C143.608 38.7718 143.099 39.7895 141.237 39.7895C139.71 39.7895 138.525 38.7718 138.525 38.7718C137.507 39.6161 137.172 40.8015 137.172 40.8015C137.172 40.8015 138.016 42.1547 141.069 42.1547C144.625 42.1547 145.979 40.6282 145.979 35.21V20.3085C145.979 20.3085 143.949 19.9674 141.578 19.9674C138.022 19.9674 136.495 22.3382 136.495 27.2476V27.9242V27.9354ZM139.207 27.2588C139.207 24.0437 139.884 22.3494 141.919 22.3494C142.763 22.3494 143.613 22.5172 143.613 22.5172V32.8448C143.613 32.8448 142.428 33.0125 141.584 33.0125C139.554 33.0125 139.213 31.9949 139.213 27.9298V27.2532L139.207 27.2588ZM149.199 27.9354C149.199 33.0181 150.894 35.3889 155.126 35.3889C157.838 35.3889 159.024 34.2035 159.024 34.2035C159.024 34.2035 159.024 33.0181 158.515 31.8327C158.515 31.8327 157.497 33.0181 155.3 33.0181C153.27 33.0181 152.085 31.8327 152.085 28.2765H159.706V26.2467C159.706 21.8462 157.844 19.8109 154.796 19.8109C151.581 19.8109 149.211 22.1817 149.211 27.2644V27.941L149.199 27.9354ZM154.444 22.3494C156.138 22.3494 156.815 23.5348 156.647 26.0734H151.738C151.906 23.7026 152.756 22.3494 154.45 22.3494H154.444Z" fill="#4D4E4E" />
                    <Path fill-rule="evenodd" clip-rule="evenodd" d="M161.053 35.2212V32.5093H163.765V35.2212H161.053ZM165.795 27.7676C165.795 33.6947 167.489 35.3889 171.046 35.3889C173.416 35.3889 175.619 35.0478 175.619 35.0478V12.6984C175.619 12.6984 174.943 12.5307 174.266 12.5307C173.925 12.5307 173.422 12.5307 173.081 12.6984V20.152C173.081 20.152 172.237 19.9842 171.387 19.9842C167.83 19.9842 165.801 22.355 165.801 27.0967V27.7732L165.795 27.7676ZM168.334 27.2588C168.334 24.0437 169.178 22.5172 171.213 22.5172C172.058 22.5172 172.907 22.6849 172.907 22.6849V33.0125C172.907 33.0125 171.722 33.1803 170.878 33.1803C168.848 33.1803 168.339 31.9949 168.339 27.9298V27.2532L168.334 27.2588ZM178.493 27.9354C178.493 33.0181 180.188 35.3889 184.42 35.3889C187.132 35.3889 188.318 34.2035 188.318 34.2035C188.318 34.2035 188.318 33.0181 187.809 31.8327C187.809 31.8327 186.791 33.0181 184.594 33.0181C182.564 33.0181 181.379 31.8327 181.379 28.2765H189V26.2467C189 21.8462 187.138 19.8109 184.091 19.8109C180.875 19.8109 178.505 22.1817 178.505 27.2644V27.941L178.493 27.9354ZM183.744 22.3494C185.438 22.3494 186.115 23.5348 185.947 26.0734H181.038C181.038 23.7026 182.055 22.3494 183.75 22.3494H183.744Z" fill="#4D4E4E" />
                    <Path fill-rule="evenodd" clip-rule="evenodd" d="M22.0139 34.539V46.5608L41.1482 35.7244V14.0516C39.6217 14.8959 33.3592 18.2844 31.4972 19.4698C30.8206 19.9786 30.144 20.3141 29.2941 20.6552C29.9707 22.0084 30.3118 23.3671 30.3118 24.888C30.144 29.7974 26.7555 33.8624 22.0139 34.539Z" fill="#4D4E4E" />
                    <Path fill-rule="evenodd" clip-rule="evenodd" d="M11.6863 20.4874C6.60362 17.6078 0.844324 14.5604 0 14.0516V35.73C1.35316 36.7477 3.21514 37.592 4.74163 38.4419L18.9665 46.572V34.7179C14.2249 34.0414 10.6687 29.9763 10.6687 25.0669C10.5009 23.3727 10.8364 21.8518 11.6863 20.493V20.4874Z" fill="#4D4E4E" />
                    <Path fill-rule="evenodd" clip-rule="evenodd" d="M1.35315 11.0042C2.02973 11.513 8.29785 14.9015 13.375 17.7755C15.237 16.0813 17.6078 14.8959 20.3197 14.8959C23.0316 14.8959 25.4024 15.9136 27.0911 17.6078L39.454 10.8364C36.4066 9.30993 23.026 1.35316 20.6552 0H20.3141C16.0869 2.53297 6.09478 8.29227 1.35315 11.0042Z" fill="#214184" />
                    <Path fill-rule="evenodd" clip-rule="evenodd" d="M18.1222 23.026V19.8109C18.1222 18.6254 19.1399 17.6078 20.3253 17.6078C21.5107 17.6078 22.5283 18.6254 22.5283 19.8109V23.026H25.7435C26.9289 23.026 27.9465 24.0437 27.9465 25.2291C27.9465 26.4145 26.9289 27.4321 25.7435 27.4321H22.5283V30.6473C22.5283 31.8327 21.5107 32.8504 20.3253 32.8504C19.1399 32.8504 18.1222 31.8327 18.1222 30.6473V27.4321H14.9071C13.7216 27.2644 12.704 26.2467 12.704 25.0613C12.704 23.8759 13.7216 22.8583 14.9071 22.8583H18.1222V23.026Z" fill="#214184" />
                </Svg>

            </View>
            {/* <Image style={styles.image} source={item.image} />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.text}>{item.text}</Text> */}
            <View style={styles.iconContainer}>

                <Image style={styles.image} source={item.image} />


            </View>

            {/* Text Content */}
            <View style={styles.logoContainer}>

                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.text}>
                    {item.text}
                </Text>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText} onPress={handleSkipOrDone}>Hilfe überspringen {index}</Text>
                </TouchableOpacity>
            </View>

        </View>
    );

    return (
        <AppIntroSlider
            renderItem={renderSlide}
            data={slides}
            onDone={handleDone}
            onSlideChange={(index) => setCurrentIndex(index)}
            // renderNextButton={() => (
            //     <View style={styles.buttons}>
            //         <Text style={styles.buttonText}>Hilfe überspringen</Text>
            //     </View>
            // )}
            // renderDoneButton={() => (
            //     <View style={styles.buttons}>
            //         <Text style={styles.buttonText}>Hilfe überspringen</Text>
            //     </View>
            // )}
            ref={sliderRef}
            dotStyle={styles.dot}
            activeDotStyle={styles.activeDot}
        />
    );
};

export default First;

const styles = StyleSheet.create({
    logoContainer: {
        marginBottom: 70,
    },
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        paddingBottom: 100,
    },
    image: {
        width: 200,
        height: 200,
        // marginBottom: 10,
        resizeMode: 'contain',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
    },
    text: {
        fontSize: 16,
        color: '#555',
        textAlign: 'center',
        paddingHorizontal: 20,
    },
    button: {
        backgroundColor: '#f0f0f0',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderColor: "#224184",
        borderRadius: 5,
        borderWidth: 1,
        margin: 40,
        alignItems: 'center',
    },
    buttons: {
        backgroundColor: '#f0f0f0',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderColor: "#224184",
        borderRadius: 5,
        position: 'absolute',
        top: -110,
        right: 75,
        borderWidth: 1,
        marginBottom: 400,
        alignItems: 'center',
    },
    iconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 30,
    },
    buttonText: {
        color: '#224184',
        fontSize: 16,
        fontWeight: '700',
    },
    dot: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: "#224184",
        // borderRadius: 5,
        width: 18,
        height: 18,
        borderRadius: 9,
        marginHorizontal: 5,
    },
    activeDot: {
        width: 24,
        height: 24,
        borderRadius: 12,
        backgroundColor: '#224184',
    },
});
