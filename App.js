import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity} from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker, Callout, Polygon} from 'react-native-maps';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import LinearGradient from 'react-native-linear-gradient';


export default function App() {
  const [pin, setPin] = useState({
      latitude: 37.78825,
      longitude: -122.4324,
  })
   const [pin2, setPin2] = useState({
      latitude: 37.71825,
      longitude: -122.4324,
  })
  const [pin3, setPin3] = useState({
      latitude: 37.7896386,
      longitude: -122.421646,
  })
   const [pin4, setPin4] = useState({
      latitude: 37.7665248,
      longitude: -122.4161628,
  })
   const [pin5, setPin5] = useState({
      latitude: 37.7734153,
      longitude: -122.4577787,
  })
  const [region, setRegion] = useState({
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
  })
  state ={
  coordinates:[
    {name: 'A', latitude:pin2.latitude,longitude:pin2.longitude},
    {name: 'B', latitude:pin3.latitude,longitude:pin3.longitude},
    {name: 'C', latitude:pin4.latitude,longitude:pin4.longitude},
    {name: 'D', latitude:pin5.latitude,longitude:pin5.longitude},
  ]
  }
  const zoomIn =() =>{
    if(region.longitudeDelta > 0.01){
      let x ={
        latitude: region.latitude,
        longitude: region.longitude,
        latitudeDelta: region.longitudeDelta - 0.01,
        longitudeDelta: region.longitudeDelta - 0.01,
      }
      setRegion(x);
    }
  }
  const zoomOut =() =>{
    let x ={
      latitude: region.latitude,
      longitude: region.longitude,
      latitudeDelta: region.longitudeDelta + 0.05,
      longitudeDelta: region.longitudeDelta + 0.05,
    }
    setRegion(x);
  }
  return (
    <View style={{marginTop: 50, flex:1}}>

    <GooglePlacesAutocomplete
      placeholder='Search here'
      fetchDetails={true}
      GooglePlacesDetailsQuery={{
        rankby:"distance",
      }}
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(data, details);
        setRegion({
          latitude: details.geometry.location.lat,
          longitude: details.geometry.location.lng,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        })
      }}
      query={{
        key: 'AIzaSyBxalJ5jJ2K-qJ7KNqZ3qlrJ1-XFcbD5b4',
        language: 'en',
        //components:"country:us",
        types:"establishment",
        location:`${region.latitude}, ${region.longitude}`
      }}
      styles={{
					container: { flex: 0, position: "absolute", width: "100%", zIndex: 1, paddingVertical:10},
					listView: { backgroundColor: "white" }
				}}
    />
     <MapView
       provider={PROVIDER_GOOGLE} // remove if not using Google Maps
       style={styles.map}
       region={{
         latitude: region.latitude,
         longitude: region.longitude,
         latitudeDelta: region.latitudeDelta,
         longitudeDelta: region.longitudeDelta,
       }}
     >
     <Polygon
       coordinates={this.state.coordinates}
       fillColor={'rgba(100,100,200,0.2)'}
       strokeWidth={2}
     />
     <Marker
       coordinate={region}
       pinColor="red"
       draggable={true}
       image={require('./assets/map_marker.png')}
       onDragStart={(e) => {
         console.log('Drag start', e.nativeEvent.coordinates)
       }}
       onDragEnd={(e) => {
         console.log('end')
         setPin({
           latitude: e.nativeEvent.coordinate.latitude,
           longitude: e.nativeEvent.coordinate.longitude,
         })
       }}
       >
       <Callout>
          <Text>Lat:{region.latitude}, Long:{region.longitude}</Text>
       </Callout>
       </Marker>


       <Marker
       coordinate={pin2}
       draggable={true}
       onDragStart={(e) => {
         console.log('Drag start', e.nativeEvent.coordinates)
       }}
       onDragEnd={(e) => {
         console.log('end')
         setPin2({
           latitude: e.nativeEvent.coordinate.latitude,
           longitude: e.nativeEvent.coordinate.longitude,
         })
       }}
       >
       <Callout>
          <Image
          style={{width:50,height:50}}
          source={require('./assets/A.png')}
          ></Image>
          <Text>Lat:{region.latitude}, Long:{region.longitude}</Text>
       </Callout>
       </Marker>
       <Marker
       coordinate={pin3}
       draggable={true}
       onDragStart={(e) => {
         console.log('Drag start', e.nativeEvent.coordinates)
       }}
       onDragEnd={(e) => {
         console.log('end')
         setPin3({
           latitude: e.nativeEvent.coordinate.latitude,
           longitude: e.nativeEvent.coordinate.longitude,
         })
       }}
       >
       <Callout>
       <Image
          style={{width:50,height:50}}
          source={require('./assets/B.png')}
          ></Image>
          <Text>Lat:{region.latitude}, Long:{region.longitude}</Text>
       </Callout>
       </Marker>
       <Marker
       coordinate={pin4}
       draggable={true}
       onDragStart={(e) => {
         console.log('Drag start', e.nativeEvent.coordinates)
       }}
       onDragEnd={(e) => {
         console.log('end')
         setPin4({
           latitude: e.nativeEvent.coordinate.latitude,
           longitude: e.nativeEvent.coordinate.longitude,
         })
       }}
       >
       <Callout>
       <Image
          style={{width:50,height:50}}
          source={require('./assets/C.png')}
          ></Image>
          <Text>Lat:{region.latitude}, Long:{region.longitude}</Text>
       </Callout>
       </Marker>
       <Marker
       coordinate={pin5}
       draggable={true}
       onDragStart={(e) => {
         console.log('Drag start', e.nativeEvent.coordinates)
       }}
       onDragEnd={(e) => {
         console.log('end')
         setPin5({
           latitude: e.nativeEvent.coordinate.latitude,
           longitude: e.nativeEvent.coordinate.longitude,
         })
       }}
       >
       <Callout>
       <Image
          style={{width:50,height:50}}
          source={require('./assets/D.png')}
          ></Image>
          <Text>Lat:{region.latitude}, Long:{region.longitude}</Text>
       </Callout>
       </Marker>
       

     </MapView>
      
        <TouchableOpacity onPress={zoomIn}>
        
                    <LinearGradient
                        colors={['#52504f','#f5f2f0']}
                        style={styles.zoomIn}
                    >
                        <Text style={styles.textSign}>+</Text>
                    </LinearGradient>
       
                </TouchableOpacity>
        <TouchableOpacity onPress={zoomOut}>
                    <LinearGradient
                        colors={['#52504f','#f5f2f0']}
                        style={styles.zoomOut}
                    >
                        <Text style={styles.textSign}>-</Text>
                    </LinearGradient>
                </TouchableOpacity>
      
    </View>
  );
}

const styles = StyleSheet.create({
  map:{
    ...StyleSheet.absoluteFillObject
    //height: '100%'
  },
  zooms:{
    paddingVertical: 100,
    paddingLeft:350,
  },
  zoomButtons:{
    position: 'absolute',
    bottom: 0,
  },
  button: {
    ...StyleSheet.absoluteFillObject,
  },
  zoomOut: {
      marginHorizontal:370,
      //marginTop:100,
      //alignContent:'center',
      width: 40,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 30,
      //flexDirection: 'row',
  },
  zoomIn: {
      marginHorizontal:370,
      //marginTop:100,
      //alignContent:'center',
      marginTop:90,
      marginVertical:10,
      width: 40,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 30,
      //flexDirection: 'row',
  },
  textSign: {
      color: 'black',
      fontWeight: 'bold',

  },
  bubble: {
    flexDirection: 'column',
    alignSelf: 'flex-start',
    backgroundColor:'#fff',
    borderRadius: 6,
    borderColor: '#ccc',
    borderWidth: 0.5,
    padding: 15,
    width:150,
  },
  arrow:{
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderTopColor: '#fff',
    borderWidth: 16,
    alignSelf: 'center',
    marginTop: -32,
  },
  arrowBorder: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderTopColor: '#007a87',
    borderWidth: 16,
    alignSelf: 'center',
    marginTop: -0.5,
  },
  name:{
    fontSize: 16,
    marginBottom: 5,
  },
  image: {
    width: 120,
    height: 80,
  },
  searchBox: {
    position:'absolute', 
    marginTop: Platform.OS === 'ios' ? 40 : 20, 
    flexDirection:"row",
    backgroundColor: '#fff',
    width: '90%',
    alignSelf:'center',
    borderRadius: 5,
    padding: 10,
    shadowColor: '#ccc',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
  },
});

