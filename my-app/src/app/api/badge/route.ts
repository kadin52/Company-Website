export async function GET() {
    const apiKey = process.env.GOOGLE_PLACES_API_KEY;
    const placeId = process.env.GOOGLE_PLACE_ID;
    const placeUrl = "https://places.googleapis.com/v1/places/"
    
    if (!apiKey || !placeId) {
        return Response.json(
            {
                error: "Missing API key or Place ID",
            },
            {
                status: 500
            }
        )
    }
    // const googlePlacesUrl = placeUrl + placeId + "?fields=rating,userRatingCount&key=" + apiKey;
    const googlePlacesUrl = placeUrl + placeId
    const response = await fetch(googlePlacesUrl, {
        headers: {
            "X-Goog-Api-Key": apiKey,
            "X-Goog-FieldMask": "rating,userRatingCount,googleMapsUri"
        },
        cache: "no-store"
    })
    if (!response.ok) {
        return Response.json(
            {
                error: "Failed to fetch data from Google Places API",
            },
            {
                status: response.status
            }
        )
    }
    const data = await response.json();
    return Response.json({
        google: {
            rating: data.rating,
            userRatingCount:data.userRatingCount,
            googleMapsUri: data.googleMapsUri
        },  
        
    
    });
}