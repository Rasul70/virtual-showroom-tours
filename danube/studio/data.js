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
        "yaw": -0.00361964443495566,
        "pitch": 0.0017792888326617629,
        "fov": 1.5616123048243022
      },
      "linkHotspots": [
        {
          "yaw": -0.06668015449278641,
          "pitch": 0.4780910470895474,
          "rotation": 1.5707963267948966,
          "target": "1-kitchen-area"
        },
        {
          "yaw": -0.037946721662359906,
          "pitch": 0.18978878554297296,
          "rotation": 3.141592653589793,
          "target": "5-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-kitchen-area",
      "name": "Kitchen area",
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
        "yaw": 1.6338040083208876,
        "pitch": 0.45412649663084537,
        "fov": 1.5608316722231803
      },
      "linkHotspots": [
        {
          "yaw": 0.11403792084375297,
          "pitch": 0.29159108304038384,
          "rotation": 0,
          "target": "5-bedroom"
        },
        {
          "yaw": 0.6667800226930112,
          "pitch": 0.2324829080196853,
          "rotation": 4.71238898038469,
          "target": "4-living-room"
        },
        {
          "yaw": -1.60435881131402,
          "pitch": 0.11367183383573476,
          "rotation": 0,
          "target": "2-guest-toilet"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-guest-toilet",
      "name": "Guest toilet",
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
        "yaw": 0.794508068538688,
        "pitch": 0.956890261739769,
        "fov": 1.5616123048243022
      },
      "linkHotspots": [
        {
          "yaw": -2.3586184595661734,
          "pitch": 0.9675740148075285,
          "rotation": 0,
          "target": "1-kitchen-area"
        },
        {
          "yaw": 0.858028580171684,
          "pitch": 0.20487522995723495,
          "rotation": 0,
          "target": "3-bathroom"
        },
        {
          "yaw": -3.0945500462507773,
          "pitch": 0.6608723545890349,
          "rotation": 4.71238898038469,
          "target": "4-living-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-bathroom",
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
        "yaw": -0.19057090168687552,
        "pitch": 0.8335828096326416,
        "fov": 1.5557053928571798
      },
      "linkHotspots": [
        {
          "yaw": -0.13391105232377498,
          "pitch": 0.5633312178234728,
          "rotation": 0,
          "target": "1-kitchen-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-living-room",
      "name": "Living room",
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
        "yaw": -0.08217703939781451,
        "pitch": 0.49047185512091573,
        "fov": 1.5616123048243022
      },
      "linkHotspots": [
        {
          "yaw": -1.3899615464553676,
          "pitch": 0.21937522927262876,
          "rotation": 7.0685834705770345,
          "target": "2-guest-toilet"
        },
        {
          "yaw": -1.7729636944397207,
          "pitch": 0.6173977887380673,
          "rotation": 10.995574287564278,
          "target": "1-kitchen-area"
        },
        {
          "yaw": 1.5231208545559287,
          "pitch": 0.45437448565304805,
          "rotation": 3.141592653589793,
          "target": "5-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-bedroom",
      "name": "Bedroom",
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
        "yaw": 0.0903808810559994,
        "pitch": 0.6470224621514973,
        "fov": 1.5616123048243022
      },
      "linkHotspots": [
        {
          "yaw": -1.5407769261451314,
          "pitch": 0.5408822564649043,
          "rotation": 7.853981633974483,
          "target": "4-living-room"
        },
        {
          "yaw": -1.3922245641201396,
          "pitch": 0.09847925958359127,
          "rotation": 1.5707963267948966,
          "target": "2-guest-toilet"
        },
        {
          "yaw": -1.5449646829049613,
          "pitch": 0.281278463252697,
          "rotation": 4.71238898038469,
          "target": "1-kitchen-area"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Danube -Studio",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": true
  }
};
