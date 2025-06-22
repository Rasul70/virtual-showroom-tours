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
        "yaw": 1.340347075860727,
        "pitch": -0.006615397515499666,
        "fov": 1.5616123048243022
      },
      "linkHotspots": [
        {
          "yaw": 1.1825414328939647,
          "pitch": 0.027356245367961662,
          "rotation": 0,
          "target": "1-living-room"
        },
        {
          "yaw": 0.5913902018749297,
          "pitch": 0.5075971867332782,
          "rotation": 0,
          "target": "5-kitchen"
        },
        {
          "yaw": -0.3387936454901421,
          "pitch": 0.8521917523443179,
          "rotation": 5.497787143782138,
          "target": "6-corridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-living-room",
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
        "yaw": -3.109793066180833,
        "pitch": 0.009763158356069113,
        "fov": 1.5616123048243022
      },
      "linkHotspots": [
        {
          "yaw": 2.9394164024944143,
          "pitch": 0.2546168299126297,
          "rotation": 12.566370614359176,
          "target": "6-corridor"
        },
        {
          "yaw": -2.916177030996595,
          "pitch": 0.26210546151108005,
          "rotation": 0,
          "target": "5-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-home-office",
      "name": "Home office",
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
        "yaw": -0.07547369738353282,
        "pitch": 0.3787217243195933,
        "fov": 1.5616123048243022
      },
      "linkHotspots": [
        {
          "yaw": 2.241376381763356,
          "pitch": 0.21298073136336093,
          "rotation": 7.853981633974483,
          "target": "3-bedroom-1"
        },
        {
          "yaw": -2.433133974127106,
          "pitch": 0.8420703608281279,
          "rotation": 0,
          "target": "6-corridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-bedroom-1",
      "name": "Bedroom 1",
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
          "yaw": 2.7287932737535776,
          "pitch": 0.14911782390287165,
          "rotation": 0,
          "target": "6-corridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-bathroom",
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
        "yaw": -1.4290302145516556,
        "pitch": 0.38546464551911086,
        "fov": 1.5616123048243022
      },
      "linkHotspots": [
        {
          "yaw": 3.042540012390936,
          "pitch": 0.01707386672488198,
          "rotation": 0,
          "target": "6-corridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-kitchen",
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
        "yaw": -0.42077411981141744,
        "pitch": 0.022133543003864276,
        "fov": 1.5616123048243022
      },
      "linkHotspots": [
        {
          "yaw": -1.278450804588088,
          "pitch": 0.05264319797916173,
          "rotation": 4.71238898038469,
          "target": "2-home-office"
        },
        {
          "yaw": -1.7416262313581967,
          "pitch": 0.41418870321069434,
          "rotation": 3.141592653589793,
          "target": "0-entrance"
        },
        {
          "yaw": 2.289308294040711,
          "pitch": 0.23035980375704312,
          "rotation": 3.141592653589793,
          "target": "1-living-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-corridor",
      "name": "Corridor",
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
        "yaw": -0.5628287450398624,
        "pitch": 0.0052766917095183885,
        "fov": 1.5616123048243022
      },
      "linkHotspots": [
        {
          "yaw": -1.3839834928311099,
          "pitch": 0.3044978077673193,
          "rotation": 0,
          "target": "2-home-office"
        },
        {
          "yaw": 0.2190745387024684,
          "pitch": 0.09767311433082426,
          "rotation": 1.5707963267948966,
          "target": "3-bedroom-1"
        },
        {
          "yaw": -0.3110127008661241,
          "pitch": 0.09773343382100386,
          "rotation": 4.71238898038469,
          "target": "4-bathroom"
        },
        {
          "yaw": 2.9880558497808476,
          "pitch": 0.09126874074123137,
          "rotation": 0,
          "target": "1-living-room"
        },
        {
          "yaw": -2.262042810782649,
          "pitch": 0.6632670476547151,
          "rotation": 0,
          "target": "0-entrance"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Dannube-2 bedroom",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
