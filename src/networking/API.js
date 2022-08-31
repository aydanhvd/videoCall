
export const apiKey = "4ce2deeb-202e-4dd5-ba48-aa92499d037f"
export const secretKey = "ffac73c229d069543b064c55270b0b2f446a5a646efcf8452bb4ad6ea2474e93"
export const authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiI0Y2UyZGVlYi0yMDJlLTRkZDUtYmE0OC1hYTkyNDk5ZDAzN2YiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIl0sImlhdCI6MTY2MTk0NjQzOCwiZXhwIjoxNjYyNTUxMjM4fQ.VWGnuDq_yY7AWjc6EvCys31Wbi8wzslJs84XftNFNWo";


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