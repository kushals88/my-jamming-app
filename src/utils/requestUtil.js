export async function fetchRequest(reqMethod, endPoint, { queryParams = '', body = null } = {}) {

    const baseURI = "https://api.spotify.com/v1";
    const accessToken = "BQBcsHiOC9aKL_j73kH6lMjDTyX39UtwgZsls52Ptr15tivgi-kVAlhu3T78VCy2AciMSSlc1tiDu_NQQLP-2YAM9nJnFksijRQHYv677osCaCT4GJ7y6YlVH4F1q6Pgsz6SLvyEykiABjbcEywaIPSlR4Rfv3qMAIDfjnAWyl94f_wAtqBHZzzA5RkBeWT_lvU2t3RHF7nrnUEmcqC9h6JVYyQdvW1ygQSqXGQqceXPP5A1LcaeYBbpUXl0Lp0UZWs6y198_lgORgtoEA";
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