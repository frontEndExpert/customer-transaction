//const request = require('request')

// const geocode = async (address, callback) => {
//     const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoiYW5kcmV3bWVhZDEiLCJhIjoiY2pvOG8ybW90MDFhazNxcnJ4OTYydzJlOSJ9.njY7HvaalLEVhEOIghPTlw&limit=1'

//     const requestOptions = {
//         method: "GET",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(Location)
//       };

//       const { latitude, longitude, location } = await fetch(url, requestOptions);
//             console.log(latitude, longitude, location);
//             return {latitude, longitude, location};
//             callback(undefined, {
//                 latitude: body.features[0].center[1],
//                 longitude: body.features[0].center[0],
//                 location: body.features[0].place_name
//             })
//     }
/*
        .then(response => response.json())
        .then(res => {
            console.log(response);
              return true;
          })
        .then( (success) => {
            console.log("success",success);
            setShow(false)
          });
    };
    request({ url, json: true }, (error, { body }) => {
        { latitude, longitude, location }   = await fetch()
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (body.features.length === 0) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
    */


//export default geocode;
//module.exports = geocode