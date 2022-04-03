export let mset = {
  "Product":{
    "required":["Name","Size","Source"],   
    "option":["Rotation","Alignment","Margin"]
  },
  "Cluster":{
   "option":{
    "Footprint":["All","Focus"]
    }
  },
  "All":["Handing"],
  "layers":{},
  "camera":{
    "type": "Orthographic",
    "position": {
      "Orthographic": [0,1,-300],
      "Perspective": [-300,300,300 ]
    }
  },
  "view":{
    "Top":[0,1,0],
    "Bottom":[0,-1,0],
    "Front":[0,0,1],
    "Back":[0,0,-1],
    "Left":[-1,0,0],
    "Right":[1,0,0]
  }
}