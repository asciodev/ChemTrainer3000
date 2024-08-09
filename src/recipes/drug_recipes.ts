const drug_recipes = {
  "space_drugs": {
    "name": "Space Drugs",
    "category": "drug",
    "id": "space_drugs",
    "path": "/datum/chemical_reaction/space_drugs",
    "result": "space_drugs",
    "required_reagents": {
      "mercury": 1,
      "sugar": 1,
      "lithium": 1
    },
    "result_amount": 3,
    "mix_message": "Slightly dizzying fumes drift from the solution.",
    "mix_sound": "sound/goonstation/misc/drinkfizz.ogg"
  },
  "crank": {
    "name": "Crank",
    "category": "drug",
    "id": "crank",
    "path": "/datum/chemical_reaction/crank",
    "result": "crank",
    "required_reagents": {
      "diphenhydramine": 1,
      "ammonia": 1,
      "lithium": 1,
      "sacid": 1,
      "fuel": 1
    },
    "result_amount": 5,
    "mix_message": "The mixture violently reacts, leaving behind a few crystalline shards.",
    "mix_sound": "sound/goonstation/effects/crystalshatter.ogg",
    "min_temp": "T0C + 100"
  },
  "krokodil": {
    "name": "Krokodil",
    "category": "drug",
    "id": "krokodil",
    "path": "/datum/chemical_reaction/krokodil",
    "result": "krokodil",
    "required_reagents": {
      "diphenhydramine": 1,
      "morphine": 1,
      "cleaner": 1,
      "potassium": 1,
      "phosphorus": 1,
      "fuel": 1
    },
    "result_amount": 6,
    "mix_message": "The mixture dries into a pale blue powder.",
    "min_temp": "T0C + 100",
    "mix_sound": "sound/goonstation/misc/fuse.ogg"
  },
  "methamphetamine": {
    "name": "methamphetamine",
    "category": "drug",
    "id": "methamphetamine",
    "path": "/datum/chemical_reaction/methamphetamine",
    "result": "methamphetamine",
    "required_reagents": {
      "ephedrine": 1,
      "iodine": 1,
      "phosphorus": 1,
      "hydrogen": 1
    },
    "result_amount": 4,
    "min_temp": "T0C + 100"
  },
  "pump_up": {
    "name": "pump up",
    "category": "drug",
    "id": "pump_up",
    "path": "/datum/chemical_reaction/pump_up",
    "result": "pump_up",
    "required_reagents": {
      "epinephrine": 1,
      "coffee": 2,
      "nicotine": 1
    },
    "result_amount": 4,
    "mix_message": "The mixture congeals into a black paste"
  },
  "bath_salts": {
    "name": "bath_salts",
    "category": "drug",
    "id": "bath_salts",
    "path": "/datum/chemical_reaction/bath_salts",
    "result": "bath_salts",
    "required_reagents": {
      "????": 1,
      "saltpetre": 1,
      "msg": 1,
      "cleaner": 1,
      "enzyme": 1,
      "sodiumchloride": 1,
      "mercury": 1
    },
    "result_amount": 6,
    "min_temp": "T0C + 100",
    "mix_message": "Tiny cubic crystals precipitate out of the mixture. Huh.",
    "mix_sound": "sound/goonstation/misc/fuse.ogg"
  },
  "mephedrone": {
    "name": "Mephedrone",
    "category": "drug",
    "id": "mephedrone",
    "path": "/datum/chemical_reaction/mephedrone",
    "result": "mephedrone",
    "required_reagents": {
      "bath_salts": 5,
      "carpotoxin": 5,
      "teslium": 5
    },
    "result_amount": 10,
    "min_temp": "T0C + 100",
    "mix_message": "The mixture fizzes into a vibrant red solution that doesn't stay still.",
    "mix_sound": "sound/goonstation/misc/fuse.ogg"
  },
  "jenkem": {
    "name": "Jenkem",
    "category": "drug",
    "id": "jenkem",
    "path": "/datum/chemical_reaction/jenkem",
    "result": "jenkem",
    "required_reagents": {
      "toiletwater": 1,
      "ammonia": 1,
      "water": 1
    },
    "result_amount": 3,
    "mix_message": "The mixture ferments into a filthy morass.",
    "mix_sound": "sound/effects/blobattack.ogg"
  },
  "aranesp": {
    "name": "Aranesp",
    "category": "drug",
    "id": "aranesp",
    "path": "/datum/chemical_reaction/aranesp",
    "result": "aranesp",
    "required_reagents": {
      "epinephrine": 1,
      "atropine": 1,
      "insulin": 1
    },
    "result_amount": 3
  },
  "happiness": {
    "name": "Happiness",
    "category": "drug",
    "id": "happiness",
    "path": "/datum/chemical_reaction/happiness",
    "result": "happiness",
    "required_reagents": {
      "space_drugs": 1,
      "nitrogen": 1,
      "oxygen": 1,
      "sacid": 2
    },
    "required_catalysts": {
      "plasma": 5
    },
    "result_amount": 5
  },
  "fliptonium": {
    "name": "fliptonium",
    "category": "drug",
    "id": "fliptonium",
    "path": "/datum/chemical_reaction/fliptonium",
    "result": "fliptonium",
    "required_reagents": {
      "ephedrine": 1,
      "liquid_dark_matter": 1,
      "chocolate": 1,
      "ginsonic": 1
    },
    "result_amount": 4,
    "mix_message": "The mixture swirls around excitedly!"
  },
  "lsd": {
    "name": "Lysergic acid diethylamide",
    "category": "drug",
    "id": "lsd",
    "path": "/datum/chemical_reaction/lsd",
    "result": "lsd",
    "required_reagents": {
      "diethylamine": 1,
      "fungus": 1
    },
    "result_amount": 3,
    "mix_message": "The mixture turns a rather unassuming color and settles."
  },
  "ultralube": {
    "name": "Ultra-Lube",
    "category": "drug",
    "id": "ultralube",
    "path": "/datum/chemical_reaction/lube/ultra",
    "result": "ultralube",
    "required_reagents": {
      "lube": 2,
      "formaldehyde": 1,
      "cryostylane": 1
    },
    "result_amount": 2,
    "mix_message": "The mixture darkens and appears to partially vaporize into a chilling aerosol."
  },
  "surge": {
    "name": "Surge",
    "category": "drug",
    "id": "surge",
    "path": "/datum/chemical_reaction/surge",
    "result": "surge",
    "required_reagents": {
      "thermite": 3,
      "uranium": 1,
      "fluorosurfactant": 1,
      "sacid": 1
    },
    "result_amount": 6,
    "mix_message": "The mixture congeals into a metallic green gel that crackles with electrical activity."
  }
};

export default drug_recipes
