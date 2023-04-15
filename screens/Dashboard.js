import React, { useState, useRef} from 'react';
import {
    View,
    Text,
    Image,
    SafeAreaView,
    Animated,
    ScrollView,
    Platform,
    TouchableOpacity
} from 'react-native';
import { act } from 'react-test-renderer';

import { dummyData, COLORS, SIZES, FONTS, icons, images } from '../constants';
import { TextButton } from '../components';
import { event } from 'react-native-reanimated';


const COUNTRIES_ITEM_SIZE = SIZES.width / 3
const PLACES_ITEM_SIZE = Platform.OS === 'Android' ? SIZES.width / 1.25  : SIZES.width / 1.4
const EMPTY_ITEM_SIZE = ( SIZES.width - PLACES_ITEM_SIZE) /2

const Dashboard = ({ navigation }) => {

    const countryScrollX = useRef(new Animated.Value(0)).current;
    const placesScrollX = useRef(new Animated.Value(0)).current;

    const [countries, setCountries] = useState([{ id: -1}, ...dummyData.countries, {id: -2}])
    const [places, setPlaces] = useState([ { id: -1}, ...dummyData.countries[0].places, { id: -2}])

    const [placesScrollPosition, setPlacesScrollPosition] = useState(0)

    function renderHeader() {
        return (
            <View
            style={{
                flexDirection: 'row',
                paddingHorizontal: SIZES.padding,
                paddingVertical: SIZES.base,
                alignItems: 'center'
            }}>
                {/* { Side Drawer} */}
                <TouchableOpacity
                    style={{
                        width: 45,
                        height: 45,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                    onPress={() => console.log("Side Drawer")}
                >
    
                    <Image
                        source={icons.side_drawer}
                        resizeMode="contain"
                        style={{
                            width: 25,
                            height: 25,
                            tintColor: COLORS.white
                        }}/>
    
                </TouchableOpacity>
                 {/* { Label/ Title} */}
                 <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                     <Text style={{ color: COLORS.white, ...FONTS.h3}}>SRI LANKA</Text>

                 </View>
                  {/* { profile} */}
                  <TouchableOpacity
                  onPress={() => console.log("Profile")}>
                      <Image
                        source={images.profile_pic}
                        resizeMode="contain"
                        style={{
                            width: 45,
                            height: 45,
                            borderRadius: 30
                        }}/>

                  </TouchableOpacity>
    
            </View>
        )
    }
    // function renderCountries() {
    //     return (
    //         <Animated.FlatList
    //             horizontal
    //             pagingEnabled
    //             snapToAlignment="center"
    //             snapToInterval={COUNTRIES_ITEM_SIZE}
    //             showsHorizontalScrollIndicator={false}
    //             scrollEventThrottle={16}
    //             decelerationRate={0}
    //             data={countries}
    //             keyExtractor={item => '${item.id}'}
    //             onScroll={Animated.event([
    //                 { nativeEvent: { contentOffset: { x:
    //                 countryScrollX } } }

    //             ], { useNativeDrive: false})}

    //             onMomentumScrollEnd={(event) =>  {
    //                 // Calculate position
    //                 var position = (event.nativeEvent.contentOffset.x / COUNTRIES_ITEM_SIZE).toFixed(0)

    //                 // set palce
    //                 setPlaces([
    //                     {id: -1},
    //                     ...dummyData.countries[position].places,
    //                     {id: -2}
    //                 ])
    //             }}
    //             renderItem={ ({ item, index }) => {
    //                 const opacity = countryScrollX.interpolate({
    //                     inputRange: [
    //                         (index - 2) * COUNTRIES_ITEM_SIZE,
    //                         (index - 1) * COUNTRIES_ITEM_SIZE,
    //                         index * COUNTRIES_ITEM_SIZE
    //                     ], 
    //                     outputRange: [0.3, 1, 0.3],
    //                     extrapolate: 'clamp'
    //                 })

    //                 const mapSize = countryScrollX.interpolate({
    //                     inputRange: [
    //                         (index - 2) * COUNTRIES_ITEM_SIZE,
    //                         (index - 1) * COUNTRIES_ITEM_SIZE,
    //                         index * COUNTRIES_ITEM_SIZE
    //                     ],
    //                     outputRange: [25, Platform.OS === 'android' ? 80 : 30, 25],
    //                     extrapolate: 'clamp'
    //                 })

    //                 const fontSize = countryScrollX.interpolate({
    //                     inputRange: [
    //                         (index - 2) * COUNTRIES_ITEM_SIZE,
    //                         (index - 1) * COUNTRIES_ITEM_SIZE,
    //                         index * COUNTRIES_ITEM_SIZE
    //                     ],
    //                     outputRange: [10, 10, 5],
    //                     extrapolate: 'clamp'
    //                 })

    //                 if (index == 0 || index  == countries.length - 1) {

    //                     return(
    //                         <View
    //                             style={{
    //                                 width: COUNTRIES_ITEM_SIZE
    //                             }}
    //                         />   
    //                     )
                        
    //                 } else {
    //                     return(
    //                         <Animated.View
    //                             opacity={opacity}
    //                             style= {{
    //                                 height: 110,
    //                                 alignItems: 'center',
    //                                 justifyContent: 'center'
                                    
    //                             }}>
    //                                 <Animated.Image
    //                                     source={item.image}
    //                                     resizeMode="contain"
    //                                     style={{
    //                                         width: 140,
    //                                         height: mapSize,
    //                                         tintColor: COLORS.white
    //                                     }}

    //                                     />
    //                                    <Animated.Text style={{ marginTop: 1, color: COLORS.white, ...FONTS.h1, fontSize: 20 }}>{item.name}
    //                                        </Animated.Text> 
    //                             </Animated.View>
    //                     )
    //                 }
                
    //             }}
    //         />
    //     )
    // }

    function exploreButtonHandler() {
        //get places current index
         const currentIndex = parseInt(placesScrollPosition, 10) + 1
         // Navigation to the next screen
         console.log(places[currentIndex])
         navigation.navigate("Place",  { selectedPlace: places [currentIndex] })
    }

    // function renderPlaces() {
    //     return (
    //         <Animated.FlatList
    //             horizontal
    //             pagingEnabled
    //             showsHorizontalScrollIndicator={false}
    //             data={places}
    //             keyExtractor={item => '${item.id}'}
    //             contentContainerStyle={{
    //                 alignItems : 'center'
    //             }}
    //             snapToAlignment="center"
    //             snapToInterval={Platform.OS === 'Android' ? PLACES_ITEM_SIZE + 28 : PLACES_ITEM_SIZE}
    //             scrollEventThrottle={16}
    //             decelerationRate={0}
    //             bounces={false}
    //             onScroll={Animated.event([
    //                 { nativeEvent: { contentOffset: { x:
    //                 placesScrollX } } }

    //             ], { useNativeDrive: false})}

    //             onMomentumScrollEnd={(event) => {
    //                 //calculate position
    //                 var position = (event.nativeEvent.contentOffset.x / PLACES_ITEM_SIZE).toFixed(0)

    //                 //set place scroll position
    //                 setPlacesScrollPosition(position)
    //             }}
    //             renderItem={ ({ item, index }) => {

    //                 const opacity = placesScrollX.interpolate({
    //                     inputRange: [
    //                         (index - 2) * PLACES_ITEM_SIZE,
    //                         (index - 1) * PLACES_ITEM_SIZE,
    //                         index * PLACES_ITEM_SIZE
    //                     ],
    //                     outputRange: [0.3, 1, 0.3],
    //                     extrapolate: 'clamp'
    //                 })

    //                 let activeHeight = 0

    //                 if (Platform.OS === 'Android') {
    //                     if (SIZES.height > 800) {
    //                         activeHeight = SIZES.height / 2
    //                     } else {
    //                         activeHeight = SIZES.height / 1.65
    //                     }
                        
    //                 } else {
    //                     activeHeight = SIZES.height / 1.6
    //                 }

    //                 const height = placesScrollX.interpolate({
    //                     inputRange: [
    //                         (index - 2) * PLACES_ITEM_SIZE,
    //                         (index - 1) * PLACES_ITEM_SIZE,
    //                         index * PLACES_ITEM_SIZE
    //                     ],
    //                     outputRange: [SIZES.height / 2.25,
    //                     activeHeight, SIZES.height / 2.25],
    //                     extrapolate: 'clamp'
    //                 })

    //                 if (index == 0 || index == places.length - 1) {

    //                     return (
    //                         <View 
    //                         style={{
    //                             width: EMPTY_ITEM_SIZE
    //                         }}/>

                            
    //                     )
                        
    //                 } else {
    //                     return (
    //                         <Animated.View
    //                             opacity={opacity}
    //                             style={{
    //                                 width: PLACES_ITEM_SIZE,
    //                                 height: 380,
    //                                 alignItems: 'center',
    //                                 borderRadius: 20,
    //                                 marginTop: -80,
    //                                 padding: 10
    //                             }}
    //                             >
    //                                 <Image
    //                                     source={item.image}
    //                                     resizeMode="cover"
    //                                     style={{
    //                                         position: 'absolute',
    //                                         width: "100%",
    //                                         height: "100%",
    //                                         borderRadius: 20
    //                                     }}
    //                                 />
    //                                 <View
    //                                     style={{ flex: 1, alignItems:
    //                                     'center', justifyContent:
    //                                     'flex-end', marginHorizontal: 
    //                                     SIZES.padding }} 
    //                                     >
    //                                     <Text style={{ marginBottom: SIZES.radius, color: COLORS.white, ...FONTS.h1}}>
    //                                         {item.name}
    //                                     </Text>
    //                                     <Text style={{ marginBottom: SIZES.padding * 2, textAlign: 'center', color: COLORS.white, ...FONTS.body3}}>
    //                                         {item.description}
    //                                     </Text>
    //                                     <TextButton
    //                                         label="Explore"
    //                                         customContainerStyle={{
    //                                             position : 'absolute',
    //                                             bottom: -20,
    //                                             width: 150
    //                                         }}
    //                                         onPress={() =>
    //                                         exploreButtonHandler()}
    //                                     />
    //                                 </View>
    //                         </Animated.View>
    //                     )
    //                 }
                   
    //             }}
    //         />
    //     )
    // }
   
    return (
     <SafeAreaView style={{flex: 1, backgroundColor: COLORS.black}}>
         {renderHeader()}

         <ScrollView contentContainerStyle={{ paddingBottom: Platform.OS === 'android' ? 40: 0}}>
             <View style={{ height: 700}}>
                {/* Contries */}
                <View>
                    {/* {renderCountries()} */}
                </View>
                {/* Contries */}
                <View style={{ height: Platform.OS === 'android' ? 500 : 450}}>
                    {/* {renderPlaces()} */}

                </View>
             </View>

         </ScrollView>
     </SafeAreaView>
    )
}

export default Dashboard;