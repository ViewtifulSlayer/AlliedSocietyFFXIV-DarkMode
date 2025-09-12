// Create a list of tribes with their progression information.
const TRIBE_REPUTATION_DATA = [
 {
        "tribe_type": "arr",
        "reputationNeeded": [
            150,//1, neutral
            360,//2, Recognized
            510,//3, friendly
            0,//no more needed
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
            0,//no more needed
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
            0,//no more needed
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
            0,//no more needed
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
            0,//no more needed
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
            0,//no more needed
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
            0,//no more needed
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
            0,//no more needed
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
  if(localStorage["AlliedSocietyFFXIV"]) {
    tribeState = JSON.parse(localStorage["AlliedSocietyFFXIV"]);
    for (var tribe of Object.keys(tribeState)) {
      var tribeSelectId = "Count_" + tribe;
      var tribeRankId = tribe + "_rank";
      var tribeRepId = tribe + "_current_rep";
      document.getElementById(tribeSelectId).checked = tribeState[tribe]["select"];
      document.getElementById(tribeRankId).value = tribeState[tribe]["rank"];
      document.getElementById(tribeRepId).value = tribeState[tribe]["rep"];
    }
  }
}

function saveInputData() {
  var allTribes = document.getElementsByClassName(classNames="tribe");

  var tribeState = {};

  for (var tribeElement of allTribes) {
    var tribe = tribeElement.id;
    var tribeSelectId = "Count_" + tribe;
    var tribeRankId = tribe + "_rank";
    var tribeRepId = tribe + "_current_rep";

    tribeState[tribe] = {
      "select": document.getElementById(tribeSelectId).checked,
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
    if (current_rep > tribeData.reputationData.reputationNeeded[rank_Index]){
     RepToNext = 0;
    }
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
      QuestsToNext = 0;
    }
    //skipping the current rank since we loaded in the quests to next
    for (let index = (rank_Index + 1); index < (tribeData.reputationData.reputationNeeded.length - 1); index++) {
      //from the starting value, divide repneeded for next rank with rep gained per turnin
        QuestsToMax += Math.ceil(tribeData.reputationData.reputationNeeded[index] / tribeData.reputationData.reputationGainedPerTurnin[index]);
    }
  //****DAYS DATA*************************************************
  //lets start with days to next and then days to max
  // We divide by 3 because we can only do 3 quests per day.
    var DaysToNext = Math.ceil((tribeData.reputationData.reputationNeeded[rank_Index] - current_rep) / tribeData.reputationData.reputationGainedPerTurnin[rank_Index] / 3);
    if (RepToMax <= 0){
      DaysToNext = 0;
    }
    var DaysToMax= Math.ceil(QuestsToMax / 3); 

 //RETURN TO INPUT FIELD
    var tribeRepNextId = tribe + "_reputation_to_next_Rank";
    var tribeRepMaxId = tribe + "_reputation_to_max";
    var tribeQuestsNextId = tribe + "_quests_to_next_Rank";
    var tribeQuestsMaxId = tribe + "_quests_to_max";
    var tribeDaysNextId = tribe + "_days_to_next_Rank";
    var tribeDaysMaxId = tribe + "_days_to_max";

  //If select = false, all outputs are 0 
  var tribeSelectId = "Count_" + tribe;
  if (document.getElementById(tribeSelectId).checked) {//selected tribe
    document.getElementById(tribeRepNextId).value = RepToNext;
    document.getElementById(tribeRepMaxId).value = RepToMax;
    document.getElementById(tribeQuestsNextId).value = QuestsToNext;
    document.getElementById(tribeQuestsMaxId).value = QuestsToMax; 
    document.getElementById(tribeDaysNextId).value = DaysToNext;
    document.getElementById(tribeDaysMaxId).value = DaysToMax;
  }  else { //not selected tribe
    document.getElementById(tribeRepNextId).value = 0;
    document.getElementById(tribeRepMaxId).value = 0;
    document.getElementById(tribeQuestsNextId).value = 0;
    document.getElementById(tribeQuestsMaxId).value = 0; 
    document.getElementById(tribeDaysNextId).value = 0;
    document.getElementById(tribeDaysMaxId).value = 0;
  } 
 //visualisation
    var tribeNameId = tribe +"_name";
    var tribeHeaderId =tribe + "_header";
    var tribeBodyId =tribe;
    let colName=document.getElementById(tribeNameId);
    let colHeader=document.getElementById(tribeHeaderId);
    let colBody=document.getElementById(tribeBodyId);
    if (document.getElementById(tribeDaysMaxId).value != 0){
    colName.style.backgroundColor=' #0c707d';
    colHeader.style.backgroundColor=' #0c707d';
    colBody.style.backgroundColor=' ##bad8eb'; //body
    }else{
    colName.style.backgroundColor='grey';
    colHeader.style.backgroundColor='grey';
    colBody.style.backgroundColor='lightgrey';
    }
        
    }
//**********TOTAL SUM FOR BOTTOM OF SCREEN**************** 
var AllQuests = document.getElementsByClassName(classNames="QuestsToMax");
var AllDays = document.getElementsByClassName(classNames="DaysToMax");
//Lets pick the highest days to max for every 4 tribes, sorted from high to low 
let SortAllDays = []; //declare empty array which we will fill with our total days values
  for(x=0; x < AllDays.length; x++) { 
    SortAllDays.push(AllDays[x].value); //send all values to this array
        }
SortAllDays.sort(compareNumbers); // [first we sort numerically, then we sort from high to low using b-a]          
SortAllDays = SortAllDays.map(Number); //our output is a string array, lets make those numbers again
//console.log(SortAllDays); //for testing purposes
 
//declaration of our vars that will sum our total
var totalQuests = 0;
var totalDays = 0;

    for(var i = 0; i < AllQuests.length; i++)
    {
        totalQuests = totalQuests +  parseInt(AllQuests[i].value); //take all nummeric values of all quests and add them to each other
    }
        for(var i = 0; i < AllDays.length; i+=4)//take every 4 tribes and select the first (highest sorted) number
    {
        totalDays += SortAllDays[i];//add our first out of 4 (sorted) values of daystomax. this will ensure our total sum is based on the player completing 4 tribes per day, taking the highest amount of days as leading value
    }
 document.getElementById("total_quests_to_max").value = totalQuests;
//document.getElementById("total_days_to_max").value = Math.ceil(totalQuests / 12);    
  document.getElementById("total_days_to_max").value = totalDays;
}
// Load input data from localStorage on page load
loadInputData();

// Call calculatetribeprogression() on the first load
calculateTribeProgression();
