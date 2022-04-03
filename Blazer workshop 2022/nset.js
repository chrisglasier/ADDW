nset = {
"Explainer": {
  "Tools": [],
  "location": "private internet cloud",
  "format": "machine/human readable JavaScrpt Object Notation",
  "purpose": "universal shareable records",
  "minimum elements": {
    "object": "Couplers",
    "aspect": "link",
    "device": "Linkactions"
  },
  "Couplers": {
    "links": {
      "total": "unlimited",
      "active": "one (to avoid overwriting)"
    }
  },
  "saving": "subject to R&D"
},
"Couplers": {
  "Tools": [],
  "Type": "System",
  "Genus": "Dev",
  "Label": "Couplers",
  "link": ["Personal","Machine","Hotel"],
  "index": 3
},
"Machine": {
  "Tools": [],
  "Type": "System",
  "Genus": "Dev",
  "Label": "Machine"
},
"Utilities": {
  "Tools": [],
  "Type": "System",
  "Genus": "Dev",
  "Label": "Utilities"
},
"Personal": {
  "Tools": [],
  "Type": "System",
  "Genus": "Dev",
  "Label": "Personal"
},
"Hotel": {
  "Tools": ["Purge","ListItem","Clone","Crosslink","Delete","Number","Aspect"],
  "Type": "Coupler",
  "Genus": "Dev",
  "Label": "Hotel",
  "backtrack": ["Couplers"],
  "index": 0,
  "link": ["10"],
  "shared": {
    "Country": "Sri Lanka",
    "Town": "Colombo",
    "Size": [4900,3633,2070]
  },
  "Design": {
    "Size": "shared",
    "Address": {
      "Country": "shared",
      "Town": "shared",
      "District": "Colombo 07",
      "Street": "Gregory's Road",
      "No": "73"
    },
    "Monitors": {
      "Hotel-0": {
        "show": true,
        "src": "model",
        "position": {
          "left": 806,
          "top": 9
        },
        "size": {
          "width": 500,
          "height": 548
        },
        "camera": {
          "type": "Orthographic",
          "position": {
            "Orthographic": [0,1,0],
            "Perspective": [-300,300,300]
          },
          "view": {
            "Top": [0,1,0],
            "Bottom": [0,-1,0],
            "Front": [0,0,1],
            "Back": [0,0,-1],
            "Left": [-1,0,0],
            "Right": [1,0,0]
          }
        }
      }
    }
  },
  "zIndex": "0",
  "factor": 2,
  "update": "true",
  "clode": "Hotel",
  "Bookings": {
    "Town": "shared",
    "Country": "shared",
    "District": "CBD",
    "Clientele": "Business",
    "Stars": "*****(5)"
  },
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Pass"
  }
},
"Elements": {
  "Tools": [],
  "Label": "Elements",
  "Type": "System",
  "Genus": "Dev",
  "backtrack": ["Couplers"],
  "link": ["e1"],
  "index": 2
},
"e1": {
  "Tools": [],
  "Type": "Product",
  "Cat": "Wall",
  "Genus": "Internal",
  "Label": "Division",
  "backtrack": ["4"],
  "index": 2,
  "product": {
    "Product": "shared",
    "Size": "shared"
  },
  "Design": {
    "Product": "shared",
    "Size": "shared"
  },
  "shared": {
    "Product": "Blue wall",
    "Source": "Product/dae/",
    "Extension": ".dae"
  }
},
"Assembler": {
  "Tools": [],
  "Label": "Assembler",
  "Type": "System",
  "Genus": "Dev",
  "backtrack": ["Couplers"],
  "index": 2,
  "monitors": {
    "Assembler": {
      "show": true,
      "src": "assembler",
      "position": {
        "left": 569,
        "top": 9
      },
      "size": {
        "width": 220,
        "height": 360
      },
      "zIndex": "100"
    }
  }
},
"bfig": {
  "Tools": [],
  "explainer": {
    "location": "nset",
    "purpose": "display options",
    "status": "used for set up; no provision for change yet"
  },
  "Genus": "Dev",
  "dims": {
    "rh": 33,
    "cw": 120,
    "bh": 200,
    "bw": 360,
    "foc": 0.5
  },
  "colors": {
    "tag": ["rgba(182,245,245,0.5)","rgb(0,0,200)"],
    "link": ["rgba(245,245,182,0.5)","rgb(160,82,45)"],
    "manager": ["rgba(182,220,182,0.5)","rgb(0,118,119)"]
  }
},
"cfig": {
  "Tools": [],
  "explainer": {
    "location": "nset",
    "purpose": "variable tracking"
  },
  "Genus": "Dev",
  "sort": false,
  "par": "61",
  "node": "65",
  "trail": ["Couplers","Hotel","10","61","65","73","83","105"],
  "atrail": ["Genus"],
  "key": "Genus",
  "ind": 1
},
"1": {
  "Tools": [],
  "Type": "Assembly",
  "Genus": "Floor",
  "Label": "Floor",
  "Suffix": 1,
  "backtrack": ["10"],
  "link": ["2","17","28","39","50"],
  "index": 0,
  "shared": {
    "Level": 1,
    "Size": [4900,3633,2070]
  },
  "Bookings": {
    "Level": "shared",
    "Access": "Lift"
  },
  "Design": {
    "Size": "shared"
  },
  "clode": "1",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Pass"
  }
},
"2": {
  "Tools": [],
  "Type": "Assembly",
  "Genus": "Space",
  "Label": "Guestroom",
  "Suffix": "1",
  "backtrack": ["1"],
  "link": ["3","4"],
  "index": 0,
  "Bookings": {
    "Vacant": "Dates",
    "Repair": "Dates"
  },
  "Design": {
    "Size": "shared"
  },
  "shared": {
    "Size": [4700,3433,2070]
  },
  "clode": "2",
  "Housekeeping": {
    "Test1": "Pass",
    "Test2": "Fail"
  }
},
"3": {
  "Tools": [],
  "Type": "Assembly",
  "Genus": "Interiors",
  "Label": "Bedroom",
  "backtrack": ["2"],
  "link": ["5"],
  "index": 0,
  "Bookings": {
    "View": "Town",
    "Beds": "Two"
  },
  "Design": {
    "Size": "shared",
    "Alignment": {
      "Align": "TT",
      "Datum": 0
    }
  },
  "shared": {
    "Size": [2976,3433,1016]
  },
  "clode": "3",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Pass"
  }
},
"4": {
  "Tools": [],
  "Type": "Assembly",
  "Genus": "Interiors",
  "Label": "Bathroom",
  "backtrack": ["2"],
  "link": ["8"],
  "index": 0,
  "Bookings": {
    "Shared": "No"
  },
  "Design": {
    "Size": "shared",
    "Rotation": [0,270,0],
    "Alignment": {
      "Align": "TT",
      "Datum": 0
    },
    "Divider": ["East"]
  },
  "shared": {},
  "clode": "4",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Fail"
  }
},
"5": {
  "Tools": [],
  "Type": "Cluster",
  "Genus": "Bedset",
  "Label": "Bedset",
  "Container": "3",
  "backtrack": ["3"],
  "link": ["14","7","15"],
  "index": 0,
  "Design": {
    "Size": "shared",
    "Footprint": {
      "Dims": [600,600,0,600],
      "Focus": "7"
    }
  },
  "shared": {
    "Size": [2676,2184,1016]
  },
  "clode": "5",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Pass"
  }
},
"6": {
  "Tools": [],
  "Type": "Product",
  "Category": "White goods",
  "Genus": "Minibar",
  "Label": "MiniFridge",
  "backtrack": ["3"],
  "product": {
    "Product": "shared",
    "Size": "shared"
  },
  "Design": {
    "Product": "shared",
    "Size": "shared",
    "Rotation": [0,0,180],
    "Alignment": {
      "Align": "TB",
      "Datum": 0
    }
  },
  "shared": {
    "Product": "Minibar",
    "Size": "610x649x626",
    "Source": "Product/dae/",
    "Extension": ".dae",
    "size": [610,649,626]
  },
  "clode": "6",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Pass"
  }
},
"7": {
  "Tools": [],
  "Type": "Product",
  "Category": "Furniture",
  "Genus": "Bed",
  "Label": "Queen bed",
  "backtrack": ["5"],
  "index": 1,
  "Bookings": {
    "Product": "shared"
  },
  "product": {
    "Product": "shared"
  },
  "Design": {
    "Product": "shared",
    "Size": "shared",
    "Margin": [50,50,0,0],
    "Alignment": {
      "Align": "TT",
      "Datum": 0
    }
  },
  "shared": {
    "Product": "Wendy bed slatted platform mono",
    "Product2": "Queen bed",
    "Size": "1776x2134x1016",
    "Source": "Product/dae/",
    "Extension": ".dae",
    "size": [1776,2134,1016]
  },
  "clode": "7",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Pass"
  }
},
"8": {
  "Tools": [],
  "Type": "Cluster",
  "Genus": "Sanitaryware",
  "Label": "Sanitaryware",
  "Container": "4",
  "backtrack": ["4"],
  "link": ["9","12","13"],
  "index": 2,
  "Design": {
    "Size": "shared"
  },
  "shared": {
    "Size": [1906,1524,1030]
  },
  "clode": "8",
  "Housekeeping": {
    "Test1": "Pass",
    "Test2": "Fail"
  }
},
"9": {
  "Tools": [],
  "Type": "Product",
  "Category": "Sanitaryware",
  "Genus": "Bath",
  "Label": "Bath",
  "backtrack": ["8"],
  "index": 0,
  "product": {
    "Product": "shared",
    "Size": "shared"
  },
  "Design": {
    "Product": "shared",
    "Size": "shared",
    "Rotation": [0,270,0],
    "Alignment": {
      "Align": "TB",
      "Datum": 0
    }
  },
  "shared": {
    "Product": "Bath",
    "Size": "1524x737x368",
    "Source": "Product/dae/",
    "Extension": ".dae",
    "size": [1524,737,368]
  },
  "clode": "9",
  "Housekeeping": {
    "Test1": "Pass",
    "Test2": "Fail"
  }
},
"10": {
  "Tools": ["ListItem","Clone","ListHead","Crosslink","Delete","Number","Aspect","Backtrack"],
  "Type": "Assembly",
  "Genus": "Building",
  "Label": "Tower",
  "backtrack": ["Hotel"],
  "link": ["1","61","117","173","229"],
  "index": 1,
  "Design": {
    "Size": "shared"
  },
  "shared": {
    "Size": [4900,3633,2070]
  },
  "clode": "10",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Pass"
  }
},
"12": {
  "Tools": [],
  "Type": "Product",
  "Category": "Sanitaryware",
  "Genus": "WC",
  "Label": "WC",
  "backtrack": ["8"],
  "index": 0,
  "product": {
    "Product": "shared",
    "Size": "shared"
  },
  "Design": {
    "Product": "shared",
    "Size": "shared",
    "Rotation": [0,0,0],
    "Margin": [50,50,0,0],
    "Alignment": {
      "Align": "TB",
      "Datum": 0
    }
  },
  "shared": {
    "Product": "WC",
    "Size": "509x791x1030",
    "Source": "Product/dae/",
    "Extension": ".dae",
    "size": [509,791,1030]
  },
  "clode": "12",
  "Housekeeping": {
    "Test1": "Pass",
    "Test2": "Pass"
  }
},
"13": {
  "Tools": [],
  "Type": "Product",
  "Category": "Sanitaryware",
  "Genus": "Basin",
  "Label": "Basin",
  "backtrack": ["8"],
  "index": 0,
  "product": {
    "Product": "shared",
    "Size": "shared"
  },
  "Design": {
    "Product": "shared",
    "Size": "shared",
    "Rotation": [0,0,0],
    "Margin": [0,50,0,0],
    "Alignment": {
      "Align": "TB",
      "Datum": 720
    }
  },
  "shared": {
    "Product": "Basin",
    "Size": "510x428x357",
    "Source": "Product/dae/",
    "Extension": ".dae",
    "size": [510,428,357]
  },
  "clode": "13",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Fail"
  }
},
"14": {
  "Tools": [],
  "Type": "Product",
  "Category": "Furniture",
  "Genus": "Cabinet",
  "Label": "Bedside cabinet",
  "backtrack": ["5"],
  "index": 0,
  "product": {
    "Product": "shared",
    "Size": "shared"
  },
  "Design": {
    "Product": "shared",
    "Size": "shared"
  },
  "shared": {
    "Product": "Wendy nightstand",
    "Size": "400x367x558",
    "Source": "Product/dae/",
    "Extension": ".dae",
    "size": [400,367,558]
  },
  "clode": "14",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Pass"
  }
},
"15": {
  "Tools": [],
  "Type": "Product",
  "Category": "Furniture",
  "Genus": "Cabinet",
  "Label": "Bedside cabinet",
  "backtrack": ["5"],
  "index": 2,
  "product": {
    "Product": "shared",
    "Size": "shared"
  },
  "Design": {
    "Product": "shared",
    "Size": "shared",
    "Alignment": {
      "Align": "TT",
      "Datum": 0
    }
  },
  "shared": {
    "Product": "Wendy nightstand",
    "Size": "400x367x558",
    "Source": "Product/dae/",
    "Extension": ".dae",
    "size": [400,367,558]
  },
  "clode": "15",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Pass"
  }
},
"16": {
  "Tools": [],
  "Type": "Product",
  "Category": "Joinery",
  "Genus": "Door",
  "Label": "Door",
  "backtrack": ["4"],
  "index": 0,
  "product": {
    "Product": "shared",
    "Size": "shared"
  },
  "Design": {
    "Product": "shared",
    "Size": "shared"
  },
  "shared": {
    "Product": "Bathroom door",
    "Size": "400x367x558",
    "Source": "Product/dae/",
    "Extension": ".dae",
    "size": [400,367,558]
  },
  "clode": "14",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Pass"
  }
},
"17": {
  "Tools": [],
  "Type": "Assembly",
  "Genus": "Space",
  "Label": "Guestroom",
  "Suffix": 2,
  "backtrack": ["1"],
  "link": ["18","19"],
  "index": 0,
  "Bookings": {
    "Vacant": "Dates",
    "Repair": "Dates"
  },
  "Design": {
    "Size": "shared"
  },
  "shared": {
    "Size": [4700,3433,2070]
  },
  "clode": "2",
  "Housekeeping": {
    "Test1": "Pass",
    "Test2": "Fail"
  }
},
"18": {
  "Tools": [],
  "Type": "Assembly",
  "Genus": "Interiors",
  "Label": "Bedroom",
  "backtrack": ["17"],
  "link": ["20"],
  "index": 0,
  "Bookings": {
    "View": "Town",
    "Beds": "Two"
  },
  "Design": {
    "Size": "shared",
    "Alignment": {
      "Align": "TT",
      "Datum": 0
    }
  },
  "shared": {
    "Size": [2976,3433,1016]
  },
  "clode": "3",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Pass"
  }
},
"19": {
  "Tools": [],
  "Type": "Assembly",
  "Genus": "Interiors",
  "Label": "Bathroom",
  "backtrack": ["17"],
  "link": ["21"],
  "index": 0,
  "Bookings": {
    "Shared": "No"
  },
  "Design": {
    "Size": "shared",
    "Rotation": [0,270,0],
    "Alignment": {
      "Align": "TT",
      "Datum": 0
    },
    "Divider": ["East"]
  },
  "shared": {},
  "clode": "4",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Fail"
  }
},
"20": {
  "Tools": [],
  "Type": "Cluster",
  "Genus": "Bedset",
  "Label": "Bedset",
  "Container": "3",
  "backtrack": ["18"],
  "link": ["22","23","24"],
  "index": 0,
  "Design": {
    "Size": "shared",
    "Footprint": {
      "Dims": [600,600,0,600],
      "Focus": "7"
    }
  },
  "shared": {
    "Size": [2676,2184,1016]
  },
  "clode": "5",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Pass"
  }
},
"21": {
  "Tools": [],
  "Type": "Cluster",
  "Genus": "Sanitaryware",
  "Label": "Sanitaryware",
  "Container": "4",
  "backtrack": ["19"],
  "link": ["25","26","27"],
  "index": 2,
  "Design": {
    "Size": "shared"
  },
  "shared": {
    "Size": [1906,1524,1030]
  },
  "clode": "8",
  "Housekeeping": {
    "Test1": "Pass",
    "Test2": "Fail"
  }
},
"22": {
  "Tools": [],
  "Type": "Product",
  "Category": "Furniture",
  "Genus": "Cabinet",
  "Label": "Bedside cabinet",
  "backtrack": ["20"],
  "index": 0,
  "product": {
    "Product": "shared",
    "Size": "shared"
  },
  "Design": {
    "Product": "shared",
    "Size": "shared"
  },
  "shared": {
    "Product": "Wendy nightstand",
    "Size": "400x367x558",
    "Source": "Product/dae/",
    "Extension": ".dae",
    "size": [400,367,558]
  },
  "clode": "14",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Pass"
  }
},
"23": {
  "Tools": [],
  "Type": "Product",
  "Category": "Furniture",
  "Genus": "Bed",
  "Label": "Queen bed",
  "backtrack": ["20"],
  "index": 1,
  "Bookings": {
    "Product": "shared"
  },
  "product": {
    "Product": "shared"
  },
  "Design": {
    "Product": "shared",
    "Size": "shared",
    "Margin": [50,50,0,0],
    "Alignment": {
      "Align": "TT",
      "Datum": 0
    }
  },
  "shared": {
    "Product": "Wendy bed slatted platform mono",
    "Product2": "Queen bed",
    "Size": "1776x2134x1016",
    "Source": "Product/dae/",
    "Extension": ".dae",
    "size": [1776,2134,1016]
  },
  "clode": "7",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Pass"
  }
},
"24": {
  "Tools": [],
  "Type": "Product",
  "Category": "Furniture",
  "Genus": "Cabinet",
  "Label": "Bedside cabinet",
  "backtrack": ["20"],
  "index": 2,
  "product": {
    "Product": "shared",
    "Size": "shared"
  },
  "Design": {
    "Product": "shared",
    "Size": "shared",
    "Alignment": {
      "Align": "TT",
      "Datum": 0
    }
  },
  "shared": {
    "Product": "Wendy nightstand",
    "Size": "400x367x558",
    "Source": "Product/dae/",
    "Extension": ".dae",
    "size": [400,367,558]
  },
  "clode": "15",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Pass"
  }
},
"25": {
  "Tools": [],
  "Type": "Product",
  "Category": "Sanitaryware",
  "Genus": "Bath",
  "Label": "Bath",
  "backtrack": ["21"],
  "index": 0,
  "product": {
    "Product": "shared",
    "Size": "shared"
  },
  "Design": {
    "Product": "shared",
    "Size": "shared",
    "Rotation": [0,270,0],
    "Alignment": {
      "Align": "TB",
      "Datum": 0
    }
  },
  "shared": {
    "Product": "Bath",
    "Size": "1524x737x368",
    "Source": "Product/dae/",
    "Extension": ".dae",
    "size": [1524,737,368]
  },
  "clode": "9",
  "Housekeeping": {
    "Test1": "Pass",
    "Test2": "Fail"
  }
},
"26": {
  "Tools": [],
  "Type": "Product",
  "Category": "Sanitaryware",
  "Genus": "WC",
  "Label": "WC",
  "backtrack": ["21"],
  "index": 0,
  "product": {
    "Product": "shared",
    "Size": "shared"
  },
  "Design": {
    "Product": "shared",
    "Size": "shared",
    "Rotation": [0,0,0],
    "Margin": [50,50,0,0],
    "Alignment": {
      "Align": "TB",
      "Datum": 0
    }
  },
  "shared": {
    "Product": "WC",
    "Size": "509x791x1030",
    "Source": "Product/dae/",
    "Extension": ".dae",
    "size": [509,791,1030]
  },
  "clode": "12",
  "Housekeeping": {
    "Test1": "Pass",
    "Test2": "Pass"
  }
},
"27": {
  "Tools": [],
  "Type": "Product",
  "Category": "Sanitaryware",
  "Genus": "Basin",
  "Label": "Basin",
  "backtrack": ["21"],
  "index": 0,
  "product": {
    "Product": "shared",
    "Size": "shared"
  },
  "Design": {
    "Product": "shared",
    "Size": "shared",
    "Rotation": [0,0,0],
    "Margin": [0,50,0,0],
    "Alignment": {
      "Align": "TB",
      "Datum": 720
    }
  },
  "shared": {
    "Product": "Basin",
    "Size": "510x428x357",
    "Source": "Product/dae/",
    "Extension": ".dae",
    "size": [510,428,357]
  },
  "clode": "13",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Fail"
  }
},
"28": {
  "Tools": [],
  "Type": "Assembly",
  "Genus": "Space",
  "Label": "Guestroom",
  "Suffix": 3,
  "backtrack": ["1"],
  "link": ["29","30"],
  "index": 0,
  "Bookings": {
    "Vacant": "Dates",
    "Repair": "Dates"
  },
  "Design": {
    "Size": "shared"
  },
  "shared": {
    "Size": [4700,3433,2070]
  },
  "clode": "2",
  "Housekeeping": {
    "Test1": "Pass",
    "Test2": "Fail"
  }
},
"29": {
  "Tools": [],
  "Type": "Assembly",
  "Genus": "Interiors",
  "Label": "Bedroom",
  "backtrack": ["28"],
  "link": ["31"],
  "index": 0,
  "Bookings": {
    "View": "Town",
    "Beds": "Two"
  },
  "Design": {
    "Size": "shared",
    "Alignment": {
      "Align": "TT",
      "Datum": 0
    }
  },
  "shared": {
    "Size": [2976,3433,1016]
  },
  "clode": "3",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Pass"
  }
},
"30": {
  "Tools": [],
  "Type": "Assembly",
  "Genus": "Interiors",
  "Label": "Bathroom",
  "backtrack": ["28"],
  "link": ["32"],
  "index": 0,
  "Bookings": {
    "Shared": "No"
  },
  "Design": {
    "Size": "shared",
    "Rotation": [0,270,0],
    "Alignment": {
      "Align": "TT",
      "Datum": 0
    },
    "Divider": ["East"]
  },
  "shared": {},
  "clode": "4",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Fail"
  }
},
"31": {
  "Tools": [],
  "Type": "Cluster",
  "Genus": "Bedset",
  "Label": "Bedset",
  "Container": "3",
  "backtrack": ["29"],
  "link": ["33","34","35"],
  "index": 0,
  "Design": {
    "Size": "shared",
    "Footprint": {
      "Dims": [600,600,0,600],
      "Focus": "7"
    }
  },
  "shared": {
    "Size": [2676,2184,1016]
  },
  "clode": "5",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Pass"
  }
},
"32": {
  "Tools": [],
  "Type": "Cluster",
  "Genus": "Sanitaryware",
  "Label": "Sanitaryware",
  "Container": "4",
  "backtrack": ["30"],
  "link": ["36","37","38"],
  "index": 2,
  "Design": {
    "Size": "shared"
  },
  "shared": {
    "Size": [1906,1524,1030]
  },
  "clode": "8",
  "Housekeeping": {
    "Test1": "Pass",
    "Test2": "Fail"
  }
},
"33": {
  "Tools": [],
  "Type": "Product",
  "Category": "Furniture",
  "Genus": "Cabinet",
  "Label": "Bedside cabinet",
  "backtrack": ["31"],
  "index": 0,
  "product": {
    "Product": "shared",
    "Size": "shared"
  },
  "Design": {
    "Product": "shared",
    "Size": "shared"
  },
  "shared": {
    "Product": "Wendy nightstand",
    "Size": "400x367x558",
    "Source": "Product/dae/",
    "Extension": ".dae",
    "size": [400,367,558]
  },
  "clode": "14",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Pass"
  }
},
"34": {
  "Tools": [],
  "Type": "Product",
  "Category": "Furniture",
  "Genus": "Bed",
  "Label": "Queen bed",
  "backtrack": ["31"],
  "index": 1,
  "Bookings": {
    "Product": "shared"
  },
  "product": {
    "Product": "shared"
  },
  "Design": {
    "Product": "shared",
    "Size": "shared",
    "Margin": [50,50,0,0],
    "Alignment": {
      "Align": "TT",
      "Datum": 0
    }
  },
  "shared": {
    "Product": "Wendy bed slatted platform mono",
    "Product2": "Queen bed",
    "Size": "1776x2134x1016",
    "Source": "Product/dae/",
    "Extension": ".dae",
    "size": [1776,2134,1016]
  },
  "clode": "7",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Pass"
  }
},
"35": {
  "Tools": [],
  "Type": "Product",
  "Category": "Furniture",
  "Genus": "Cabinet",
  "Label": "Bedside cabinet",
  "backtrack": ["31"],
  "index": 2,
  "product": {
    "Product": "shared",
    "Size": "shared"
  },
  "Design": {
    "Product": "shared",
    "Size": "shared",
    "Alignment": {
      "Align": "TT",
      "Datum": 0
    }
  },
  "shared": {
    "Product": "Wendy nightstand",
    "Size": "400x367x558",
    "Source": "Product/dae/",
    "Extension": ".dae",
    "size": [400,367,558]
  },
  "clode": "15",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Pass"
  }
},
"36": {
  "Tools": [],
  "Type": "Product",
  "Category": "Sanitaryware",
  "Genus": "Bath",
  "Label": "Bath",
  "backtrack": ["32"],
  "index": 0,
  "product": {
    "Product": "shared",
    "Size": "shared"
  },
  "Design": {
    "Product": "shared",
    "Size": "shared",
    "Rotation": [0,270,0],
    "Alignment": {
      "Align": "TB",
      "Datum": 0
    }
  },
  "shared": {
    "Product": "Bath",
    "Size": "1524x737x368",
    "Source": "Product/dae/",
    "Extension": ".dae",
    "size": [1524,737,368]
  },
  "clode": "9",
  "Housekeeping": {
    "Test1": "Pass",
    "Test2": "Fail"
  }
},
"37": {
  "Tools": [],
  "Type": "Product",
  "Category": "Sanitaryware",
  "Genus": "WC",
  "Label": "WC",
  "backtrack": ["32"],
  "index": 0,
  "product": {
    "Product": "shared",
    "Size": "shared"
  },
  "Design": {
    "Product": "shared",
    "Size": "shared",
    "Rotation": [0,0,0],
    "Margin": [50,50,0,0],
    "Alignment": {
      "Align": "TB",
      "Datum": 0
    }
  },
  "shared": {
    "Product": "WC",
    "Size": "509x791x1030",
    "Source": "Product/dae/",
    "Extension": ".dae",
    "size": [509,791,1030]
  },
  "clode": "12",
  "Housekeeping": {
    "Test1": "Pass",
    "Test2": "Pass"
  }
},
"38": {
  "Tools": [],
  "Type": "Product",
  "Category": "Sanitaryware",
  "Genus": "Basin",
  "Label": "Basin",
  "backtrack": ["32"],
  "index": 0,
  "product": {
    "Product": "shared",
    "Size": "shared"
  },
  "Design": {
    "Product": "shared",
    "Size": "shared",
    "Rotation": [0,0,0],
    "Margin": [0,50,0,0],
    "Alignment": {
      "Align": "TB",
      "Datum": 720
    }
  },
  "shared": {
    "Product": "Basin",
    "Size": "510x428x357",
    "Source": "Product/dae/",
    "Extension": ".dae",
    "size": [510,428,357]
  },
  "clode": "13",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Fail"
  }
},
"39": {
  "Tools": [],
  "Type": "Assembly",
  "Genus": "Space",
  "Label": "Guestroom",
  "Suffix": 4,
  "backtrack": ["1"],
  "link": ["40","41"],
  "index": 0,
  "Bookings": {
    "Vacant": "Dates",
    "Repair": "Dates"
  },
  "Design": {
    "Size": "shared"
  },
  "shared": {
    "Size": [4700,3433,2070]
  },
  "clode": "2",
  "Housekeeping": {
    "Test1": "Pass",
    "Test2": "Fail"
  }
},
"40": {
  "Tools": [],
  "Type": "Assembly",
  "Genus": "Interiors",
  "Label": "Bedroom",
  "backtrack": ["39"],
  "link": ["42"],
  "index": 0,
  "Bookings": {
    "View": "Town",
    "Beds": "Two"
  },
  "Design": {
    "Size": "shared",
    "Alignment": {
      "Align": "TT",
      "Datum": 0
    }
  },
  "shared": {
    "Size": [2976,3433,1016]
  },
  "clode": "3",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Pass"
  }
},
"41": {
  "Tools": [],
  "Type": "Assembly",
  "Genus": "Interiors",
  "Label": "Bathroom",
  "backtrack": ["39"],
  "link": ["43"],
  "index": 0,
  "Bookings": {
    "Shared": "No"
  },
  "Design": {
    "Size": "shared",
    "Rotation": [0,270,0],
    "Alignment": {
      "Align": "TT",
      "Datum": 0
    },
    "Divider": ["East"]
  },
  "shared": {},
  "clode": "4",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Fail"
  }
},
"42": {
  "Tools": [],
  "Type": "Cluster",
  "Genus": "Bedset",
  "Label": "Bedset",
  "Container": "3",
  "backtrack": ["40"],
  "link": ["44","45","46"],
  "index": 0,
  "Design": {
    "Size": "shared",
    "Footprint": {
      "Dims": [600,600,0,600],
      "Focus": "7"
    }
  },
  "shared": {
    "Size": [2676,2184,1016]
  },
  "clode": "5",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Pass"
  }
},
"43": {
  "Tools": [],
  "Type": "Cluster",
  "Genus": "Sanitaryware",
  "Label": "Sanitaryware",
  "Container": "4",
  "backtrack": ["41"],
  "link": ["47","48","49"],
  "index": 2,
  "Design": {
    "Size": "shared"
  },
  "shared": {
    "Size": [1906,1524,1030]
  },
  "clode": "8",
  "Housekeeping": {
    "Test1": "Pass",
    "Test2": "Fail"
  }
},
"44": {
  "Tools": [],
  "Type": "Product",
  "Category": "Furniture",
  "Genus": "Cabinet",
  "Label": "Bedside cabinet",
  "backtrack": ["42"],
  "index": 0,
  "product": {
    "Product": "shared",
    "Size": "shared"
  },
  "Design": {
    "Product": "shared",
    "Size": "shared"
  },
  "shared": {
    "Product": "Wendy nightstand",
    "Size": "400x367x558",
    "Source": "Product/dae/",
    "Extension": ".dae",
    "size": [400,367,558]
  },
  "clode": "14",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Pass"
  }
},
"45": {
  "Tools": [],
  "Type": "Product",
  "Category": "Furniture",
  "Genus": "Bed",
  "Label": "Queen bed",
  "backtrack": ["42"],
  "index": 1,
  "Bookings": {
    "Product": "shared"
  },
  "product": {
    "Product": "shared"
  },
  "Design": {
    "Product": "shared",
    "Size": "shared",
    "Margin": [50,50,0,0],
    "Alignment": {
      "Align": "TT",
      "Datum": 0
    }
  },
  "shared": {
    "Product": "Wendy bed slatted platform mono",
    "Product2": "Queen bed",
    "Size": "1776x2134x1016",
    "Source": "Product/dae/",
    "Extension": ".dae",
    "size": [1776,2134,1016]
  },
  "clode": "7",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Pass"
  }
},
"46": {
  "Tools": [],
  "Type": "Product",
  "Category": "Furniture",
  "Genus": "Cabinet",
  "Label": "Bedside cabinet",
  "backtrack": ["42"],
  "index": 2,
  "product": {
    "Product": "shared",
    "Size": "shared"
  },
  "Design": {
    "Product": "shared",
    "Size": "shared",
    "Alignment": {
      "Align": "TT",
      "Datum": 0
    }
  },
  "shared": {
    "Product": "Wendy nightstand",
    "Size": "400x367x558",
    "Source": "Product/dae/",
    "Extension": ".dae",
    "size": [400,367,558]
  },
  "clode": "15",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Pass"
  }
},
"47": {
  "Tools": [],
  "Type": "Product",
  "Category": "Sanitaryware",
  "Genus": "Bath",
  "Label": "Bath",
  "backtrack": ["43"],
  "index": 0,
  "product": {
    "Product": "shared",
    "Size": "shared"
  },
  "Design": {
    "Product": "shared",
    "Size": "shared",
    "Rotation": [0,270,0],
    "Alignment": {
      "Align": "TB",
      "Datum": 0
    }
  },
  "shared": {
    "Product": "Bath",
    "Size": "1524x737x368",
    "Source": "Product/dae/",
    "Extension": ".dae",
    "size": [1524,737,368]
  },
  "clode": "9",
  "Housekeeping": {
    "Test1": "Pass",
    "Test2": "Fail"
  }
},
"48": {
  "Tools": [],
  "Type": "Product",
  "Category": "Sanitaryware",
  "Genus": "WC",
  "Label": "WC",
  "backtrack": ["43"],
  "index": 0,
  "product": {
    "Product": "shared",
    "Size": "shared"
  },
  "Design": {
    "Product": "shared",
    "Size": "shared",
    "Rotation": [0,0,0],
    "Margin": [50,50,0,0],
    "Alignment": {
      "Align": "TB",
      "Datum": 0
    }
  },
  "shared": {
    "Product": "WC",
    "Size": "509x791x1030",
    "Source": "Product/dae/",
    "Extension": ".dae",
    "size": [509,791,1030]
  },
  "clode": "12",
  "Housekeeping": {
    "Test1": "Pass",
    "Test2": "Pass"
  }
},
"49": {
  "Tools": [],
  "Type": "Product",
  "Category": "Sanitaryware",
  "Genus": "Basin",
  "Label": "Basin",
  "backtrack": ["43"],
  "index": 0,
  "product": {
    "Product": "shared",
    "Size": "shared"
  },
  "Design": {
    "Product": "shared",
    "Size": "shared",
    "Rotation": [0,0,0],
    "Margin": [0,50,0,0],
    "Alignment": {
      "Align": "TB",
      "Datum": 720
    }
  },
  "shared": {
    "Product": "Basin",
    "Size": "510x428x357",
    "Source": "Product/dae/",
    "Extension": ".dae",
    "size": [510,428,357]
  },
  "clode": "13",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Fail"
  }
},
"50": {
  "Tools": [],
  "Type": "Assembly",
  "Genus": "Space",
  "Label": "Guestroom",
  "Suffix": 5,
  "backtrack": ["1"],
  "link": ["51","52"],
  "index": 0,
  "Bookings": {
    "Vacant": "Dates",
    "Repair": "Dates"
  },
  "Design": {
    "Size": "shared"
  },
  "shared": {
    "Size": [4700,3433,2070]
  },
  "clode": "2",
  "Housekeeping": {
    "Test1": "Pass",
    "Test2": "Fail"
  }
},
"51": {
  "Tools": [],
  "Type": "Assembly",
  "Genus": "Interiors",
  "Label": "Bedroom",
  "backtrack": ["50"],
  "link": ["53"],
  "index": 0,
  "Bookings": {
    "View": "Town",
    "Beds": "Two"
  },
  "Design": {
    "Size": "shared",
    "Alignment": {
      "Align": "TT",
      "Datum": 0
    }
  },
  "shared": {
    "Size": [2976,3433,1016]
  },
  "clode": "3",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Pass"
  }
},
"52": {
  "Tools": [],
  "Type": "Assembly",
  "Genus": "Interiors",
  "Label": "Bathroom",
  "backtrack": ["50"],
  "link": ["54"],
  "index": 0,
  "Bookings": {
    "Shared": "No"
  },
  "Design": {
    "Size": "shared",
    "Rotation": [0,270,0],
    "Alignment": {
      "Align": "TT",
      "Datum": 0
    },
    "Divider": ["East"]
  },
  "shared": {},
  "clode": "4",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Fail"
  }
},
"53": {
  "Tools": [],
  "Type": "Cluster",
  "Genus": "Bedset",
  "Label": "Bedset",
  "Container": "3",
  "backtrack": ["51"],
  "link": ["55","56","57"],
  "index": 0,
  "Design": {
    "Size": "shared",
    "Footprint": {
      "Dims": [600,600,0,600],
      "Focus": "7"
    }
  },
  "shared": {
    "Size": [2676,2184,1016]
  },
  "clode": "5",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Pass"
  }
},
"54": {
  "Tools": [],
  "Type": "Cluster",
  "Genus": "Sanitaryware",
  "Label": "Sanitaryware",
  "Container": "4",
  "backtrack": ["52"],
  "link": ["58","59","60"],
  "index": 2,
  "Design": {
    "Size": "shared"
  },
  "shared": {
    "Size": [1906,1524,1030]
  },
  "clode": "8",
  "Housekeeping": {
    "Test1": "Pass",
    "Test2": "Fail"
  }
},
"55": {
  "Tools": [],
  "Type": "Product",
  "Category": "Furniture",
  "Genus": "Cabinet",
  "Label": "Bedside cabinet",
  "backtrack": ["53"],
  "index": 0,
  "product": {
    "Product": "shared",
    "Size": "shared"
  },
  "Design": {
    "Product": "shared",
    "Size": "shared"
  },
  "shared": {
    "Product": "Wendy nightstand",
    "Size": "400x367x558",
    "Source": "Product/dae/",
    "Extension": ".dae",
    "size": [400,367,558]
  },
  "clode": "14",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Pass"
  }
},
"56": {
  "Tools": [],
  "Type": "Product",
  "Category": "Furniture",
  "Genus": "Bed",
  "Label": "Queen bed",
  "backtrack": ["53"],
  "index": 1,
  "Bookings": {
    "Product": "shared"
  },
  "product": {
    "Product": "shared"
  },
  "Design": {
    "Product": "shared",
    "Size": "shared",
    "Margin": [50,50,0,0],
    "Alignment": {
      "Align": "TT",
      "Datum": 0
    }
  },
  "shared": {
    "Product": "Wendy bed slatted platform mono",
    "Product2": "Queen bed",
    "Size": "1776x2134x1016",
    "Source": "Product/dae/",
    "Extension": ".dae",
    "size": [1776,2134,1016]
  },
  "clode": "7",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Pass"
  }
},
"57": {
  "Tools": [],
  "Type": "Product",
  "Category": "Furniture",
  "Genus": "Cabinet",
  "Label": "Bedside cabinet",
  "backtrack": ["53"],
  "index": 2,
  "product": {
    "Product": "shared",
    "Size": "shared"
  },
  "Design": {
    "Product": "shared",
    "Size": "shared",
    "Alignment": {
      "Align": "TT",
      "Datum": 0
    }
  },
  "shared": {
    "Product": "Wendy nightstand",
    "Size": "400x367x558",
    "Source": "Product/dae/",
    "Extension": ".dae",
    "size": [400,367,558]
  },
  "clode": "15",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Pass"
  }
},
"58": {
  "Tools": [],
  "Type": "Product",
  "Category": "Sanitaryware",
  "Genus": "Bath",
  "Label": "Bath",
  "backtrack": ["54"],
  "index": 0,
  "product": {
    "Product": "shared",
    "Size": "shared"
  },
  "Design": {
    "Product": "shared",
    "Size": "shared",
    "Rotation": [0,270,0],
    "Alignment": {
      "Align": "TB",
      "Datum": 0
    }
  },
  "shared": {
    "Product": "Bath",
    "Size": "1524x737x368",
    "Source": "Product/dae/",
    "Extension": ".dae",
    "size": [1524,737,368]
  },
  "clode": "9",
  "Housekeeping": {
    "Test1": "Pass",
    "Test2": "Fail"
  }
},
"59": {
  "Tools": [],
  "Type": "Product",
  "Category": "Sanitaryware",
  "Genus": "WC",
  "Label": "WC",
  "backtrack": ["54"],
  "index": 0,
  "product": {
    "Product": "shared",
    "Size": "shared"
  },
  "Design": {
    "Product": "shared",
    "Size": "shared",
    "Rotation": [0,0,0],
    "Margin": [50,50,0,0],
    "Alignment": {
      "Align": "TB",
      "Datum": 0
    }
  },
  "shared": {
    "Product": "WC",
    "Size": "509x791x1030",
    "Source": "Product/dae/",
    "Extension": ".dae",
    "size": [509,791,1030]
  },
  "clode": "12",
  "Housekeeping": {
    "Test1": "Pass",
    "Test2": "Pass"
  }
},
"60": {
  "Tools": [],
  "Type": "Product",
  "Category": "Sanitaryware",
  "Genus": "Basin",
  "Label": "Basin",
  "backtrack": ["54"],
  "index": 0,
  "product": {
    "Product": "shared",
    "Size": "shared"
  },
  "Design": {
    "Product": "shared",
    "Size": "shared",
    "Rotation": [0,0,0],
    "Margin": [0,50,0,0],
    "Alignment": {
      "Align": "TB",
      "Datum": 720
    }
  },
  "shared": {
    "Product": "Basin",
    "Size": "510x428x357",
    "Source": "Product/dae/",
    "Extension": ".dae",
    "size": [510,428,357]
  },
  "clode": "13",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Fail"
  }
},
"61": {
  "Tools": [],
  "Type": "Assembly",
  "Genus": "Floor",
  "Label": "Floor",
  "Suffix": 2,
  "backtrack": ["10"],
  "link": ["62","63","64","65","66"],
  "index": 2,
  "shared": {
    "Level": 1,
    "Size": [4900,3633,2070]
  },
  "Bookings": {
    "Level": "shared",
    "Access": "Lift"
  },
  "Design": {
    "Size": "shared"
  },
  "clode": "1",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Pass"
  }
},
"62": {
  "Tools": [],
  "Type": "Assembly",
  "Genus": "Space",
  "Label": "Guestroom",
  "Suffix": "1",
  "backtrack": ["61"],
  "link": ["67","68"],
  "index": 0,
  "Bookings": {
    "Vacant": "Dates",
    "Repair": "Dates"
  },
  "Design": {
    "Size": "shared"
  },
  "shared": {
    "Size": [4700,3433,2070]
  },
  "clode": "2",
  "Housekeeping": {
    "Test1": "Pass",
    "Test2": "Fail"
  }
},
"63": {
  "Tools": [],
  "Type": "Assembly",
  "Genus": "Space",
  "Label": "Guestroom",
  "Suffix": 2,
  "backtrack": ["61"],
  "link": ["69","70"],
  "index": 0,
  "Bookings": {
    "Vacant": "Dates",
    "Repair": "Dates"
  },
  "Design": {
    "Size": "shared"
  },
  "shared": {
    "Size": [4700,3433,2070]
  },
  "clode": "2",
  "Housekeeping": {
    "Test1": "Pass",
    "Test2": "Fail"
  }
},
"64": {
  "Tools": [],
  "Type": "Assembly",
  "Genus": "Space",
  "Label": "Guestroom",
  "Suffix": 3,
  "backtrack": ["61"],
  "link": ["71","72"],
  "index": 0,
  "Bookings": {
    "Vacant": "Dates",
    "Repair": "Dates"
  },
  "Design": {
    "Size": "shared"
  },
  "shared": {
    "Size": [4700,3433,2070]
  },
  "clode": "2",
  "Housekeeping": {
    "Test1": "Pass",
    "Test2": "Fail"
  }
},
"65": {
  "Tools": ["ListItem","Clone","ListHead","Crosslink","Delete","Number","Aspect","Backtrack"],
  "Type": "Assembly",
  "Genus": "Space",
  "Label": "Guestroom",
  "Suffix": 4,
  "backtrack": ["61"],
  "link": ["73","74"],
  "index": 0,
  "Bookings": {
    "Vacant": "Dates",
    "Repair": "Dates"
  },
  "Design": {
    "Size": "shared"
  },
  "shared": {
    "Size": [4700,3433,2070]
  },
  "clode": "2",
  "Housekeeping": {
    "Test1": "Pass",
    "Test2": "Fail"
  }
},
"66": {
  "Tools": [],
  "Type": "Assembly",
  "Genus": "Space",
  "Label": "Guestroom",
  "Suffix": 5,
  "backtrack": ["61"],
  "link": ["75","76"],
  "index": 0,
  "Bookings": {
    "Vacant": "Dates",
    "Repair": "Dates"
  },
  "Design": {
    "Size": "shared"
  },
  "shared": {
    "Size": [4700,3433,2070]
  },
  "clode": "2",
  "Housekeeping": {
    "Test1": "Pass",
    "Test2": "Fail"
  }
},
"67": {
  "Tools": [],
  "Type": "Assembly",
  "Genus": "Interiors",
  "Label": "Bedroom",
  "backtrack": ["62"],
  "link": ["77"],
  "index": 0,
  "Bookings": {
    "View": "Town",
    "Beds": "Two"
  },
  "Design": {
    "Size": "shared",
    "Alignment": {
      "Align": "TT",
      "Datum": 0
    }
  },
  "shared": {
    "Size": [2976,3433,1016]
  },
  "clode": "3",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Pass"
  }
},
"68": {
  "Tools": [],
  "Type": "Assembly",
  "Genus": "Interiors",
  "Label": "Bathroom",
  "backtrack": ["62"],
  "link": ["78"],
  "index": 0,
  "Bookings": {
    "Shared": "No"
  },
  "Design": {
    "Size": "shared",
    "Rotation": [0,270,0],
    "Alignment": {
      "Align": "TT",
      "Datum": 0
    },
    "Divider": ["East"]
  },
  "shared": {},
  "clode": "4",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Fail"
  }
},
"69": {
  "Tools": [],
  "Type": "Assembly",
  "Genus": "Interiors",
  "Label": "Bedroom",
  "backtrack": ["63"],
  "link": ["79"],
  "index": 0,
  "Bookings": {
    "View": "Town",
    "Beds": "Two"
  },
  "Design": {
    "Size": "shared",
    "Alignment": {
      "Align": "TT",
      "Datum": 0
    }
  },
  "shared": {
    "Size": [2976,3433,1016]
  },
  "clode": "3",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Pass"
  }
},
"70": {
  "Tools": [],
  "Type": "Assembly",
  "Genus": "Interiors",
  "Label": "Bathroom",
  "backtrack": ["63"],
  "link": ["80"],
  "index": 0,
  "Bookings": {
    "Shared": "No"
  },
  "Design": {
    "Size": "shared",
    "Rotation": [0,270,0],
    "Alignment": {
      "Align": "TT",
      "Datum": 0
    },
    "Divider": ["East"]
  },
  "shared": {},
  "clode": "4",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Fail"
  }
},
"71": {
  "Tools": [],
  "Type": "Assembly",
  "Genus": "Interiors",
  "Label": "Bedroom",
  "backtrack": ["64"],
  "link": ["81"],
  "index": 0,
  "Bookings": {
    "View": "Town",
    "Beds": "Two"
  },
  "Design": {
    "Size": "shared",
    "Alignment": {
      "Align": "TT",
      "Datum": 0
    }
  },
  "shared": {
    "Size": [2976,3433,1016]
  },
  "clode": "3",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Pass"
  }
},
"72": {
  "Tools": [],
  "Type": "Assembly",
  "Genus": "Interiors",
  "Label": "Bathroom",
  "backtrack": ["64"],
  "link": ["82"],
  "index": 0,
  "Bookings": {
    "Shared": "No"
  },
  "Design": {
    "Size": "shared",
    "Rotation": [0,270,0],
    "Alignment": {
      "Align": "TT",
      "Datum": 0
    },
    "Divider": ["East"]
  },
  "shared": {},
  "clode": "4",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Fail"
  }
},
"73": {
  "Tools": [],
  "Type": "Assembly",
  "Genus": "Interiors",
  "Label": "Bedroom",
  "backtrack": ["65"],
  "link": ["83"],
  "index": 0,
  "Bookings": {
    "View": "Town",
    "Beds": "Two"
  },
  "Design": {
    "Size": "shared",
    "Alignment": {
      "Align": "TT",
      "Datum": 0
    }
  },
  "shared": {
    "Size": [2976,3433,1016]
  },
  "clode": "3",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Pass"
  }
},
"74": {
  "Tools": [],
  "Type": "Assembly",
  "Genus": "Interiors",
  "Label": "Bathroom",
  "backtrack": ["65"],
  "link": ["84"],
  "index": 0,
  "Bookings": {
    "Shared": "No"
  },
  "Design": {
    "Size": "shared",
    "Rotation": [0,270,0],
    "Alignment": {
      "Align": "TT",
      "Datum": 0
    },
    "Divider": ["East"]
  },
  "shared": {},
  "clode": "4",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Fail"
  }
},
"75": {
  "Tools": [],
  "Type": "Assembly",
  "Genus": "Interiors",
  "Label": "Bedroom",
  "backtrack": ["66"],
  "link": ["85"],
  "index": 0,
  "Bookings": {
    "View": "Town",
    "Beds": "Two"
  },
  "Design": {
    "Size": "shared",
    "Alignment": {
      "Align": "TT",
      "Datum": 0
    }
  },
  "shared": {
    "Size": [2976,3433,1016]
  },
  "clode": "3",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Pass"
  }
},
"76": {
  "Tools": [],
  "Type": "Assembly",
  "Genus": "Interiors",
  "Label": "Bathroom",
  "backtrack": ["66"],
  "link": ["86"],
  "index": 0,
  "Bookings": {
    "Shared": "No"
  },
  "Design": {
    "Size": "shared",
    "Rotation": [0,270,0],
    "Alignment": {
      "Align": "TT",
      "Datum": 0
    },
    "Divider": ["East"]
  },
  "shared": {},
  "clode": "4",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Fail"
  }
},
"77": {
  "Tools": [],
  "Type": "Cluster",
  "Genus": "Bedset",
  "Label": "Bedset",
  "Container": "3",
  "backtrack": ["67"],
  "link": ["87","88","89"],
  "index": 0,
  "Design": {
    "Size": "shared",
    "Footprint": {
      "Dims": [600,600,0,600],
      "Focus": "7"
    }
  },
  "shared": {
    "Size": [2676,2184,1016]
  },
  "clode": "5",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Pass"
  }
},
"78": {
  "Tools": [],
  "Type": "Cluster",
  "Genus": "Sanitaryware",
  "Label": "Sanitaryware",
  "Container": "4",
  "backtrack": ["68"],
  "link": ["90","91","92"],
  "index": 2,
  "Design": {
    "Size": "shared"
  },
  "shared": {
    "Size": [1906,1524,1030]
  },
  "clode": "8",
  "Housekeeping": {
    "Test1": "Pass",
    "Test2": "Fail"
  }
},
"79": {
  "Tools": [],
  "Type": "Cluster",
  "Genus": "Bedset",
  "Label": "Bedset",
  "Container": "3",
  "backtrack": ["69"],
  "link": ["93","94","95"],
  "index": 0,
  "Design": {
    "Size": "shared",
    "Footprint": {
      "Dims": [600,600,0,600],
      "Focus": "7"
    }
  },
  "shared": {
    "Size": [2676,2184,1016]
  },
  "clode": "5",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Pass"
  }
},
"80": {
  "Tools": [],
  "Type": "Cluster",
  "Genus": "Sanitaryware",
  "Label": "Sanitaryware",
  "Container": "4",
  "backtrack": ["70"],
  "link": ["96","97","98"],
  "index": 2,
  "Design": {
    "Size": "shared"
  },
  "shared": {
    "Size": [1906,1524,1030]
  },
  "clode": "8",
  "Housekeeping": {
    "Test1": "Pass",
    "Test2": "Fail"
  }
},
"81": {
  "Tools": [],
  "Type": "Cluster",
  "Genus": "Bedset",
  "Label": "Bedset",
  "Container": "3",
  "backtrack": ["71"],
  "link": ["99","100","101"],
  "index": 0,
  "Design": {
    "Size": "shared",
    "Footprint": {
      "Dims": [600,600,0,600],
      "Focus": "7"
    }
  },
  "shared": {
    "Size": [2676,2184,1016]
  },
  "clode": "5",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Pass"
  }
},
"82": {
  "Tools": [],
  "Type": "Cluster",
  "Genus": "Sanitaryware",
  "Label": "Sanitaryware",
  "Container": "4",
  "backtrack": ["72"],
  "link": ["102","103","104"],
  "index": 2,
  "Design": {
    "Size": "shared"
  },
  "shared": {
    "Size": [1906,1524,1030]
  },
  "clode": "8",
  "Housekeeping": {
    "Test1": "Pass",
    "Test2": "Fail"
  }
},
"83": {
  "Tools": [],
  "Type": "Cluster",
  "Genus": "Bedset",
  "Label": "Bedset",
  "Container": "3",
  "backtrack": ["73"],
  "link": ["105","106","107"],
  "index": 0,
  "Design": {
    "Size": "shared",
    "Footprint": {
      "Dims": [600,600,0,600],
      "Focus": "7"
    }
  },
  "shared": {
    "Size": [2676,2184,1016]
  },
  "clode": "5",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Pass"
  }
},
"84": {
  "Tools": [],
  "Type": "Cluster",
  "Genus": "Sanitaryware",
  "Label": "Sanitaryware",
  "Container": "4",
  "backtrack": ["74"],
  "link": ["108","109","110"],
  "index": 2,
  "Design": {
    "Size": "shared"
  },
  "shared": {
    "Size": [1906,1524,1030]
  },
  "clode": "8",
  "Housekeeping": {
    "Test1": "Pass",
    "Test2": "Fail"
  }
},
"85": {
  "Tools": [],
  "Type": "Cluster",
  "Genus": "Bedset",
  "Label": "Bedset",
  "Container": "3",
  "backtrack": ["75"],
  "link": ["111","112","113"],
  "index": 0,
  "Design": {
    "Size": "shared",
    "Footprint": {
      "Dims": [600,600,0,600],
      "Focus": "7"
    }
  },
  "shared": {
    "Size": [2676,2184,1016]
  },
  "clode": "5",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Pass"
  }
},
"86": {
  "Tools": [],
  "Type": "Cluster",
  "Genus": "Sanitaryware",
  "Label": "Sanitaryware",
  "Container": "4",
  "backtrack": ["76"],
  "link": ["114","115","116"],
  "index": 2,
  "Design": {
    "Size": "shared"
  },
  "shared": {
    "Size": [1906,1524,1030]
  },
  "clode": "8",
  "Housekeeping": {
    "Test1": "Pass",
    "Test2": "Fail"
  }
},
"87": {
  "Tools": [],
  "Type": "Product",
  "Category": "Furniture",
  "Genus": "Cabinet",
  "Label": "Bedside cabinet",
  "backtrack": ["77"],
  "index": 0,
  "product": {
    "Product": "shared",
    "Size": "shared"
  },
  "Design": {
    "Product": "shared",
    "Size": "shared"
  },
  "shared": {
    "Product": "Wendy nightstand",
    "Size": "400x367x558",
    "Source": "Product/dae/",
    "Extension": ".dae",
    "size": [400,367,558]
  },
  "clode": "14",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Pass"
  }
},
"88": {
  "Tools": [],
  "Type": "Product",
  "Category": "Furniture",
  "Genus": "Bed",
  "Label": "Queen bed",
  "backtrack": ["77"],
  "index": 1,
  "Bookings": {
    "Product": "shared"
  },
  "product": {
    "Product": "shared"
  },
  "Design": {
    "Product": "shared",
    "Size": "shared",
    "Margin": [50,50,0,0],
    "Alignment": {
      "Align": "TT",
      "Datum": 0
    }
  },
  "shared": {
    "Product": "Wendy bed slatted platform mono",
    "Product2": "Queen bed",
    "Size": "1776x2134x1016",
    "Source": "Product/dae/",
    "Extension": ".dae",
    "size": [1776,2134,1016]
  },
  "clode": "7",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Pass"
  }
},
"89": {
  "Tools": [],
  "Type": "Product",
  "Category": "Furniture",
  "Genus": "Cabinet",
  "Label": "Bedside cabinet",
  "backtrack": ["77"],
  "index": 2,
  "product": {
    "Product": "shared",
    "Size": "shared"
  },
  "Design": {
    "Product": "shared",
    "Size": "shared",
    "Alignment": {
      "Align": "TT",
      "Datum": 0
    }
  },
  "shared": {
    "Product": "Wendy nightstand",
    "Size": "400x367x558",
    "Source": "Product/dae/",
    "Extension": ".dae",
    "size": [400,367,558]
  },
  "clode": "15",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Pass"
  }
},
"90": {
  "Tools": [],
  "Type": "Product",
  "Category": "Sanitaryware",
  "Genus": "Bath",
  "Label": "Bath",
  "backtrack": ["78"],
  "index": 0,
  "product": {
    "Product": "shared",
    "Size": "shared"
  },
  "Design": {
    "Product": "shared",
    "Size": "shared",
    "Rotation": [0,270,0],
    "Alignment": {
      "Align": "TB",
      "Datum": 0
    }
  },
  "shared": {
    "Product": "Bath",
    "Size": "1524x737x368",
    "Source": "Product/dae/",
    "Extension": ".dae",
    "size": [1524,737,368]
  },
  "clode": "9",
  "Housekeeping": {
    "Test1": "Pass",
    "Test2": "Fail"
  }
},
"91": {
  "Tools": [],
  "Type": "Product",
  "Category": "Sanitaryware",
  "Genus": "WC",
  "Label": "WC",
  "backtrack": ["78"],
  "index": 0,
  "product": {
    "Product": "shared",
    "Size": "shared"
  },
  "Design": {
    "Product": "shared",
    "Size": "shared",
    "Rotation": [0,0,0],
    "Margin": [50,50,0,0],
    "Alignment": {
      "Align": "TB",
      "Datum": 0
    }
  },
  "shared": {
    "Product": "WC",
    "Size": "509x791x1030",
    "Source": "Product/dae/",
    "Extension": ".dae",
    "size": [509,791,1030]
  },
  "clode": "12",
  "Housekeeping": {
    "Test1": "Pass",
    "Test2": "Pass"
  }
},
"92": {
  "Tools": [],
  "Type": "Product",
  "Category": "Sanitaryware",
  "Genus": "Basin",
  "Label": "Basin",
  "backtrack": ["78"],
  "index": 0,
  "product": {
    "Product": "shared",
    "Size": "shared"
  },
  "Design": {
    "Product": "shared",
    "Size": "shared",
    "Rotation": [0,0,0],
    "Margin": [0,50,0,0],
    "Alignment": {
      "Align": "TB",
      "Datum": 720
    }
  },
  "shared": {
    "Product": "Basin",
    "Size": "510x428x357",
    "Source": "Product/dae/",
    "Extension": ".dae",
    "size": [510,428,357]
  },
  "clode": "13",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Fail"
  }
},
"93": {
  "Tools": [],
  "Type": "Product",
  "Category": "Furniture",
  "Genus": "Cabinet",
  "Label": "Bedside cabinet",
  "backtrack": ["79"],
  "index": 0,
  "product": {
    "Product": "shared",
    "Size": "shared"
  },
  "Design": {
    "Product": "shared",
    "Size": "shared"
  },
  "shared": {
    "Product": "Wendy nightstand",
    "Size": "400x367x558",
    "Source": "Product/dae/",
    "Extension": ".dae",
    "size": [400,367,558]
  },
  "clode": "14",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Pass"
  }
},
"94": {
  "Tools": [],
  "Type": "Product",
  "Category": "Furniture",
  "Genus": "Bed",
  "Label": "Queen bed",
  "backtrack": ["79"],
  "index": 1,
  "Bookings": {
    "Product": "shared"
  },
  "product": {
    "Product": "shared"
  },
  "Design": {
    "Product": "shared",
    "Size": "shared",
    "Margin": [50,50,0,0],
    "Alignment": {
      "Align": "TT",
      "Datum": 0
    }
  },
  "shared": {
    "Product": "Wendy bed slatted platform mono",
    "Product2": "Queen bed",
    "Size": "1776x2134x1016",
    "Source": "Product/dae/",
    "Extension": ".dae",
    "size": [1776,2134,1016]
  },
  "clode": "7",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Pass"
  }
},
"95": {
  "Tools": [],
  "Type": "Product",
  "Category": "Furniture",
  "Genus": "Cabinet",
  "Label": "Bedside cabinet",
  "backtrack": ["79"],
  "index": 2,
  "product": {
    "Product": "shared",
    "Size": "shared"
  },
  "Design": {
    "Product": "shared",
    "Size": "shared",
    "Alignment": {
      "Align": "TT",
      "Datum": 0
    }
  },
  "shared": {
    "Product": "Wendy nightstand",
    "Size": "400x367x558",
    "Source": "Product/dae/",
    "Extension": ".dae",
    "size": [400,367,558]
  },
  "clode": "15",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Pass"
  }
},
"96": {
  "Tools": [],
  "Type": "Product",
  "Category": "Sanitaryware",
  "Genus": "Bath",
  "Label": "Bath",
  "backtrack": ["80"],
  "index": 0,
  "product": {
    "Product": "shared",
    "Size": "shared"
  },
  "Design": {
    "Product": "shared",
    "Size": "shared",
    "Rotation": [0,270,0],
    "Alignment": {
      "Align": "TB",
      "Datum": 0
    }
  },
  "shared": {
    "Product": "Bath",
    "Size": "1524x737x368",
    "Source": "Product/dae/",
    "Extension": ".dae",
    "size": [1524,737,368]
  },
  "clode": "9",
  "Housekeeping": {
    "Test1": "Pass",
    "Test2": "Fail"
  }
},
"97": {
  "Tools": [],
  "Type": "Product",
  "Category": "Sanitaryware",
  "Genus": "WC",
  "Label": "WC",
  "backtrack": ["80"],
  "index": 0,
  "product": {
    "Product": "shared",
    "Size": "shared"
  },
  "Design": {
    "Product": "shared",
    "Size": "shared",
    "Rotation": [0,0,0],
    "Margin": [50,50,0,0],
    "Alignment": {
      "Align": "TB",
      "Datum": 0
    }
  },
  "shared": {
    "Product": "WC",
    "Size": "509x791x1030",
    "Source": "Product/dae/",
    "Extension": ".dae",
    "size": [509,791,1030]
  },
  "clode": "12",
  "Housekeeping": {
    "Test1": "Pass",
    "Test2": "Pass"
  }
},
"98": {
  "Tools": [],
  "Type": "Product",
  "Category": "Sanitaryware",
  "Genus": "Basin",
  "Label": "Basin",
  "backtrack": ["80"],
  "index": 0,
  "product": {
    "Product": "shared",
    "Size": "shared"
  },
  "Design": {
    "Product": "shared",
    "Size": "shared",
    "Rotation": [0,0,0],
    "Margin": [0,50,0,0],
    "Alignment": {
      "Align": "TB",
      "Datum": 720
    }
  },
  "shared": {
    "Product": "Basin",
    "Size": "510x428x357",
    "Source": "Product/dae/",
    "Extension": ".dae",
    "size": [510,428,357]
  },
  "clode": "13",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Fail"
  }
},
"99": {
  "Tools": [],
  "Type": "Product",
  "Category": "Furniture",
  "Genus": "Cabinet",
  "Label": "Bedside cabinet",
  "backtrack": ["81"],
  "index": 0,
  "product": {
    "Product": "shared",
    "Size": "shared"
  },
  "Design": {
    "Product": "shared",
    "Size": "shared"
  },
  "shared": {
    "Product": "Wendy nightstand",
    "Size": "400x367x558",
    "Source": "Product/dae/",
    "Extension": ".dae",
    "size": [400,367,558]
  },
  "clode": "14",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Pass"
  }
},
"100": {
  "Tools": [],
  "Type": "Product",
  "Category": "Furniture",
  "Genus": "Bed",
  "Label": "Queen bed",
  "backtrack": ["81"],
  "index": 1,
  "Bookings": {
    "Product": "shared"
  },
  "product": {
    "Product": "shared"
  },
  "Design": {
    "Product": "shared",
    "Size": "shared",
    "Margin": [50,50,0,0],
    "Alignment": {
      "Align": "TT",
      "Datum": 0
    }
  },
  "shared": {
    "Product": "Wendy bed slatted platform mono",
    "Product2": "Queen bed",
    "Size": "1776x2134x1016",
    "Source": "Product/dae/",
    "Extension": ".dae",
    "size": [1776,2134,1016]
  },
  "clode": "7",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Pass"
  }
},
"101": {
  "Tools": [],
  "Type": "Product",
  "Category": "Furniture",
  "Genus": "Cabinet",
  "Label": "Bedside cabinet",
  "backtrack": ["81"],
  "index": 2,
  "product": {
    "Product": "shared",
    "Size": "shared"
  },
  "Design": {
    "Product": "shared",
    "Size": "shared",
    "Alignment": {
      "Align": "TT",
      "Datum": 0
    }
  },
  "shared": {
    "Product": "Wendy nightstand",
    "Size": "400x367x558",
    "Source": "Product/dae/",
    "Extension": ".dae",
    "size": [400,367,558]
  },
  "clode": "15",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Pass"
  }
},
"102": {
  "Tools": [],
  "Type": "Product",
  "Category": "Sanitaryware",
  "Genus": "Bath",
  "Label": "Bath",
  "backtrack": ["82"],
  "index": 0,
  "product": {
    "Product": "shared",
    "Size": "shared"
  },
  "Design": {
    "Product": "shared",
    "Size": "shared",
    "Rotation": [0,270,0],
    "Alignment": {
      "Align": "TB",
      "Datum": 0
    }
  },
  "shared": {
    "Product": "Bath",
    "Size": "1524x737x368",
    "Source": "Product/dae/",
    "Extension": ".dae",
    "size": [1524,737,368]
  },
  "clode": "9",
  "Housekeeping": {
    "Test1": "Pass",
    "Test2": "Fail"
  }
},
"103": {
  "Tools": [],
  "Type": "Product",
  "Category": "Sanitaryware",
  "Genus": "WC",
  "Label": "WC",
  "backtrack": ["82"],
  "index": 0,
  "product": {
    "Product": "shared",
    "Size": "shared"
  },
  "Design": {
    "Product": "shared",
    "Size": "shared",
    "Rotation": [0,0,0],
    "Margin": [50,50,0,0],
    "Alignment": {
      "Align": "TB",
      "Datum": 0
    }
  },
  "shared": {
    "Product": "WC",
    "Size": "509x791x1030",
    "Source": "Product/dae/",
    "Extension": ".dae",
    "size": [509,791,1030]
  },
  "clode": "12",
  "Housekeeping": {
    "Test1": "Pass",
    "Test2": "Pass"
  }
},
"104": {
  "Tools": [],
  "Type": "Product",
  "Category": "Sanitaryware",
  "Genus": "Basin",
  "Label": "Basin",
  "backtrack": ["82"],
  "index": 0,
  "product": {
    "Product": "shared",
    "Size": "shared"
  },
  "Design": {
    "Product": "shared",
    "Size": "shared",
    "Rotation": [0,0,0],
    "Margin": [0,50,0,0],
    "Alignment": {
      "Align": "TB",
      "Datum": 720
    }
  },
  "shared": {
    "Product": "Basin",
    "Size": "510x428x357",
    "Source": "Product/dae/",
    "Extension": ".dae",
    "size": [510,428,357]
  },
  "clode": "13",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Fail"
  }
},
"105": {
  "Tools": [],
  "Type": "Product",
  "Category": "Furniture",
  "Genus": "Cabinet",
  "Label": "Bedside cabinet",
  "backtrack": ["83"],
  "index": 0,
  "product": {
    "Product": "shared",
    "Size": "shared"
  },
  "Design": {
    "Product": "shared",
    "Size": "shared"
  },
  "shared": {
    "Product": "Wendy nightstand",
    "Size": "400x367x558",
    "Source": "Product/dae/",
    "Extension": ".dae",
    "size": [400,367,558]
  },
  "clode": "14",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Pass"
  }
},
"106": {
  "Tools": [],
  "Type": "Product",
  "Category": "Furniture",
  "Genus": "Bed",
  "Label": "Queen bed",
  "backtrack": ["83"],
  "index": 1,
  "Bookings": {
    "Product": "shared"
  },
  "product": {
    "Product": "shared"
  },
  "Design": {
    "Product": "shared",
    "Size": "shared",
    "Margin": [50,50,0,0],
    "Alignment": {
      "Align": "TT",
      "Datum": 0
    }
  },
  "shared": {
    "Product": "Wendy bed slatted platform mono",
    "Product2": "Queen bed",
    "Size": "1776x2134x1016",
    "Source": "Product/dae/",
    "Extension": ".dae",
    "size": [1776,2134,1016]
  },
  "clode": "7",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Pass"
  }
},
"107": {
  "Tools": [],
  "Type": "Product",
  "Category": "Furniture",
  "Genus": "Cabinet",
  "Label": "Bedside cabinet",
  "backtrack": ["83"],
  "index": 2,
  "product": {
    "Product": "shared",
    "Size": "shared"
  },
  "Design": {
    "Product": "shared",
    "Size": "shared",
    "Alignment": {
      "Align": "TT",
      "Datum": 0
    }
  },
  "shared": {
    "Product": "Wendy nightstand",
    "Size": "400x367x558",
    "Source": "Product/dae/",
    "Extension": ".dae",
    "size": [400,367,558]
  },
  "clode": "15",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Pass"
  }
},
"108": {
  "Tools": [],
  "Type": "Product",
  "Category": "Sanitaryware",
  "Genus": "Bath",
  "Label": "Bath",
  "backtrack": ["84"],
  "index": 0,
  "product": {
    "Product": "shared",
    "Size": "shared"
  },
  "Design": {
    "Product": "shared",
    "Size": "shared",
    "Rotation": [0,270,0],
    "Alignment": {
      "Align": "TB",
      "Datum": 0
    }
  },
  "shared": {
    "Product": "Bath",
    "Size": "1524x737x368",
    "Source": "Product/dae/",
    "Extension": ".dae",
    "size": [1524,737,368]
  },
  "clode": "9",
  "Housekeeping": {
    "Test1": "Pass",
    "Test2": "Fail"
  }
},
"109": {
  "Tools": [],
  "Type": "Product",
  "Category": "Sanitaryware",
  "Genus": "WC",
  "Label": "WC",
  "backtrack": ["84"],
  "index": 0,
  "product": {
    "Product": "shared",
    "Size": "shared"
  },
  "Design": {
    "Product": "shared",
    "Size": "shared",
    "Rotation": [0,0,0],
    "Margin": [50,50,0,0],
    "Alignment": {
      "Align": "TB",
      "Datum": 0
    }
  },
  "shared": {
    "Product": "WC",
    "Size": "509x791x1030",
    "Source": "Product/dae/",
    "Extension": ".dae",
    "size": [509,791,1030]
  },
  "clode": "12",
  "Housekeeping": {
    "Test1": "Pass",
    "Test2": "Pass"
  }
},
"110": {
  "Tools": [],
  "Type": "Product",
  "Category": "Sanitaryware",
  "Genus": "Basin",
  "Label": "Basin",
  "backtrack": ["84"],
  "index": 0,
  "product": {
    "Product": "shared",
    "Size": "shared"
  },
  "Design": {
    "Product": "shared",
    "Size": "shared",
    "Rotation": [0,0,0],
    "Margin": [0,50,0,0],
    "Alignment": {
      "Align": "TB",
      "Datum": 720
    }
  },
  "shared": {
    "Product": "Basin",
    "Size": "510x428x357",
    "Source": "Product/dae/",
    "Extension": ".dae",
    "size": [510,428,357]
  },
  "clode": "13",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Fail"
  }
},
"111": {
  "Tools": [],
  "Type": "Product",
  "Category": "Furniture",
  "Genus": "Cabinet",
  "Label": "Bedside cabinet",
  "backtrack": ["85"],
  "index": 0,
  "product": {
    "Product": "shared",
    "Size": "shared"
  },
  "Design": {
    "Product": "shared",
    "Size": "shared"
  },
  "shared": {
    "Product": "Wendy nightstand",
    "Size": "400x367x558",
    "Source": "Product/dae/",
    "Extension": ".dae",
    "size": [400,367,558]
  },
  "clode": "14",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Pass"
  }
},
"112": {
  "Tools": [],
  "Type": "Product",
  "Category": "Furniture",
  "Genus": "Bed",
  "Label": "Queen bed",
  "backtrack": ["85"],
  "index": 1,
  "Bookings": {
    "Product": "shared"
  },
  "product": {
    "Product": "shared"
  },
  "Design": {
    "Product": "shared",
    "Size": "shared",
    "Margin": [50,50,0,0],
    "Alignment": {
      "Align": "TT",
      "Datum": 0
    }
  },
  "shared": {
    "Product": "Wendy bed slatted platform mono",
    "Product2": "Queen bed",
    "Size": "1776x2134x1016",
    "Source": "Product/dae/",
    "Extension": ".dae",
    "size": [1776,2134,1016]
  },
  "clode": "7",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Pass"
  }
},
"113": {
  "Tools": [],
  "Type": "Product",
  "Category": "Furniture",
  "Genus": "Cabinet",
  "Label": "Bedside cabinet",
  "backtrack": ["85"],
  "index": 2,
  "product": {
    "Product": "shared",
    "Size": "shared"
  },
  "Design": {
    "Product": "shared",
    "Size": "shared",
    "Alignment": {
      "Align": "TT",
      "Datum": 0
    }
  },
  "shared": {
    "Product": "Wendy nightstand",
    "Size": "400x367x558",
    "Source": "Product/dae/",
    "Extension": ".dae",
    "size": [400,367,558]
  },
  "clode": "15",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Pass"
  }
},
"114": {
  "Tools": [],
  "Type": "Product",
  "Category": "Sanitaryware",
  "Genus": "Bath",
  "Label": "Bath",
  "backtrack": ["86"],
  "index": 0,
  "product": {
    "Product": "shared",
    "Size": "shared"
  },
  "Design": {
    "Product": "shared",
    "Size": "shared",
    "Rotation": [0,270,0],
    "Alignment": {
      "Align": "TB",
      "Datum": 0
    }
  },
  "shared": {
    "Product": "Bath",
    "Size": "1524x737x368",
    "Source": "Product/dae/",
    "Extension": ".dae",
    "size": [1524,737,368]
  },
  "clode": "9",
  "Housekeeping": {
    "Test1": "Pass",
    "Test2": "Fail"
  }
},
"115": {
  "Tools": [],
  "Type": "Product",
  "Category": "Sanitaryware",
  "Genus": "WC",
  "Label": "WC",
  "backtrack": ["86"],
  "index": 0,
  "product": {
    "Product": "shared",
    "Size": "shared"
  },
  "Design": {
    "Product": "shared",
    "Size": "shared",
    "Rotation": [0,0,0],
    "Margin": [50,50,0,0],
    "Alignment": {
      "Align": "TB",
      "Datum": 0
    }
  },
  "shared": {
    "Product": "WC",
    "Size": "509x791x1030",
    "Source": "Product/dae/",
    "Extension": ".dae",
    "size": [509,791,1030]
  },
  "clode": "12",
  "Housekeeping": {
    "Test1": "Pass",
    "Test2": "Pass"
  }
},
"116": {
  "Tools": [],
  "Type": "Product",
  "Category": "Sanitaryware",
  "Genus": "Basin",
  "Label": "Basin",
  "backtrack": ["86"],
  "index": 0,
  "product": {
    "Product": "shared",
    "Size": "shared"
  },
  "Design": {
    "Product": "shared",
    "Size": "shared",
    "Rotation": [0,0,0],
    "Margin": [0,50,0,0],
    "Alignment": {
      "Align": "TB",
      "Datum": 720
    }
  },
  "shared": {
    "Product": "Basin",
    "Size": "510x428x357",
    "Source": "Product/dae/",
    "Extension": ".dae",
    "size": [510,428,357]
  },
  "clode": "13",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Fail"
  }
},
"117": {
  "Tools": [],
  "Type": "Assembly",
  "Genus": "Floor",
  "Label": "Floor",
  "Suffix": 3,
  "backtrack": ["10"],
  "link": ["118","119","120","121","122"],
  "index": 0,
  "shared": {
    "Level": 1,
    "Size": [4900,3633,2070]
  },
  "Bookings": {
    "Level": "shared",
    "Access": "Lift"
  },
  "Design": {
    "Size": "shared"
  },
  "clode": "1",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Pass"
  }
},
"118": {
  "Tools": [],
  "Type": "Assembly",
  "Genus": "Space",
  "Label": "Guestroom",
  "Suffix": "1",
  "backtrack": ["117"],
  "link": ["123","124"],
  "index": 0,
  "Bookings": {
    "Vacant": "Dates",
    "Repair": "Dates"
  },
  "Design": {
    "Size": "shared"
  },
  "shared": {
    "Size": [4700,3433,2070]
  },
  "clode": "2",
  "Housekeeping": {
    "Test1": "Pass",
    "Test2": "Fail"
  }
},
"119": {
  "Tools": [],
  "Type": "Assembly",
  "Genus": "Space",
  "Label": "Guestroom",
  "Suffix": 2,
  "backtrack": ["117"],
  "link": ["125","126"],
  "index": 0,
  "Bookings": {
    "Vacant": "Dates",
    "Repair": "Dates"
  },
  "Design": {
    "Size": "shared"
  },
  "shared": {
    "Size": [4700,3433,2070]
  },
  "clode": "2",
  "Housekeeping": {
    "Test1": "Pass",
    "Test2": "Fail"
  }
},
"120": {
  "Tools": [],
  "Type": "Assembly",
  "Genus": "Space",
  "Label": "Guestroom",
  "Suffix": 3,
  "backtrack": ["117"],
  "link": ["127","128"],
  "index": 0,
  "Bookings": {
    "Vacant": "Dates",
    "Repair": "Dates"
  },
  "Design": {
    "Size": "shared"
  },
  "shared": {
    "Size": [4700,3433,2070]
  },
  "clode": "2",
  "Housekeeping": {
    "Test1": "Pass",
    "Test2": "Fail"
  }
},
"121": {
  "Tools": [],
  "Type": "Assembly",
  "Genus": "Space",
  "Label": "Guestroom",
  "Suffix": 4,
  "backtrack": ["117"],
  "link": ["129","130"],
  "index": 0,
  "Bookings": {
    "Vacant": "Dates",
    "Repair": "Dates"
  },
  "Design": {
    "Size": "shared"
  },
  "shared": {
    "Size": [4700,3433,2070]
  },
  "clode": "2",
  "Housekeeping": {
    "Test1": "Pass",
    "Test2": "Fail"
  }
},
"122": {
  "Tools": [],
  "Type": "Assembly",
  "Genus": "Space",
  "Label": "Guestroom",
  "Suffix": 5,
  "backtrack": ["117"],
  "link": ["131","132"],
  "index": 0,
  "Bookings": {
    "Vacant": "Dates",
    "Repair": "Dates"
  },
  "Design": {
    "Size": "shared"
  },
  "shared": {
    "Size": [4700,3433,2070]
  },
  "clode": "2",
  "Housekeeping": {
    "Test1": "Pass",
    "Test2": "Fail"
  }
},
"123": {
  "Tools": [],
  "Type": "Assembly",
  "Genus": "Interiors",
  "Label": "Bedroom",
  "backtrack": ["118"],
  "link": ["133"],
  "index": 0,
  "Bookings": {
    "View": "Town",
    "Beds": "Two"
  },
  "Design": {
    "Size": "shared",
    "Alignment": {
      "Align": "TT",
      "Datum": 0
    }
  },
  "shared": {
    "Size": [2976,3433,1016]
  },
  "clode": "3",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Pass"
  }
},
"124": {
  "Tools": [],
  "Type": "Assembly",
  "Genus": "Interiors",
  "Label": "Bathroom",
  "backtrack": ["118"],
  "link": ["134"],
  "index": 0,
  "Bookings": {
    "Shared": "No"
  },
  "Design": {
    "Size": "shared",
    "Rotation": [0,270,0],
    "Alignment": {
      "Align": "TT",
      "Datum": 0
    },
    "Divider": ["East"]
  },
  "shared": {},
  "clode": "4",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Fail"
  }
},
"125": {
  "Tools": [],
  "Type": "Assembly",
  "Genus": "Interiors",
  "Label": "Bedroom",
  "backtrack": ["119"],
  "link": ["135"],
  "index": 0,
  "Bookings": {
    "View": "Town",
    "Beds": "Two"
  },
  "Design": {
    "Size": "shared",
    "Alignment": {
      "Align": "TT",
      "Datum": 0
    }
  },
  "shared": {
    "Size": [2976,3433,1016]
  },
  "clode": "3",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Pass"
  }
},
"126": {
  "Tools": [],
  "Type": "Assembly",
  "Genus": "Interiors",
  "Label": "Bathroom",
  "backtrack": ["119"],
  "link": ["136"],
  "index": 0,
  "Bookings": {
    "Shared": "No"
  },
  "Design": {
    "Size": "shared",
    "Rotation": [0,270,0],
    "Alignment": {
      "Align": "TT",
      "Datum": 0
    },
    "Divider": ["East"]
  },
  "shared": {},
  "clode": "4",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Fail"
  }
},
"127": {
  "Tools": [],
  "Type": "Assembly",
  "Genus": "Interiors",
  "Label": "Bedroom",
  "backtrack": ["120"],
  "link": ["137"],
  "index": 0,
  "Bookings": {
    "View": "Town",
    "Beds": "Two"
  },
  "Design": {
    "Size": "shared",
    "Alignment": {
      "Align": "TT",
      "Datum": 0
    }
  },
  "shared": {
    "Size": [2976,3433,1016]
  },
  "clode": "3",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Pass"
  }
},
"128": {
  "Tools": [],
  "Type": "Assembly",
  "Genus": "Interiors",
  "Label": "Bathroom",
  "backtrack": ["120"],
  "link": ["138"],
  "index": 0,
  "Bookings": {
    "Shared": "No"
  },
  "Design": {
    "Size": "shared",
    "Rotation": [0,270,0],
    "Alignment": {
      "Align": "TT",
      "Datum": 0
    },
    "Divider": ["East"]
  },
  "shared": {},
  "clode": "4",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Fail"
  }
},
"129": {
  "Tools": [],
  "Type": "Assembly",
  "Genus": "Interiors",
  "Label": "Bedroom",
  "backtrack": ["121"],
  "link": ["139"],
  "index": 0,
  "Bookings": {
    "View": "Town",
    "Beds": "Two"
  },
  "Design": {
    "Size": "shared",
    "Alignment": {
      "Align": "TT",
      "Datum": 0
    }
  },
  "shared": {
    "Size": [2976,3433,1016]
  },
  "clode": "3",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Pass"
  }
},
"130": {
  "Tools": [],
  "Type": "Assembly",
  "Genus": "Interiors",
  "Label": "Bathroom",
  "backtrack": ["121"],
  "link": ["140"],
  "index": 0,
  "Bookings": {
    "Shared": "No"
  },
  "Design": {
    "Size": "shared",
    "Rotation": [0,270,0],
    "Alignment": {
      "Align": "TT",
      "Datum": 0
    },
    "Divider": ["East"]
  },
  "shared": {},
  "clode": "4",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Fail"
  }
},
"131": {
  "Tools": [],
  "Type": "Assembly",
  "Genus": "Interiors",
  "Label": "Bedroom",
  "backtrack": ["122"],
  "link": ["141"],
  "index": 0,
  "Bookings": {
    "View": "Town",
    "Beds": "Two"
  },
  "Design": {
    "Size": "shared",
    "Alignment": {
      "Align": "TT",
      "Datum": 0
    }
  },
  "shared": {
    "Size": [2976,3433,1016]
  },
  "clode": "3",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Pass"
  }
},
"132": {
  "Tools": [],
  "Type": "Assembly",
  "Genus": "Interiors",
  "Label": "Bathroom",
  "backtrack": ["122"],
  "link": ["142"],
  "index": 0,
  "Bookings": {
    "Shared": "No"
  },
  "Design": {
    "Size": "shared",
    "Rotation": [0,270,0],
    "Alignment": {
      "Align": "TT",
      "Datum": 0
    },
    "Divider": ["East"]
  },
  "shared": {},
  "clode": "4",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Fail"
  }
},
"133": {
  "Tools": [],
  "Type": "Cluster",
  "Genus": "Bedset",
  "Label": "Bedset",
  "Container": "3",
  "backtrack": ["123"],
  "link": ["143","144","145"],
  "index": 0,
  "Design": {
    "Size": "shared",
    "Footprint": {
      "Dims": [600,600,0,600],
      "Focus": "7"
    }
  },
  "shared": {
    "Size": [2676,2184,1016]
  },
  "clode": "5",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Pass"
  }
},
"134": {
  "Tools": [],
  "Type": "Cluster",
  "Genus": "Sanitaryware",
  "Label": "Sanitaryware",
  "Container": "4",
  "backtrack": ["124"],
  "link": ["146","147","148"],
  "index": 2,
  "Design": {
    "Size": "shared"
  },
  "shared": {
    "Size": [1906,1524,1030]
  },
  "clode": "8",
  "Housekeeping": {
    "Test1": "Pass",
    "Test2": "Fail"
  }
},
"135": {
  "Tools": [],
  "Type": "Cluster",
  "Genus": "Bedset",
  "Label": "Bedset",
  "Container": "3",
  "backtrack": ["125"],
  "link": ["149","150","151"],
  "index": 0,
  "Design": {
    "Size": "shared",
    "Footprint": {
      "Dims": [600,600,0,600],
      "Focus": "7"
    }
  },
  "shared": {
    "Size": [2676,2184,1016]
  },
  "clode": "5",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Pass"
  }
},
"136": {
  "Tools": [],
  "Type": "Cluster",
  "Genus": "Sanitaryware",
  "Label": "Sanitaryware",
  "Container": "4",
  "backtrack": ["126"],
  "link": ["152","153","154"],
  "index": 2,
  "Design": {
    "Size": "shared"
  },
  "shared": {
    "Size": [1906,1524,1030]
  },
  "clode": "8",
  "Housekeeping": {
    "Test1": "Pass",
    "Test2": "Fail"
  }
},
"137": {
  "Tools": [],
  "Type": "Cluster",
  "Genus": "Bedset",
  "Label": "Bedset",
  "Container": "3",
  "backtrack": ["127"],
  "link": ["155","156","157"],
  "index": 0,
  "Design": {
    "Size": "shared",
    "Footprint": {
      "Dims": [600,600,0,600],
      "Focus": "7"
    }
  },
  "shared": {
    "Size": [2676,2184,1016]
  },
  "clode": "5",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Pass"
  }
},
"138": {
  "Tools": [],
  "Type": "Cluster",
  "Genus": "Sanitaryware",
  "Label": "Sanitaryware",
  "Container": "4",
  "backtrack": ["128"],
  "link": ["158","159","160"],
  "index": 2,
  "Design": {
    "Size": "shared"
  },
  "shared": {
    "Size": [1906,1524,1030]
  },
  "clode": "8",
  "Housekeeping": {
    "Test1": "Pass",
    "Test2": "Fail"
  }
},
"139": {
  "Tools": [],
  "Type": "Cluster",
  "Genus": "Bedset",
  "Label": "Bedset",
  "Container": "3",
  "backtrack": ["129"],
  "link": ["161","162","163"],
  "index": 0,
  "Design": {
    "Size": "shared",
    "Footprint": {
      "Dims": [600,600,0,600],
      "Focus": "7"
    }
  },
  "shared": {
    "Size": [2676,2184,1016]
  },
  "clode": "5",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Pass"
  }
},
"140": {
  "Tools": [],
  "Type": "Cluster",
  "Genus": "Sanitaryware",
  "Label": "Sanitaryware",
  "Container": "4",
  "backtrack": ["130"],
  "link": ["164","165","166"],
  "index": 2,
  "Design": {
    "Size": "shared"
  },
  "shared": {
    "Size": [1906,1524,1030]
  },
  "clode": "8",
  "Housekeeping": {
    "Test1": "Pass",
    "Test2": "Fail"
  }
},
"141": {
  "Tools": [],
  "Type": "Cluster",
  "Genus": "Bedset",
  "Label": "Bedset",
  "Container": "3",
  "backtrack": ["131"],
  "link": ["167","168","169"],
  "index": 0,
  "Design": {
    "Size": "shared",
    "Footprint": {
      "Dims": [600,600,0,600],
      "Focus": "7"
    }
  },
  "shared": {
    "Size": [2676,2184,1016]
  },
  "clode": "5",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Pass"
  }
},
"142": {
  "Tools": [],
  "Type": "Cluster",
  "Genus": "Sanitaryware",
  "Label": "Sanitaryware",
  "Container": "4",
  "backtrack": ["132"],
  "link": ["170","171","172"],
  "index": 2,
  "Design": {
    "Size": "shared"
  },
  "shared": {
    "Size": [1906,1524,1030]
  },
  "clode": "8",
  "Housekeeping": {
    "Test1": "Pass",
    "Test2": "Fail"
  }
},
"143": {
  "Tools": [],
  "Type": "Product",
  "Category": "Furniture",
  "Genus": "Cabinet",
  "Label": "Bedside cabinet",
  "backtrack": ["133"],
  "index": 0,
  "product": {
    "Product": "shared",
    "Size": "shared"
  },
  "Design": {
    "Product": "shared",
    "Size": "shared"
  },
  "shared": {
    "Product": "Wendy nightstand",
    "Size": "400x367x558",
    "Source": "Product/dae/",
    "Extension": ".dae",
    "size": [400,367,558]
  },
  "clode": "14",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Pass"
  }
},
"144": {
  "Tools": [],
  "Type": "Product",
  "Category": "Furniture",
  "Genus": "Bed",
  "Label": "Queen bed",
  "backtrack": ["133"],
  "index": 1,
  "Bookings": {
    "Product": "shared"
  },
  "product": {
    "Product": "shared"
  },
  "Design": {
    "Product": "shared",
    "Size": "shared",
    "Margin": [50,50,0,0],
    "Alignment": {
      "Align": "TT",
      "Datum": 0
    }
  },
  "shared": {
    "Product": "Wendy bed slatted platform mono",
    "Product2": "Queen bed",
    "Size": "1776x2134x1016",
    "Source": "Product/dae/",
    "Extension": ".dae",
    "size": [1776,2134,1016]
  },
  "clode": "7",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Pass"
  }
},
"145": {
  "Tools": [],
  "Type": "Product",
  "Category": "Furniture",
  "Genus": "Cabinet",
  "Label": "Bedside cabinet",
  "backtrack": ["133"],
  "index": 2,
  "product": {
    "Product": "shared",
    "Size": "shared"
  },
  "Design": {
    "Product": "shared",
    "Size": "shared",
    "Alignment": {
      "Align": "TT",
      "Datum": 0
    }
  },
  "shared": {
    "Product": "Wendy nightstand",
    "Size": "400x367x558",
    "Source": "Product/dae/",
    "Extension": ".dae",
    "size": [400,367,558]
  },
  "clode": "15",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Pass"
  }
},
"146": {
  "Tools": [],
  "Type": "Product",
  "Category": "Sanitaryware",
  "Genus": "Bath",
  "Label": "Bath",
  "backtrack": ["134"],
  "index": 0,
  "product": {
    "Product": "shared",
    "Size": "shared"
  },
  "Design": {
    "Product": "shared",
    "Size": "shared",
    "Rotation": [0,270,0],
    "Alignment": {
      "Align": "TB",
      "Datum": 0
    }
  },
  "shared": {
    "Product": "Bath",
    "Size": "1524x737x368",
    "Source": "Product/dae/",
    "Extension": ".dae",
    "size": [1524,737,368]
  },
  "clode": "9",
  "Housekeeping": {
    "Test1": "Pass",
    "Test2": "Fail"
  }
},
"147": {
  "Tools": [],
  "Type": "Product",
  "Category": "Sanitaryware",
  "Genus": "WC",
  "Label": "WC",
  "backtrack": ["134"],
  "index": 0,
  "product": {
    "Product": "shared",
    "Size": "shared"
  },
  "Design": {
    "Product": "shared",
    "Size": "shared",
    "Rotation": [0,0,0],
    "Margin": [50,50,0,0],
    "Alignment": {
      "Align": "TB",
      "Datum": 0
    }
  },
  "shared": {
    "Product": "WC",
    "Size": "509x791x1030",
    "Source": "Product/dae/",
    "Extension": ".dae",
    "size": [509,791,1030]
  },
  "clode": "12",
  "Housekeeping": {
    "Test1": "Pass",
    "Test2": "Pass"
  }
},
"148": {
  "Tools": [],
  "Type": "Product",
  "Category": "Sanitaryware",
  "Genus": "Basin",
  "Label": "Basin",
  "backtrack": ["134"],
  "index": 0,
  "product": {
    "Product": "shared",
    "Size": "shared"
  },
  "Design": {
    "Product": "shared",
    "Size": "shared",
    "Rotation": [0,0,0],
    "Margin": [0,50,0,0],
    "Alignment": {
      "Align": "TB",
      "Datum": 720
    }
  },
  "shared": {
    "Product": "Basin",
    "Size": "510x428x357",
    "Source": "Product/dae/",
    "Extension": ".dae",
    "size": [510,428,357]
  },
  "clode": "13",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Fail"
  }
},
"149": {
  "Tools": [],
  "Type": "Product",
  "Category": "Furniture",
  "Genus": "Cabinet",
  "Label": "Bedside cabinet",
  "backtrack": ["135"],
  "index": 0,
  "product": {
    "Product": "shared",
    "Size": "shared"
  },
  "Design": {
    "Product": "shared",
    "Size": "shared"
  },
  "shared": {
    "Product": "Wendy nightstand",
    "Size": "400x367x558",
    "Source": "Product/dae/",
    "Extension": ".dae",
    "size": [400,367,558]
  },
  "clode": "14",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Pass"
  }
},
"150": {
  "Tools": [],
  "Type": "Product",
  "Category": "Furniture",
  "Genus": "Bed",
  "Label": "Queen bed",
  "backtrack": ["135"],
  "index": 1,
  "Bookings": {
    "Product": "shared"
  },
  "product": {
    "Product": "shared"
  },
  "Design": {
    "Product": "shared",
    "Size": "shared",
    "Margin": [50,50,0,0],
    "Alignment": {
      "Align": "TT",
      "Datum": 0
    }
  },
  "shared": {
    "Product": "Wendy bed slatted platform mono",
    "Product2": "Queen bed",
    "Size": "1776x2134x1016",
    "Source": "Product/dae/",
    "Extension": ".dae",
    "size": [1776,2134,1016]
  },
  "clode": "7",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Pass"
  }
},
"151": {
  "Tools": [],
  "Type": "Product",
  "Category": "Furniture",
  "Genus": "Cabinet",
  "Label": "Bedside cabinet",
  "backtrack": ["135"],
  "index": 2,
  "product": {
    "Product": "shared",
    "Size": "shared"
  },
  "Design": {
    "Product": "shared",
    "Size": "shared",
    "Alignment": {
      "Align": "TT",
      "Datum": 0
    }
  },
  "shared": {
    "Product": "Wendy nightstand",
    "Size": "400x367x558",
    "Source": "Product/dae/",
    "Extension": ".dae",
    "size": [400,367,558]
  },
  "clode": "15",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Pass"
  }
},
"152": {
  "Tools": [],
  "Type": "Product",
  "Category": "Sanitaryware",
  "Genus": "Bath",
  "Label": "Bath",
  "backtrack": ["136"],
  "index": 0,
  "product": {
    "Product": "shared",
    "Size": "shared"
  },
  "Design": {
    "Product": "shared",
    "Size": "shared",
    "Rotation": [0,270,0],
    "Alignment": {
      "Align": "TB",
      "Datum": 0
    }
  },
  "shared": {
    "Product": "Bath",
    "Size": "1524x737x368",
    "Source": "Product/dae/",
    "Extension": ".dae",
    "size": [1524,737,368]
  },
  "clode": "9",
  "Housekeeping": {
    "Test1": "Pass",
    "Test2": "Fail"
  }
},
"153": {
  "Tools": [],
  "Type": "Product",
  "Category": "Sanitaryware",
  "Genus": "WC",
  "Label": "WC",
  "backtrack": ["136"],
  "index": 0,
  "product": {
    "Product": "shared",
    "Size": "shared"
  },
  "Design": {
    "Product": "shared",
    "Size": "shared",
    "Rotation": [0,0,0],
    "Margin": [50,50,0,0],
    "Alignment": {
      "Align": "TB",
      "Datum": 0
    }
  },
  "shared": {
    "Product": "WC",
    "Size": "509x791x1030",
    "Source": "Product/dae/",
    "Extension": ".dae",
    "size": [509,791,1030]
  },
  "clode": "12",
  "Housekeeping": {
    "Test1": "Pass",
    "Test2": "Pass"
  }
},
"154": {
  "Tools": [],
  "Type": "Product",
  "Category": "Sanitaryware",
  "Genus": "Basin",
  "Label": "Basin",
  "backtrack": ["136"],
  "index": 0,
  "product": {
    "Product": "shared",
    "Size": "shared"
  },
  "Design": {
    "Product": "shared",
    "Size": "shared",
    "Rotation": [0,0,0],
    "Margin": [0,50,0,0],
    "Alignment": {
      "Align": "TB",
      "Datum": 720
    }
  },
  "shared": {
    "Product": "Basin",
    "Size": "510x428x357",
    "Source": "Product/dae/",
    "Extension": ".dae",
    "size": [510,428,357]
  },
  "clode": "13",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Fail"
  }
},
"155": {
  "Tools": [],
  "Type": "Product",
  "Category": "Furniture",
  "Genus": "Cabinet",
  "Label": "Bedside cabinet",
  "backtrack": ["137"],
  "index": 0,
  "product": {
    "Product": "shared",
    "Size": "shared"
  },
  "Design": {
    "Product": "shared",
    "Size": "shared"
  },
  "shared": {
    "Product": "Wendy nightstand",
    "Size": "400x367x558",
    "Source": "Product/dae/",
    "Extension": ".dae",
    "size": [400,367,558]
  },
  "clode": "14",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Pass"
  }
},
"156": {
  "Tools": [],
  "Type": "Product",
  "Category": "Furniture",
  "Genus": "Bed",
  "Label": "Queen bed",
  "backtrack": ["137"],
  "index": 1,
  "Bookings": {
    "Product": "shared"
  },
  "product": {
    "Product": "shared"
  },
  "Design": {
    "Product": "shared",
    "Size": "shared",
    "Margin": [50,50,0,0],
    "Alignment": {
      "Align": "TT",
      "Datum": 0
    }
  },
  "shared": {
    "Product": "Wendy bed slatted platform mono",
    "Product2": "Queen bed",
    "Size": "1776x2134x1016",
    "Source": "Product/dae/",
    "Extension": ".dae",
    "size": [1776,2134,1016]
  },
  "clode": "7",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Pass"
  }
},
"157": {
  "Tools": [],
  "Type": "Product",
  "Category": "Furniture",
  "Genus": "Cabinet",
  "Label": "Bedside cabinet",
  "backtrack": ["137"],
  "index": 2,
  "product": {
    "Product": "shared",
    "Size": "shared"
  },
  "Design": {
    "Product": "shared",
    "Size": "shared",
    "Alignment": {
      "Align": "TT",
      "Datum": 0
    }
  },
  "shared": {
    "Product": "Wendy nightstand",
    "Size": "400x367x558",
    "Source": "Product/dae/",
    "Extension": ".dae",
    "size": [400,367,558]
  },
  "clode": "15",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Pass"
  }
},
"158": {
  "Tools": [],
  "Type": "Product",
  "Category": "Sanitaryware",
  "Genus": "Bath",
  "Label": "Bath",
  "backtrack": ["138"],
  "index": 0,
  "product": {
    "Product": "shared",
    "Size": "shared"
  },
  "Design": {
    "Product": "shared",
    "Size": "shared",
    "Rotation": [0,270,0],
    "Alignment": {
      "Align": "TB",
      "Datum": 0
    }
  },
  "shared": {
    "Product": "Bath",
    "Size": "1524x737x368",
    "Source": "Product/dae/",
    "Extension": ".dae",
    "size": [1524,737,368]
  },
  "clode": "9",
  "Housekeeping": {
    "Test1": "Pass",
    "Test2": "Fail"
  }
},
"159": {
  "Tools": [],
  "Type": "Product",
  "Category": "Sanitaryware",
  "Genus": "WC",
  "Label": "WC",
  "backtrack": ["138"],
  "index": 0,
  "product": {
    "Product": "shared",
    "Size": "shared"
  },
  "Design": {
    "Product": "shared",
    "Size": "shared",
    "Rotation": [0,0,0],
    "Margin": [50,50,0,0],
    "Alignment": {
      "Align": "TB",
      "Datum": 0
    }
  },
  "shared": {
    "Product": "WC",
    "Size": "509x791x1030",
    "Source": "Product/dae/",
    "Extension": ".dae",
    "size": [509,791,1030]
  },
  "clode": "12",
  "Housekeeping": {
    "Test1": "Pass",
    "Test2": "Pass"
  }
},
"160": {
  "Tools": [],
  "Type": "Product",
  "Category": "Sanitaryware",
  "Genus": "Basin",
  "Label": "Basin",
  "backtrack": ["138"],
  "index": 0,
  "product": {
    "Product": "shared",
    "Size": "shared"
  },
  "Design": {
    "Product": "shared",
    "Size": "shared",
    "Rotation": [0,0,0],
    "Margin": [0,50,0,0],
    "Alignment": {
      "Align": "TB",
      "Datum": 720
    }
  },
  "shared": {
    "Product": "Basin",
    "Size": "510x428x357",
    "Source": "Product/dae/",
    "Extension": ".dae",
    "size": [510,428,357]
  },
  "clode": "13",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Fail"
  }
},
"161": {
  "Tools": [],
  "Type": "Product",
  "Category": "Furniture",
  "Genus": "Cabinet",
  "Label": "Bedside cabinet",
  "backtrack": ["139"],
  "index": 0,
  "product": {
    "Product": "shared",
    "Size": "shared"
  },
  "Design": {
    "Product": "shared",
    "Size": "shared"
  },
  "shared": {
    "Product": "Wendy nightstand",
    "Size": "400x367x558",
    "Source": "Product/dae/",
    "Extension": ".dae",
    "size": [400,367,558]
  },
  "clode": "14",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Pass"
  }
},
"162": {
  "Tools": [],
  "Type": "Product",
  "Category": "Furniture",
  "Genus": "Bed",
  "Label": "Queen bed",
  "backtrack": ["139"],
  "index": 1,
  "Bookings": {
    "Product": "shared"
  },
  "product": {
    "Product": "shared"
  },
  "Design": {
    "Product": "shared",
    "Size": "shared",
    "Margin": [50,50,0,0],
    "Alignment": {
      "Align": "TT",
      "Datum": 0
    }
  },
  "shared": {
    "Product": "Wendy bed slatted platform mono",
    "Product2": "Queen bed",
    "Size": "1776x2134x1016",
    "Source": "Product/dae/",
    "Extension": ".dae",
    "size": [1776,2134,1016]
  },
  "clode": "7",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Pass"
  }
},
"163": {
  "Tools": [],
  "Type": "Product",
  "Category": "Furniture",
  "Genus": "Cabinet",
  "Label": "Bedside cabinet",
  "backtrack": ["139"],
  "index": 2,
  "product": {
    "Product": "shared",
    "Size": "shared"
  },
  "Design": {
    "Product": "shared",
    "Size": "shared",
    "Alignment": {
      "Align": "TT",
      "Datum": 0
    }
  },
  "shared": {
    "Product": "Wendy nightstand",
    "Size": "400x367x558",
    "Source": "Product/dae/",
    "Extension": ".dae",
    "size": [400,367,558]
  },
  "clode": "15",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Pass"
  }
},
"164": {
  "Tools": [],
  "Type": "Product",
  "Category": "Sanitaryware",
  "Genus": "Bath",
  "Label": "Bath",
  "backtrack": ["140"],
  "index": 0,
  "product": {
    "Product": "shared",
    "Size": "shared"
  },
  "Design": {
    "Product": "shared",
    "Size": "shared",
    "Rotation": [0,270,0],
    "Alignment": {
      "Align": "TB",
      "Datum": 0
    }
  },
  "shared": {
    "Product": "Bath",
    "Size": "1524x737x368",
    "Source": "Product/dae/",
    "Extension": ".dae",
    "size": [1524,737,368]
  },
  "clode": "9",
  "Housekeeping": {
    "Test1": "Pass",
    "Test2": "Fail"
  }
},
"165": {
  "Tools": [],
  "Type": "Product",
  "Category": "Sanitaryware",
  "Genus": "WC",
  "Label": "WC",
  "backtrack": ["140"],
  "index": 0,
  "product": {
    "Product": "shared",
    "Size": "shared"
  },
  "Design": {
    "Product": "shared",
    "Size": "shared",
    "Rotation": [0,0,0],
    "Margin": [50,50,0,0],
    "Alignment": {
      "Align": "TB",
      "Datum": 0
    }
  },
  "shared": {
    "Product": "WC",
    "Size": "509x791x1030",
    "Source": "Product/dae/",
    "Extension": ".dae",
    "size": [509,791,1030]
  },
  "clode": "12",
  "Housekeeping": {
    "Test1": "Pass",
    "Test2": "Pass"
  }
},
"166": {
  "Tools": [],
  "Type": "Product",
  "Category": "Sanitaryware",
  "Genus": "Basin",
  "Label": "Basin",
  "backtrack": ["140"],
  "index": 0,
  "product": {
    "Product": "shared",
    "Size": "shared"
  },
  "Design": {
    "Product": "shared",
    "Size": "shared",
    "Rotation": [0,0,0],
    "Margin": [0,50,0,0],
    "Alignment": {
      "Align": "TB",
      "Datum": 720
    }
  },
  "shared": {
    "Product": "Basin",
    "Size": "510x428x357",
    "Source": "Product/dae/",
    "Extension": ".dae",
    "size": [510,428,357]
  },
  "clode": "13",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Fail"
  }
},
"167": {
  "Tools": [],
  "Type": "Product",
  "Category": "Furniture",
  "Genus": "Cabinet",
  "Label": "Bedside cabinet",
  "backtrack": ["141"],
  "index": 0,
  "product": {
    "Product": "shared",
    "Size": "shared"
  },
  "Design": {
    "Product": "shared",
    "Size": "shared"
  },
  "shared": {
    "Product": "Wendy nightstand",
    "Size": "400x367x558",
    "Source": "Product/dae/",
    "Extension": ".dae",
    "size": [400,367,558]
  },
  "clode": "14",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Pass"
  }
},
"168": {
  "Tools": [],
  "Type": "Product",
  "Category": "Furniture",
  "Genus": "Bed",
  "Label": "Queen bed",
  "backtrack": ["141"],
  "index": 1,
  "Bookings": {
    "Product": "shared"
  },
  "product": {
    "Product": "shared"
  },
  "Design": {
    "Product": "shared",
    "Size": "shared",
    "Margin": [50,50,0,0],
    "Alignment": {
      "Align": "TT",
      "Datum": 0
    }
  },
  "shared": {
    "Product": "Wendy bed slatted platform mono",
    "Product2": "Queen bed",
    "Size": "1776x2134x1016",
    "Source": "Product/dae/",
    "Extension": ".dae",
    "size": [1776,2134,1016]
  },
  "clode": "7",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Pass"
  }
},
"169": {
  "Tools": [],
  "Type": "Product",
  "Category": "Furniture",
  "Genus": "Cabinet",
  "Label": "Bedside cabinet",
  "backtrack": ["141"],
  "index": 2,
  "product": {
    "Product": "shared",
    "Size": "shared"
  },
  "Design": {
    "Product": "shared",
    "Size": "shared",
    "Alignment": {
      "Align": "TT",
      "Datum": 0
    }
  },
  "shared": {
    "Product": "Wendy nightstand",
    "Size": "400x367x558",
    "Source": "Product/dae/",
    "Extension": ".dae",
    "size": [400,367,558]
  },
  "clode": "15",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Pass"
  }
},
"170": {
  "Tools": [],
  "Type": "Product",
  "Category": "Sanitaryware",
  "Genus": "Bath",
  "Label": "Bath",
  "backtrack": ["142"],
  "index": 0,
  "product": {
    "Product": "shared",
    "Size": "shared"
  },
  "Design": {
    "Product": "shared",
    "Size": "shared",
    "Rotation": [0,270,0],
    "Alignment": {
      "Align": "TB",
      "Datum": 0
    }
  },
  "shared": {
    "Product": "Bath",
    "Size": "1524x737x368",
    "Source": "Product/dae/",
    "Extension": ".dae",
    "size": [1524,737,368]
  },
  "clode": "9",
  "Housekeeping": {
    "Test1": "Pass",
    "Test2": "Fail"
  }
},
"171": {
  "Tools": [],
  "Type": "Product",
  "Category": "Sanitaryware",
  "Genus": "WC",
  "Label": "WC",
  "backtrack": ["142"],
  "index": 0,
  "product": {
    "Product": "shared",
    "Size": "shared"
  },
  "Design": {
    "Product": "shared",
    "Size": "shared",
    "Rotation": [0,0,0],
    "Margin": [50,50,0,0],
    "Alignment": {
      "Align": "TB",
      "Datum": 0
    }
  },
  "shared": {
    "Product": "WC",
    "Size": "509x791x1030",
    "Source": "Product/dae/",
    "Extension": ".dae",
    "size": [509,791,1030]
  },
  "clode": "12",
  "Housekeeping": {
    "Test1": "Pass",
    "Test2": "Pass"
  }
},
"172": {
  "Tools": [],
  "Type": "Product",
  "Category": "Sanitaryware",
  "Genus": "Basin",
  "Label": "Basin",
  "backtrack": ["142"],
  "index": 0,
  "product": {
    "Product": "shared",
    "Size": "shared"
  },
  "Design": {
    "Product": "shared",
    "Size": "shared",
    "Rotation": [0,0,0],
    "Margin": [0,50,0,0],
    "Alignment": {
      "Align": "TB",
      "Datum": 720
    }
  },
  "shared": {
    "Product": "Basin",
    "Size": "510x428x357",
    "Source": "Product/dae/",
    "Extension": ".dae",
    "size": [510,428,357]
  },
  "clode": "13",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Fail"
  }
},
"173": {
  "Tools": [],
  "Type": "Assembly",
  "Genus": "Floor",
  "Label": "Floor",
  "Suffix": 4,
  "backtrack": ["10"],
  "link": ["174","175","176","177","178"],
  "index": 0,
  "shared": {
    "Level": 1,
    "Size": [4900,3633,2070]
  },
  "Bookings": {
    "Level": "shared",
    "Access": "Lift"
  },
  "Design": {
    "Size": "shared"
  },
  "clode": "1",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Pass"
  }
},
"174": {
  "Tools": [],
  "Type": "Assembly",
  "Genus": "Space",
  "Label": "Guestroom",
  "Suffix": "1",
  "backtrack": ["173"],
  "link": ["179","180"],
  "index": 0,
  "Bookings": {
    "Vacant": "Dates",
    "Repair": "Dates"
  },
  "Design": {
    "Size": "shared"
  },
  "shared": {
    "Size": [4700,3433,2070]
  },
  "clode": "2",
  "Housekeeping": {
    "Test1": "Pass",
    "Test2": "Fail"
  }
},
"175": {
  "Tools": [],
  "Type": "Assembly",
  "Genus": "Space",
  "Label": "Guestroom",
  "Suffix": 2,
  "backtrack": ["173"],
  "link": ["181","182"],
  "index": 0,
  "Bookings": {
    "Vacant": "Dates",
    "Repair": "Dates"
  },
  "Design": {
    "Size": "shared"
  },
  "shared": {
    "Size": [4700,3433,2070]
  },
  "clode": "2",
  "Housekeeping": {
    "Test1": "Pass",
    "Test2": "Fail"
  }
},
"176": {
  "Tools": [],
  "Type": "Assembly",
  "Genus": "Space",
  "Label": "Guestroom",
  "Suffix": 3,
  "backtrack": ["173"],
  "link": ["183","184"],
  "index": 0,
  "Bookings": {
    "Vacant": "Dates",
    "Repair": "Dates"
  },
  "Design": {
    "Size": "shared"
  },
  "shared": {
    "Size": [4700,3433,2070]
  },
  "clode": "2",
  "Housekeeping": {
    "Test1": "Pass",
    "Test2": "Fail"
  }
},
"177": {
  "Tools": [],
  "Type": "Assembly",
  "Genus": "Space",
  "Label": "Guestroom",
  "Suffix": 4,
  "backtrack": ["173"],
  "link": ["185","186"],
  "index": 0,
  "Bookings": {
    "Vacant": "Dates",
    "Repair": "Dates"
  },
  "Design": {
    "Size": "shared"
  },
  "shared": {
    "Size": [4700,3433,2070]
  },
  "clode": "2",
  "Housekeeping": {
    "Test1": "Pass",
    "Test2": "Fail"
  }
},
"178": {
  "Tools": [],
  "Type": "Assembly",
  "Genus": "Space",
  "Label": "Guestroom",
  "Suffix": 5,
  "backtrack": ["173"],
  "link": ["187","188"],
  "index": 0,
  "Bookings": {
    "Vacant": "Dates",
    "Repair": "Dates"
  },
  "Design": {
    "Size": "shared"
  },
  "shared": {
    "Size": [4700,3433,2070]
  },
  "clode": "2",
  "Housekeeping": {
    "Test1": "Pass",
    "Test2": "Fail"
  }
},
"179": {
  "Tools": [],
  "Type": "Assembly",
  "Genus": "Interiors",
  "Label": "Bedroom",
  "backtrack": ["174"],
  "link": ["189"],
  "index": 0,
  "Bookings": {
    "View": "Town",
    "Beds": "Two"
  },
  "Design": {
    "Size": "shared",
    "Alignment": {
      "Align": "TT",
      "Datum": 0
    }
  },
  "shared": {
    "Size": [2976,3433,1016]
  },
  "clode": "3",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Pass"
  }
},
"180": {
  "Tools": [],
  "Type": "Assembly",
  "Genus": "Interiors",
  "Label": "Bathroom",
  "backtrack": ["174"],
  "link": ["190"],
  "index": 0,
  "Bookings": {
    "Shared": "No"
  },
  "Design": {
    "Size": "shared",
    "Rotation": [0,270,0],
    "Alignment": {
      "Align": "TT",
      "Datum": 0
    },
    "Divider": ["East"]
  },
  "shared": {},
  "clode": "4",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Fail"
  }
},
"181": {
  "Tools": [],
  "Type": "Assembly",
  "Genus": "Interiors",
  "Label": "Bedroom",
  "backtrack": ["175"],
  "link": ["191"],
  "index": 0,
  "Bookings": {
    "View": "Town",
    "Beds": "Two"
  },
  "Design": {
    "Size": "shared",
    "Alignment": {
      "Align": "TT",
      "Datum": 0
    }
  },
  "shared": {
    "Size": [2976,3433,1016]
  },
  "clode": "3",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Pass"
  }
},
"182": {
  "Tools": [],
  "Type": "Assembly",
  "Genus": "Interiors",
  "Label": "Bathroom",
  "backtrack": ["175"],
  "link": ["192"],
  "index": 0,
  "Bookings": {
    "Shared": "No"
  },
  "Design": {
    "Size": "shared",
    "Rotation": [0,270,0],
    "Alignment": {
      "Align": "TT",
      "Datum": 0
    },
    "Divider": ["East"]
  },
  "shared": {},
  "clode": "4",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Fail"
  }
},
"183": {
  "Tools": [],
  "Type": "Assembly",
  "Genus": "Interiors",
  "Label": "Bedroom",
  "backtrack": ["176"],
  "link": ["193"],
  "index": 0,
  "Bookings": {
    "View": "Town",
    "Beds": "Two"
  },
  "Design": {
    "Size": "shared",
    "Alignment": {
      "Align": "TT",
      "Datum": 0
    }
  },
  "shared": {
    "Size": [2976,3433,1016]
  },
  "clode": "3",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Pass"
  }
},
"184": {
  "Tools": [],
  "Type": "Assembly",
  "Genus": "Interiors",
  "Label": "Bathroom",
  "backtrack": ["176"],
  "link": ["194"],
  "index": 0,
  "Bookings": {
    "Shared": "No"
  },
  "Design": {
    "Size": "shared",
    "Rotation": [0,270,0],
    "Alignment": {
      "Align": "TT",
      "Datum": 0
    },
    "Divider": ["East"]
  },
  "shared": {},
  "clode": "4",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Fail"
  }
},
"185": {
  "Tools": [],
  "Type": "Assembly",
  "Genus": "Interiors",
  "Label": "Bedroom",
  "backtrack": ["177"],
  "link": ["195"],
  "index": 0,
  "Bookings": {
    "View": "Town",
    "Beds": "Two"
  },
  "Design": {
    "Size": "shared",
    "Alignment": {
      "Align": "TT",
      "Datum": 0
    }
  },
  "shared": {
    "Size": [2976,3433,1016]
  },
  "clode": "3",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Pass"
  }
},
"186": {
  "Tools": [],
  "Type": "Assembly",
  "Genus": "Interiors",
  "Label": "Bathroom",
  "backtrack": ["177"],
  "link": ["196"],
  "index": 0,
  "Bookings": {
    "Shared": "No"
  },
  "Design": {
    "Size": "shared",
    "Rotation": [0,270,0],
    "Alignment": {
      "Align": "TT",
      "Datum": 0
    },
    "Divider": ["East"]
  },
  "shared": {},
  "clode": "4",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Fail"
  }
},
"187": {
  "Tools": [],
  "Type": "Assembly",
  "Genus": "Interiors",
  "Label": "Bedroom",
  "backtrack": ["178"],
  "link": ["197"],
  "index": 0,
  "Bookings": {
    "View": "Town",
    "Beds": "Two"
  },
  "Design": {
    "Size": "shared",
    "Alignment": {
      "Align": "TT",
      "Datum": 0
    }
  },
  "shared": {
    "Size": [2976,3433,1016]
  },
  "clode": "3",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Pass"
  }
},
"188": {
  "Tools": [],
  "Type": "Assembly",
  "Genus": "Interiors",
  "Label": "Bathroom",
  "backtrack": ["178"],
  "link": ["198"],
  "index": 0,
  "Bookings": {
    "Shared": "No"
  },
  "Design": {
    "Size": "shared",
    "Rotation": [0,270,0],
    "Alignment": {
      "Align": "TT",
      "Datum": 0
    },
    "Divider": ["East"]
  },
  "shared": {},
  "clode": "4",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Fail"
  }
},
"189": {
  "Tools": [],
  "Type": "Cluster",
  "Genus": "Bedset",
  "Label": "Bedset",
  "Container": "3",
  "backtrack": ["179"],
  "link": ["199","200","201"],
  "index": 0,
  "Design": {
    "Size": "shared",
    "Footprint": {
      "Dims": [600,600,0,600],
      "Focus": "7"
    }
  },
  "shared": {
    "Size": [2676,2184,1016]
  },
  "clode": "5",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Pass"
  }
},
"190": {
  "Tools": [],
  "Type": "Cluster",
  "Genus": "Sanitaryware",
  "Label": "Sanitaryware",
  "Container": "4",
  "backtrack": ["180"],
  "link": ["202","203","204"],
  "index": 2,
  "Design": {
    "Size": "shared"
  },
  "shared": {
    "Size": [1906,1524,1030]
  },
  "clode": "8",
  "Housekeeping": {
    "Test1": "Pass",
    "Test2": "Fail"
  }
},
"191": {
  "Tools": [],
  "Type": "Cluster",
  "Genus": "Bedset",
  "Label": "Bedset",
  "Container": "3",
  "backtrack": ["181"],
  "link": ["205","206","207"],
  "index": 0,
  "Design": {
    "Size": "shared",
    "Footprint": {
      "Dims": [600,600,0,600],
      "Focus": "7"
    }
  },
  "shared": {
    "Size": [2676,2184,1016]
  },
  "clode": "5",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Pass"
  }
},
"192": {
  "Tools": [],
  "Type": "Cluster",
  "Genus": "Sanitaryware",
  "Label": "Sanitaryware",
  "Container": "4",
  "backtrack": ["182"],
  "link": ["208","209","210"],
  "index": 2,
  "Design": {
    "Size": "shared"
  },
  "shared": {
    "Size": [1906,1524,1030]
  },
  "clode": "8",
  "Housekeeping": {
    "Test1": "Pass",
    "Test2": "Fail"
  }
},
"193": {
  "Tools": [],
  "Type": "Cluster",
  "Genus": "Bedset",
  "Label": "Bedset",
  "Container": "3",
  "backtrack": ["183"],
  "link": ["211","212","213"],
  "index": 0,
  "Design": {
    "Size": "shared",
    "Footprint": {
      "Dims": [600,600,0,600],
      "Focus": "7"
    }
  },
  "shared": {
    "Size": [2676,2184,1016]
  },
  "clode": "5",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Pass"
  }
},
"194": {
  "Tools": [],
  "Type": "Cluster",
  "Genus": "Sanitaryware",
  "Label": "Sanitaryware",
  "Container": "4",
  "backtrack": ["184"],
  "link": ["214","215","216"],
  "index": 2,
  "Design": {
    "Size": "shared"
  },
  "shared": {
    "Size": [1906,1524,1030]
  },
  "clode": "8",
  "Housekeeping": {
    "Test1": "Pass",
    "Test2": "Fail"
  }
},
"195": {
  "Tools": [],
  "Type": "Cluster",
  "Genus": "Bedset",
  "Label": "Bedset",
  "Container": "3",
  "backtrack": ["185"],
  "link": ["217","218","219"],
  "index": 0,
  "Design": {
    "Size": "shared",
    "Footprint": {
      "Dims": [600,600,0,600],
      "Focus": "7"
    }
  },
  "shared": {
    "Size": [2676,2184,1016]
  },
  "clode": "5",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Pass"
  }
},
"196": {
  "Tools": [],
  "Type": "Cluster",
  "Genus": "Sanitaryware",
  "Label": "Sanitaryware",
  "Container": "4",
  "backtrack": ["186"],
  "link": ["220","221","222"],
  "index": 2,
  "Design": {
    "Size": "shared"
  },
  "shared": {
    "Size": [1906,1524,1030]
  },
  "clode": "8",
  "Housekeeping": {
    "Test1": "Pass",
    "Test2": "Fail"
  }
},
"197": {
  "Tools": [],
  "Type": "Cluster",
  "Genus": "Bedset",
  "Label": "Bedset",
  "Container": "3",
  "backtrack": ["187"],
  "link": ["223","224","225"],
  "index": 0,
  "Design": {
    "Size": "shared",
    "Footprint": {
      "Dims": [600,600,0,600],
      "Focus": "7"
    }
  },
  "shared": {
    "Size": [2676,2184,1016]
  },
  "clode": "5",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Pass"
  }
},
"198": {
  "Tools": [],
  "Type": "Cluster",
  "Genus": "Sanitaryware",
  "Label": "Sanitaryware",
  "Container": "4",
  "backtrack": ["188"],
  "link": ["226","227","228"],
  "index": 2,
  "Design": {
    "Size": "shared"
  },
  "shared": {
    "Size": [1906,1524,1030]
  },
  "clode": "8",
  "Housekeeping": {
    "Test1": "Pass",
    "Test2": "Fail"
  }
},
"199": {
  "Tools": [],
  "Type": "Product",
  "Category": "Furniture",
  "Genus": "Cabinet",
  "Label": "Bedside cabinet",
  "backtrack": ["189"],
  "index": 0,
  "product": {
    "Product": "shared",
    "Size": "shared"
  },
  "Design": {
    "Product": "shared",
    "Size": "shared"
  },
  "shared": {
    "Product": "Wendy nightstand",
    "Size": "400x367x558",
    "Source": "Product/dae/",
    "Extension": ".dae",
    "size": [400,367,558]
  },
  "clode": "14",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Pass"
  }
},
"200": {
  "Tools": [],
  "Type": "Product",
  "Category": "Furniture",
  "Genus": "Bed",
  "Label": "Queen bed",
  "backtrack": ["189"],
  "index": 1,
  "Bookings": {
    "Product": "shared"
  },
  "product": {
    "Product": "shared"
  },
  "Design": {
    "Product": "shared",
    "Size": "shared",
    "Margin": [50,50,0,0],
    "Alignment": {
      "Align": "TT",
      "Datum": 0
    }
  },
  "shared": {
    "Product": "Wendy bed slatted platform mono",
    "Product2": "Queen bed",
    "Size": "1776x2134x1016",
    "Source": "Product/dae/",
    "Extension": ".dae",
    "size": [1776,2134,1016]
  },
  "clode": "7",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Pass"
  }
},
"201": {
  "Tools": [],
  "Type": "Product",
  "Category": "Furniture",
  "Genus": "Cabinet",
  "Label": "Bedside cabinet",
  "backtrack": ["189"],
  "index": 2,
  "product": {
    "Product": "shared",
    "Size": "shared"
  },
  "Design": {
    "Product": "shared",
    "Size": "shared",
    "Alignment": {
      "Align": "TT",
      "Datum": 0
    }
  },
  "shared": {
    "Product": "Wendy nightstand",
    "Size": "400x367x558",
    "Source": "Product/dae/",
    "Extension": ".dae",
    "size": [400,367,558]
  },
  "clode": "15",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Pass"
  }
},
"202": {
  "Tools": [],
  "Type": "Product",
  "Category": "Sanitaryware",
  "Genus": "Bath",
  "Label": "Bath",
  "backtrack": ["190"],
  "index": 0,
  "product": {
    "Product": "shared",
    "Size": "shared"
  },
  "Design": {
    "Product": "shared",
    "Size": "shared",
    "Rotation": [0,270,0],
    "Alignment": {
      "Align": "TB",
      "Datum": 0
    }
  },
  "shared": {
    "Product": "Bath",
    "Size": "1524x737x368",
    "Source": "Product/dae/",
    "Extension": ".dae",
    "size": [1524,737,368]
  },
  "clode": "9",
  "Housekeeping": {
    "Test1": "Pass",
    "Test2": "Fail"
  }
},
"203": {
  "Tools": [],
  "Type": "Product",
  "Category": "Sanitaryware",
  "Genus": "WC",
  "Label": "WC",
  "backtrack": ["190"],
  "index": 0,
  "product": {
    "Product": "shared",
    "Size": "shared"
  },
  "Design": {
    "Product": "shared",
    "Size": "shared",
    "Rotation": [0,0,0],
    "Margin": [50,50,0,0],
    "Alignment": {
      "Align": "TB",
      "Datum": 0
    }
  },
  "shared": {
    "Product": "WC",
    "Size": "509x791x1030",
    "Source": "Product/dae/",
    "Extension": ".dae",
    "size": [509,791,1030]
  },
  "clode": "12",
  "Housekeeping": {
    "Test1": "Pass",
    "Test2": "Pass"
  }
},
"204": {
  "Tools": [],
  "Type": "Product",
  "Category": "Sanitaryware",
  "Genus": "Basin",
  "Label": "Basin",
  "backtrack": ["190"],
  "index": 0,
  "product": {
    "Product": "shared",
    "Size": "shared"
  },
  "Design": {
    "Product": "shared",
    "Size": "shared",
    "Rotation": [0,0,0],
    "Margin": [0,50,0,0],
    "Alignment": {
      "Align": "TB",
      "Datum": 720
    }
  },
  "shared": {
    "Product": "Basin",
    "Size": "510x428x357",
    "Source": "Product/dae/",
    "Extension": ".dae",
    "size": [510,428,357]
  },
  "clode": "13",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Fail"
  }
},
"205": {
  "Tools": [],
  "Type": "Product",
  "Category": "Furniture",
  "Genus": "Cabinet",
  "Label": "Bedside cabinet",
  "backtrack": ["191"],
  "index": 0,
  "product": {
    "Product": "shared",
    "Size": "shared"
  },
  "Design": {
    "Product": "shared",
    "Size": "shared"
  },
  "shared": {
    "Product": "Wendy nightstand",
    "Size": "400x367x558",
    "Source": "Product/dae/",
    "Extension": ".dae",
    "size": [400,367,558]
  },
  "clode": "14",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Pass"
  }
},
"206": {
  "Tools": [],
  "Type": "Product",
  "Category": "Furniture",
  "Genus": "Bed",
  "Label": "Queen bed",
  "backtrack": ["191"],
  "index": 1,
  "Bookings": {
    "Product": "shared"
  },
  "product": {
    "Product": "shared"
  },
  "Design": {
    "Product": "shared",
    "Size": "shared",
    "Margin": [50,50,0,0],
    "Alignment": {
      "Align": "TT",
      "Datum": 0
    }
  },
  "shared": {
    "Product": "Wendy bed slatted platform mono",
    "Product2": "Queen bed",
    "Size": "1776x2134x1016",
    "Source": "Product/dae/",
    "Extension": ".dae",
    "size": [1776,2134,1016]
  },
  "clode": "7",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Pass"
  }
},
"207": {
  "Tools": [],
  "Type": "Product",
  "Category": "Furniture",
  "Genus": "Cabinet",
  "Label": "Bedside cabinet",
  "backtrack": ["191"],
  "index": 2,
  "product": {
    "Product": "shared",
    "Size": "shared"
  },
  "Design": {
    "Product": "shared",
    "Size": "shared",
    "Alignment": {
      "Align": "TT",
      "Datum": 0
    }
  },
  "shared": {
    "Product": "Wendy nightstand",
    "Size": "400x367x558",
    "Source": "Product/dae/",
    "Extension": ".dae",
    "size": [400,367,558]
  },
  "clode": "15",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Pass"
  }
},
"208": {
  "Tools": [],
  "Type": "Product",
  "Category": "Sanitaryware",
  "Genus": "Bath",
  "Label": "Bath",
  "backtrack": ["192"],
  "index": 0,
  "product": {
    "Product": "shared",
    "Size": "shared"
  },
  "Design": {
    "Product": "shared",
    "Size": "shared",
    "Rotation": [0,270,0],
    "Alignment": {
      "Align": "TB",
      "Datum": 0
    }
  },
  "shared": {
    "Product": "Bath",
    "Size": "1524x737x368",
    "Source": "Product/dae/",
    "Extension": ".dae",
    "size": [1524,737,368]
  },
  "clode": "9",
  "Housekeeping": {
    "Test1": "Pass",
    "Test2": "Fail"
  }
},
"209": {
  "Tools": [],
  "Type": "Product",
  "Category": "Sanitaryware",
  "Genus": "WC",
  "Label": "WC",
  "backtrack": ["192"],
  "index": 0,
  "product": {
    "Product": "shared",
    "Size": "shared"
  },
  "Design": {
    "Product": "shared",
    "Size": "shared",
    "Rotation": [0,0,0],
    "Margin": [50,50,0,0],
    "Alignment": {
      "Align": "TB",
      "Datum": 0
    }
  },
  "shared": {
    "Product": "WC",
    "Size": "509x791x1030",
    "Source": "Product/dae/",
    "Extension": ".dae",
    "size": [509,791,1030]
  },
  "clode": "12",
  "Housekeeping": {
    "Test1": "Pass",
    "Test2": "Pass"
  }
},
"210": {
  "Tools": [],
  "Type": "Product",
  "Category": "Sanitaryware",
  "Genus": "Basin",
  "Label": "Basin",
  "backtrack": ["192"],
  "index": 0,
  "product": {
    "Product": "shared",
    "Size": "shared"
  },
  "Design": {
    "Product": "shared",
    "Size": "shared",
    "Rotation": [0,0,0],
    "Margin": [0,50,0,0],
    "Alignment": {
      "Align": "TB",
      "Datum": 720
    }
  },
  "shared": {
    "Product": "Basin",
    "Size": "510x428x357",
    "Source": "Product/dae/",
    "Extension": ".dae",
    "size": [510,428,357]
  },
  "clode": "13",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Fail"
  }
},
"211": {
  "Tools": [],
  "Type": "Product",
  "Category": "Furniture",
  "Genus": "Cabinet",
  "Label": "Bedside cabinet",
  "backtrack": ["193"],
  "index": 0,
  "product": {
    "Product": "shared",
    "Size": "shared"
  },
  "Design": {
    "Product": "shared",
    "Size": "shared"
  },
  "shared": {
    "Product": "Wendy nightstand",
    "Size": "400x367x558",
    "Source": "Product/dae/",
    "Extension": ".dae",
    "size": [400,367,558]
  },
  "clode": "14",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Pass"
  }
},
"212": {
  "Tools": [],
  "Type": "Product",
  "Category": "Furniture",
  "Genus": "Bed",
  "Label": "Queen bed",
  "backtrack": ["193"],
  "index": 1,
  "Bookings": {
    "Product": "shared"
  },
  "product": {
    "Product": "shared"
  },
  "Design": {
    "Product": "shared",
    "Size": "shared",
    "Margin": [50,50,0,0],
    "Alignment": {
      "Align": "TT",
      "Datum": 0
    }
  },
  "shared": {
    "Product": "Wendy bed slatted platform mono",
    "Product2": "Queen bed",
    "Size": "1776x2134x1016",
    "Source": "Product/dae/",
    "Extension": ".dae",
    "size": [1776,2134,1016]
  },
  "clode": "7",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Pass"
  }
},
"213": {
  "Tools": [],
  "Type": "Product",
  "Category": "Furniture",
  "Genus": "Cabinet",
  "Label": "Bedside cabinet",
  "backtrack": ["193"],
  "index": 2,
  "product": {
    "Product": "shared",
    "Size": "shared"
  },
  "Design": {
    "Product": "shared",
    "Size": "shared",
    "Alignment": {
      "Align": "TT",
      "Datum": 0
    }
  },
  "shared": {
    "Product": "Wendy nightstand",
    "Size": "400x367x558",
    "Source": "Product/dae/",
    "Extension": ".dae",
    "size": [400,367,558]
  },
  "clode": "15",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Pass"
  }
},
"214": {
  "Tools": [],
  "Type": "Product",
  "Category": "Sanitaryware",
  "Genus": "Bath",
  "Label": "Bath",
  "backtrack": ["194"],
  "index": 0,
  "product": {
    "Product": "shared",
    "Size": "shared"
  },
  "Design": {
    "Product": "shared",
    "Size": "shared",
    "Rotation": [0,270,0],
    "Alignment": {
      "Align": "TB",
      "Datum": 0
    }
  },
  "shared": {
    "Product": "Bath",
    "Size": "1524x737x368",
    "Source": "Product/dae/",
    "Extension": ".dae",
    "size": [1524,737,368]
  },
  "clode": "9",
  "Housekeeping": {
    "Test1": "Pass",
    "Test2": "Fail"
  }
},
"215": {
  "Tools": [],
  "Type": "Product",
  "Category": "Sanitaryware",
  "Genus": "WC",
  "Label": "WC",
  "backtrack": ["194"],
  "index": 0,
  "product": {
    "Product": "shared",
    "Size": "shared"
  },
  "Design": {
    "Product": "shared",
    "Size": "shared",
    "Rotation": [0,0,0],
    "Margin": [50,50,0,0],
    "Alignment": {
      "Align": "TB",
      "Datum": 0
    }
  },
  "shared": {
    "Product": "WC",
    "Size": "509x791x1030",
    "Source": "Product/dae/",
    "Extension": ".dae",
    "size": [509,791,1030]
  },
  "clode": "12",
  "Housekeeping": {
    "Test1": "Pass",
    "Test2": "Pass"
  }
},
"216": {
  "Tools": [],
  "Type": "Product",
  "Category": "Sanitaryware",
  "Genus": "Basin",
  "Label": "Basin",
  "backtrack": ["194"],
  "index": 0,
  "product": {
    "Product": "shared",
    "Size": "shared"
  },
  "Design": {
    "Product": "shared",
    "Size": "shared",
    "Rotation": [0,0,0],
    "Margin": [0,50,0,0],
    "Alignment": {
      "Align": "TB",
      "Datum": 720
    }
  },
  "shared": {
    "Product": "Basin",
    "Size": "510x428x357",
    "Source": "Product/dae/",
    "Extension": ".dae",
    "size": [510,428,357]
  },
  "clode": "13",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Fail"
  }
},
"217": {
  "Tools": [],
  "Type": "Product",
  "Category": "Furniture",
  "Genus": "Cabinet",
  "Label": "Bedside cabinet",
  "backtrack": ["195"],
  "index": 0,
  "product": {
    "Product": "shared",
    "Size": "shared"
  },
  "Design": {
    "Product": "shared",
    "Size": "shared"
  },
  "shared": {
    "Product": "Wendy nightstand",
    "Size": "400x367x558",
    "Source": "Product/dae/",
    "Extension": ".dae",
    "size": [400,367,558]
  },
  "clode": "14",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Pass"
  }
},
"218": {
  "Tools": [],
  "Type": "Product",
  "Category": "Furniture",
  "Genus": "Bed",
  "Label": "Queen bed",
  "backtrack": ["195"],
  "index": 1,
  "Bookings": {
    "Product": "shared"
  },
  "product": {
    "Product": "shared"
  },
  "Design": {
    "Product": "shared",
    "Size": "shared",
    "Margin": [50,50,0,0],
    "Alignment": {
      "Align": "TT",
      "Datum": 0
    }
  },
  "shared": {
    "Product": "Wendy bed slatted platform mono",
    "Product2": "Queen bed",
    "Size": "1776x2134x1016",
    "Source": "Product/dae/",
    "Extension": ".dae",
    "size": [1776,2134,1016]
  },
  "clode": "7",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Pass"
  }
},
"219": {
  "Tools": [],
  "Type": "Product",
  "Category": "Furniture",
  "Genus": "Cabinet",
  "Label": "Bedside cabinet",
  "backtrack": ["195"],
  "index": 2,
  "product": {
    "Product": "shared",
    "Size": "shared"
  },
  "Design": {
    "Product": "shared",
    "Size": "shared",
    "Alignment": {
      "Align": "TT",
      "Datum": 0
    }
  },
  "shared": {
    "Product": "Wendy nightstand",
    "Size": "400x367x558",
    "Source": "Product/dae/",
    "Extension": ".dae",
    "size": [400,367,558]
  },
  "clode": "15",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Pass"
  }
},
"220": {
  "Tools": [],
  "Type": "Product",
  "Category": "Sanitaryware",
  "Genus": "Bath",
  "Label": "Bath",
  "backtrack": ["196"],
  "index": 0,
  "product": {
    "Product": "shared",
    "Size": "shared"
  },
  "Design": {
    "Product": "shared",
    "Size": "shared",
    "Rotation": [0,270,0],
    "Alignment": {
      "Align": "TB",
      "Datum": 0
    }
  },
  "shared": {
    "Product": "Bath",
    "Size": "1524x737x368",
    "Source": "Product/dae/",
    "Extension": ".dae",
    "size": [1524,737,368]
  },
  "clode": "9",
  "Housekeeping": {
    "Test1": "Pass",
    "Test2": "Fail"
  }
},
"221": {
  "Tools": [],
  "Type": "Product",
  "Category": "Sanitaryware",
  "Genus": "WC",
  "Label": "WC",
  "backtrack": ["196"],
  "index": 0,
  "product": {
    "Product": "shared",
    "Size": "shared"
  },
  "Design": {
    "Product": "shared",
    "Size": "shared",
    "Rotation": [0,0,0],
    "Margin": [50,50,0,0],
    "Alignment": {
      "Align": "TB",
      "Datum": 0
    }
  },
  "shared": {
    "Product": "WC",
    "Size": "509x791x1030",
    "Source": "Product/dae/",
    "Extension": ".dae",
    "size": [509,791,1030]
  },
  "clode": "12",
  "Housekeeping": {
    "Test1": "Pass",
    "Test2": "Pass"
  }
},
"222": {
  "Tools": [],
  "Type": "Product",
  "Category": "Sanitaryware",
  "Genus": "Basin",
  "Label": "Basin",
  "backtrack": ["196"],
  "index": 0,
  "product": {
    "Product": "shared",
    "Size": "shared"
  },
  "Design": {
    "Product": "shared",
    "Size": "shared",
    "Rotation": [0,0,0],
    "Margin": [0,50,0,0],
    "Alignment": {
      "Align": "TB",
      "Datum": 720
    }
  },
  "shared": {
    "Product": "Basin",
    "Size": "510x428x357",
    "Source": "Product/dae/",
    "Extension": ".dae",
    "size": [510,428,357]
  },
  "clode": "13",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Fail"
  }
},
"223": {
  "Tools": [],
  "Type": "Product",
  "Category": "Furniture",
  "Genus": "Cabinet",
  "Label": "Bedside cabinet",
  "backtrack": ["197"],
  "index": 0,
  "product": {
    "Product": "shared",
    "Size": "shared"
  },
  "Design": {
    "Product": "shared",
    "Size": "shared"
  },
  "shared": {
    "Product": "Wendy nightstand",
    "Size": "400x367x558",
    "Source": "Product/dae/",
    "Extension": ".dae",
    "size": [400,367,558]
  },
  "clode": "14",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Pass"
  }
},
"224": {
  "Tools": [],
  "Type": "Product",
  "Category": "Furniture",
  "Genus": "Bed",
  "Label": "Queen bed",
  "backtrack": ["197"],
  "index": 1,
  "Bookings": {
    "Product": "shared"
  },
  "product": {
    "Product": "shared"
  },
  "Design": {
    "Product": "shared",
    "Size": "shared",
    "Margin": [50,50,0,0],
    "Alignment": {
      "Align": "TT",
      "Datum": 0
    }
  },
  "shared": {
    "Product": "Wendy bed slatted platform mono",
    "Product2": "Queen bed",
    "Size": "1776x2134x1016",
    "Source": "Product/dae/",
    "Extension": ".dae",
    "size": [1776,2134,1016]
  },
  "clode": "7",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Pass"
  }
},
"225": {
  "Tools": [],
  "Type": "Product",
  "Category": "Furniture",
  "Genus": "Cabinet",
  "Label": "Bedside cabinet",
  "backtrack": ["197"],
  "index": 2,
  "product": {
    "Product": "shared",
    "Size": "shared"
  },
  "Design": {
    "Product": "shared",
    "Size": "shared",
    "Alignment": {
      "Align": "TT",
      "Datum": 0
    }
  },
  "shared": {
    "Product": "Wendy nightstand",
    "Size": "400x367x558",
    "Source": "Product/dae/",
    "Extension": ".dae",
    "size": [400,367,558]
  },
  "clode": "15",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Pass"
  }
},
"226": {
  "Tools": [],
  "Type": "Product",
  "Category": "Sanitaryware",
  "Genus": "Bath",
  "Label": "Bath",
  "backtrack": ["198"],
  "index": 0,
  "product": {
    "Product": "shared",
    "Size": "shared"
  },
  "Design": {
    "Product": "shared",
    "Size": "shared",
    "Rotation": [0,270,0],
    "Alignment": {
      "Align": "TB",
      "Datum": 0
    }
  },
  "shared": {
    "Product": "Bath",
    "Size": "1524x737x368",
    "Source": "Product/dae/",
    "Extension": ".dae",
    "size": [1524,737,368]
  },
  "clode": "9",
  "Housekeeping": {
    "Test1": "Pass",
    "Test2": "Fail"
  }
},
"227": {
  "Tools": [],
  "Type": "Product",
  "Category": "Sanitaryware",
  "Genus": "WC",
  "Label": "WC",
  "backtrack": ["198"],
  "index": 0,
  "product": {
    "Product": "shared",
    "Size": "shared"
  },
  "Design": {
    "Product": "shared",
    "Size": "shared",
    "Rotation": [0,0,0],
    "Margin": [50,50,0,0],
    "Alignment": {
      "Align": "TB",
      "Datum": 0
    }
  },
  "shared": {
    "Product": "WC",
    "Size": "509x791x1030",
    "Source": "Product/dae/",
    "Extension": ".dae",
    "size": [509,791,1030]
  },
  "clode": "12",
  "Housekeeping": {
    "Test1": "Pass",
    "Test2": "Pass"
  }
},
"228": {
  "Tools": [],
  "Type": "Product",
  "Category": "Sanitaryware",
  "Genus": "Basin",
  "Label": "Basin",
  "backtrack": ["198"],
  "index": 0,
  "product": {
    "Product": "shared",
    "Size": "shared"
  },
  "Design": {
    "Product": "shared",
    "Size": "shared",
    "Rotation": [0,0,0],
    "Margin": [0,50,0,0],
    "Alignment": {
      "Align": "TB",
      "Datum": 720
    }
  },
  "shared": {
    "Product": "Basin",
    "Size": "510x428x357",
    "Source": "Product/dae/",
    "Extension": ".dae",
    "size": [510,428,357]
  },
  "clode": "13",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Fail"
  }
},
"229": {
  "Tools": [],
  "Type": "Assembly",
  "Genus": "Floor",
  "Label": "Floor",
  "Suffix": 5,
  "backtrack": ["10"],
  "link": ["230","231","232","233","234"],
  "index": 0,
  "shared": {
    "Level": 1,
    "Size": [4900,3633,2070]
  },
  "Bookings": {
    "Level": "shared",
    "Access": "Lift"
  },
  "Design": {
    "Size": "shared"
  },
  "clode": "1",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Pass"
  }
},
"230": {
  "Tools": [],
  "Type": "Assembly",
  "Genus": "Space",
  "Label": "Guestroom",
  "Suffix": "1",
  "backtrack": ["229"],
  "link": ["235","236"],
  "index": 0,
  "Bookings": {
    "Vacant": "Dates",
    "Repair": "Dates"
  },
  "Design": {
    "Size": "shared"
  },
  "shared": {
    "Size": [4700,3433,2070]
  },
  "clode": "2",
  "Housekeeping": {
    "Test1": "Pass",
    "Test2": "Fail"
  }
},
"231": {
  "Tools": [],
  "Type": "Assembly",
  "Genus": "Space",
  "Label": "Guestroom",
  "Suffix": 2,
  "backtrack": ["229"],
  "link": ["237","238"],
  "index": 0,
  "Bookings": {
    "Vacant": "Dates",
    "Repair": "Dates"
  },
  "Design": {
    "Size": "shared"
  },
  "shared": {
    "Size": [4700,3433,2070]
  },
  "clode": "2",
  "Housekeeping": {
    "Test1": "Pass",
    "Test2": "Fail"
  }
},
"232": {
  "Tools": [],
  "Type": "Assembly",
  "Genus": "Space",
  "Label": "Guestroom",
  "Suffix": 3,
  "backtrack": ["229"],
  "link": ["239","240"],
  "index": 0,
  "Bookings": {
    "Vacant": "Dates",
    "Repair": "Dates"
  },
  "Design": {
    "Size": "shared"
  },
  "shared": {
    "Size": [4700,3433,2070]
  },
  "clode": "2",
  "Housekeeping": {
    "Test1": "Pass",
    "Test2": "Fail"
  }
},
"233": {
  "Tools": [],
  "Type": "Assembly",
  "Genus": "Space",
  "Label": "Guestroom",
  "Suffix": 4,
  "backtrack": ["229"],
  "link": ["241","242"],
  "index": 0,
  "Bookings": {
    "Vacant": "Dates",
    "Repair": "Dates"
  },
  "Design": {
    "Size": "shared"
  },
  "shared": {
    "Size": [4700,3433,2070]
  },
  "clode": "2",
  "Housekeeping": {
    "Test1": "Pass",
    "Test2": "Fail"
  }
},
"234": {
  "Tools": [],
  "Type": "Assembly",
  "Genus": "Space",
  "Label": "Guestroom",
  "Suffix": 5,
  "backtrack": ["229"],
  "link": ["243","244"],
  "index": 0,
  "Bookings": {
    "Vacant": "Dates",
    "Repair": "Dates"
  },
  "Design": {
    "Size": "shared"
  },
  "shared": {
    "Size": [4700,3433,2070]
  },
  "clode": "2",
  "Housekeeping": {
    "Test1": "Pass",
    "Test2": "Fail"
  }
},
"235": {
  "Tools": [],
  "Type": "Assembly",
  "Genus": "Interiors",
  "Label": "Bedroom",
  "backtrack": ["230"],
  "link": ["245"],
  "index": 0,
  "Bookings": {
    "View": "Town",
    "Beds": "Two"
  },
  "Design": {
    "Size": "shared",
    "Alignment": {
      "Align": "TT",
      "Datum": 0
    }
  },
  "shared": {
    "Size": [2976,3433,1016]
  },
  "clode": "3",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Pass"
  }
},
"236": {
  "Tools": [],
  "Type": "Assembly",
  "Genus": "Interiors",
  "Label": "Bathroom",
  "backtrack": ["230"],
  "link": ["246"],
  "index": 0,
  "Bookings": {
    "Shared": "No"
  },
  "Design": {
    "Size": "shared",
    "Rotation": [0,270,0],
    "Alignment": {
      "Align": "TT",
      "Datum": 0
    },
    "Divider": ["East"]
  },
  "shared": {},
  "clode": "4",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Fail"
  }
},
"237": {
  "Tools": [],
  "Type": "Assembly",
  "Genus": "Interiors",
  "Label": "Bedroom",
  "backtrack": ["231"],
  "link": ["247"],
  "index": 0,
  "Bookings": {
    "View": "Town",
    "Beds": "Two"
  },
  "Design": {
    "Size": "shared",
    "Alignment": {
      "Align": "TT",
      "Datum": 0
    }
  },
  "shared": {
    "Size": [2976,3433,1016]
  },
  "clode": "3",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Pass"
  }
},
"238": {
  "Tools": [],
  "Type": "Assembly",
  "Genus": "Interiors",
  "Label": "Bathroom",
  "backtrack": ["231"],
  "link": ["248"],
  "index": 0,
  "Bookings": {
    "Shared": "No"
  },
  "Design": {
    "Size": "shared",
    "Rotation": [0,270,0],
    "Alignment": {
      "Align": "TT",
      "Datum": 0
    },
    "Divider": ["East"]
  },
  "shared": {},
  "clode": "4",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Fail"
  }
},
"239": {
  "Tools": [],
  "Type": "Assembly",
  "Genus": "Interiors",
  "Label": "Bedroom",
  "backtrack": ["232"],
  "link": ["249"],
  "index": 0,
  "Bookings": {
    "View": "Town",
    "Beds": "Two"
  },
  "Design": {
    "Size": "shared",
    "Alignment": {
      "Align": "TT",
      "Datum": 0
    }
  },
  "shared": {
    "Size": [2976,3433,1016]
  },
  "clode": "3",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Pass"
  }
},
"240": {
  "Tools": [],
  "Type": "Assembly",
  "Genus": "Interiors",
  "Label": "Bathroom",
  "backtrack": ["232"],
  "link": ["250"],
  "index": 0,
  "Bookings": {
    "Shared": "No"
  },
  "Design": {
    "Size": "shared",
    "Rotation": [0,270,0],
    "Alignment": {
      "Align": "TT",
      "Datum": 0
    },
    "Divider": ["East"]
  },
  "shared": {},
  "clode": "4",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Fail"
  }
},
"241": {
  "Tools": [],
  "Type": "Assembly",
  "Genus": "Interiors",
  "Label": "Bedroom",
  "backtrack": ["233"],
  "link": ["251"],
  "index": 0,
  "Bookings": {
    "View": "Town",
    "Beds": "Two"
  },
  "Design": {
    "Size": "shared",
    "Alignment": {
      "Align": "TT",
      "Datum": 0
    }
  },
  "shared": {
    "Size": [2976,3433,1016]
  },
  "clode": "3",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Pass"
  }
},
"242": {
  "Tools": [],
  "Type": "Assembly",
  "Genus": "Interiors",
  "Label": "Bathroom",
  "backtrack": ["233"],
  "link": ["252"],
  "index": 0,
  "Bookings": {
    "Shared": "No"
  },
  "Design": {
    "Size": "shared",
    "Rotation": [0,270,0],
    "Alignment": {
      "Align": "TT",
      "Datum": 0
    },
    "Divider": ["East"]
  },
  "shared": {},
  "clode": "4",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Fail"
  }
},
"243": {
  "Tools": [],
  "Type": "Assembly",
  "Genus": "Interiors",
  "Label": "Bedroom",
  "backtrack": ["234"],
  "link": ["253"],
  "index": 0,
  "Bookings": {
    "View": "Town",
    "Beds": "Two"
  },
  "Design": {
    "Size": "shared",
    "Alignment": {
      "Align": "TT",
      "Datum": 0
    }
  },
  "shared": {
    "Size": [2976,3433,1016]
  },
  "clode": "3",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Pass"
  }
},
"244": {
  "Tools": [],
  "Type": "Assembly",
  "Genus": "Interiors",
  "Label": "Bathroom",
  "backtrack": ["234"],
  "link": ["254"],
  "index": 0,
  "Bookings": {
    "Shared": "No"
  },
  "Design": {
    "Size": "shared",
    "Rotation": [0,270,0],
    "Alignment": {
      "Align": "TT",
      "Datum": 0
    },
    "Divider": ["East"]
  },
  "shared": {},
  "clode": "4",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Fail"
  }
},
"245": {
  "Tools": [],
  "Type": "Cluster",
  "Genus": "Bedset",
  "Label": "Bedset",
  "Container": "3",
  "backtrack": ["235"],
  "link": ["255","256","257"],
  "index": 0,
  "Design": {
    "Size": "shared",
    "Footprint": {
      "Dims": [600,600,0,600],
      "Focus": "7"
    }
  },
  "shared": {
    "Size": [2676,2184,1016]
  },
  "clode": "5",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Pass"
  }
},
"246": {
  "Tools": [],
  "Type": "Cluster",
  "Genus": "Sanitaryware",
  "Label": "Sanitaryware",
  "Container": "4",
  "backtrack": ["236"],
  "link": ["258","259","260"],
  "index": 2,
  "Design": {
    "Size": "shared"
  },
  "shared": {
    "Size": [1906,1524,1030]
  },
  "clode": "8",
  "Housekeeping": {
    "Test1": "Pass",
    "Test2": "Fail"
  }
},
"247": {
  "Tools": [],
  "Type": "Cluster",
  "Genus": "Bedset",
  "Label": "Bedset",
  "Container": "3",
  "backtrack": ["237"],
  "link": ["261","262","263"],
  "index": 0,
  "Design": {
    "Size": "shared",
    "Footprint": {
      "Dims": [600,600,0,600],
      "Focus": "7"
    }
  },
  "shared": {
    "Size": [2676,2184,1016]
  },
  "clode": "5",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Pass"
  }
},
"248": {
  "Tools": [],
  "Type": "Cluster",
  "Genus": "Sanitaryware",
  "Label": "Sanitaryware",
  "Container": "4",
  "backtrack": ["238"],
  "link": ["264","265","266"],
  "index": 2,
  "Design": {
    "Size": "shared"
  },
  "shared": {
    "Size": [1906,1524,1030]
  },
  "clode": "8",
  "Housekeeping": {
    "Test1": "Pass",
    "Test2": "Fail"
  }
},
"249": {
  "Tools": [],
  "Type": "Cluster",
  "Genus": "Bedset",
  "Label": "Bedset",
  "Container": "3",
  "backtrack": ["239"],
  "link": ["267","268","269"],
  "index": 0,
  "Design": {
    "Size": "shared",
    "Footprint": {
      "Dims": [600,600,0,600],
      "Focus": "7"
    }
  },
  "shared": {
    "Size": [2676,2184,1016]
  },
  "clode": "5",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Pass"
  }
},
"250": {
  "Tools": [],
  "Type": "Cluster",
  "Genus": "Sanitaryware",
  "Label": "Sanitaryware",
  "Container": "4",
  "backtrack": ["240"],
  "link": ["270","271","272"],
  "index": 2,
  "Design": {
    "Size": "shared"
  },
  "shared": {
    "Size": [1906,1524,1030]
  },
  "clode": "8",
  "Housekeeping": {
    "Test1": "Pass",
    "Test2": "Fail"
  }
},
"251": {
  "Tools": [],
  "Type": "Cluster",
  "Genus": "Bedset",
  "Label": "Bedset",
  "Container": "3",
  "backtrack": ["241"],
  "link": ["273","274","275"],
  "index": 0,
  "Design": {
    "Size": "shared",
    "Footprint": {
      "Dims": [600,600,0,600],
      "Focus": "7"
    }
  },
  "shared": {
    "Size": [2676,2184,1016]
  },
  "clode": "5",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Pass"
  }
},
"252": {
  "Tools": [],
  "Type": "Cluster",
  "Genus": "Sanitaryware",
  "Label": "Sanitaryware",
  "Container": "4",
  "backtrack": ["242"],
  "link": ["276","277","278"],
  "index": 2,
  "Design": {
    "Size": "shared"
  },
  "shared": {
    "Size": [1906,1524,1030]
  },
  "clode": "8",
  "Housekeeping": {
    "Test1": "Pass",
    "Test2": "Fail"
  }
},
"253": {
  "Tools": [],
  "Type": "Cluster",
  "Genus": "Bedset",
  "Label": "Bedset",
  "Container": "3",
  "backtrack": ["243"],
  "link": ["279","280","281"],
  "index": 0,
  "Design": {
    "Size": "shared",
    "Footprint": {
      "Dims": [600,600,0,600],
      "Focus": "7"
    }
  },
  "shared": {
    "Size": [2676,2184,1016]
  },
  "clode": "5",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Pass"
  }
},
"254": {
  "Tools": [],
  "Type": "Cluster",
  "Genus": "Sanitaryware",
  "Label": "Sanitaryware",
  "Container": "4",
  "backtrack": ["244"],
  "link": ["282","283","284"],
  "index": 2,
  "Design": {
    "Size": "shared"
  },
  "shared": {
    "Size": [1906,1524,1030]
  },
  "clode": "8",
  "Housekeeping": {
    "Test1": "Pass",
    "Test2": "Fail"
  }
},
"255": {
  "Tools": [],
  "Type": "Product",
  "Category": "Furniture",
  "Genus": "Cabinet",
  "Label": "Bedside cabinet",
  "backtrack": ["245"],
  "index": 0,
  "product": {
    "Product": "shared",
    "Size": "shared"
  },
  "Design": {
    "Product": "shared",
    "Size": "shared"
  },
  "shared": {
    "Product": "Wendy nightstand",
    "Size": "400x367x558",
    "Source": "Product/dae/",
    "Extension": ".dae",
    "size": [400,367,558]
  },
  "clode": "14",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Pass"
  }
},
"256": {
  "Tools": [],
  "Type": "Product",
  "Category": "Furniture",
  "Genus": "Bed",
  "Label": "Queen bed",
  "backtrack": ["245"],
  "index": 1,
  "Bookings": {
    "Product": "shared"
  },
  "product": {
    "Product": "shared"
  },
  "Design": {
    "Product": "shared",
    "Size": "shared",
    "Margin": [50,50,0,0],
    "Alignment": {
      "Align": "TT",
      "Datum": 0
    }
  },
  "shared": {
    "Product": "Wendy bed slatted platform mono",
    "Product2": "Queen bed",
    "Size": "1776x2134x1016",
    "Source": "Product/dae/",
    "Extension": ".dae",
    "size": [1776,2134,1016]
  },
  "clode": "7",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Pass"
  }
},
"257": {
  "Tools": [],
  "Type": "Product",
  "Category": "Furniture",
  "Genus": "Cabinet",
  "Label": "Bedside cabinet",
  "backtrack": ["245"],
  "index": 2,
  "product": {
    "Product": "shared",
    "Size": "shared"
  },
  "Design": {
    "Product": "shared",
    "Size": "shared",
    "Alignment": {
      "Align": "TT",
      "Datum": 0
    }
  },
  "shared": {
    "Product": "Wendy nightstand",
    "Size": "400x367x558",
    "Source": "Product/dae/",
    "Extension": ".dae",
    "size": [400,367,558]
  },
  "clode": "15",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Pass"
  }
},
"258": {
  "Tools": [],
  "Type": "Product",
  "Category": "Sanitaryware",
  "Genus": "Bath",
  "Label": "Bath",
  "backtrack": ["246"],
  "index": 0,
  "product": {
    "Product": "shared",
    "Size": "shared"
  },
  "Design": {
    "Product": "shared",
    "Size": "shared",
    "Rotation": [0,270,0],
    "Alignment": {
      "Align": "TB",
      "Datum": 0
    }
  },
  "shared": {
    "Product": "Bath",
    "Size": "1524x737x368",
    "Source": "Product/dae/",
    "Extension": ".dae",
    "size": [1524,737,368]
  },
  "clode": "9",
  "Housekeeping": {
    "Test1": "Pass",
    "Test2": "Fail"
  }
},
"259": {
  "Tools": [],
  "Type": "Product",
  "Category": "Sanitaryware",
  "Genus": "WC",
  "Label": "WC",
  "backtrack": ["246"],
  "index": 0,
  "product": {
    "Product": "shared",
    "Size": "shared"
  },
  "Design": {
    "Product": "shared",
    "Size": "shared",
    "Rotation": [0,0,0],
    "Margin": [50,50,0,0],
    "Alignment": {
      "Align": "TB",
      "Datum": 0
    }
  },
  "shared": {
    "Product": "WC",
    "Size": "509x791x1030",
    "Source": "Product/dae/",
    "Extension": ".dae",
    "size": [509,791,1030]
  },
  "clode": "12",
  "Housekeeping": {
    "Test1": "Pass",
    "Test2": "Pass"
  }
},
"260": {
  "Tools": [],
  "Type": "Product",
  "Category": "Sanitaryware",
  "Genus": "Basin",
  "Label": "Basin",
  "backtrack": ["246"],
  "index": 0,
  "product": {
    "Product": "shared",
    "Size": "shared"
  },
  "Design": {
    "Product": "shared",
    "Size": "shared",
    "Rotation": [0,0,0],
    "Margin": [0,50,0,0],
    "Alignment": {
      "Align": "TB",
      "Datum": 720
    }
  },
  "shared": {
    "Product": "Basin",
    "Size": "510x428x357",
    "Source": "Product/dae/",
    "Extension": ".dae",
    "size": [510,428,357]
  },
  "clode": "13",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Fail"
  }
},
"261": {
  "Tools": [],
  "Type": "Product",
  "Category": "Furniture",
  "Genus": "Cabinet",
  "Label": "Bedside cabinet",
  "backtrack": ["247"],
  "index": 0,
  "product": {
    "Product": "shared",
    "Size": "shared"
  },
  "Design": {
    "Product": "shared",
    "Size": "shared"
  },
  "shared": {
    "Product": "Wendy nightstand",
    "Size": "400x367x558",
    "Source": "Product/dae/",
    "Extension": ".dae",
    "size": [400,367,558]
  },
  "clode": "14",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Pass"
  }
},
"262": {
  "Tools": [],
  "Type": "Product",
  "Category": "Furniture",
  "Genus": "Bed",
  "Label": "Queen bed",
  "backtrack": ["247"],
  "index": 1,
  "Bookings": {
    "Product": "shared"
  },
  "product": {
    "Product": "shared"
  },
  "Design": {
    "Product": "shared",
    "Size": "shared",
    "Margin": [50,50,0,0],
    "Alignment": {
      "Align": "TT",
      "Datum": 0
    }
  },
  "shared": {
    "Product": "Wendy bed slatted platform mono",
    "Product2": "Queen bed",
    "Size": "1776x2134x1016",
    "Source": "Product/dae/",
    "Extension": ".dae",
    "size": [1776,2134,1016]
  },
  "clode": "7",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Pass"
  }
},
"263": {
  "Tools": [],
  "Type": "Product",
  "Category": "Furniture",
  "Genus": "Cabinet",
  "Label": "Bedside cabinet",
  "backtrack": ["247"],
  "index": 2,
  "product": {
    "Product": "shared",
    "Size": "shared"
  },
  "Design": {
    "Product": "shared",
    "Size": "shared",
    "Alignment": {
      "Align": "TT",
      "Datum": 0
    }
  },
  "shared": {
    "Product": "Wendy nightstand",
    "Size": "400x367x558",
    "Source": "Product/dae/",
    "Extension": ".dae",
    "size": [400,367,558]
  },
  "clode": "15",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Pass"
  }
},
"264": {
  "Tools": [],
  "Type": "Product",
  "Category": "Sanitaryware",
  "Genus": "Bath",
  "Label": "Bath",
  "backtrack": ["248"],
  "index": 0,
  "product": {
    "Product": "shared",
    "Size": "shared"
  },
  "Design": {
    "Product": "shared",
    "Size": "shared",
    "Rotation": [0,270,0],
    "Alignment": {
      "Align": "TB",
      "Datum": 0
    }
  },
  "shared": {
    "Product": "Bath",
    "Size": "1524x737x368",
    "Source": "Product/dae/",
    "Extension": ".dae",
    "size": [1524,737,368]
  },
  "clode": "9",
  "Housekeeping": {
    "Test1": "Pass",
    "Test2": "Fail"
  }
},
"265": {
  "Tools": [],
  "Type": "Product",
  "Category": "Sanitaryware",
  "Genus": "WC",
  "Label": "WC",
  "backtrack": ["248"],
  "index": 0,
  "product": {
    "Product": "shared",
    "Size": "shared"
  },
  "Design": {
    "Product": "shared",
    "Size": "shared",
    "Rotation": [0,0,0],
    "Margin": [50,50,0,0],
    "Alignment": {
      "Align": "TB",
      "Datum": 0
    }
  },
  "shared": {
    "Product": "WC",
    "Size": "509x791x1030",
    "Source": "Product/dae/",
    "Extension": ".dae",
    "size": [509,791,1030]
  },
  "clode": "12",
  "Housekeeping": {
    "Test1": "Pass",
    "Test2": "Pass"
  }
},
"266": {
  "Tools": [],
  "Type": "Product",
  "Category": "Sanitaryware",
  "Genus": "Basin",
  "Label": "Basin",
  "backtrack": ["248"],
  "index": 0,
  "product": {
    "Product": "shared",
    "Size": "shared"
  },
  "Design": {
    "Product": "shared",
    "Size": "shared",
    "Rotation": [0,0,0],
    "Margin": [0,50,0,0],
    "Alignment": {
      "Align": "TB",
      "Datum": 720
    }
  },
  "shared": {
    "Product": "Basin",
    "Size": "510x428x357",
    "Source": "Product/dae/",
    "Extension": ".dae",
    "size": [510,428,357]
  },
  "clode": "13",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Fail"
  }
},
"267": {
  "Tools": [],
  "Type": "Product",
  "Category": "Furniture",
  "Genus": "Cabinet",
  "Label": "Bedside cabinet",
  "backtrack": ["249"],
  "index": 0,
  "product": {
    "Product": "shared",
    "Size": "shared"
  },
  "Design": {
    "Product": "shared",
    "Size": "shared"
  },
  "shared": {
    "Product": "Wendy nightstand",
    "Size": "400x367x558",
    "Source": "Product/dae/",
    "Extension": ".dae",
    "size": [400,367,558]
  },
  "clode": "14",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Pass"
  }
},
"268": {
  "Tools": [],
  "Type": "Product",
  "Category": "Furniture",
  "Genus": "Bed",
  "Label": "Queen bed",
  "backtrack": ["249"],
  "index": 1,
  "Bookings": {
    "Product": "shared"
  },
  "product": {
    "Product": "shared"
  },
  "Design": {
    "Product": "shared",
    "Size": "shared",
    "Margin": [50,50,0,0],
    "Alignment": {
      "Align": "TT",
      "Datum": 0
    }
  },
  "shared": {
    "Product": "Wendy bed slatted platform mono",
    "Product2": "Queen bed",
    "Size": "1776x2134x1016",
    "Source": "Product/dae/",
    "Extension": ".dae",
    "size": [1776,2134,1016]
  },
  "clode": "7",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Pass"
  }
},
"269": {
  "Tools": [],
  "Type": "Product",
  "Category": "Furniture",
  "Genus": "Cabinet",
  "Label": "Bedside cabinet",
  "backtrack": ["249"],
  "index": 2,
  "product": {
    "Product": "shared",
    "Size": "shared"
  },
  "Design": {
    "Product": "shared",
    "Size": "shared",
    "Alignment": {
      "Align": "TT",
      "Datum": 0
    }
  },
  "shared": {
    "Product": "Wendy nightstand",
    "Size": "400x367x558",
    "Source": "Product/dae/",
    "Extension": ".dae",
    "size": [400,367,558]
  },
  "clode": "15",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Pass"
  }
},
"270": {
  "Tools": [],
  "Type": "Product",
  "Category": "Sanitaryware",
  "Genus": "Bath",
  "Label": "Bath",
  "backtrack": ["250"],
  "index": 0,
  "product": {
    "Product": "shared",
    "Size": "shared"
  },
  "Design": {
    "Product": "shared",
    "Size": "shared",
    "Rotation": [0,270,0],
    "Alignment": {
      "Align": "TB",
      "Datum": 0
    }
  },
  "shared": {
    "Product": "Bath",
    "Size": "1524x737x368",
    "Source": "Product/dae/",
    "Extension": ".dae",
    "size": [1524,737,368]
  },
  "clode": "9",
  "Housekeeping": {
    "Test1": "Pass",
    "Test2": "Fail"
  }
},
"271": {
  "Tools": [],
  "Type": "Product",
  "Category": "Sanitaryware",
  "Genus": "WC",
  "Label": "WC",
  "backtrack": ["250"],
  "index": 0,
  "product": {
    "Product": "shared",
    "Size": "shared"
  },
  "Design": {
    "Product": "shared",
    "Size": "shared",
    "Rotation": [0,0,0],
    "Margin": [50,50,0,0],
    "Alignment": {
      "Align": "TB",
      "Datum": 0
    }
  },
  "shared": {
    "Product": "WC",
    "Size": "509x791x1030",
    "Source": "Product/dae/",
    "Extension": ".dae",
    "size": [509,791,1030]
  },
  "clode": "12",
  "Housekeeping": {
    "Test1": "Pass",
    "Test2": "Pass"
  }
},
"272": {
  "Tools": [],
  "Type": "Product",
  "Category": "Sanitaryware",
  "Genus": "Basin",
  "Label": "Basin",
  "backtrack": ["250"],
  "index": 0,
  "product": {
    "Product": "shared",
    "Size": "shared"
  },
  "Design": {
    "Product": "shared",
    "Size": "shared",
    "Rotation": [0,0,0],
    "Margin": [0,50,0,0],
    "Alignment": {
      "Align": "TB",
      "Datum": 720
    }
  },
  "shared": {
    "Product": "Basin",
    "Size": "510x428x357",
    "Source": "Product/dae/",
    "Extension": ".dae",
    "size": [510,428,357]
  },
  "clode": "13",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Fail"
  }
},
"273": {
  "Tools": [],
  "Type": "Product",
  "Category": "Furniture",
  "Genus": "Cabinet",
  "Label": "Bedside cabinet",
  "backtrack": ["251"],
  "index": 0,
  "product": {
    "Product": "shared",
    "Size": "shared"
  },
  "Design": {
    "Product": "shared",
    "Size": "shared"
  },
  "shared": {
    "Product": "Wendy nightstand",
    "Size": "400x367x558",
    "Source": "Product/dae/",
    "Extension": ".dae",
    "size": [400,367,558]
  },
  "clode": "14",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Pass"
  }
},
"274": {
  "Tools": [],
  "Type": "Product",
  "Category": "Furniture",
  "Genus": "Bed",
  "Label": "Queen bed",
  "backtrack": ["251"],
  "index": 1,
  "Bookings": {
    "Product": "shared"
  },
  "product": {
    "Product": "shared"
  },
  "Design": {
    "Product": "shared",
    "Size": "shared",
    "Margin": [50,50,0,0],
    "Alignment": {
      "Align": "TT",
      "Datum": 0
    }
  },
  "shared": {
    "Product": "Wendy bed slatted platform mono",
    "Product2": "Queen bed",
    "Size": "1776x2134x1016",
    "Source": "Product/dae/",
    "Extension": ".dae",
    "size": [1776,2134,1016]
  },
  "clode": "7",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Pass"
  }
},
"275": {
  "Tools": [],
  "Type": "Product",
  "Category": "Furniture",
  "Genus": "Cabinet",
  "Label": "Bedside cabinet",
  "backtrack": ["251"],
  "index": 2,
  "product": {
    "Product": "shared",
    "Size": "shared"
  },
  "Design": {
    "Product": "shared",
    "Size": "shared",
    "Alignment": {
      "Align": "TT",
      "Datum": 0
    }
  },
  "shared": {
    "Product": "Wendy nightstand",
    "Size": "400x367x558",
    "Source": "Product/dae/",
    "Extension": ".dae",
    "size": [400,367,558]
  },
  "clode": "15",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Pass"
  }
},
"276": {
  "Tools": [],
  "Type": "Product",
  "Category": "Sanitaryware",
  "Genus": "Bath",
  "Label": "Bath",
  "backtrack": ["252"],
  "index": 0,
  "product": {
    "Product": "shared",
    "Size": "shared"
  },
  "Design": {
    "Product": "shared",
    "Size": "shared",
    "Rotation": [0,270,0],
    "Alignment": {
      "Align": "TB",
      "Datum": 0
    }
  },
  "shared": {
    "Product": "Bath",
    "Size": "1524x737x368",
    "Source": "Product/dae/",
    "Extension": ".dae",
    "size": [1524,737,368]
  },
  "clode": "9",
  "Housekeeping": {
    "Test1": "Pass",
    "Test2": "Fail"
  }
},
"277": {
  "Tools": [],
  "Type": "Product",
  "Category": "Sanitaryware",
  "Genus": "WC",
  "Label": "WC",
  "backtrack": ["252"],
  "index": 0,
  "product": {
    "Product": "shared",
    "Size": "shared"
  },
  "Design": {
    "Product": "shared",
    "Size": "shared",
    "Rotation": [0,0,0],
    "Margin": [50,50,0,0],
    "Alignment": {
      "Align": "TB",
      "Datum": 0
    }
  },
  "shared": {
    "Product": "WC",
    "Size": "509x791x1030",
    "Source": "Product/dae/",
    "Extension": ".dae",
    "size": [509,791,1030]
  },
  "clode": "12",
  "Housekeeping": {
    "Test1": "Pass",
    "Test2": "Pass"
  }
},
"278": {
  "Tools": [],
  "Type": "Product",
  "Category": "Sanitaryware",
  "Genus": "Basin",
  "Label": "Basin",
  "backtrack": ["252"],
  "index": 0,
  "product": {
    "Product": "shared",
    "Size": "shared"
  },
  "Design": {
    "Product": "shared",
    "Size": "shared",
    "Rotation": [0,0,0],
    "Margin": [0,50,0,0],
    "Alignment": {
      "Align": "TB",
      "Datum": 720
    }
  },
  "shared": {
    "Product": "Basin",
    "Size": "510x428x357",
    "Source": "Product/dae/",
    "Extension": ".dae",
    "size": [510,428,357]
  },
  "clode": "13",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Fail"
  }
},
"279": {
  "Tools": [],
  "Type": "Product",
  "Category": "Furniture",
  "Genus": "Cabinet",
  "Label": "Bedside cabinet",
  "backtrack": ["253"],
  "index": 0,
  "product": {
    "Product": "shared",
    "Size": "shared"
  },
  "Design": {
    "Product": "shared",
    "Size": "shared"
  },
  "shared": {
    "Product": "Wendy nightstand",
    "Size": "400x367x558",
    "Source": "Product/dae/",
    "Extension": ".dae",
    "size": [400,367,558]
  },
  "clode": "14",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Pass"
  }
},
"280": {
  "Tools": [],
  "Type": "Product",
  "Category": "Furniture",
  "Genus": "Bed",
  "Label": "Queen bed",
  "backtrack": ["253"],
  "index": 1,
  "Bookings": {
    "Product": "shared"
  },
  "product": {
    "Product": "shared"
  },
  "Design": {
    "Product": "shared",
    "Size": "shared",
    "Margin": [50,50,0,0],
    "Alignment": {
      "Align": "TT",
      "Datum": 0
    }
  },
  "shared": {
    "Product": "Wendy bed slatted platform mono",
    "Product2": "Queen bed",
    "Size": "1776x2134x1016",
    "Source": "Product/dae/",
    "Extension": ".dae",
    "size": [1776,2134,1016]
  },
  "clode": "7",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Pass"
  }
},
"281": {
  "Tools": [],
  "Type": "Product",
  "Category": "Furniture",
  "Genus": "Cabinet",
  "Label": "Bedside cabinet",
  "backtrack": ["253"],
  "index": 2,
  "product": {
    "Product": "shared",
    "Size": "shared"
  },
  "Design": {
    "Product": "shared",
    "Size": "shared",
    "Alignment": {
      "Align": "TT",
      "Datum": 0
    }
  },
  "shared": {
    "Product": "Wendy nightstand",
    "Size": "400x367x558",
    "Source": "Product/dae/",
    "Extension": ".dae",
    "size": [400,367,558]
  },
  "clode": "15",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Pass"
  }
},
"282": {
  "Tools": [],
  "Type": "Product",
  "Category": "Sanitaryware",
  "Genus": "Bath",
  "Label": "Bath",
  "backtrack": ["254"],
  "index": 0,
  "product": {
    "Product": "shared",
    "Size": "shared"
  },
  "Design": {
    "Product": "shared",
    "Size": "shared",
    "Rotation": [0,270,0],
    "Alignment": {
      "Align": "TB",
      "Datum": 0
    }
  },
  "shared": {
    "Product": "Bath",
    "Size": "1524x737x368",
    "Source": "Product/dae/",
    "Extension": ".dae",
    "size": [1524,737,368]
  },
  "clode": "9",
  "Housekeeping": {
    "Test1": "Pass",
    "Test2": "Fail"
  }
},
"283": {
  "Tools": [],
  "Type": "Product",
  "Category": "Sanitaryware",
  "Genus": "WC",
  "Label": "WC",
  "backtrack": ["254"],
  "index": 0,
  "product": {
    "Product": "shared",
    "Size": "shared"
  },
  "Design": {
    "Product": "shared",
    "Size": "shared",
    "Rotation": [0,0,0],
    "Margin": [50,50,0,0],
    "Alignment": {
      "Align": "TB",
      "Datum": 0
    }
  },
  "shared": {
    "Product": "WC",
    "Size": "509x791x1030",
    "Source": "Product/dae/",
    "Extension": ".dae",
    "size": [509,791,1030]
  },
  "clode": "12",
  "Housekeeping": {
    "Test1": "Pass",
    "Test2": "Pass"
  }
},
"284": {
  "Tools": [],
  "Type": "Product",
  "Category": "Sanitaryware",
  "Genus": "Basin",
  "Label": "Basin",
  "backtrack": ["254"],
  "index": 0,
  "product": {
    "Product": "shared",
    "Size": "shared"
  },
  "Design": {
    "Product": "shared",
    "Size": "shared",
    "Rotation": [0,0,0],
    "Margin": [0,50,0,0],
    "Alignment": {
      "Align": "TB",
      "Datum": 720
    }
  },
  "shared": {
    "Product": "Basin",
    "Size": "510x428x357",
    "Source": "Product/dae/",
    "Extension": ".dae",
    "size": [510,428,357]
  },
  "clode": "13",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Fail"
  }
}
}