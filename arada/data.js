var APP_DATA = {
  "scenes": [
    {
      "id": "0-landscaped-area",
      "name": "Landscaped Area",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 1.7925001476592728,
        "pitch": -0.01967385580879366,
        "fov": 1.5616123048243022
      },
      "linkHotspots": [
        {
          "yaw": 2.755427930850704,
          "pitch": 0.022596960318740145,
          "rotation": 0,
          "target": "1-living-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-living-room",
      "name": "Living Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.5327200026721517,
        "pitch": 0.021733895543633253,
        "fov": 1.5616123048243022
      },
      "linkHotspots": [
        {
          "yaw": -0.2114681471570492,
          "pitch": 0.2401898703630181,
          "rotation": 0,
          "target": "2-dining-area"
        },
        {
          "yaw": -0.49955975682384235,
          "pitch": -0.005015028837382474,
          "rotation": 0,
          "target": "3-ground-floor-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-dining-area",
      "name": "Dining area",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.5622790455073741,
        "pitch": 0.03197001568932478,
        "fov": 1.5616123048243022
      },
      "linkHotspots": [
        {
          "yaw": -0.4164939277376085,
          "pitch": 0.04706891666556601,
          "rotation": 0,
          "target": "3-ground-floor-hallway"
        },
        {
          "yaw": -1.8844868511090578,
          "pitch": 0.018155229962854236,
          "rotation": 3.141592653589793,
          "target": "0-landscaped-area"
        },
        {
          "yaw": -2.7834849163233066,
          "pitch": 0.020518011206323905,
          "rotation": 3.141592653589793,
          "target": "1-living-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-ground-floor-hallway",
      "name": "Ground Floor Hallway",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -1.2207410172315942,
        "pitch": 0.03655979841465751,
        "fov": 1.5616123048243022
      },
      "linkHotspots": [
        {
          "yaw": -0.13036916534439769,
          "pitch": 0.060996636142018446,
          "rotation": 1.5707963267948966,
          "target": "4-kitchen"
        },
        {
          "yaw": 0.7827702177748108,
          "pitch": 0.07685269528910865,
          "rotation": 0,
          "target": "5-majlis"
        },
        {
          "yaw": -1.4746082983009003,
          "pitch": 0.00015645268005570756,
          "rotation": 0,
          "target": "1-living-room"
        },
        {
          "yaw": -0.7881754865298607,
          "pitch": -0.15693231727569312,
          "rotation": 3.141592653589793,
          "target": "7-between-staircase-floors-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-kitchen",
      "name": "Kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.8179115461259965,
        "pitch": 0.04489137740548799,
        "fov": 1.5616123048243022
      },
      "linkHotspots": [
        {
          "yaw": -1.6200192009863237,
          "pitch": -0.0329762815521768,
          "rotation": 0,
          "target": "3-ground-floor-hallway"
        },
        {
          "yaw": 1.9363950578011977,
          "pitch": -0.0808654060642553,
          "rotation": 0,
          "target": "6-maids-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-majlis",
      "name": "Majlis",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.03815489963230334,
        "pitch": 0.03354485106627436,
        "fov": 1.5616123048243022
      },
      "linkHotspots": [
        {
          "yaw": -2.486513877447477,
          "pitch": 0.24436292991089203,
          "rotation": 0,
          "target": "3-ground-floor-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-maids-room",
      "name": "Maid’s Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.013207897042128991,
        "pitch": 0.03442924766541289,
        "fov": 1.5616123048243022
      },
      "linkHotspots": [
        {
          "yaw": 1.889262893349918,
          "pitch": 0.39235218210563794,
          "rotation": 0,
          "target": "4-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-between-staircase-floors-1",
      "name": "Between staircase floors 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.05283158816848221,
        "pitch": 0.02725326039656295,
        "fov": 1.5616123048243022
      },
      "linkHotspots": [
        {
          "yaw": -0.7435013775853037,
          "pitch": -0.21660742199105343,
          "rotation": 3.141592653589793,
          "target": "8-first-floor-corridor"
        },
        {
          "yaw": -0.8853467067273559,
          "pitch": 0.29443576783034864,
          "rotation": 3.141592653589793,
          "target": "3-ground-floor-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-first-floor-corridor",
      "name": "First floor corridor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 1.9753094266879643,
        "pitch": -0.00030339852790106647,
        "fov": 1.5616123048243022
      },
      "linkHotspots": [
        {
          "yaw": 3.0408533190660147,
          "pitch": 0.06161682176989913,
          "rotation": 0,
          "target": "9-bedroom-1-1-floor--a"
        },
        {
          "yaw": 2.564796469487712,
          "pitch": 0.2442932890361451,
          "rotation": 0,
          "target": "12-bedroom-2-1-floor"
        },
        {
          "yaw": -0.33265139240069175,
          "pitch": 0.4559806956153132,
          "rotation": 0,
          "target": "14-bedroom-3--entrance-1-floor"
        },
        {
          "yaw": 0.6332008628756327,
          "pitch": 0.39804195660883224,
          "rotation": 3.141592653589793,
          "target": "16-lift-area"
        },
        {
          "yaw": 0.8204504758103983,
          "pitch": -0.07964616342658104,
          "rotation": 4.71238898038469,
          "target": "17-entertainment-area-"
        },
        {
          "yaw": 1.003300152621847,
          "pitch": 0.012115879706405153,
          "rotation": 0,
          "target": "18-entrance-to-the-master-bedroom"
        },
        {
          "yaw": 1.68768747539153,
          "pitch": -0.2520086960542187,
          "rotation": 3.141592653589793,
          "target": "21-between-staircase-floors-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-bedroom-1-1-floor--a",
      "name": "Bedroom 1 (1 floor -a)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.8966445280662079,
        "pitch": -0.006165675155777706,
        "fov": 1.5616123048243022
      },
      "linkHotspots": [
        {
          "yaw": 0.05858721854623283,
          "pitch": -0.029173338875054355,
          "rotation": 1.5707963267948966,
          "target": "10-en-suite-bathroom-1floor"
        },
        {
          "yaw": 0.8033275864714859,
          "pitch": 0.055925722111560106,
          "rotation": 3.141592653589793,
          "target": "11-bedroom-1-1-floor--b"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-en-suite-bathroom-1floor",
      "name": "En-suite Bathroom (1floor)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.49999424493139877,
        "pitch": 0.005796666395896821,
        "fov": 1.5599038858161827
      },
      "linkHotspots": [
        {
          "yaw": 2.2727974116604575,
          "pitch": 0.03816591082241594,
          "rotation": 0,
          "target": "8-first-floor-corridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-bedroom-1-1-floor--b",
      "name": "Bedroom 1 (1 floor -b)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.36793427474475315,
        "pitch": 0.03442924766541111,
        "fov": 1.5616123048243022
      },
      "linkHotspots": [
        {
          "yaw": -0.32541677415575876,
          "pitch": 0.036091114194643836,
          "rotation": 4.71238898038469,
          "target": "8-first-floor-corridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-bedroom-2-1-floor",
      "name": "Bedroom 2 (1 floor)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.6078565706501387,
        "pitch": 0.03210624174481502,
        "fov": 1.5616123048243022
      },
      "linkHotspots": [
        {
          "yaw": 0.3959047488783227,
          "pitch": 0.04715549153761778,
          "rotation": 4.71238898038469,
          "target": "13-en-suite-bathroom-2-1floor"
        },
        {
          "yaw": -2.724300390133603,
          "pitch": 0.21495876719801288,
          "rotation": 3.141592653589793,
          "target": "8-first-floor-corridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-en-suite-bathroom-2-1floor",
      "name": "En-suite Bathroom 2 (1floor)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.38187356510781534,
        "pitch": 0.02486082742040807,
        "fov": 1.5616123048243022
      },
      "linkHotspots": [
        {
          "yaw": -1.9417247542767289,
          "pitch": 0.19638922629890132,
          "rotation": 0,
          "target": "8-first-floor-corridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-bedroom-3--entrance-1-floor",
      "name": "Bedroom 3  entrance (1 floor)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -2.2129765703268607,
        "pitch": 0.017214623832696674,
        "fov": 1.5616123048243022
      },
      "linkHotspots": [
        {
          "yaw": -1.328977346886779,
          "pitch": -0.014796718992103663,
          "rotation": 0,
          "target": "15-bedroom-3"
        },
        {
          "yaw": -3.0232780789538474,
          "pitch": 0.3291952866756507,
          "rotation": 3.141592653589793,
          "target": "8-first-floor-corridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-bedroom-3",
      "name": "Bedroom 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.3012823101335105,
        "pitch": 0.02553597419618825,
        "fov": 1.5616123048243022
      },
      "linkHotspots": [
        {
          "yaw": 0.6395304601165357,
          "pitch": 0.0334471352998964,
          "rotation": 7.853981633974483,
          "target": "8-first-floor-corridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-lift-area",
      "name": "Lift area",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -1.562305535839247,
        "pitch": 0.30021829029026037,
        "fov": 1.5616123048243022
      },
      "linkHotspots": [
        {
          "yaw": -0.2537621851724019,
          "pitch": 0.08444312054650638,
          "rotation": 4.71238898038469,
          "target": "17-entertainment-area-"
        },
        {
          "yaw": 2.809067423207665,
          "pitch": 0.2819887255046396,
          "rotation": 3.141592653589793,
          "target": "8-first-floor-corridor"
        },
        {
          "yaw": -0.020787107253219972,
          "pitch": 0.17032074431366517,
          "rotation": 0,
          "target": "18-entrance-to-the-master-bedroom"
        },
        {
          "yaw": 1.5306775862637787,
          "pitch": 0.4594423030608237,
          "rotation": 2.356194490192345,
          "target": "8-first-floor-corridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-entertainment-area-",
      "name": "Entertainment area ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.8557332650386549,
          "pitch": 0.37434580375514415,
          "rotation": 3.141592653589793,
          "target": "18-entrance-to-the-master-bedroom"
        },
        {
          "yaw": -2.532440648841142,
          "pitch": 0.06790334685963373,
          "rotation": 3.141592653589793,
          "target": "8-first-floor-corridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-entrance-to-the-master-bedroom",
      "name": "Entrance to the master bedroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.9832120763658008,
        "pitch": 0.038528200850393546,
        "fov": 1.5616123048243022
      },
      "linkHotspots": [
        {
          "yaw": -0.2908429010391078,
          "pitch": 0.07053595401863433,
          "rotation": 4.71238898038469,
          "target": "19-storage-room-1"
        },
        {
          "yaw": -0.054965576375696656,
          "pitch": -0.002952113735013029,
          "rotation": 4.71238898038469,
          "target": "20-master-bedroom-1-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "19-storage-room-1",
      "name": "Storage Room 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.7698317133120955,
        "pitch": 0.022133087784911964,
        "fov": 1.5616123048243022
      },
      "linkHotspots": [
        {
          "yaw": 0.01627192063117988,
          "pitch": -0.004201955882432884,
          "rotation": 4.71238898038469,
          "target": "20-master-bedroom-1-floor"
        },
        {
          "yaw": -3.043407098618518,
          "pitch": 0.052030464129984466,
          "rotation": 0,
          "target": "8-first-floor-corridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "20-master-bedroom-1-floor",
      "name": "Master Bedroom 1 floor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.046771263931647766,
        "pitch": 0.6854890773935409,
        "fov": 1.5616123048243022
      },
      "linkHotspots": [
        {
          "yaw": -2.0488313960152578,
          "pitch": 0.08500901825548723,
          "rotation": 0,
          "target": "8-first-floor-corridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "21-between-staircase-floors-2",
      "name": "Between staircase floors 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.5262064110819598,
        "pitch": 0.02696924181967475,
        "fov": 1.5616123048243022
      },
      "linkHotspots": [
        {
          "yaw": -0.8527638658923049,
          "pitch": -0.43007942192649296,
          "rotation": 3.141592653589793,
          "target": "22-second-floor-corridor"
        },
        {
          "yaw": -1.2423371242841164,
          "pitch": 0.5475231412656107,
          "rotation": 3.141592653589793,
          "target": "8-first-floor-corridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "22-second-floor-corridor",
      "name": "Second floor corridor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 1.0345282054534994,
        "pitch": 0.4746317713875463,
        "fov": 1.5616123048243022
      },
      "linkHotspots": [
        {
          "yaw": 0.7198896070154408,
          "pitch": 0.0038551304616945004,
          "rotation": 4.71238898038469,
          "target": "23-walk-through-wardrobe"
        },
        {
          "yaw": 1.183488819737855,
          "pitch": 0.6392789644631627,
          "rotation": 3.141592653589793,
          "target": "8-first-floor-corridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "23-walk-through-wardrobe",
      "name": "Walk-through wardrobe",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.22439623243491624,
        "pitch": 0.01967385580879011,
        "fov": 1.5616123048243022
      },
      "linkHotspots": [
        {
          "yaw": -0.6338282948853973,
          "pitch": 0.026637275464107546,
          "rotation": 4.71238898038469,
          "target": "24-walk-through-wardrobe-2"
        },
        {
          "yaw": -2.372516132266128,
          "pitch": 0.03961308253293083,
          "rotation": 15.707963267948973,
          "target": "22-second-floor-corridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "24-walk-through-wardrobe-2",
      "name": "Walk-through wardrobe 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.7509632889662257,
        "pitch": 0.022133087784897754,
        "fov": 1.5616123048243022
      },
      "linkHotspots": [
        {
          "yaw": 0.014169092285479579,
          "pitch": -0.04779039108462513,
          "rotation": 0,
          "target": "25-bathroom"
        },
        {
          "yaw": -1.5816057705826037,
          "pitch": 0.0883938543707341,
          "rotation": 1.5707963267948966,
          "target": "22-second-floor-corridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "25-bathroom",
      "name": "Bathroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.638253786224876,
        "pitch": 0.5586840676730738,
        "fov": 1.5616123048243022
      },
      "linkHotspots": [
        {
          "yaw": -2.6143366755073956,
          "pitch": -0.02600553621597612,
          "rotation": 1.5707963267948966,
          "target": "23-walk-through-wardrobe"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "26-balcony",
      "name": "Balcony",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -2.9170278655037922,
        "pitch": -0.008521727630011355,
        "fov": 1.5616123048243022
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "27-master-bedroom-2-floor",
      "name": "Master Bedroom 2 floor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 2.5654441257256018,
        "pitch": -0.02616443928517853,
        "fov": 1.5616123048243022
      },
      "linkHotspots": [
        {
          "yaw": 0.07838344045012136,
          "pitch": 0.48105578473498056,
          "rotation": 3.141592653589793,
          "target": "0-landscaped-area"
        },
        {
          "yaw": 1.6168116983596272,
          "pitch": 0.02544544770410262,
          "rotation": 0,
          "target": "22-second-floor-corridor"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "ARADA-MASAAR",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
