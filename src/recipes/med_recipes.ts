const med_recipes = {
  "hydrocodone": {
    "name": "Hydrocodone",
    "category": "med",
    "id": "hydrocodone",
    "path": "/datum/chemical_reaction/hydrocodone",
    "result": "hydrocodone",
    "required_reagents": {
      "morphine": 1,
      "sacid": 1,
      "water": 1,
      "oil": 1
    },
    "result_amount": 2
  },
  "mitocholide": {
    "name": "mitocholide",
    "category": "med",
    "id": "mitocholide",
    "path": "/datum/chemical_reaction/mitocholide",
    "result": "mitocholide",
    "required_reagents": {
      "synthflesh": 1,
      "cryoxadone": 1,
      "plasma": 1
    },
    "result_amount": 3
  },
  "cryoxadone": {
    "name": "Cryoxadone",
    "category": "med",
    "id": "cryoxadone",
    "path": "/datum/chemical_reaction/cryoxadone",
    "result": "cryoxadone",
    "required_reagents": {
      "cryostylane": 1,
      "plasma": 1,
      "acetone": 1,
      "mutagen": 1
    },
    "result_amount": 4,
    "mix_message": "The solution bubbles softly.",
    "mix_sound": "sound/goonstation/misc/drinkfizz.ogg"
  },
  "spaceacillin": {
    "name": "Spaceacillin",
    "category": "med",
    "id": "spaceacillin",
    "path": "/datum/chemical_reaction/spaceacillin",
    "result": "spaceacillin",
    "required_reagents": {
      "fungus": 1,
      "ethanol": 1
    },
    "result_amount": 2,
    "mix_message": "The solvent extracts an antibiotic compound from the fungus."
  },
  "rezadone": {
    "name": "Rezadone",
    "category": "med",
    "id": "rezadone",
    "path": "/datum/chemical_reaction/rezadone",
    "result": "rezadone",
    "required_reagents": {
      "carpotoxin": 1,
      "spaceacillin": 1,
      "copper": 1
    },
    "result_amount": 3
  },
  "sterilizine": {
    "name": "Sterilizine",
    "category": "med",
    "id": "sterilizine",
    "path": "/datum/chemical_reaction/sterilizine",
    "result": "sterilizine",
    "required_reagents": {
      "antihol": 2,
      "chlorine": 1
    },
    "result_amount": 3
  },
  "charcoal": {
    "name": "Charcoal",
    "category": "med",
    "id": "charcoal",
    "path": "/datum/chemical_reaction/charcoal",
    "result": "charcoal",
    "required_reagents": {
      "ash": 1,
      "sodiumchloride": 5
    },
    "result_amount": 6,
    "mix_message": "The mixture yields a fine black powder.",
    "min_temp": "T0C + 100",
    "mix_sound": "sound/goonstation/misc/fuse.ogg"
  },
  "silver_sulfadiazine": {
    "name": "Silver Sulfadiazine",
    "category": "med",
    "id": "silver_sulfadiazine",
    "path": "/datum/chemical_reaction/silver_sulfadiazine",
    "result": "silver_sulfadiazine",
    "required_reagents": {
      "ammonia": 1,
      "silver": 1,
      "sulfur": 1,
      "oxygen": 1,
      "chlorine": 1
    },
    "result_amount": 5,
    "mix_message": "A strong and cloying odor begins to bubble from the mixture.",
    "mix_sound": "sound/goonstation/misc/drinkfizz.ogg"
  },
  "salglu_solution": {
    "name": "Saline-Glucose Solution",
    "category": "med",
    "id": "salglu_solution",
    "path": "/datum/chemical_reaction/salglu_solution",
    "result": "salglu_solution",
    "required_reagents": {
      "sodiumchloride": 1,
      "water": 1,
      "sugar": 1
    },
    "result_amount": 3
  },
  "Heparin": {
    "name": "Heparin",
    "category": "med",
    "id": "Heparin",
    "path": "/datum/chemical_reaction/heparin",
    "result": "heparin",
    "required_reagents": {
      "sugar": 1,
      "meatslurry": 1,
      "phenol": 1,
      "sacid": 1
    },
    "result_amount": 2
  },
  "synthflesh": {
    "name": "Synthflesh",
    "category": "med",
    "id": "synthflesh",
    "path": "/datum/chemical_reaction/synthflesh",
    "result": "synthflesh",
    "required_reagents": {
      "blood": 1,
      "carbon": 1,
      "styptic_powder": 1
    },
    "result_amount": 3,
    "mix_message": "The mixture knits together into a fibrous, bloody mass.",
    "mix_sound": "sound/effects/blobattack.ogg"
  },
  "styptic_powder": {
    "name": "Styptic Powder",
    "category": "med",
    "id": "styptic_powder",
    "path": "/datum/chemical_reaction/styptic_powder",
    "result": "styptic_powder",
    "required_reagents": {
      "aluminum": 1,
      "hydrogen": 1,
      "oxygen": 1,
      "sacid": 1
    },
    "result_amount": 4,
    "mix_message": "The solution yields an astringent powder."
  },
  "calomel": {
    "name": "Calomel",
    "category": "med",
    "id": "calomel",
    "path": "/datum/chemical_reaction/calomel",
    "result": "calomel",
    "required_reagents": {
      "mercury": 1,
      "chlorine": 1
    },
    "result_amount": 2,
    "min_temp": "T0C + 100",
    "mix_message": "Stinging vapors rise from the solution."
  },
  "potass_iodide": {
    "name": "Potassium Iodide",
    "category": "med",
    "id": "potass_iodide",
    "path": "/datum/chemical_reaction/potass_iodide",
    "result": "potass_iodide",
    "required_reagents": {
      "potassium": 1,
      "iodine": 1
    },
    "result_amount": 2,
    "mix_message": "The solution settles calmly and emits gentle fumes."
  },
  "pen_acid": {
    "name": "Pentetic Acid",
    "category": "med",
    "id": "pen_acid",
    "path": "/datum/chemical_reaction/pen_acid",
    "result": "pen_acid",
    "required_reagents": {
      "fuel": 1,
      "chlorine": 1,
      "ammonia": 1,
      "formaldehyde": 1,
      "sodium": 1,
      "cyanide": 1
    },
    "result_amount": 6,
    "mix_message": "The substance becomes very still, emitting a curious haze."
  },
  "sal_acid": {
    "name": "Salicyclic Acid",
    "category": "med",
    "id": "sal_acid",
    "path": "/datum/chemical_reaction/sal_acid",
    "result": "sal_acid",
    "required_reagents": {
      "sodium": 1,
      "phenol": 1,
      "carbon": 1,
      "oxygen": 1,
      "sacid": 1
    },
    "result_amount": 5,
    "mix_message": "The mixture crystallizes.",
    "mix_sound": "sound/goonstation/misc/drinkfizz.ogg"
  },
  "salbutamol": {
    "name": "Salbutamol",
    "category": "med",
    "id": "salbutamol",
    "path": "/datum/chemical_reaction/salbutamol",
    "result": "salbutamol",
    "required_reagents": {
      "sal_acid": 1,
      "lithium": 1,
      "aluminum": 1,
      "bromine": 1,
      "ammonia": 1
    },
    "result_amount": 5,
    "mix_message": "The solution bubbles freely, creating a head of bluish foam.",
    "mix_sound": "sound/goonstation/misc/drinkfizz.ogg"
  },
  "perfluorodecalin": {
    "name": "Perfluorodecalin",
    "category": "med",
    "id": "perfluorodecalin",
    "path": "/datum/chemical_reaction/perfluorodecalin",
    "result": "perfluorodecalin",
    "required_reagents": {
      "hydrogen": 1,
      "fluorine": 1,
      "oil": 1
    },
    "result_amount": 3,
    "min_temp": "T0C + 100",
    "mix_message": "The mixture rapidly turns into a dense pink liquid.",
    "mix_sound": "sound/goonstation/misc/drinkfizz.ogg"
  },
  "ephedrine": {
    "name": "Ephedrine",
    "category": "med",
    "id": "ephedrine",
    "path": "/datum/chemical_reaction/ephedrine",
    "result": "ephedrine",
    "required_reagents": {
      "sugar": 1,
      "oil": 1,
      "hydrogen": 1,
      "diethylamine": 1
    },
    "result_amount": 4,
    "mix_message": "The solution fizzes and gives off toxic fumes."
  },
  "diphenhydramine": {
    "name": "Diphenhydramine",
    "category": "med",
    "id": "diphenhydramine",
    "path": "/datum/chemical_reaction/diphenhydramine",
    "result": "diphenhydramine",
    "required_reagents": {
      "oil": 1,
      "carbon": 1,
      "bromine": 1,
      "diethylamine": 1,
      "ethanol": 1
    },
    "result_amount": 4,
    "mix_message": "The mixture fizzes gently.",
    "mix_sound": "sound/goonstation/misc/drinkfizz.ogg"
  },
  "oculine": {
    "name": "Oculine",
    "category": "med",
    "id": "oculine",
    "path": "/datum/chemical_reaction/oculine",
    "result": "oculine",
    "required_reagents": {
      "atropine": 1,
      "spaceacillin": 1,
      "salglu_solution": 1
    },
    "result_amount": 3,
    "mix_message": "The mixture settles, becoming a milky white."
  },
  "atropine": {
    "name": "Atropine",
    "category": "med",
    "id": "atropine",
    "path": "/datum/chemical_reaction/atropine",
    "result": "atropine",
    "required_reagents": {
      "ethanol": 1,
      "acetone": 1,
      "diethylamine": 1,
      "phenol": 1,
      "sacid": 1
    },
    "result_amount": 5,
    "mix_message": "A horrid smell like something died drifts from the mixture."
  },
  "epinephrine": {
    "name": "Epinephrine",
    "category": "med",
    "id": "epinephrine",
    "path": "/datum/chemical_reaction/epinephrine",
    "result": "epinephrine",
    "required_reagents": {
      "phenol": 1,
      "acetone": 1,
      "diethylamine": 1,
      "oxygen": 1,
      "chlorine": 1,
      "hydrogen": 1
    },
    "result_amount": 6,
    "mix_message": "Tiny white crystals precipitate out of the solution.",
    "mix_sound": "sound/goonstation/misc/drinkfizz.ogg"
  },
  "lazarus_reagent": {
    "name": "Lazarus Reagent",
    "category": "med",
    "id": "lazarus_reagent",
    "path": "/datum/chemical_reaction/lazarus_reagent",
    "result": "lazarus_reagent",
    "required_reagents": {
      "omnizine": 1,
      "holywater": 1,
      "mutagen": 1
    },
    "result_amount": 3,
    "mix_message": "The substance begins moving on its own somehow."
  },
  "life": {
    "name": "Life",
    "category": "med",
    "id": "life",
    "path": "/datum/chemical_reaction/life",
    "result": null,
    "required_reagents": {
      "lazarus_reagent": 1,
      "synthflesh": 1,
      "blood": 1
    },
    "result_amount": 1,
    "min_temp": "T0C + 100"
  },
  "life_friendly": {
    "name": "Life (Friendly)",
    "category": "med",
    "id": "life_friendly",
    "path": "/datum/chemical_reaction/life/friendly",
    "required_reagents": {
      "lazarus_reagent": 1,
      "synthflesh": 1,
      "sugar": 1
    }
  },
  "sanguine_reagent": {
    "name": "Sanguine Reagent",
    "category": "med",
    "id": "sanguine_reagent",
    "path": "/datum/chemical_reaction/sanguine_reagent",
    "result": "sanguine_reagent",
    "required_reagents": {
      "omnizine": 1,
      "synthflesh": 2,
      "iron": 2
    },
    "result_amount": 5,
    "mix_message": "The mixture bubbles furiously for a moment, then condenses into a sanguine gel."
  },
  "osseous_reagent": {
    "name": "Osseous Reagent",
    "category": "med",
    "id": "osseous_reagent",
    "path": "/datum/chemical_reaction/osseous_reagent",
    "result": "osseous_reagent",
    "required_reagents": {
      "milk": 1,
      "potassium": 1,
      "oxygen": 4,
      "phenol": 3,
      "formaldehyde": 3
    },
    "result_amount": 12,
    "mix_message": "Shards of a bone-like substance start to form in the liquid."
  },
  "mannitol": {
    "name": "Mannitol",
    "category": "med",
    "id": "mannitol",
    "path": "/datum/chemical_reaction/mannitol",
    "result": "mannitol",
    "required_reagents": {
      "sugar": 1,
      "hydrogen": 1,
      "water": 1
    },
    "result_amount": 3,
    "mix_message": "The mixture bubbles slowly, making a slightly sweet odor."
  },
  "mutadone": {
    "name": "Mutadone",
    "category": "med",
    "id": "mutadone",
    "path": "/datum/chemical_reaction/mutadone",
    "result": "mutadone",
    "required_reagents": {
      "mutagen": 1,
      "acetone": 1,
      "bromine": 1
    },
    "result_amount": 3,
    "mix_message": "A foul astringent liquid emerges from the reaction."
  },
  "antihol": {
    "name": "antihol",
    "category": "med",
    "id": "antihol",
    "path": "/datum/chemical_reaction/antihol",
    "result": "antihol",
    "required_reagents": {
      "ethanol": 1,
      "charcoal": 1
    },
    "result_amount": 2,
    "mix_message": "A minty and refreshing smell drifts from the effervescent mixture.",
    "mix_sound": "sound/goonstation/misc/drinkfizz.ogg"
  },
  "teporone": {
    "name": "Teporone",
    "category": "med",
    "id": "teporone",
    "path": "/datum/chemical_reaction/teporone",
    "result": "teporone",
    "required_reagents": {
      "acetone": 1,
      "silicon": 1,
      "plasma": 1
    },
    "result_amount": 2,
    "mix_message": "The mixture turns an odd lavender color.",
    "mix_sound": "sound/goonstation/misc/drinkfizz.ogg"
  },
  "haloperidol": {
    "name": "Haloperidol",
    "category": "med",
    "id": "haloperidol",
    "path": "/datum/chemical_reaction/haloperidol",
    "result": "haloperidol",
    "required_reagents": {
      "chlorine": 1,
      "fluorine": 1,
      "aluminum": 1,
      "potass_iodide": 1,
      "oil": 1
    },
    "result_amount": 4,
    "mix_message": "The chemicals mix into an odd pink slush."
  },
  "ether": {
    "name": "Ether",
    "category": "med",
    "id": "ether",
    "path": "/datum/chemical_reaction/ether",
    "result": "ether",
    "required_reagents": {
      "sacid": 1,
      "ethanol": 1,
      "oxygen": 1
    },
    "result_amount": 1,
    "mix_message": "The mixture yields a pungent odor, which makes you tired."
  },
  "degreaser": {
    "name": "Degreaser",
    "category": "med",
    "id": "degreaser",
    "path": "/datum/chemical_reaction/degreaser",
    "result": "degreaser",
    "required_reagents": {
      "oil": 1,
      "sterilizine": 1
    },
    "result_amount": 2
  },
  "liquid_solder": {
    "name": "Liquid Solder",
    "category": "med",
    "id": "liquid_solder",
    "path": "/datum/chemical_reaction/liquid_solder",
    "result": "liquid_solder",
    "required_reagents": {
      "ethanol": 1,
      "copper": 1,
      "silver": 1
    },
    "result_amount": 3,
    "min_temp": "T0C + 100",
    "mix_message": "The solution gently swirls with a metallic sheen."
  },
  "menthol": {
    "name": "Menthol",
    "category": "med",
    "id": "menthol",
    "path": "/datum/chemical_reaction/menthol",
    "result": "menthol",
    "required_reagents": {
      "mint": 1,
      "ethanol": 1
    },
    "result_amount": 1,
    "mix_sound": "sound/goonstation/misc/drinkfizz.ogg",
    "min_temp": "T0C + 50",
    "mix_message": "Large white crystals precipitate out of the mixture."
  }
}

export default med_recipes
