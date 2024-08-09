const toxins_recipes = {
  "formaldehyde": {
    "name": "formaldehyde",
    "category": "toxins",
    "id": "formaldehyde",
    "path": "/datum/chemical_reaction/formaldehyde",
    "result": "formaldehyde",
    "required_reagents": {
      "ethanol": 1,
      "oxygen": 1,
      "silver": 1
    },
    "result_amount": 3,
    "min_temp": "T0C + 150",
    "mix_message": "Ugh, it smells like the morgue in here."
  },
  "neurotoxin2": {
    "name": "neurotoxin2",
    "category": "toxins",
    "id": "neurotoxin2",
    "path": "/datum/chemical_reaction/neurotoxin2",
    "result": "neurotoxin2",
    "required_reagents": {
      "space_drugs": 1
    },
    "result_amount": 1,
    "min_temp": "T0C + 400",
    "mix_sound": null,
    "mix_message": null
  },
  "cyanide": {
    "name": "Cyanide",
    "category": "toxins",
    "id": "cyanide",
    "path": "/datum/chemical_reaction/cyanide",
    "result": "cyanide",
    "required_reagents": {
      "oil": 1,
      "ammonia": 1,
      "oxygen": 1
    },
    "result_amount": 3,
    "min_temp": "T0C + 100",
    "mix_message": "The mixture gives off a faint scent of almonds.",
    "mix_sound": "sound/goonstation/misc/drinkfizz.ogg"
  },
  "pancuronium": {
    "name": "Pancuronium",
    "category": "toxins",
    "id": "pancuronium",
    "path": "/datum/chemical_reaction/pancuronium",
    "result": "pancuronium",
    "required_reagents": {
      "cyanide": 1,
      "bromine": 1,
      "capulettium": 1
    },
    "result_amount": 3,
    "mix_message": "The mixture deepens to a dark blue, leaving no smell."
  },
  "itching_powder": {
    "name": "Itching Powder",
    "category": "toxins",
    "id": "itching_powder",
    "path": "/datum/chemical_reaction/itching_powder",
    "result": "itching_powder",
    "required_reagents": {
      "fuel": 1,
      "ammonia": 1,
      "fungus": 1
    },
    "result_amount": 3,
    "mix_message": "The mixture congeals and dries up, leaving behind an abrasive powder.",
    "mix_sound": "sound/effects/blobattack.ogg"
  },
  "facid": {
    "name": "Fluorosulfuric Acid",
    "category": "toxins",
    "id": "facid",
    "path": "/datum/chemical_reaction/facid",
    "result": "facid",
    "required_reagents": {
      "sacid": 1,
      "fluorine": 1,
      "hydrogen": 1,
      "potassium": 1
    },
    "result_amount": 4,
    "min_temp": "T0C + 100",
    "mix_message": "The mixture deepens to a dark blue, and slowly begins to corrode its container."
  },
  "initropidril": {
    "name": "Initropidril",
    "category": "toxins",
    "id": "initropidril",
    "path": "/datum/chemical_reaction/initropidril",
    "result": "initropidril",
    "required_reagents": {
      "crank": 1,
      "histamine": 1,
      "krokodil": 1,
      "bath_salts": 1,
      "atropine": 1,
      "nicotine": 1,
      "morphine": 1
    },
    "result_amount": 4,
    "mix_message": "A sweet and sugary scent drifts from the unpleasant milky substance."
  },
  "sulfonal": {
    "name": "sulfonal",
    "category": "toxins",
    "id": "sulfonal",
    "path": "/datum/chemical_reaction/sulfonal",
    "result": "sulfonal",
    "required_reagents": {
      "acetone": 1,
      "diethylamine": 1,
      "sulfur": 1
    },
    "result_amount": 3,
    "mix_message": "The mixture gives off quite a stench.",
    "mix_sound": "sound/goonstation/misc/drinkfizz.ogg"
  },
  "lipolicide": {
    "name": "lipolicide",
    "category": "toxins",
    "id": "lipolicide",
    "path": "/datum/chemical_reaction/lipolicide",
    "result": "lipolicide",
    "required_reagents": {
      "mercury": 1,
      "diethylamine": 1,
      "ephedrine": 1
    },
    "result_amount": 3
  },
  "sarin": {
    "name": "sarin",
    "category": "toxins",
    "id": "sarin",
    "path": "/datum/chemical_reaction/sarin",
    "result": "sarin",
    "required_reagents": {
      "chlorine": 1,
      "fuel": 1,
      "oxygen": 1,
      "phosphorus": 1,
      "fluorine": 1,
      "hydrogen": 1,
      "acetone": 1,
      "atrazine": 1
    },
    "result_amount": 3,
    "mix_message": "The mixture yields a colorless, odorless liquid.",
    "min_temp": "T0C + 100",
    "mix_sound": "sound/goonstation/misc/drinkfizz.ogg"
  },
  "glyphosate": {
    "name": "glyphosate",
    "category": "toxins",
    "id": "glyphosate",
    "path": "/datum/chemical_reaction/glyphosate",
    "result": "glyphosate",
    "required_reagents": {
      "chlorine": 1,
      "phosphorus": 1,
      "formaldehyde": 1,
      "ammonia": 1
    },
    "result_amount": 4
  },
  "atrazine": {
    "name": "atrazine",
    "category": "toxins",
    "id": "atrazine",
    "path": "/datum/chemical_reaction/atrazine",
    "result": "atrazine",
    "required_reagents": {
      "chlorine": 1,
      "hydrogen": 1,
      "nitrogen": 1
    },
    "result_amount": 3,
    "mix_message": "The mixture gives off a harsh odor"
  },
  "pestkiller": {
    "name": "Pest Killer",
    "category": "toxins",
    "id": "pestkiller",
    "path": "/datum/chemical_reaction/pestkiller",
    "result": "pestkiller",
    "required_reagents": {
      "toxin": 1,
      "ethanol": 4
    },
    "result_amount": 5,
    "mix_message": "The mixture gives off a harsh odor"
  },
  "capulettium": {
    "name": "capulettium",
    "category": "toxins",
    "id": "capulettium",
    "path": "/datum/chemical_reaction/capulettium",
    "result": "capulettium",
    "required_reagents": {
      "neurotoxin2": 1,
      "chlorine": 1,
      "hydrogen": 1
    },
    "result_amount": 1,
    "mix_message": "The smell of death wafts up from the solution."
  },
  "capulettium_plus": {
    "name": "capulettium_plus",
    "category": "toxins",
    "id": "capulettium_plus",
    "path": "/datum/chemical_reaction/capulettium_plus",
    "result": "capulettium_plus",
    "required_reagents": {
      "capulettium": 1,
      "ephedrine": 1,
      "methamphetamine": 1
    },
    "result_amount": 3,
    "mix_message": "The solution begins to slosh about violently by itself."
  },
  "Teslium": {
    "name": "Teslium",
    "category": "toxins",
    "id": "teslium",
    "path": "/datum/chemical_reaction/teslium",
    "result": "teslium",
    "required_reagents": {
      "plasma": 1,
      "silver": 1,
      "blackpowder": 1
    },
    "result_amount": 3,
    "mix_message": "<span class='danger'>A jet of sparks flies from the mixture as it merges into a flickering slurry.</span>",
    "min_temp": "T0C + 50",
    "mix_sound": null
  },
  "mutagen": {
    "name": "Unstable mutagen",
    "category": "toxins",
    "id": "mutagen",
    "path": "/datum/chemical_reaction/mutagen",
    "result": "mutagen",
    "required_reagents": {
      "radium": 1,
      "plasma": 1,
      "chlorine": 1
    },
    "result_amount": 3,
    "mix_message": "The substance turns neon green and bubbles unnervingly."
  },
  "Rotatium": {
    "name": "Rotatium",
    "category": "toxins",
    "id": "Rotatium",
    "path": "/datum/chemical_reaction/rotatium",
    "result": "rotatium",
    "required_reagents": {
      "lsd": 1,
      "teslium": 1,
      "methamphetamine": 1
    },
    "result_amount": 3,
    "mix_message": "<span class='danger'>After sparks, fire, and the smell of LSD, the mix is constantly spinning with no stop in sight.</span>"
  }
}


export default toxins_recipes
