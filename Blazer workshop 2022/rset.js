rset = {
"Explainer": {
  "location": "public internet cloud",
  "format": "machine/human readable JavaScript Object Notation",
  "purpose": "classified recyclable word store",
  "use": {
    "nset": "use and expansion of key/value couplets",
    "online exchange": "registration for interactive analyses"
  },
  "Keys": {
    "system": "preset",
    "extensions": "unlimited"
  },
  "saving": "subject to R&D"
},
"keys": {
  "explainer": "System couplers come with a ListHead (e.g Design) so action restricted to purging sets marked for deletion (confirmation process needed). Products are end of trail so cannot add ListHead. ListItem adds single editable item to list started with a ListHead; cloner provides options for cloning complete hierarchy of successors; key opens options for adding assemblerKeys, aspects and devices; number renumbers from selection to end of lists with toggling ascending/descending; Delete removes node id from link and marks all successors as deleted for system review and purge",
  "Type": ["Assembly","Grouping","Crosslink","Product"],
  "action": {
    "Coupler": ["Purge","ListItem","Clone","Crosslink","Delete","Number","Aspect"],
    "Product": ["ListItem","Clone","Crosslink","Delete","Number","Aspect","Backtrack"],
    "Assembly": ["ListItem","Clone","ListHead","Crosslink","Delete","Number","Aspect","Backtrack"]
  }
},
"extensions": {
  "explainer": "base asemblerKeys (../Assembler/asemblerKeys.json) are auto added (overwritten if already included here). This store adds specialist contexts and labels to Type asemblerKeys. It also adds specialist asemblerKeys with values for different Types ... e.g. Duration > Assembly relates to physical progress, Duration > Product relates to a time period before delivery (for example)",
  "Genus": {
    "Assembly": ["Project","Building","Floor","Tower","Space"],
    "Product": ["Bed","Bath","WC","Shower"],
    "Logistics": ["Start","Finish","Duration"],
    "Competence": ["Design"]
  },
  "Label": {
    "Site": ["Site","External works"],
    "Building": ["Floors"],
    "Element": ["Elements"],
    "Assembly": ["Project","Building","Floor","Tower"],
    "Space":["Bedroom","Bathroom"],
    "Product": ["Basin"],
    "Aspect": ["Design"]
  },
  "Suffix": {
    "Assembly": [1],
    "Guestroom": [1,2,3,4,5]
  },
  "shared": {
    "Dims": {
      "Assembly": [[3300,4800,3800]]
    }
  },
  "Design": {
    "Rotation": [[0,0,0]]
  },
  "Timing": {
    "Start": {
      "Assembly": [[28,9,2016],[29,9,2016],[28,10,2016]]
    },
    "Finish": {
      "Assembly": [[28,9,2016],[30,9,2016]]
    },
    "Duration": {
      "Assembly": [["12 weeks"]]
    }
  }
}
}