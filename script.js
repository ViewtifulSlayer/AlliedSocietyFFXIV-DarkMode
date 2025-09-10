// Create a list of tribes with their progression information.
const TRIBE_REPUTATION_DATA = [
 {
        "tribe_type": "arr",
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
        "name": "VanuVanu",
        "id": "vanuvanu",
        "reputationData": TRIBE_REPUTATION_DATA.find(tribe => tribe.tribe_type === "hw"),
        "daysNeededToMax": 41
    },
    {
        "name": "Moogle",
        "id": "moogle",
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
        "name": "Anata",
        "id": "anata",
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
        "name": "Dwarf",
        "id": "dwarf",
        "reputationData": TRIBE_REPUTATION_DATA.find(tribe => tribe.tribe_type === "shb"),
        "daysNeededToMax": 31
    },
    {
        "name": "Arkasodara",
        "id": "arkasodara",
        "reputationData": TRIBE_REPUTATION_DATA.find(tribe => tribe.tribe_type === "ew"),
        "daysNeededToMax": 31
    },
    {
        "name": "Omicron",
        "id": "omicron",
        "reputationData": TRIBE_REPUTATION_DATA.find(tribe => tribe.tribe_type === "ew"),
        "daysNeededToMax": 31
    },
    {
        "name": "Loporabit",
        "id": "loporabit",
        "reputationData": TRIBE_REPUTATION_DATA.find(tribe => tribe.tribe_type === "ew"),
        "daysNeededToMax": 31
    }, 
    {
        "name": "PeluPelu",
        "id": "pelupelu",
        "reputationData": TRIBE_REPUTATION_DATA.find(tribe => tribe.tribe_type === "dt"),
        "daysNeededToMax": 31
    },
    {
        "name": "Mamool Ja",
        "id": "mamoolja",
        "reputationData": TRIBE_REPUTATION_DATA.find(tribe => tribe.tribe_type === "dt"),
        "daysNeededToMax": 31
    },
    {
        "name": "YokHuy",
        "id": "YokHuy",
        "reputationData": TRIBE_REPUTATION_DATA.find(tribe => tribe.tribe_type === "dt"),
        "daysNeededToMax": 31
    } 
]

function loadInputData() {
  if(localStorage.getItem("AlliedSocietyFFXIV") === null) {
    tribeState = {}
  } else {
    tribeState = JSON.parse(localStorage["AlliedSocietyFFXIV"]);
  }
  for (var tribe of Object.keys(tribeState)) {
    
    var tribeRankId = tribe + "_rank";
    var tribeRepId = tribe + "_current_rep";
    document.getElementById(tribeRankId).value = tribeState[tribe]["rank"];
    document.getElementById(tribeRepId).value = tribeState[tribe]["rep"];
  }
}

function saveInputData() {
  var allTribes = document.getElementsByClassName(classNames="tribe");

  var tribeState = {};

  for (var tribeElement of allTribes) {
    var tribe = tribeElement.id;
    var tribeRankId = tribe + "_rank";
    var tribeRepId = tribe + "_current_rep";

    tribeState[tribe] = {
      "rank": document.getElementById(tribeRankId).value,
      "rep": document.getElementById(tribeRepId).value,
    }
  }

  localStorage["AlliedSocietyFFXIV"] = JSON.stringify(tribeState)
}




window.onload = function() {
 const AllInputs = document.getElementsByClassName("input"); //collect all inputs
 console.log()
 for (let i=0; i< AllInputs.length; i++) { //for the size of all inputs repeat checking if input changes
  AllInputs[i].addEventListener("change", function() {
   saveInputData();
   calculateTribeProgression();
  });
 }
}

     
// Now, let's create a function that will calculate what we need to max out a tribe.

function calculateTribeProgression() {  
var allTribes = document.getElementsByClassName(classNames="tribe"); //gwt total list of all tribes
  for (var tribeElement of allTribes) {
    //***********GETTING ALL ID AND CONSTANTS***************
    var tribe = tribeElement.id;
    var tribeRankId = tribe + "_rank";
    var tribeRepId = tribe + "_current_rep";
    const current_rank =  document.getElementById(tribeRankId).value;
    const current_rep =  document.getElementById(tribeRepId).value;
 

    // Find the tribe's data based on the tribe id.
    // If the tribe id doesn't exist, return null.
    const tribeData = TRIBE_DATA.find(tribeData => tribeData.id === tribe);
    // If we couldn't find the tribe, bail out early.
    if (tribeData === undefined) {
        throw new Error("Could not find tribe data for tribe with id: " + tribe)
  }
  // Rank is 1-indexed, but the array is 0-indexed, so we need to subtract 1 from the rank to get the correct index.
    const rank_Index = current_rank - 1
  //getting the to T0 MAX data from our current rep/rank and the tribedata declared
   //**********TO MAX*************
    var questsToMax = 0 
    for (let index = 0; index < tribeData.reputationData.reputationNeeded.length; index++) {
        questsToMax += Math.ceil(tribeData.reputationData.reputationNeeded[index] / tribeData.reputationData.reputationGainedPerTurnin[index]);// round up since we cannot have partial quests
  } 
  // ***TOTAL QUESTS NEEDED FROM CURRENT REP***
    var QuestsToMax= 0
    var RepToMax= 0
        for (let index = rank_Index; index < tribeData.reputationData.reputationNeeded.length; index++) {
        RepToMax += tribeData.reputationData.reputationNeeded[index]  - current_rep;
        QuestsToMax += Math.ceil(RepToMax / tribeData.reputationData.reputationGainedPerTurnin[index]);
    }
    
  //find the total days needed to max (12 quests per day)
    var DaysToMax= Math.ceil(QuestsToMax / 12);

//***TO NEXT RANK***    
        var RepToNext = tribeData.reputationData.reputationNeeded[rank_Index] - current_rep;
        var QuestsToNext = Math.ceil((tribeData.reputationData.reputationNeeded[rank_Index] - current_rep) / tribeData.reputationData.reputationGainedPerTurnin[rank_Index]);
        // We divide by 3 because we can only do 3 quests per day.
        var DaysToNext = Math.ceil((tribeData.reputationData.reputationNeeded[rank_Index] - current_rep) / tribeData.reputationData.reputationGainedPerTurnin[rank_Index] / 3);

 //RETURN TO INPUT FIELD
    var tribeRepNextId = tribe + "_reputation_to_next_Rank";
    var tribeRepMaxId = tribe + "_reputation_to_max";
    var tribeQuestsNextId = tribe + "_quests_to_next_Rank";
    var tribeQuestsMaxId = tribe + "_quests_to_max";
    var tribeDaysNextId = tribe + "_days_to_next_Rank";
    var tribeDaysMaxId = tribe + "_days_to_max";
    document.getElementById(tribeRepNextId).value = RepToNext;
    document.getElementById(tribeRepMaxId).value = RepToMax;
    document.getElementById(tribeQuestsNextId).value = QuestsToNext;
    document.getElementById(tribeQuestsMaxId).value = QuestsToMax; 
    document.getElementById(tribeDaysNextId).value = DaysToNext;
    document.getElementById(tribeDaysMaxId).value = DaysToMax;   

        
    }
var AllQuests = document.getElementsByClassName(classNames="QuestsToMax");
var AllDays = document.getElementsByClassName(classNames="DaysToMax");
var totalQuests = 0;
var totalDays = 0;
    for(var i = 0; i < AllQuests.length; i++)
    {
        totalQuests = totalQuests +  parseInt(AllQuests[i].value);
        totalDays = totalQuests +  parseInt(AllDays[i].value);
    }
 document.getElementById("total_quests_to_max").value = totalQuests;
document.getElementById("total_days_to_max").value = totalDays;    
   
}
// Load input data from localStorage on page load
loadInputData();

// Call calculatetribeprogression() on the first load
calculateTribeProgression();
