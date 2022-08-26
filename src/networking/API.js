
export const apiKey = "84edc546-c4b5-40db-afdb-0dd39d8e7ba7"
export const secretKey = "58ade6169d09b1fb62db5234431dde9dd96ae56dfdbf20db8843eb14344ae941"
export const authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiI4NGVkYzU0Ni1jNGI1LTQwZGItYWZkYi0wZGQzOWQ4ZTdiYTciLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIl0sImlhdCI6MTY2MTI3NTkwOSwiZXhwIjoxNjYxODgwNzA5fQ.B6bXnj6eTpNj0okxa-NXzqmL-SYzeqYbXmcmo97wa3o";


const local_url = "http://localhost:3000" // temp


export const getToken = async () => {
    try {
        const response = await fetch(`${local_url}`/getToken, {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        })
        const { token } = await response.json()
        return token 
    } catch (e){
        console.log(e)
    }
}

export const getMeetingId = async (token) => {
    try {
        const endPount = `{local_url}/create-meeting`
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ token})
        }
        const response = await fetch(endPount, options)
        .then(async (result )=> {
            const { meetingID }= await result.json()
            return meetingID
        })
    } catch (e) {
        console.log(e)
    }
}

export const createMeeting = async ({ token }) => {
const res = await fetch(`https://api.videosdk.live/v1/meetings`, {
    method: "POST",
    headers: {
        authorization: `${authToken}`,
        "Content-Type": "application/json",
    },
    body: JSON.stringify({ region: "sg001" }),
    });

    const { meetingId } = await res.json();
    return meetingId;
};