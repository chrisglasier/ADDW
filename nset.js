nset = {
"Explainer": {
  "location": "private internet cloud",
  "format": "machine/human readable JavaScrpt Object Notation",
  "purpose": "universal shareable records",
  "minimum elements": {
    "object": "Couplers",
    "aspect": "Link",
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
  "Type": "System",
  "Genus": "Dev",
  "Label": "Couplers",
  "Link": ["Personal","Machine","Hotel"],
  "index": 3
},
"Machine": {
  "Type": "System",
  "Genus": "Dev",
  "Label": "Machine"
},
"Utilities": {
  "Type": "System",
  "Genus": "Dev",
  "Label": "Utilities"
},
"Personal": {
  "Type": "System",
  "Genus": "Dev",
  "Label": "Personal"
},
"Hotel": {
  "Type": "Coupler",
  "Genus": "Dev",
  "Label": "Hotel",
  "Backtrack": ["Couplers"],
  "index": 0,
  "Link": ["10"],
  "Address": {
    "Country": "shared",
    "Town": "shared",
    "District": "Colombo 07",
    "Street": "Gregory's Road",
    "No": "73"
  },
  "shared": {
    "Country": "Sri Lanka",
    "Town": "Colombo",
    "Size": [4900,3633,2070]
  },
  "Design": {
    "Size": "shared"
  },
  "monitors": {
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
    },
    "zIndex": "0",
    "factor": 2,
    "update": "true"
  },
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
  "Label": "Elements",
  "Type": "System",
  "Genus": "Dev",
  "Backtrack": ["Couplers"],
  "Link": ["e1"],
  "index": 2
},
"e1": {
  "Type": "Product",
  "Cat": "Wall",
  "Genus": "Internal",
  "Label": "Division",
  "Backtrack": ["4"],
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
  "Label": "Assembler",
  "Type": "System",
  "Genus": "Dev",
  "Backtrack": ["Couplers"],
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
  "explainer": {
    "location": "nset",
    "purpose": "variable tracking"
  },
  "Genus": "Dev",
  "sort": false,
  "par": "61",
  "node": "65",
  "trail": ["Couplers","Hotel","10","61","65","71","81","99"],
  "atrail": ["Link"],
  "key": "Link"
},
"1": {
  "Type": "Assembly",
  "Genus": "Floor",
  "Label": "Floor",
  "Suffix": 1,
  "Backtrack": ["10"],
  "Link": ["2","17","28","39","50"],
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
  "Type": "Assembly",
  "Genus": "Guestroom",
  "Label": "Guestroom",
  "Suffix": "1",
  "Backtrack": ["1"],
  "Link": ["3","4"],
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
  "Type": "Assembly",
  "Genus": "Interiors",
  "Label": "Bedroom",
  "Backtrack": ["2"],
  "Link": ["5"],
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
  "Type": "Assembly",
  "Genus": "Interiors",
  "Label": "Bathroom",
  "Backtrack": ["2"],
  "Link": ["8"],
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
  "Type": "Cluster",
  "Genus": "Bedset",
  "Label": "Bedset",
  "Container": "3",
  "Backtrack": ["3"],
  "Link": ["14","7","15"],
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
  "Type": "Product",
  "Category": "White goods",
  "Genus": "Minibar",
  "Label": "MiniFridge",
  "Backtrack": ["3"],
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
  "Type": "Product",
  "Category": "Furniture",
  "Genus": "Bed",
  "Label": "Queen bed",
  "Backtrack": ["5"],
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
  "Type": "Cluster",
  "Genus": "Sanitaryware",
  "Label": "Sanitaryware",
  "Container": "4",
  "Backtrack": ["4"],
  "Link": ["9","12","13"],
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
  "Type": "Product",
  "Category": "Sanitaryware",
  "Genus": "Bath",
  "Label": "Bath",
  "Backtrack": ["8"],
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
  "Type": "Assembly",
  "Genus": "Building",
  "Label": "Guest tower",
  "Backtrack": ["Hotel"],
  "Link": ["1","61","117","173","229"],
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
  "Type": "Product",
  "Category": "Sanitaryware",
  "Genus": "WC",
  "Label": "WC",
  "Backtrack": ["8"],
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
  "Type": "Product",
  "Category": "Sanitaryware",
  "Genus": "Basin",
  "Label": "Basin",
  "Backtrack": ["8"],
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
  "Type": "Product",
  "Category": "Furniture",
  "Genus": "Cabinet",
  "Label": "Bedside cabinet",
  "Backtrack": ["5"],
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
  "Type": "Product",
  "Category": "Furniture",
  "Genus": "Cabinet",
  "Label": "Bedside cabinet",
  "Backtrack": ["5"],
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
  "Type": "Product",
  "Category": "Joinery",
  "Genus": "Door",
  "Label": "Door",
  "Backtrack": ["4"],
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
  "Type": "Assembly",
  "Genus": "Guestroom",
  "Label": "Guestroom",
  "Suffix": 2,
  "Backtrack": ["1"],
  "Link": ["18","19"],
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
  "Type": "Assembly",
  "Genus": "Interiors",
  "Label": "Bedroom",
  "Backtrack": ["17"],
  "Link": ["20"],
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
  "Type": "Assembly",
  "Genus": "Interiors",
  "Label": "Bathroom",
  "Backtrack": ["17"],
  "Link": ["21"],
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
  "Type": "Cluster",
  "Genus": "Bedset",
  "Label": "Bedset",
  "Container": "3",
  "Backtrack": ["18"],
  "Link": ["22","23","24"],
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
  "Type": "Cluster",
  "Genus": "Sanitaryware",
  "Label": "Sanitaryware",
  "Container": "4",
  "Backtrack": ["19"],
  "Link": ["25","26","27"],
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
  "Type": "Product",
  "Category": "Furniture",
  "Genus": "Cabinet",
  "Label": "Bedside cabinet",
  "Backtrack": ["20"],
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
  "Type": "Product",
  "Category": "Furniture",
  "Genus": "Bed",
  "Label": "Queen bed",
  "Backtrack": ["20"],
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
  "Type": "Product",
  "Category": "Furniture",
  "Genus": "Cabinet",
  "Label": "Bedside cabinet",
  "Backtrack": ["20"],
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
  "Type": "Product",
  "Category": "Sanitaryware",
  "Genus": "Bath",
  "Label": "Bath",
  "Backtrack": ["21"],
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
  "Type": "Product",
  "Category": "Sanitaryware",
  "Genus": "WC",
  "Label": "WC",
  "Backtrack": ["21"],
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
  "Type": "Product",
  "Category": "Sanitaryware",
  "Genus": "Basin",
  "Label": "Basin",
  "Backtrack": ["21"],
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
  "Type": "Assembly",
  "Genus": "Guestroom",
  "Label": "Guestroom",
  "Suffix": 3,
  "Backtrack": ["1"],
  "Link": ["29","30"],
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
  "Type": "Assembly",
  "Genus": "Interiors",
  "Label": "Bedroom",
  "Backtrack": ["28"],
  "Link": ["31"],
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
  "Type": "Assembly",
  "Genus": "Interiors",
  "Label": "Bathroom",
  "Backtrack": ["28"],
  "Link": ["32"],
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
  "Type": "Cluster",
  "Genus": "Bedset",
  "Label": "Bedset",
  "Container": "3",
  "Backtrack": ["29"],
  "Link": ["33","34","35"],
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
  "Type": "Cluster",
  "Genus": "Sanitaryware",
  "Label": "Sanitaryware",
  "Container": "4",
  "Backtrack": ["30"],
  "Link": ["36","37","38"],
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
  "Type": "Product",
  "Category": "Furniture",
  "Genus": "Cabinet",
  "Label": "Bedside cabinet",
  "Backtrack": ["31"],
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
  "Type": "Product",
  "Category": "Furniture",
  "Genus": "Bed",
  "Label": "Queen bed",
  "Backtrack": ["31"],
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
  "Type": "Product",
  "Category": "Furniture",
  "Genus": "Cabinet",
  "Label": "Bedside cabinet",
  "Backtrack": ["31"],
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
  "Type": "Product",
  "Category": "Sanitaryware",
  "Genus": "Bath",
  "Label": "Bath",
  "Backtrack": ["32"],
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
  "Type": "Product",
  "Category": "Sanitaryware",
  "Genus": "WC",
  "Label": "WC",
  "Backtrack": ["32"],
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
  "Type": "Product",
  "Category": "Sanitaryware",
  "Genus": "Basin",
  "Label": "Basin",
  "Backtrack": ["32"],
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
  "Type": "Assembly",
  "Genus": "Guestroom",
  "Label": "Guestroom",
  "Suffix": 4,
  "Backtrack": ["1"],
  "Link": ["40","41"],
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
  "Type": "Assembly",
  "Genus": "Interiors",
  "Label": "Bedroom",
  "Backtrack": ["39"],
  "Link": ["42"],
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
  "Type": "Assembly",
  "Genus": "Interiors",
  "Label": "Bathroom",
  "Backtrack": ["39"],
  "Link": ["43"],
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
  "Type": "Cluster",
  "Genus": "Bedset",
  "Label": "Bedset",
  "Container": "3",
  "Backtrack": ["40"],
  "Link": ["44","45","46"],
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
  "Type": "Cluster",
  "Genus": "Sanitaryware",
  "Label": "Sanitaryware",
  "Container": "4",
  "Backtrack": ["41"],
  "Link": ["47","48","49"],
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
  "Type": "Product",
  "Category": "Furniture",
  "Genus": "Cabinet",
  "Label": "Bedside cabinet",
  "Backtrack": ["42"],
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
  "Type": "Product",
  "Category": "Furniture",
  "Genus": "Bed",
  "Label": "Queen bed",
  "Backtrack": ["42"],
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
  "Type": "Product",
  "Category": "Furniture",
  "Genus": "Cabinet",
  "Label": "Bedside cabinet",
  "Backtrack": ["42"],
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
  "Type": "Product",
  "Category": "Sanitaryware",
  "Genus": "Bath",
  "Label": "Bath",
  "Backtrack": ["43"],
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
  "Type": "Product",
  "Category": "Sanitaryware",
  "Genus": "WC",
  "Label": "WC",
  "Backtrack": ["43"],
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
  "Type": "Product",
  "Category": "Sanitaryware",
  "Genus": "Basin",
  "Label": "Basin",
  "Backtrack": ["43"],
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
  "Type": "Assembly",
  "Genus": "Guestroom",
  "Label": "Guestroom",
  "Suffix": 5,
  "Backtrack": ["1"],
  "Link": ["51","52"],
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
  "Type": "Assembly",
  "Genus": "Interiors",
  "Label": "Bedroom",
  "Backtrack": ["50"],
  "Link": ["53"],
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
  "Type": "Assembly",
  "Genus": "Interiors",
  "Label": "Bathroom",
  "Backtrack": ["50"],
  "Link": ["54"],
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
  "Type": "Cluster",
  "Genus": "Bedset",
  "Label": "Bedset",
  "Container": "3",
  "Backtrack": ["51"],
  "Link": ["55","56","57"],
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
  "Type": "Cluster",
  "Genus": "Sanitaryware",
  "Label": "Sanitaryware",
  "Container": "4",
  "Backtrack": ["52"],
  "Link": ["58","59","60"],
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
  "Type": "Product",
  "Category": "Furniture",
  "Genus": "Cabinet",
  "Label": "Bedside cabinet",
  "Backtrack": ["53"],
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
  "Type": "Product",
  "Category": "Furniture",
  "Genus": "Bed",
  "Label": "Queen bed",
  "Backtrack": ["53"],
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
  "Type": "Product",
  "Category": "Furniture",
  "Genus": "Cabinet",
  "Label": "Bedside cabinet",
  "Backtrack": ["53"],
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
  "Type": "Product",
  "Category": "Sanitaryware",
  "Genus": "Bath",
  "Label": "Bath",
  "Backtrack": ["54"],
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
  "Type": "Product",
  "Category": "Sanitaryware",
  "Genus": "WC",
  "Label": "WC",
  "Backtrack": ["54"],
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
  "Type": "Product",
  "Category": "Sanitaryware",
  "Genus": "Basin",
  "Label": "Basin",
  "Backtrack": ["54"],
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
  "Type": "Assembly",
  "Genus": "Floor",
  "Label": "Floor",
  "Suffix": 2,
  "Backtrack": ["10"],
  "Link": ["62","63","64","65","66"],
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
  "Type": "Assembly",
  "Genus": "Guestroom",
  "Label": "Guestroom",
  "Suffix": "1",
  "Backtrack": ["61"],
  "Link": ["67","68"],
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
  "Type": "Assembly",
  "Genus": "Guestroom",
  "Label": "Guestroom",
  "Suffix": 2,
  "Backtrack": ["61"],
  "Link": ["69","70"],
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
  "Type": "Assembly",
  "Genus": "Guestroom",
  "Label": "Guestroom",
  "Suffix": 3,
  "Backtrack": ["61"],
  "Link": ["71","72"],
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
  "Type": "Assembly",
  "Genus": "Guestroom",
  "Label": "Guestroom",
  "Suffix": 4,
  "Backtrack": ["61"],
  "Link": ["73","74"],
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
  "Type": "Assembly",
  "Genus": "Guestroom",
  "Label": "Guestroom",
  "Suffix": 5,
  "Backtrack": ["61"],
  "Link": ["75","76"],
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
  "Type": "Assembly",
  "Genus": "Interiors",
  "Label": "Bedroom",
  "Backtrack": ["62"],
  "Link": ["77"],
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
  "Type": "Assembly",
  "Genus": "Interiors",
  "Label": "Bathroom",
  "Backtrack": ["62"],
  "Link": ["78"],
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
  "Type": "Assembly",
  "Genus": "Interiors",
  "Label": "Bedroom",
  "Backtrack": ["63"],
  "Link": ["79"],
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
  "Type": "Assembly",
  "Genus": "Interiors",
  "Label": "Bathroom",
  "Backtrack": ["63"],
  "Link": ["80"],
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
  "Type": "Assembly",
  "Genus": "Interiors",
  "Label": "Bedroom",
  "Backtrack": ["64"],
  "Link": ["81"],
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
  "Type": "Assembly",
  "Genus": "Interiors",
  "Label": "Bathroom",
  "Backtrack": ["64"],
  "Link": ["82"],
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
  "Type": "Assembly",
  "Genus": "Interiors",
  "Label": "Bedroom",
  "Backtrack": ["65"],
  "Link": ["83"],
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
  "Type": "Assembly",
  "Genus": "Interiors",
  "Label": "Bathroom",
  "Backtrack": ["65"],
  "Link": ["84"],
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
  "Type": "Assembly",
  "Genus": "Interiors",
  "Label": "Bedroom",
  "Backtrack": ["66"],
  "Link": ["85"],
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
  "Type": "Assembly",
  "Genus": "Interiors",
  "Label": "Bathroom",
  "Backtrack": ["66"],
  "Link": ["86"],
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
  "Type": "Cluster",
  "Genus": "Bedset",
  "Label": "Bedset",
  "Container": "3",
  "Backtrack": ["67"],
  "Link": ["87","88","89"],
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
  "Type": "Cluster",
  "Genus": "Sanitaryware",
  "Label": "Sanitaryware",
  "Container": "4",
  "Backtrack": ["68"],
  "Link": ["90","91","92"],
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
  "Type": "Cluster",
  "Genus": "Bedset",
  "Label": "Bedset",
  "Container": "3",
  "Backtrack": ["69"],
  "Link": ["93","94","95"],
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
  "Type": "Cluster",
  "Genus": "Sanitaryware",
  "Label": "Sanitaryware",
  "Container": "4",
  "Backtrack": ["70"],
  "Link": ["96","97","98"],
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
  "Type": "Cluster",
  "Genus": "Bedset",
  "Label": "Bedset",
  "Container": "3",
  "Backtrack": ["71"],
  "Link": ["99","100","101"],
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
  "Type": "Cluster",
  "Genus": "Sanitaryware",
  "Label": "Sanitaryware",
  "Container": "4",
  "Backtrack": ["72"],
  "Link": ["102","103","104"],
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
  "Type": "Cluster",
  "Genus": "Bedset",
  "Label": "Bedset",
  "Container": "3",
  "Backtrack": ["73"],
  "Link": ["105","106","107"],
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
  "Type": "Cluster",
  "Genus": "Sanitaryware",
  "Label": "Sanitaryware",
  "Container": "4",
  "Backtrack": ["74"],
  "Link": ["108","109","110"],
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
  "Type": "Cluster",
  "Genus": "Bedset",
  "Label": "Bedset",
  "Container": "3",
  "Backtrack": ["75"],
  "Link": ["111","112","113"],
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
  "Type": "Cluster",
  "Genus": "Sanitaryware",
  "Label": "Sanitaryware",
  "Container": "4",
  "Backtrack": ["76"],
  "Link": ["114","115","116"],
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
  "Type": "Product",
  "Category": "Furniture",
  "Genus": "Cabinet",
  "Label": "Bedside cabinet",
  "Backtrack": ["77"],
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
  "Type": "Product",
  "Category": "Furniture",
  "Genus": "Bed",
  "Label": "Queen bed",
  "Backtrack": ["77"],
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
  "Type": "Product",
  "Category": "Furniture",
  "Genus": "Cabinet",
  "Label": "Bedside cabinet",
  "Backtrack": ["77"],
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
  "Type": "Product",
  "Category": "Sanitaryware",
  "Genus": "Bath",
  "Label": "Bath",
  "Backtrack": ["78"],
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
  "Type": "Product",
  "Category": "Sanitaryware",
  "Genus": "WC",
  "Label": "WC",
  "Backtrack": ["78"],
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
  "Type": "Product",
  "Category": "Sanitaryware",
  "Genus": "Basin",
  "Label": "Basin",
  "Backtrack": ["78"],
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
  "Type": "Product",
  "Category": "Furniture",
  "Genus": "Cabinet",
  "Label": "Bedside cabinet",
  "Backtrack": ["79"],
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
  "Type": "Product",
  "Category": "Furniture",
  "Genus": "Bed",
  "Label": "Queen bed",
  "Backtrack": ["79"],
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
  "Type": "Product",
  "Category": "Furniture",
  "Genus": "Cabinet",
  "Label": "Bedside cabinet",
  "Backtrack": ["79"],
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
  "Type": "Product",
  "Category": "Sanitaryware",
  "Genus": "Bath",
  "Label": "Bath",
  "Backtrack": ["80"],
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
  "Type": "Product",
  "Category": "Sanitaryware",
  "Genus": "WC",
  "Label": "WC",
  "Backtrack": ["80"],
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
  "Type": "Product",
  "Category": "Sanitaryware",
  "Genus": "Basin",
  "Label": "Basin",
  "Backtrack": ["80"],
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
  "Type": "Product",
  "Category": "Furniture",
  "Genus": "Cabinet",
  "Label": "Bedside cabinet",
  "Backtrack": ["81"],
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
  "Type": "Product",
  "Category": "Furniture",
  "Genus": "Bed",
  "Label": "Queen bed",
  "Backtrack": ["81"],
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
  "Type": "Product",
  "Category": "Furniture",
  "Genus": "Cabinet",
  "Label": "Bedside cabinet",
  "Backtrack": ["81"],
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
  "Type": "Product",
  "Category": "Sanitaryware",
  "Genus": "Bath",
  "Label": "Bath",
  "Backtrack": ["82"],
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
  "Type": "Product",
  "Category": "Sanitaryware",
  "Genus": "WC",
  "Label": "WC",
  "Backtrack": ["82"],
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
  "Type": "Product",
  "Category": "Sanitaryware",
  "Genus": "Basin",
  "Label": "Basin",
  "Backtrack": ["82"],
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
  "Type": "Product",
  "Category": "Furniture",
  "Genus": "Cabinet",
  "Label": "Bedside cabinet",
  "Backtrack": ["83"],
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
  "Type": "Product",
  "Category": "Furniture",
  "Genus": "Bed",
  "Label": "Queen bed",
  "Backtrack": ["83"],
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
  "Type": "Product",
  "Category": "Furniture",
  "Genus": "Cabinet",
  "Label": "Bedside cabinet",
  "Backtrack": ["83"],
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
  "Type": "Product",
  "Category": "Sanitaryware",
  "Genus": "Bath",
  "Label": "Bath",
  "Backtrack": ["84"],
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
  "Type": "Product",
  "Category": "Sanitaryware",
  "Genus": "WC",
  "Label": "WC",
  "Backtrack": ["84"],
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
  "Type": "Product",
  "Category": "Sanitaryware",
  "Genus": "Basin",
  "Label": "Basin",
  "Backtrack": ["84"],
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
  "Type": "Product",
  "Category": "Furniture",
  "Genus": "Cabinet",
  "Label": "Bedside cabinet",
  "Backtrack": ["85"],
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
  "Type": "Product",
  "Category": "Furniture",
  "Genus": "Bed",
  "Label": "Queen bed",
  "Backtrack": ["85"],
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
  "Type": "Product",
  "Category": "Furniture",
  "Genus": "Cabinet",
  "Label": "Bedside cabinet",
  "Backtrack": ["85"],
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
  "Type": "Product",
  "Category": "Sanitaryware",
  "Genus": "Bath",
  "Label": "Bath",
  "Backtrack": ["86"],
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
  "Type": "Product",
  "Category": "Sanitaryware",
  "Genus": "WC",
  "Label": "WC",
  "Backtrack": ["86"],
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
  "Type": "Product",
  "Category": "Sanitaryware",
  "Genus": "Basin",
  "Label": "Basin",
  "Backtrack": ["86"],
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
  "Type": "Assembly",
  "Genus": "Floor",
  "Label": "Floor",
  "Suffix": 3,
  "Backtrack": ["10"],
  "Link": ["118","119","120","121","122"],
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
  "Type": "Assembly",
  "Genus": "Guestroom",
  "Label": "Guestroom",
  "Suffix": "1",
  "Backtrack": ["117"],
  "Link": ["123","124"],
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
  "Type": "Assembly",
  "Genus": "Guestroom",
  "Label": "Guestroom",
  "Suffix": 2,
  "Backtrack": ["117"],
  "Link": ["125","126"],
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
  "Type": "Assembly",
  "Genus": "Guestroom",
  "Label": "Guestroom",
  "Suffix": 3,
  "Backtrack": ["117"],
  "Link": ["127","128"],
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
  "Type": "Assembly",
  "Genus": "Guestroom",
  "Label": "Guestroom",
  "Suffix": 4,
  "Backtrack": ["117"],
  "Link": ["129","130"],
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
  "Type": "Assembly",
  "Genus": "Guestroom",
  "Label": "Guestroom",
  "Suffix": 5,
  "Backtrack": ["117"],
  "Link": ["131","132"],
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
  "Type": "Assembly",
  "Genus": "Interiors",
  "Label": "Bedroom",
  "Backtrack": ["118"],
  "Link": ["133"],
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
  "Type": "Assembly",
  "Genus": "Interiors",
  "Label": "Bathroom",
  "Backtrack": ["118"],
  "Link": ["134"],
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
  "Type": "Assembly",
  "Genus": "Interiors",
  "Label": "Bedroom",
  "Backtrack": ["119"],
  "Link": ["135"],
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
  "Type": "Assembly",
  "Genus": "Interiors",
  "Label": "Bathroom",
  "Backtrack": ["119"],
  "Link": ["136"],
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
  "Type": "Assembly",
  "Genus": "Interiors",
  "Label": "Bedroom",
  "Backtrack": ["120"],
  "Link": ["137"],
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
  "Type": "Assembly",
  "Genus": "Interiors",
  "Label": "Bathroom",
  "Backtrack": ["120"],
  "Link": ["138"],
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
  "Type": "Assembly",
  "Genus": "Interiors",
  "Label": "Bedroom",
  "Backtrack": ["121"],
  "Link": ["139"],
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
  "Type": "Assembly",
  "Genus": "Interiors",
  "Label": "Bathroom",
  "Backtrack": ["121"],
  "Link": ["140"],
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
  "Type": "Assembly",
  "Genus": "Interiors",
  "Label": "Bedroom",
  "Backtrack": ["122"],
  "Link": ["141"],
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
  "Type": "Assembly",
  "Genus": "Interiors",
  "Label": "Bathroom",
  "Backtrack": ["122"],
  "Link": ["142"],
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
  "Type": "Cluster",
  "Genus": "Bedset",
  "Label": "Bedset",
  "Container": "3",
  "Backtrack": ["123"],
  "Link": ["143","144","145"],
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
  "Type": "Cluster",
  "Genus": "Sanitaryware",
  "Label": "Sanitaryware",
  "Container": "4",
  "Backtrack": ["124"],
  "Link": ["146","147","148"],
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
  "Type": "Cluster",
  "Genus": "Bedset",
  "Label": "Bedset",
  "Container": "3",
  "Backtrack": ["125"],
  "Link": ["149","150","151"],
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
  "Type": "Cluster",
  "Genus": "Sanitaryware",
  "Label": "Sanitaryware",
  "Container": "4",
  "Backtrack": ["126"],
  "Link": ["152","153","154"],
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
  "Type": "Cluster",
  "Genus": "Bedset",
  "Label": "Bedset",
  "Container": "3",
  "Backtrack": ["127"],
  "Link": ["155","156","157"],
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
  "Type": "Cluster",
  "Genus": "Sanitaryware",
  "Label": "Sanitaryware",
  "Container": "4",
  "Backtrack": ["128"],
  "Link": ["158","159","160"],
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
  "Type": "Cluster",
  "Genus": "Bedset",
  "Label": "Bedset",
  "Container": "3",
  "Backtrack": ["129"],
  "Link": ["161","162","163"],
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
  "Type": "Cluster",
  "Genus": "Sanitaryware",
  "Label": "Sanitaryware",
  "Container": "4",
  "Backtrack": ["130"],
  "Link": ["164","165","166"],
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
  "Type": "Cluster",
  "Genus": "Bedset",
  "Label": "Bedset",
  "Container": "3",
  "Backtrack": ["131"],
  "Link": ["167","168","169"],
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
  "Type": "Cluster",
  "Genus": "Sanitaryware",
  "Label": "Sanitaryware",
  "Container": "4",
  "Backtrack": ["132"],
  "Link": ["170","171","172"],
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
  "Type": "Product",
  "Category": "Furniture",
  "Genus": "Cabinet",
  "Label": "Bedside cabinet",
  "Backtrack": ["133"],
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
  "Type": "Product",
  "Category": "Furniture",
  "Genus": "Bed",
  "Label": "Queen bed",
  "Backtrack": ["133"],
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
  "Type": "Product",
  "Category": "Furniture",
  "Genus": "Cabinet",
  "Label": "Bedside cabinet",
  "Backtrack": ["133"],
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
  "Type": "Product",
  "Category": "Sanitaryware",
  "Genus": "Bath",
  "Label": "Bath",
  "Backtrack": ["134"],
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
  "Type": "Product",
  "Category": "Sanitaryware",
  "Genus": "WC",
  "Label": "WC",
  "Backtrack": ["134"],
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
  "Type": "Product",
  "Category": "Sanitaryware",
  "Genus": "Basin",
  "Label": "Basin",
  "Backtrack": ["134"],
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
  "Type": "Product",
  "Category": "Furniture",
  "Genus": "Cabinet",
  "Label": "Bedside cabinet",
  "Backtrack": ["135"],
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
  "Type": "Product",
  "Category": "Furniture",
  "Genus": "Bed",
  "Label": "Queen bed",
  "Backtrack": ["135"],
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
  "Type": "Product",
  "Category": "Furniture",
  "Genus": "Cabinet",
  "Label": "Bedside cabinet",
  "Backtrack": ["135"],
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
  "Type": "Product",
  "Category": "Sanitaryware",
  "Genus": "Bath",
  "Label": "Bath",
  "Backtrack": ["136"],
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
  "Type": "Product",
  "Category": "Sanitaryware",
  "Genus": "WC",
  "Label": "WC",
  "Backtrack": ["136"],
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
  "Type": "Product",
  "Category": "Sanitaryware",
  "Genus": "Basin",
  "Label": "Basin",
  "Backtrack": ["136"],
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
  "Type": "Product",
  "Category": "Furniture",
  "Genus": "Cabinet",
  "Label": "Bedside cabinet",
  "Backtrack": ["137"],
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
  "Type": "Product",
  "Category": "Furniture",
  "Genus": "Bed",
  "Label": "Queen bed",
  "Backtrack": ["137"],
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
  "Type": "Product",
  "Category": "Furniture",
  "Genus": "Cabinet",
  "Label": "Bedside cabinet",
  "Backtrack": ["137"],
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
  "Type": "Product",
  "Category": "Sanitaryware",
  "Genus": "Bath",
  "Label": "Bath",
  "Backtrack": ["138"],
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
  "Type": "Product",
  "Category": "Sanitaryware",
  "Genus": "WC",
  "Label": "WC",
  "Backtrack": ["138"],
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
  "Type": "Product",
  "Category": "Sanitaryware",
  "Genus": "Basin",
  "Label": "Basin",
  "Backtrack": ["138"],
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
  "Type": "Product",
  "Category": "Furniture",
  "Genus": "Cabinet",
  "Label": "Bedside cabinet",
  "Backtrack": ["139"],
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
  "Type": "Product",
  "Category": "Furniture",
  "Genus": "Bed",
  "Label": "Queen bed",
  "Backtrack": ["139"],
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
  "Type": "Product",
  "Category": "Furniture",
  "Genus": "Cabinet",
  "Label": "Bedside cabinet",
  "Backtrack": ["139"],
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
  "Type": "Product",
  "Category": "Sanitaryware",
  "Genus": "Bath",
  "Label": "Bath",
  "Backtrack": ["140"],
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
  "Type": "Product",
  "Category": "Sanitaryware",
  "Genus": "WC",
  "Label": "WC",
  "Backtrack": ["140"],
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
  "Type": "Product",
  "Category": "Sanitaryware",
  "Genus": "Basin",
  "Label": "Basin",
  "Backtrack": ["140"],
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
  "Type": "Product",
  "Category": "Furniture",
  "Genus": "Cabinet",
  "Label": "Bedside cabinet",
  "Backtrack": ["141"],
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
  "Type": "Product",
  "Category": "Furniture",
  "Genus": "Bed",
  "Label": "Queen bed",
  "Backtrack": ["141"],
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
  "Type": "Product",
  "Category": "Furniture",
  "Genus": "Cabinet",
  "Label": "Bedside cabinet",
  "Backtrack": ["141"],
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
  "Type": "Product",
  "Category": "Sanitaryware",
  "Genus": "Bath",
  "Label": "Bath",
  "Backtrack": ["142"],
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
  "Type": "Product",
  "Category": "Sanitaryware",
  "Genus": "WC",
  "Label": "WC",
  "Backtrack": ["142"],
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
  "Type": "Product",
  "Category": "Sanitaryware",
  "Genus": "Basin",
  "Label": "Basin",
  "Backtrack": ["142"],
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
  "Type": "Assembly",
  "Genus": "Floor",
  "Label": "Floor",
  "Suffix": 4,
  "Backtrack": ["10"],
  "Link": ["174","175","176","177","178"],
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
  "Type": "Assembly",
  "Genus": "Guestroom",
  "Label": "Guestroom",
  "Suffix": "1",
  "Backtrack": ["173"],
  "Link": ["179","180"],
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
  "Type": "Assembly",
  "Genus": "Guestroom",
  "Label": "Guestroom",
  "Suffix": 2,
  "Backtrack": ["173"],
  "Link": ["181","182"],
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
  "Type": "Assembly",
  "Genus": "Guestroom",
  "Label": "Guestroom",
  "Suffix": 3,
  "Backtrack": ["173"],
  "Link": ["183","184"],
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
  "Type": "Assembly",
  "Genus": "Guestroom",
  "Label": "Guestroom",
  "Suffix": 4,
  "Backtrack": ["173"],
  "Link": ["185","186"],
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
  "Type": "Assembly",
  "Genus": "Guestroom",
  "Label": "Guestroom",
  "Suffix": 5,
  "Backtrack": ["173"],
  "Link": ["187","188"],
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
  "Type": "Assembly",
  "Genus": "Interiors",
  "Label": "Bedroom",
  "Backtrack": ["174"],
  "Link": ["189"],
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
  "Type": "Assembly",
  "Genus": "Interiors",
  "Label": "Bathroom",
  "Backtrack": ["174"],
  "Link": ["190"],
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
  "Type": "Assembly",
  "Genus": "Interiors",
  "Label": "Bedroom",
  "Backtrack": ["175"],
  "Link": ["191"],
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
  "Type": "Assembly",
  "Genus": "Interiors",
  "Label": "Bathroom",
  "Backtrack": ["175"],
  "Link": ["192"],
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
  "Type": "Assembly",
  "Genus": "Interiors",
  "Label": "Bedroom",
  "Backtrack": ["176"],
  "Link": ["193"],
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
  "Type": "Assembly",
  "Genus": "Interiors",
  "Label": "Bathroom",
  "Backtrack": ["176"],
  "Link": ["194"],
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
  "Type": "Assembly",
  "Genus": "Interiors",
  "Label": "Bedroom",
  "Backtrack": ["177"],
  "Link": ["195"],
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
  "Type": "Assembly",
  "Genus": "Interiors",
  "Label": "Bathroom",
  "Backtrack": ["177"],
  "Link": ["196"],
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
  "Type": "Assembly",
  "Genus": "Interiors",
  "Label": "Bedroom",
  "Backtrack": ["178"],
  "Link": ["197"],
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
  "Type": "Assembly",
  "Genus": "Interiors",
  "Label": "Bathroom",
  "Backtrack": ["178"],
  "Link": ["198"],
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
  "Type": "Cluster",
  "Genus": "Bedset",
  "Label": "Bedset",
  "Container": "3",
  "Backtrack": ["179"],
  "Link": ["199","200","201"],
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
  "Type": "Cluster",
  "Genus": "Sanitaryware",
  "Label": "Sanitaryware",
  "Container": "4",
  "Backtrack": ["180"],
  "Link": ["202","203","204"],
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
  "Type": "Cluster",
  "Genus": "Bedset",
  "Label": "Bedset",
  "Container": "3",
  "Backtrack": ["181"],
  "Link": ["205","206","207"],
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
  "Type": "Cluster",
  "Genus": "Sanitaryware",
  "Label": "Sanitaryware",
  "Container": "4",
  "Backtrack": ["182"],
  "Link": ["208","209","210"],
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
  "Type": "Cluster",
  "Genus": "Bedset",
  "Label": "Bedset",
  "Container": "3",
  "Backtrack": ["183"],
  "Link": ["211","212","213"],
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
  "Type": "Cluster",
  "Genus": "Sanitaryware",
  "Label": "Sanitaryware",
  "Container": "4",
  "Backtrack": ["184"],
  "Link": ["214","215","216"],
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
  "Type": "Cluster",
  "Genus": "Bedset",
  "Label": "Bedset",
  "Container": "3",
  "Backtrack": ["185"],
  "Link": ["217","218","219"],
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
  "Type": "Cluster",
  "Genus": "Sanitaryware",
  "Label": "Sanitaryware",
  "Container": "4",
  "Backtrack": ["186"],
  "Link": ["220","221","222"],
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
  "Type": "Cluster",
  "Genus": "Bedset",
  "Label": "Bedset",
  "Container": "3",
  "Backtrack": ["187"],
  "Link": ["223","224","225"],
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
  "Type": "Cluster",
  "Genus": "Sanitaryware",
  "Label": "Sanitaryware",
  "Container": "4",
  "Backtrack": ["188"],
  "Link": ["226","227","228"],
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
  "Type": "Product",
  "Category": "Furniture",
  "Genus": "Cabinet",
  "Label": "Bedside cabinet",
  "Backtrack": ["189"],
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
  "Type": "Product",
  "Category": "Furniture",
  "Genus": "Bed",
  "Label": "Queen bed",
  "Backtrack": ["189"],
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
  "Type": "Product",
  "Category": "Furniture",
  "Genus": "Cabinet",
  "Label": "Bedside cabinet",
  "Backtrack": ["189"],
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
  "Type": "Product",
  "Category": "Sanitaryware",
  "Genus": "Bath",
  "Label": "Bath",
  "Backtrack": ["190"],
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
  "Type": "Product",
  "Category": "Sanitaryware",
  "Genus": "WC",
  "Label": "WC",
  "Backtrack": ["190"],
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
  "Type": "Product",
  "Category": "Sanitaryware",
  "Genus": "Basin",
  "Label": "Basin",
  "Backtrack": ["190"],
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
  "Type": "Product",
  "Category": "Furniture",
  "Genus": "Cabinet",
  "Label": "Bedside cabinet",
  "Backtrack": ["191"],
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
  "Type": "Product",
  "Category": "Furniture",
  "Genus": "Bed",
  "Label": "Queen bed",
  "Backtrack": ["191"],
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
  "Type": "Product",
  "Category": "Furniture",
  "Genus": "Cabinet",
  "Label": "Bedside cabinet",
  "Backtrack": ["191"],
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
  "Type": "Product",
  "Category": "Sanitaryware",
  "Genus": "Bath",
  "Label": "Bath",
  "Backtrack": ["192"],
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
  "Type": "Product",
  "Category": "Sanitaryware",
  "Genus": "WC",
  "Label": "WC",
  "Backtrack": ["192"],
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
  "Type": "Product",
  "Category": "Sanitaryware",
  "Genus": "Basin",
  "Label": "Basin",
  "Backtrack": ["192"],
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
  "Type": "Product",
  "Category": "Furniture",
  "Genus": "Cabinet",
  "Label": "Bedside cabinet",
  "Backtrack": ["193"],
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
  "Type": "Product",
  "Category": "Furniture",
  "Genus": "Bed",
  "Label": "Queen bed",
  "Backtrack": ["193"],
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
  "Type": "Product",
  "Category": "Furniture",
  "Genus": "Cabinet",
  "Label": "Bedside cabinet",
  "Backtrack": ["193"],
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
  "Type": "Product",
  "Category": "Sanitaryware",
  "Genus": "Bath",
  "Label": "Bath",
  "Backtrack": ["194"],
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
  "Type": "Product",
  "Category": "Sanitaryware",
  "Genus": "WC",
  "Label": "WC",
  "Backtrack": ["194"],
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
  "Type": "Product",
  "Category": "Sanitaryware",
  "Genus": "Basin",
  "Label": "Basin",
  "Backtrack": ["194"],
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
  "Type": "Product",
  "Category": "Furniture",
  "Genus": "Cabinet",
  "Label": "Bedside cabinet",
  "Backtrack": ["195"],
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
  "Type": "Product",
  "Category": "Furniture",
  "Genus": "Bed",
  "Label": "Queen bed",
  "Backtrack": ["195"],
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
  "Type": "Product",
  "Category": "Furniture",
  "Genus": "Cabinet",
  "Label": "Bedside cabinet",
  "Backtrack": ["195"],
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
  "Type": "Product",
  "Category": "Sanitaryware",
  "Genus": "Bath",
  "Label": "Bath",
  "Backtrack": ["196"],
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
  "Type": "Product",
  "Category": "Sanitaryware",
  "Genus": "WC",
  "Label": "WC",
  "Backtrack": ["196"],
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
  "Type": "Product",
  "Category": "Sanitaryware",
  "Genus": "Basin",
  "Label": "Basin",
  "Backtrack": ["196"],
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
  "Type": "Product",
  "Category": "Furniture",
  "Genus": "Cabinet",
  "Label": "Bedside cabinet",
  "Backtrack": ["197"],
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
  "Type": "Product",
  "Category": "Furniture",
  "Genus": "Bed",
  "Label": "Queen bed",
  "Backtrack": ["197"],
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
  "Type": "Product",
  "Category": "Furniture",
  "Genus": "Cabinet",
  "Label": "Bedside cabinet",
  "Backtrack": ["197"],
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
  "Type": "Product",
  "Category": "Sanitaryware",
  "Genus": "Bath",
  "Label": "Bath",
  "Backtrack": ["198"],
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
  "Type": "Product",
  "Category": "Sanitaryware",
  "Genus": "WC",
  "Label": "WC",
  "Backtrack": ["198"],
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
  "Type": "Product",
  "Category": "Sanitaryware",
  "Genus": "Basin",
  "Label": "Basin",
  "Backtrack": ["198"],
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
  "Type": "Assembly",
  "Genus": "Floor",
  "Label": "Floor",
  "Suffix": 5,
  "Backtrack": ["10"],
  "Link": ["230","231","232","233","234"],
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
  "Type": "Assembly",
  "Genus": "Guestroom",
  "Label": "Guestroom",
  "Suffix": "1",
  "Backtrack": ["229"],
  "Link": ["235","236"],
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
  "Type": "Assembly",
  "Genus": "Guestroom",
  "Label": "Guestroom",
  "Suffix": 2,
  "Backtrack": ["229"],
  "Link": ["237","238"],
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
  "Type": "Assembly",
  "Genus": "Guestroom",
  "Label": "Guestroom",
  "Suffix": 3,
  "Backtrack": ["229"],
  "Link": ["239","240"],
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
  "Type": "Assembly",
  "Genus": "Guestroom",
  "Label": "Guestroom",
  "Suffix": 4,
  "Backtrack": ["229"],
  "Link": ["241","242"],
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
  "Type": "Assembly",
  "Genus": "Guestroom",
  "Label": "Guestroom",
  "Suffix": 5,
  "Backtrack": ["229"],
  "Link": ["243","244"],
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
  "Type": "Assembly",
  "Genus": "Interiors",
  "Label": "Bedroom",
  "Backtrack": ["230"],
  "Link": ["245"],
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
  "Type": "Assembly",
  "Genus": "Interiors",
  "Label": "Bathroom",
  "Backtrack": ["230"],
  "Link": ["246"],
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
  "Type": "Assembly",
  "Genus": "Interiors",
  "Label": "Bedroom",
  "Backtrack": ["231"],
  "Link": ["247"],
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
  "Type": "Assembly",
  "Genus": "Interiors",
  "Label": "Bathroom",
  "Backtrack": ["231"],
  "Link": ["248"],
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
  "Type": "Assembly",
  "Genus": "Interiors",
  "Label": "Bedroom",
  "Backtrack": ["232"],
  "Link": ["249"],
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
  "Type": "Assembly",
  "Genus": "Interiors",
  "Label": "Bathroom",
  "Backtrack": ["232"],
  "Link": ["250"],
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
  "Type": "Assembly",
  "Genus": "Interiors",
  "Label": "Bedroom",
  "Backtrack": ["233"],
  "Link": ["251"],
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
  "Type": "Assembly",
  "Genus": "Interiors",
  "Label": "Bathroom",
  "Backtrack": ["233"],
  "Link": ["252"],
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
  "Type": "Assembly",
  "Genus": "Interiors",
  "Label": "Bedroom",
  "Backtrack": ["234"],
  "Link": ["253"],
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
  "Type": "Assembly",
  "Genus": "Interiors",
  "Label": "Bathroom",
  "Backtrack": ["234"],
  "Link": ["254"],
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
  "Type": "Cluster",
  "Genus": "Bedset",
  "Label": "Bedset",
  "Container": "3",
  "Backtrack": ["235"],
  "Link": ["255","256","257"],
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
  "Type": "Cluster",
  "Genus": "Sanitaryware",
  "Label": "Sanitaryware",
  "Container": "4",
  "Backtrack": ["236"],
  "Link": ["258","259","260"],
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
  "Type": "Cluster",
  "Genus": "Bedset",
  "Label": "Bedset",
  "Container": "3",
  "Backtrack": ["237"],
  "Link": ["261","262","263"],
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
  "Type": "Cluster",
  "Genus": "Sanitaryware",
  "Label": "Sanitaryware",
  "Container": "4",
  "Backtrack": ["238"],
  "Link": ["264","265","266"],
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
  "Type": "Cluster",
  "Genus": "Bedset",
  "Label": "Bedset",
  "Container": "3",
  "Backtrack": ["239"],
  "Link": ["267","268","269"],
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
  "Type": "Cluster",
  "Genus": "Sanitaryware",
  "Label": "Sanitaryware",
  "Container": "4",
  "Backtrack": ["240"],
  "Link": ["270","271","272"],
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
  "Type": "Cluster",
  "Genus": "Bedset",
  "Label": "Bedset",
  "Container": "3",
  "Backtrack": ["241"],
  "Link": ["273","274","275"],
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
  "Type": "Cluster",
  "Genus": "Sanitaryware",
  "Label": "Sanitaryware",
  "Container": "4",
  "Backtrack": ["242"],
  "Link": ["276","277","278"],
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
  "Type": "Cluster",
  "Genus": "Bedset",
  "Label": "Bedset",
  "Container": "3",
  "Backtrack": ["243"],
  "Link": ["279","280","281"],
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
  "Type": "Cluster",
  "Genus": "Sanitaryware",
  "Label": "Sanitaryware",
  "Container": "4",
  "Backtrack": ["244"],
  "Link": ["282","283","284"],
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
  "Type": "Product",
  "Category": "Furniture",
  "Genus": "Cabinet",
  "Label": "Bedside cabinet",
  "Backtrack": ["245"],
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
  "Type": "Product",
  "Category": "Furniture",
  "Genus": "Bed",
  "Label": "Queen bed",
  "Backtrack": ["245"],
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
  "Type": "Product",
  "Category": "Furniture",
  "Genus": "Cabinet",
  "Label": "Bedside cabinet",
  "Backtrack": ["245"],
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
  "Type": "Product",
  "Category": "Sanitaryware",
  "Genus": "Bath",
  "Label": "Bath",
  "Backtrack": ["246"],
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
  "Type": "Product",
  "Category": "Sanitaryware",
  "Genus": "WC",
  "Label": "WC",
  "Backtrack": ["246"],
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
  "Type": "Product",
  "Category": "Sanitaryware",
  "Genus": "Basin",
  "Label": "Basin",
  "Backtrack": ["246"],
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
  "Type": "Product",
  "Category": "Furniture",
  "Genus": "Cabinet",
  "Label": "Bedside cabinet",
  "Backtrack": ["247"],
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
  "Type": "Product",
  "Category": "Furniture",
  "Genus": "Bed",
  "Label": "Queen bed",
  "Backtrack": ["247"],
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
  "Type": "Product",
  "Category": "Furniture",
  "Genus": "Cabinet",
  "Label": "Bedside cabinet",
  "Backtrack": ["247"],
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
  "Type": "Product",
  "Category": "Sanitaryware",
  "Genus": "Bath",
  "Label": "Bath",
  "Backtrack": ["248"],
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
  "Type": "Product",
  "Category": "Sanitaryware",
  "Genus": "WC",
  "Label": "WC",
  "Backtrack": ["248"],
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
  "Type": "Product",
  "Category": "Sanitaryware",
  "Genus": "Basin",
  "Label": "Basin",
  "Backtrack": ["248"],
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
  "Type": "Product",
  "Category": "Furniture",
  "Genus": "Cabinet",
  "Label": "Bedside cabinet",
  "Backtrack": ["249"],
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
  "Type": "Product",
  "Category": "Furniture",
  "Genus": "Bed",
  "Label": "Queen bed",
  "Backtrack": ["249"],
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
  "Type": "Product",
  "Category": "Furniture",
  "Genus": "Cabinet",
  "Label": "Bedside cabinet",
  "Backtrack": ["249"],
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
  "Type": "Product",
  "Category": "Sanitaryware",
  "Genus": "Bath",
  "Label": "Bath",
  "Backtrack": ["250"],
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
  "Type": "Product",
  "Category": "Sanitaryware",
  "Genus": "WC",
  "Label": "WC",
  "Backtrack": ["250"],
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
  "Type": "Product",
  "Category": "Sanitaryware",
  "Genus": "Basin",
  "Label": "Basin",
  "Backtrack": ["250"],
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
  "Type": "Product",
  "Category": "Furniture",
  "Genus": "Cabinet",
  "Label": "Bedside cabinet",
  "Backtrack": ["251"],
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
  "Type": "Product",
  "Category": "Furniture",
  "Genus": "Bed",
  "Label": "Queen bed",
  "Backtrack": ["251"],
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
  "Type": "Product",
  "Category": "Furniture",
  "Genus": "Cabinet",
  "Label": "Bedside cabinet",
  "Backtrack": ["251"],
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
  "Type": "Product",
  "Category": "Sanitaryware",
  "Genus": "Bath",
  "Label": "Bath",
  "Backtrack": ["252"],
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
  "Type": "Product",
  "Category": "Sanitaryware",
  "Genus": "WC",
  "Label": "WC",
  "Backtrack": ["252"],
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
  "Type": "Product",
  "Category": "Sanitaryware",
  "Genus": "Basin",
  "Label": "Basin",
  "Backtrack": ["252"],
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
  "Type": "Product",
  "Category": "Furniture",
  "Genus": "Cabinet",
  "Label": "Bedside cabinet",
  "Backtrack": ["253"],
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
  "Type": "Product",
  "Category": "Furniture",
  "Genus": "Bed",
  "Label": "Queen bed",
  "Backtrack": ["253"],
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
  "Type": "Product",
  "Category": "Furniture",
  "Genus": "Cabinet",
  "Label": "Bedside cabinet",
  "Backtrack": ["253"],
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
  "Type": "Product",
  "Category": "Sanitaryware",
  "Genus": "Bath",
  "Label": "Bath",
  "Backtrack": ["254"],
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
  "Type": "Product",
  "Category": "Sanitaryware",
  "Genus": "WC",
  "Label": "WC",
  "Backtrack": ["254"],
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
  "Type": "Product",
  "Category": "Sanitaryware",
  "Genus": "Basin",
  "Label": "Basin",
  "Backtrack": ["254"],
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