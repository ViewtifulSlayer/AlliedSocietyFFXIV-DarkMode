// Create a list of tribes with their progression information.
const TRIBE_REPUTATION_DATA = [
 {
        "tribeType": "arr",
        "reputationNeeded": [
            150,
            360,
            510,
        ],
        "reputationGainedPerTurnin": [
            10,
            14,
            20,
        ]
    },
    {
        "tribe_type": "arr_ixal",
        "reputationNeeded": [
            150,
            360,
            510,
            720,
            990,
            1320,
        ],
        "reputationGainedPerTurnin": [
            20,
            24,
            29,
            35,
            42,
            50,
        ]
    },
    {
        "tribe_type": "hw",
        "reputationNeeded": [
            150,
            360,
            510,
            720,
            990,
            1320,
            1730,
        ],
        "reputationGainedPerTurnin": [
            50,
            50,
            50,
            50,
            50,
            50,
            50,
        ]
    },
        {
        "tribe_type": "hw_vath",
        "reputationNeeded": [
            510,
            720,
            990,
            1320,
            1730,
        ],
        "reputationGainedPerTurnin": [
            70,
            70,
            70,
            70,
            70,
        ]
    },
    {
        "tribe_type": "sb",
        "reputationNeeded": [
            510,
            720,
            990,
            1320,
            1730,
        ],
        "reputationGainedPerTurnin": [
            60,
            60,
            60,
            60,
            60,
        ]
    },
      {
        "tribe_type": "shb",
        "reputationNeeded": [
            510,
            720,
            990,
            1320,
            1730,
        ],
        "reputationGainedPerTurnin": [
            60,
            60,
            60,
            60,
            60,
        ]
    },
        {
        "tribe_type": "ew",
        "reputationNeeded": [
            510,
            720,
            990,
            1320,
            1730,
        ],
        "reputationGainedPerTurnin": [
            60,
            60,
            60,
            60,
            60,
        ]
    },
          {
        "tribe_type": "dt",
        "reputationNeeded": [
            510,
            720,
            990,
            1320,
            1730,
        ],
        "reputationGainedPerTurnin": [
            60,
            60,
            60,
            60,
            60,
        ]
    }
  ];

// Now, let's create a list of tribes, with an easy to access reference to their reputation data based on their tribe type.
const TRIBE_DATA = [
    {
        "name": "Amal'jaa",
        "id": "amaljaa",
        "reputationData": TRIBE_REPUTATION_DATA.find(tribe => tribe.tribe_type === "arr"),
        "daysNeededToMax": 23
    },
    {
        "name": "Kobold",
        "id": "kobold",
        "reputationData": TRIBE_REPUTATION_DATA.find(tribe => tribe.tribe_type === "arr"),
        "daysNeededToMax": 23
    },
    {
        "name": "Sahagin",
        "id": "sahagin",
        "reputationData": TRIBE_REPUTATION_DATA.find(tribe => tribe.tribe_type === "arr"),
        "daysNeededToMax": 23
    },
    {
        "name": "Sylph",
        "id": "sylph",
        "reputationData": TRIBE_REPUTATION_DATA.find(tribe => tribe.tribe_type === "arr"),
        "daysNeededToMax": 23
    },
    {
        "name": "Ixal",
        "id": "ixal",
        "reputationData": TRIBE_REPUTATION_DATA.find(tribe => tribe.tribe_type === "arr_ixal"),
        "daysNeededToMax": 38
    },
    {
        "name": "Vanu Vanu",
        "id": "vanu_vanu",
        "reputationData": TRIBE_REPUTATION_DATA.find(tribe => tribe.tribe_type === "hw"),
        "daysNeededToMax": 41
    },
    {
        "name": "Moogles",
        "id": "moogles",
        "reputationData": TRIBE_REPUTATION_DATA.find(tribe => tribe.tribe_type === "hw"),
        "daysNeededToMax": 41
    },
    {
        "name": "Namazu",
        "id": "namazu",
        "reputationData": TRIBE_REPUTATION_DATA.find(tribe => tribe.tribe_type === "sb"),
        "daysNeededToMax": 31
    },
    {
        "name": "Ananta",
        "id": "ananta",
        "reputationData": TRIBE_REPUTATION_DATA.find(tribe => tribe.tribe_type === "sb"),
        "daysNeededToMax": 31
    },
    {
        "name": "Kojin",
        "id": "kojin",
        "reputationData": TRIBE_REPUTATION_DATA.find(tribe => tribe.tribe_type === "sb"),
        "daysNeededToMax": 31
    },
    {
        "name": "Vath",
        "id": "vath",
        "reputationData": TRIBE_REPUTATION_DATA.find(tribe => tribe.tribe_type === "hw_vath"),
        "daysNeededToMax": 28
    },
    {
        "name": "Qitari",
        "id": "qitari",
        "reputationData": TRIBE_REPUTATION_DATA.find(tribe => tribe.tribe_type === "shb"),
        "daysNeededToMax": 31
    },
    {
        "name": "Pixie",
        "id": "pixie",
        "reputationData": TRIBE_REPUTATION_DATA.find(tribe => tribe.tribe_type === "shb"),
        "daysNeededToMax": 31
    },
    {
        "name": "Dwarves",
        "id": "dwarves",
        "reputationData": TRIBE_REPUTATION_DATA.find(tribe => tribe.tribe_type === "shb"),
        "daysNeededToMax": 31
    }
    {
        "name": "Arkasodara",
        "id": "arkasodara",
        "reputationData": TRIBE_REPUTATION_DATA.find(tribe => tribe.tribe_type === "ew"),
        "daysNeededToMax": 31
    }
    {
        "name": "Omicron",
        "id": "omicron",
        "reputationData": TRIBE_REPUTATION_DATA.find(tribe => tribe.tribe_type === "ew"),
        "daysNeededToMax": 31
    }
    {
        "name": "Loporabit",
        "id": "loporabit",
        "reputationData": TRIBE_REPUTATION_DATA.find(tribe => tribe.tribe_type === "ew"),
        "daysNeededToMax": 31
    }    
    {
        "name": "PeluPelu",
        "id": "pelupelu",
        "reputationData": TRIBE_REPUTATION_DATA.find(tribe => tribe.tribe_type === "dt"),
        "daysNeededToMax": 31
    }
    {
        "name": "Mamool Ja",
        "id": "mamoolja",
        "reputationData": TRIBE_REPUTATION_DATA.find(tribe => tribe.tribe_type === "dt"),
        "daysNeededToMax": 31
    }
    {
        "name": "Yok Huy",
        "id": "Yok Huy",
        "reputationData": TRIBE_REPUTATION_DATA.find(tribe => tribe.tribe_type === "dt"),
        "daysNeededToMax": 31
    } 
]
function loadInputData() {
    const inputData = JSON.parse(localStorage.getItem("AlliedSocietyFFXIV")) || {};
    for (const inputId in inputData) {
        if (inputData.hasOwnProperty(inputId)) {
            document.getElementById(inputId).value = inputData[inputId];
        }
    }
}     

// Function to save input data to localStorage
function saveInputData() {
    const inputData = {
        "_rank": document.getElementByClass("rank").value, //TODO
        "_current_rep": document.getElementByClass("current_rep").value, //TODO
    };
    localStorage.setItem("AlliedSocietyFFXIV", JSON.stringify(inputData));
}
const element_amaljaa_rank = document.getElementById("amaljaa_rank");
const element_maljaa_current_rep = document.getElementById("maljaa_current_rep")


// Now, let's create a function that will calculate what we need to max out a tribe.

function calculateTribeProgression(tribe) {
 const currentReputation = document.getElementById(`${tribe}_current_rep`);
 const currentRank = document.getElementById(`${tribe}_rank`);
 
    // Find the tribe's data based on the tribe id.
    // If the tribe id doesn't exist, return null.
    const tribeData = TRIBE_DATA.find(tribeData => tribeData.id === tribe);
    // If we couldn't find the tribe, bail out early.
    if (tribeData === undefined) {
        throw new Error("Could not find tribe data for tribe with id: " + tribe)
    }

// Rank is 1-indexed, but the array is 0-indexed, so we need to subtract 1 from the rank to get the correct index.
    const rankIndex = currentRank - 1;

    
//***TO MAX***    
// find the total quests needed for max rank   
    var questsToMax = 0 
    for (let index = 0; index < tribeData.reputationData.reputationNeeded.length; index++) {
        questsToMax += Math.ceil(tribeData.reputationData.reputationNeeded[index] / tribeData.reputationData.reputationGainedPerTurnin[index]);// round up since we cannot have partial quests
    }
    
// find the total quests needed for max rank to go (total - current rep)
    var questsNeededToMax= 0
    var repNeededToMax= 0
        for (let index = rankIndex; index < tribeData.reputationData.reputationNeeded.length; index++) {
        repNeededToMax += tribeData.reputationData.reputationNeeded[index]  - currentReputation;
        questsNeededToMax += Math.ceil(repNeededToMax / tribeData.reputationData.reputationGainedPerTurnin[index]);
    }
    
//find the total days needed to max (12 quests per day)
    var daysNeededToMax= Math.ceil(questsNeededToMax / 12)

//***TO NEXT RANK***    
    return {
        "reputationToNextRank": tribeData.reputationData.reputationNeeded[rankIndex] - currentReputation,
        "questsNeededToNextRank": Math.ceil((tribeData.reputationData.reputationNeeded[rankIndex] - currentReputation) / tribeData.reputationData.reputationGainedPerTurnin[rankIndex]),
        // We divide by 3 because we can only do 3 quests per day.
        "daysNeededToNextRank": Math.ceil((tribeData.reputationData.reputationNeeded[rankIndex] - currentReputation) / tribeData.reputationData.reputationGainedPerTurnin[rankIndex] / 3),
    }
     // Save input data to localStorage
    saveInputData();
}
// Load input data from localStorage on page load
loadInputData();

// Call calculatetribeprogression() on the first load
calculateTribeProgression(amaljaa, amaljaa_current_rep, amaljaa_rank);
