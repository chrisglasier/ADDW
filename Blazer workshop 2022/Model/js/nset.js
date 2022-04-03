export let nset = {
"1": {
  "Type": "Assembly",
  "Genus": "Floor",
  "Label": "Floor",
  "Suffix": 1,
  "Backtrack": ["10"],
  "link": ["2"],
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
  "Type": "Assembly",
  "Genus": "Interiors",
  "Label": "Bedroom",
  "Backtrack": ["2"],
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
  "Type": "Assembly",
  "Genus": "Interiors",
  "Label": "Bathroom",
  "Backtrack": ["2"],
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
  "shared": {
    
  },
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
  "link": ["14","7","15"],
  "index": 1,
  "Design": {
    "Size": "shared",
    "Footprint":{
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
  "Label": "Tower",
  "Backtrack": ["Hotel"],
  "link": ["1"],
  "index": 0,
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
},"16": {
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
"Couplers": {
  "Label": "Couplers",
  "Type": "System",
  "Genus": "Dev",
  "Store": "couplers",
  "link": ["Hotel","Elements"],
  "index": 0
},
"Hotel": {
  "Label": "Hotel",
  "Type": "Coupler",
  "Genus": "Dev",
  "Address": {
    "Country": "shared",
    "Town": "shared",
    "District": "Colombo 07",
    "Street": "Gregory's Road",
    "No": "73"
  },
  "Backtrack": ["Couplers"],
  "link": ["10"],
  "Crosslink": ["11"],
  "shared": {
    "Country": "Sri Lanka",
    "Town": "Colombo",
    "Size": [4900,3633,2070]
  },
  "Bookings": {
    "Town": "shared",
    "Country": "shared",
    "District": "CBD",
    "Clientele": "Business",
    "Stars": "*****(5)"
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
      "zIndex": "0",
      "factor": 2,
      "update": "true"
    }
  },
  "index": 0,
  "clode": "Hotel",
  "Housekeeping": {
    "Test1": "Fail",
    "Test2": "Pass"
  }
},

"Elements":{
  "Label": "Elements",
  "Type": "System",
  "Genus": "Dev",
  "Backtrack": ["Couplers"],
  "link" : ["e1"],
  "index": 2
},
 "e1": {
  "Type": "Product",
  "Category": "Wall",
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
  "Genus": "Dev",
  "Comment": "display options",
  "font": {
    "family": "arial",
    "size": "15px"
  },
  "dims": {
    "rh": 24,
    "cw": 0.5,
    "bh": 360,
    "bw": 300,
    "foc": 0.5
  },
  "colors": {
    "Atrail": ["rgb(233,245,233)"],
    "Backtrack": ["rgb(245,245,182)","rgb(160,82,45)"],
    "Assembler": ["rgb(240,240,240)"],
    "Body": ["rgb(255,255,255)","rgb(0,0,0)"],
    "Device": ["rgba(233,245,233,0.5)","rgb(0,118,119)"],
    "Faded": [null,"rgb(180,180,180)"],
    "Footer": ["rgb(180,180,180)"],
    "Tag  ": ["rgba(182,245,245,0.5)","rgb(0,0,200)"],
    "Crosslink": ["rgb(245,245,182)","rgb(160,82,45)"],
    "Key": ["rgba(182,245,182,0.5)","rgb(0,118,119)"],
    "link": ["rgba(245,245,182,0.5)","rgb(160,82,45)"],
    "Link1": ["rgba(233,233,182,0.5)","rgb(160,82,45)"],
    "Link2": ["rgba(233,233,182,0.5)","rgb(160,82,45)"],
    "Manager": ["rgba(182,220,182,0.5)","rgb(0,118,119)"],
    "Monitor": ["rgb(182,220,182)","rgb(0,118,119)"],
    "Monitor1": ["rgb(255,230,225)","rgb(255,80,230)"],
    "Mons": ["rgb(180,180,180)"],
    "Name": ["rgb(235,235,235)","rgb(0,0,0)"],
    "On": ["rgb(255,230,230)","rgb(0,0,0)"],
    "Option": ["rgb(225,244,244)","rgb(0,0,200)"],
    "Trail": ["rgb(235,235,235)","rgb(0,0,0)"],
    "BarH": ["rgb(65,105,225)","rgb(255,255,255)"],
    "BarL": ["rgb(176,196,222)","rgb(255,255,255)"],
    "BarS": ["rgb(119,136,153)","rgb(255,255,255)"]
  }
},
"cfig": {
  "Genus": "Dev",
  "Comment": "Running variables",
  "aTrail": {
    "device": ["Housekeeping"],
    "location": "lw1",
    "key": "Size",
    "aspect": "design",
    "manager": "Design",
    "fun": "Clone"
  },
  "coupled": "Hotel",
  "monitor": "Hotel-0",
  "links": false,
  "node": "13",
  "nTrail": ["Couplers","Hotel","10","1","2","4","8","13"],
  "space": true,
  "toggle": ["Aspects","Name"],
  "trail": ["Couplers","Hotel","10","1","2","4","8","13"],
  "layer": {
    "1": ["m12","m13"]
  },
  "crosslink": {},
  "trace": {
    "list": {
      "Method": true,
      "Owner": true,
      "Coder": true,
      "Code": false
    },
    "active": "domArr",
    "start": ["setup","setWins","setWin","barColors"],
    "array": []
  },
  "tgt": "http://localhost"
},
"monitors": {
  "Genus": "Dev",
  "trail": ["Automation-0","Views","Hide"],
  "list": ["New","Hotel-0","Sets-nset","Automation-0"],
  "menu": ["Save","Publish","Monitors"],
  "Action": ["Hide","Remove"],
  "New": ["Model"]
}
}