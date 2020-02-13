const BASE_URL = "https://wodshare.herokuapp.com";
const ATHLETE_VALIDATE_URL = BASE_URL + "/athlete/validate"
const COACH_VALIDATE_URL = BASE_URL + "/coach/validate"
const ATHLETE_LOGIN_URL = BASE_URL + "/athlete/login";
const COACH_LOGIN_URL = BASE_URL + "/coach/login";
const ATHLETE_SIGNUP_URL = BASE_URL + "/athletes";
const COACH_SIGNUP_URL = BASE_URL + "/coaches";


function loginAthlete(user) {
    
    return fetch(ATHLETE_LOGIN_URL, createUserObj(user))
        .then(JSONresp)
        .then(handleUserResponse)
} 

function loginCoach(user) {
    
    return fetch(COACH_LOGIN_URL, createUserObj(user))
        .then(JSONresp)
        .then(handleUserResponse)
} 

function createCoachAccount(user) {
    return fetch(COACH_SIGNUP_URL, createUserObj(user))
        .then(JSONresp)
        .then(handleUserResponse)
}

function createAthleteAccount(user) {
    return fetch(ATHLETE_SIGNUP_URL, createUserObj(user))
        .then(JSONresp)
        .then(handleUserResponse)
}



function SubmitCoachFind(athleteID, coach_email) {
    return fetch(`https://wodshare.herokuapp.com/athletes/findcoach/${athleteID}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                coach_email: coach_email
            })
        }).then(JSONresp)
}
function SubmitAthleteFind(coachID, athlete_email) {
    return fetch(`https://wodshare.herokuapp.com/coaches/findathlete/${coachID}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                athlete_email: athlete_email
            })
        }).then(JSONresp)
}

function deleteAthleteAccount(athleteID) {
    return fetch(`https://wodshare.herokuapp.com/athletes/delete/${athleteID}`, {
        method: "DELETE"
    })
}


// function createObj(obj) {

//     return {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//             "Accept": "application/json",
//             "Authorisation": localStorage.token
//         },
//         body: JSON.stringify(obj)
//     }
// }

function JSONresp(resp) {
    if (resp.ok) return resp.json();
    throw resp.json();
}

function handleUserResponse(user) {
    if (user.token) {
        localStorage.token = user.token;
        localStorage.account_type = user.account_type
    }
    return user;
}

function createUserObj(user) {
    return {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(user)
    }
}

function validate() {
    if (localStorage.account_type === "athlete") {
        return fetch(ATHLETE_VALIDATE_URL, {
            method: "GET",
            headers: {
                Authorisation: localStorage.token,
            }
        }).then(JSONresp).then(handleUserResponse);
    } else if (localStorage.account_type === "coach") {
        return fetch(COACH_VALIDATE_URL, {
            method: "GET",
            headers: {
                Authorisation: localStorage.token,
            }
        }).then(JSONresp).then(handleUserResponse);
    }
}

export default {loginAthlete,
    SubmitCoachFind,
    SubmitAthleteFind,
    deleteAthleteAccount,
    loginCoach,
    validate,
    createCoachAccount,
    createAthleteAccount,
    hasToken: () => !!localStorage.token,
    clearToken: () => localStorage.removeItem("token")  && localStorage.removeItem("account_type")
};