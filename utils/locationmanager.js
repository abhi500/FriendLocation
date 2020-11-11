import * as Location from 'expo-location';

async function checkGPSPermission(){
    console.log('checkGPSPermission')
    let permission = await Location.getPermissionsAsync();
    if(permission.granted) return true
    else return false;    
}

//request permission
async function requestPermission(){
    console.log('requestPermission')
    let status = await Location.requestPermissionsAsync();
    if (status !== 'granted') return false;
    return true;
}

//get current latitude and longitude
async function getLatLong(){
    console.log('getLatLong')
    if(!checkGPSPermission()){
        let permissionGranted = await requestPermission().then(status => {
            permissionGranted = status;
        });
        if(permissionGranted){
            let location = await Location.getCurrentPositionAsync({});
            let { latitude, longitude } = location.coords;
            return {lat: latitude, long: longitude};
        }
    }
    else{
        let location = await Location.getCurrentPositionAsync({});
        let { latitude, longitude } = location.coords;

        return {lat: latitude, long: longitude}; 
    }
    return {lat: null, long: null}
}

async function getAddress(){
    console.log('getAddress')
    let location =  await getLatLong();
    let address =  await Location.reverseGeocodeAsync({ latitude: location.lat, longitude: location.long });
    let data = address[0];
    return `${data.district ? data.district : ''}, ${data.street ? data.street + ', ' : ''}`+
        `${data.city ? data.city + ', ' : ''}${data.region ? data.region : ''}`;
}

export default {
    checkGPSPermission, 
    requestPermission,
    getAddress,
    getLatLong
}