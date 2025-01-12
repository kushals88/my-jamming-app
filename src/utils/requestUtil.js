export async function fetchRequest(reqMethod, endPoint, { queryParams = '', body = null } = {}) {

    const baseURI = "https://api.spotify.com/v1";
    const accessToken = "BQDurk5j265vWBZtYvrv1hSxt-gkpl_37SR24El5RCZF10UggQqf-JOTjFAWRq4NiRoex0HhkZfSm9M_UHs_qQuhzk1oqp2ayqjakjUx5MOZbw7uAKHlvbf6CE-1FTX2Ni6zEroqiZjqaaUkxPklWAHhg__JUErp-jhmrXBjE2hVIDxPZb63n6T0EXg2NbxkDKtJms6sHTfc18jUDKxAHfrJaZkiJi6ManYZp2gm-TcrNuzZuo67a4_FpPrkYRmXCJmhiJYDsebP9gZkDw";
    const url = `${baseURI}${endPoint}${queryParams}`;
    console.log("Request URL: ", url);
    
    const headers = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`
    }
    const options = {
        method: reqMethod.toUpperCase(),
        headers: headers
    }
    if (body && (reqMethod.toUpperCase() === 'POST' || reqMethod.toUpperCase() === 'PUT')){
        options.body = JSON.stringify(body);
    }
    const request = new Request(url, options);

    try {
        const response = await fetch(request);
        console.log('Response:', response);

        if (response.ok) {
            const data = await response.json();
            const responseCode = response.status;
            return {data, responseCode};
        }
        else {
            console.error('Network response was not ok:', response.status, response.statusText);
            return { data: null, responseCode: response.status };
        }
    }
    catch (error) {
        console.error('Error fetching search results:', error);
        return { data: null, responseCode: 500 };
    }
}