var APP_DATA = {
  "scenes": [
    {
      "id": "0-entrance",
      "name": "Entrance",
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
        "yaw": -0.8591993703231555,
        "pitch": 0.03461920905428251,
        "fov": 1.5589297476408135
      },
      "linkHotspots": [
        {
          "yaw": -0.8566919109842512,
          "pitch": 0.3531012165060403,
          "rotation": 1.5707963267948966,
          "target": "2-guest-toilet-"
        },
        {
          "yaw": 3.0075603054333406,
          "pitch": 0.9866877895851687,
          "rotation": 3.141592653589793,
          "target": "1-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-kitchen",
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
        "yaw": 0.7847221413317591,
        "pitch": 0.611262952599585,
        "fov": 1.5616123048243022
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "2-guest-toilet-",
      "name": "Guest toilet ",
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
        "yaw": 0.9703807578828538,
        "pitch": 0.5580059545945524,
        "fov": 1.5616123048243022
      },
      "linkHotspots": [
        {
          "yaw": -1.3803952510473785,
          "pitch": 0.08701373273255442,
          "rotation": 1.5707963267948966,
          "target": "3-corridor-"
        },
        {
          "yaw": -1.9401627886643436,
          "pitch": 0.09394761951310926,
          "rotation": 4.71238898038469,
          "target": "0-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-corridor-",
      "name": "Corridor ",
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
        "yaw": -0.15030119855575386,
        "pitch": 0.7807059113067645,
        "fov": 1.5616123048243022
      },
      "linkHotspots": [
        {
          "yaw": -2.705351224253855,
          "pitch": -0.07709264488949863,
          "rotation": 4.71238898038469,
          "target": "1-kitchen"
        },
        {
          "yaw": -2.9151015053646354,
          "pitch": 0.09410617906709717,
          "rotation": 4.71238898038469,
          "target": "2-guest-toilet-"
        },
        {
          "yaw": 0.7161326560055485,
          "pitch": 0.8444011738219963,
          "rotation": 0,
          "target": "5-bedroom-1"
        },
        {
          "yaw": -0.7437876709532318,
          "pitch": 0.18369137107168498,
          "rotation": 1.5707963267948966,
          "target": "7-bedroom-2"
        },
        {
          "yaw": -1.1341008154958914,
          "pitch": 0.4243528922995523,
          "rotation": 11.780972450961727,
          "target": "9-bedroom-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-corridor-2",
      "name": "Corridor-2",
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
        "yaw": 0.6007338389250165,
        "pitch": 0.012887359188948011,
        "fov": 1.5616123048243022
      },
      "linkHotspots": [
        {
          "yaw": 1.0130243418312421,
          "pitch": 0.043537284569172385,
          "rotation": 5.497787143782138,
          "target": "7-bedroom-2"
        },
        {
          "yaw": 1.3140098693317963,
          "pitch": -0.04044718121437718,
          "rotation": 1.5707963267948966,
          "target": "8-bathroombedroom-2"
        },
        {
          "yaw": -0.11630851723522717,
          "pitch": 0.015057304638681046,
          "rotation": 3.141592653589793,
          "target": "9-bedroom-3"
        },
        {
          "yaw": 2.8734663499899247,
          "pitch": -0.11780074484735614,
          "rotation": 4.71238898038469,
          "target": "5-bedroom-1"
        },
        {
          "yaw": -2.8015711446677702,
          "pitch": -0.01438958998847717,
          "rotation": 1.5707963267948966,
          "target": "0-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-bedroom-1",
      "name": "Bedroom-1",
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
        "yaw": -1.8522700360387336,
        "pitch": 0.04714170273696183,
        "fov": 1.5616123048243022
      },
      "linkHotspots": [
        {
          "yaw": -2.3297493534260614,
          "pitch": 0.11114522990637354,
          "rotation": 0,
          "target": "3-corridor-"
        },
        {
          "yaw": -2.7780725528152885,
          "pitch": 0.07163542331447914,
          "rotation": 0,
          "target": "6-bathroombedroom-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-bathroombedroom-1",
      "name": "Bathroom/Bedroom-1",
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
        "yaw": -1.8266179521199497,
        "pitch": 0.7399483751789511,
        "fov": 1.5616123048243022
      },
      "linkHotspots": [
        {
          "yaw": -1.6799578879553057,
          "pitch": 0.322156439052268,
          "rotation": 0,
          "target": "5-bedroom-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-bedroom-2",
      "name": "Bedroom-2",
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
        "yaw": 1.7036850136123363,
        "pitch": -0.02459231976101961,
        "fov": 1.5616123048243022
      },
      "linkHotspots": [
        {
          "yaw": 2.069613936367242,
          "pitch": 0.08161133025576994,
          "rotation": 7.853981633974483,
          "target": "4-corridor-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-bathroombedroom-2",
      "name": "Bathroom/Bedroom-2",
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
        "yaw": -2.6539139172005406,
        "pitch": 0.4037719823566448,
        "fov": 1.5616123048243022
      },
      "linkHotspots": [
        {
          "yaw": -2.549217364570378,
          "pitch": 0.039759850816921016,
          "rotation": 0,
          "target": "7-bedroom-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-bedroom-3",
      "name": "Bedroom-3",
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
        "yaw": 1.0331287839822139,
        "pitch": 0.7032123886016137,
        "fov": 1.5616123048243022
      },
      "linkHotspots": [
        {
          "yaw": -1.1274748250717472,
          "pitch": 0.13600964537116056,
          "rotation": 4.71238898038469,
          "target": "10-bathroombedroom-3"
        },
        {
          "yaw": -2.2707694770477005,
          "pitch": 0.6603786505392648,
          "rotation": 3.141592653589793,
          "target": "4-corridor-2"
        },
        {
          "yaw": -2.186449707211178,
          "pitch": 0.41167311643991766,
          "rotation": 3.141592653589793,
          "target": "3-corridor-"
        },
        {
          "yaw": -2.2207366464661735,
          "pitch": -0.031064727595371266,
          "rotation": 4.71238898038469,
          "target": "5-bedroom-1"
        },
        {
          "yaw": -2.064608636033494,
          "pitch": 0.14828476258188417,
          "rotation": 1.5707963267948966,
          "target": "0-entrance"
        },
        {
          "yaw": -2.448553877840176,
          "pitch": 0.1789448125573294,
          "rotation": 4.71238898038469,
          "target": "7-bedroom-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-bathroombedroom-3",
      "name": "Bathroom/Bedroom-3",
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
        "yaw": -0.5034156017951847,
        "pitch": 0.27724030736563066,
        "fov": 1.5616123048243022
      },
      "linkHotspots": [
        {
          "yaw": 3.0833851457071804,
          "pitch": -0.00022913604405694343,
          "rotation": 9.42477796076938,
          "target": "9-bedroom-3"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "TownX",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
