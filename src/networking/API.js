
export const apiKey = "1e644e73-581f-447d-9a8a-b7ee4ea730b2"
export const secretKey = "22ac71b908635887218551a823c665d06b758eb1d1e1e756ac22bd7a95b27620"
export const authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiIxZTY0NGU3My01ODFmLTQ0N2QtOWE4YS1iN2VlNGVhNzMwYjIiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIl0sImlhdCI6MTY2MTkzMjk5MywiZXhwIjoxNjYyNTM3NzkzfQ.1D6a5B8XcDkkUg5SBon_PvgBt0Xyx8eW_XI0kN6qFLM";


const local_url = "http://localhost:3000" // temp


// export const getToken = async () => {
//     try {
//         const response = await fetch(`${local_url}`/getToken, {
//             method: "GET",
//             headers: {
//                 Accept: "application/json",
//                 "Content-Type": "application/json",
//             },
//         })
//         const { token } = await response.json()
//         return token 
//     } catch (e){
//         console.log(e)
//     }
// }

// export const getMeetingId = async (token) => {
//     try {
//         const endPount = `{local_url}/create-meeting`
//         const options = {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify({ token})
//         }
//         const response = await fetch(endPount, options)
//         .then(async (result )=> {
//             const { meetingID }= await result.json()
//             return meetingID
//         })
//     } catch (e) {
//         console.log(e)
//     }
// }

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