// Create a list of tribes with their progression information.
const TRIBE_REPUTATION_DATA = [
 {
        "tribe_type": "arr",
        "reputationNeeded": [
            150,//1, neutral
            360,//2, Recognized
            510,//3, friendly
        ],
        "reputationGainedPerTurnin": [
            10,//1
            14,//2
            20,//3
        ]
    },
    {
        "tribe_type": "arr_ixal",
        "reputationNeeded": [
            150,//1, neutral
            360,//2, Recognized
            510,//3, friendly
            720,//4, Trusted
            990,//5, Respected
            1320,//6, Honored
        ],
        "reputationGainedPerTurnin": [
            20,//1
            24,//2
            29,//3
            35,//4
            42,//5
            50,//6
        ]
    },
    {
        "tribe_type": "hw",
        "reputationNeeded": [
            150,//1, neutral
            360,//2, Recognized
            510,//3, friendly
            720,//4, Trusted
            990,//5, Respected
            1320,//6, Honored
            1730,//7, Sworn
        ],
        "reputationGainedPerTurnin": [
            50,//1
            50,//2
            50,//3
            50,//4
            50,//5
            50,//6
            50,//7
        ]
    },
        {
        "tribe_type": "hw_vath",
        "reputationNeeded": [
            0,    //skipping rank 1 
            0,    //skipping rank 2           
            510,  //3, friendly
            720,  //4, Trusted
            990,  //5, Respected
            1320, //6, Honored
            1730, //7, Sworn
        ],
        "reputationGainedPerTurnin": [
            0,//1
            0,//2
            70,//3
            70,//4
            70,//5
            70,//6
            70,//7
        ]
    },
    {
        "tribe_type": "sb",
        "reputationNeeded": [
            0,    //skipping rank 1 
            0,    //skipping rank 2           
            510,  //3, friendly
            720,  //4, Trusted
            990,  //5, Respected
            1320, //6, Honored
            1730, //7, Sworn
        ],
        "reputationGainedPerTurnin": [
            0,//1
            0,//2
            60,//3
            60,//4
            60,//5
            60,//6
            60,//7
        ]
    },
      {
        "tribe_type": "shb",
        "reputationNeeded": [
            0,    //skipping rank 1 
            0,    //skipping rank 2           
            510,  //3, friendly
            720,  //4, Trusted
            990,  //5, Respected
            1320, //6, Honored
            1730, //7, Sworn
        ],
        "reputationGainedPerTurnin": [
            0,//1
            0,//2
            60,//3
            60,//4
            60,//5
            60,//6
            60,//7
        ]
    },
        {
        "tribe_type": "ew",
        "reputationNeeded": [
            0,    //skipping rank 1 
            0,    //skipping rank 2           
            510,  //3, friendly
            720,  //4, Trusted
            990,  //5, Respected
            1320, //6, Honored
            1730, //7, Sworn
        ],
        "reputationGainedPerTurnin": [
            0,//1
            0,//2
            60,//3
            60,//4
            60,//5
            60,//6
            60,//7
        ]
    },
          {
        "tribe_type": "dt",
        "reputationNeeded": [
            0,    //skipping rank 1 
            0,    //skipping rank 2           
            510,  //3, friendly
            720,  //4, Trusted
            990,  //5, Respected
            1320, //6, Honored
            1730, //7, Sworn
        ],
        "reputationGainedPerTurnin": [
            0,//1
            0,//2
            60,//3
            60,//4
            60,//5
            60,//6
            60,//7
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


function compareNumbers(a, b) {
  return  b - a; //high to low
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
  //****REPUTATION DATA*************************************************
  //lets start with rep to next and then rep to max
    var RepToNext = tribeData.reputationData.reputationNeeded[rank_Index] - current_rep;
    var RepToMax= 0;
        for (let index = rank_Index; index < tribeData.reputationData.reputationNeeded.length; index++) {
        RepToMax += tribeData.reputationData.reputationNeeded[index]  - current_rep;
    }
  //****QUEST DATA*************************************************
  //lets start with quest to next and then quest to max
    var QuestsToNext = Math.ceil((tribeData.reputationData.reputationNeeded[rank_Index] - current_rep) / tribeData.reputationData.reputationGainedPerTurnin[rank_Index]);
    //load qyests to next as first tier, if bigger than 0
    if (QuestsToNext >= 0 ){
      var QuestsToMax= QuestsToNext;
    }else{
      var QuestsToMax= 0;  
    }
    //skipping the current rank since we loaded in the quests to next
    for (let index = (rank_Index + 1); index < tribeData.reputationData.reputationNeeded.length; index++) {
      //from the starting value, divide repneeded for next rank with rep gained per turnin
        QuestsToMax += Math.ceil(tribeData.reputationData.reputationNeeded[index] / tribeData.reputationData.reputationGainedPerTurnin[index]);
    }
  //****DAYS DATA*************************************************
  //lets start with days to next and then days to max
  // We divide by 3 because we can only do 3 quests per day.
    var DaysToNext = Math.ceil((tribeData.reputationData.reputationNeeded[rank_Index] - current_rep) / tribeData.reputationData.reputationGainedPerTurnin[rank_Index] / 3);
    var DaysToMax= Math.ceil(QuestsToMax / 3); 

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
let SortAllDays = [];
  for(x=0; x < AllDays.length; x++) {
    SortAllDays.push(AllDays[x].value);
        }
SortAllDays.sort(compareNumbers); // [high to low]          
SortAllDays = SortAllDays.map(Number);
console.log(SortAllDays);
//normal declaration of our vars
var totalQuests = 0;
var totalDays = 0;

    for(var i = 0; i < AllQuests.length; i++)
    {
        totalQuests = totalQuests +  parseInt(AllQuests[i].value);
    }
        for(var i = 0; i < AllDays.length; i+=4)
    {
        totalDays += SortAllDays[i];
    }
 document.getElementById("total_quests_to_max").value = totalQuests;
//document.getElementById("total_days_to_max").value = Math.ceil(totalQuests / 12);    
  document.getElementById("total_days_to_max").value = totalDays;
}
// Load input data from localStorage on page load
loadInputData();

// Call calculatetribeprogression() on the first load
calculateTribeProgression();
