const misc_recipes = {
  "foam surfactant": {
    "name": "Foam surfactant",
    "category": "misc",
    "id": "foam surfactant",
    "path": "/datum/chemical_reaction/surfactant",
    "result": "fluorosurfactant",
    "required_reagents": {
      "fluorine": 2,
      "carbon": 2,
      "sacid": 1
    },
    "result_amount": 5,
    "mix_message": "A head of foam results from the mixture's constant fizzing."
  },
  "foam": {
    "name": "Foam",
    "category": "misc",
    "id": "foam",
    "path": "/datum/chemical_reaction/foam",
    "result": null,
    "required_reagents": {
      "fluorosurfactant": 1,
      "water": 1
    },
    "result_amount": 2
  },
  "metalfoam": {
    "name": "Metal Foam",
    "category": "misc",
    "id": "metalfoam",
    "path": "/datum/chemical_reaction/metalfoam",
    "result": null,
    "required_reagents": {
      "aluminum": 3,
      "fluorosurfactant": 1,
      "sacid": 1
    },
    "result_amount": 5
  },
  "ironlfoam": {
    "name": "Iron Foam",
    "category": "misc",
    "id": "ironlfoam",
    "path": "/datum/chemical_reaction/ironfoam",
    "result": null,
    "required_reagents": {
      "iron": 3,
      "fluorosurfactant": 1,
      "sacid": 1
    },
    "result_amount": 5
  },
  "ammonia": {
    "name": "Ammonia",
    "category": "misc",
    "id": "ammonia",
    "path": "/datum/chemical_reaction/ammonia",
    "result": "ammonia",
    "required_reagents": {
      "hydrogen": 3,
      "nitrogen": 1
    },
    "result_amount": 3,
    "mix_message": "The mixture bubbles, emitting an acrid reek."
  },
  "diethylamine": {
    "name": "Diethylamine",
    "category": "misc",
    "id": "diethylamine",
    "path": "/datum/chemical_reaction/diethylamine",
    "result": "diethylamine",
    "required_reagents": {
      "ammonia": 1,
      "ethanol": 1
    },
    "result_amount": 2,
    "min_temp": "T0C + 100",
    "mix_message": "A horrible smell pours forth from the mixture."
  },
  "cleaner": {
    "name": "Space cleaner",
    "category": "misc",
    "id": "cleaner",
    "path": "/datum/chemical_reaction/space_cleaner",
    "result": "cleaner",
    "required_reagents": {
      "ammonia": 1,
      "water": 1,
      "ethanol": 1
    },
    "result_amount": 3,
    "mix_message": "Ick, this stuff really stinks. Sure does make the container sparkle though!"
  },
  "sacid": {
    "name": "Sulfuric Acid",
    "category": "misc",
    "id": "sacid",
    "path": "/datum/chemical_reaction/sulfuric_acid",
    "result": "sacid",
    "required_reagents": {
      "sulfur": 1,
      "oxygen": 1,
      "hydrogen": 1
    },
    "result_amount": 2,
    "mix_message": "The mixture gives off a sharp acidic tang."
  },
  "plastic_polymers": {
    "name": "plastic polymers",
    "category": "misc",
    "id": "plastic_polymers",
    "path": "/datum/chemical_reaction/plastic_polymers",
    "result": null,
    "required_reagents": {
      "oil": 5,
      "sacid": 2,
      "ash": 3
    },
    "min_temp": "T0C + 100",
    "result_amount": 10
  },
  "lube": {
    "name": "Space Lube",
    "category": "misc",
    "id": "lube",
    "path": "/datum/chemical_reaction/lube",
    "result": "lube",
    "required_reagents": {
      "water": 1,
      "silicon": 1,
      "oxygen": 1
    },
    "result_amount": 3,
    "mix_message": "The substance turns a striking cyan and becomes oily."
  },
  "holywater": {
    "name": "Holy Water",
    "category": "misc",
    "id": "holywater",
    "path": "/datum/chemical_reaction/holy_water",
    "result": "holywater",
    "required_reagents": {
      "water": 1,
      "mercury": 1,
      "wine": 1
    },
    "result_amount": 3,
    "mix_message": "The water somehow seems purified. Or maybe defiled."
  },
  "drying_agent": {
    "name": "Drying agent",
    "category": "misc",
    "id": "drying_agent",
    "path": "/datum/chemical_reaction/drying_agent",
    "result": "drying_agent",
    "required_reagents": {
      "plasma": 2,
      "ethanol": 1,
      "sodium": 1
    },
    "result_amount": 3
  },
  "saltpetre": {
    "name": "saltpetre",
    "category": "misc",
    "id": "saltpetre",
    "path": "/datum/chemical_reaction/saltpetre",
    "result": "saltpetre",
    "required_reagents": {
      "potassium": 1,
      "nitrogen": 1,
      "oxygen": 3
    },
    "result_amount": 3,
    "mix_sound": "sound/goonstation/misc/fuse.ogg"
  },
  "acetone": {
    "name": "acetone",
    "category": "misc",
    "id": "acetone",
    "path": "/datum/chemical_reaction/acetone",
    "result": "acetone",
    "required_reagents": {
      "oil": 1,
      "fuel": 1,
      "oxygen": 1
    },
    "result_amount": 3,
    "mix_message": "The smell of paint thinner assaults you as the solution bubbles."
  },
  "carpet": {
    "name": "carpet",
    "category": "misc",
    "id": "carpet",
    "path": "/datum/chemical_reaction/carpet",
    "result": "carpet",
    "required_reagents": {
      "fungus": 1,
      "blood": 1
    },
    "result_amount": 2,
    "mix_message": "The substance turns thick and stiff, yet soft."
  },
  "oil": {
    "name": "Oil",
    "category": "misc",
    "id": "oil",
    "path": "/datum/chemical_reaction/oil",
    "result": "oil",
    "required_reagents": {
      "fuel": 1,
      "carbon": 1,
      "hydrogen": 1
    },
    "result_amount": 3,
    "mix_message": "An iridescent black chemical forms in the container."
  },
  "phenol": {
    "name": "phenol",
    "category": "misc",
    "id": "phenol",
    "path": "/datum/chemical_reaction/phenol",
    "result": "phenol",
    "required_reagents": {
      "water": 1,
      "chlorine": 1,
      "oil": 1
    },
    "result_amount": 3,
    "mix_message": "The mixture bubbles and gives off an unpleasant medicinal odor.",
    "mix_sound": "sound/goonstation/misc/drinkfizz.ogg"
  },
  "colorful_reagent": {
    "name": "colorful_reagent",
    "category": "misc",
    "id": "colorful_reagent",
    "path": "/datum/chemical_reaction/colorful_reagent",
    "result": "colorful_reagent",
    "required_reagents": {
      "plasma": 1,
      "radium": 1,
      "space_drugs": 1,
      "cryoxadone": 1,
      "triple_citrus": 1,
      "stabilizing_agent": 1
    },
    "result_amount": 6,
    "mix_message": "The substance flashes multiple colors and emits the smell of a pocket protector."
  },
  "corgium": {
    "name": "corgium",
    "category": "misc",
    "id": "corgium",
    "path": "/datum/chemical_reaction/corgium",
    "result": null,
    "required_reagents": {
      "nutriment": 1,
      "colorful_reagent": 1,
      "lazarus_reagent": 1,
      "blood": 1
    },
    "result_amount": 3,
    "min_temp": "T0C + 100"
  },
  "flaptonium": {
    "name": "Flaptonium",
    "category": "misc",
    "id": "flaptonium",
    "path": "/datum/chemical_reaction/flaptonium",
    "result": null,
    "required_reagents": {
      "egg": 1,
      "colorful_reagent": 1,
      "chicken_soup": 1,
      "lazarus_reagent": 1,
      "blood": 1
    },
    "result_amount": 5,
    "min_temp": "T0C + 100",
    "mix_message": "The substance turns an airy sky-blue and foams up into a new shape."
  },
  "hair_dye": {
    "name": "hair_dye",
    "category": "misc",
    "id": "hair_dye",
    "path": "/datum/chemical_reaction/hair_dye",
    "result": "hair_dye",
    "required_reagents": {
      "colorful_reagent": 1,
      "hairgrownium": 1
    },
    "result_amount": 2
  },
  "hairgrownium": {
    "name": "hairgrownium",
    "category": "misc",
    "id": "hairgrownium",
    "path": "/datum/chemical_reaction/hairgrownium",
    "result": "hairgrownium",
    "required_reagents": {
      "carpet": 1,
      "synthflesh": 1,
      "ephedrine": 1
    },
    "result_amount": 3,
    "mix_message": "The liquid becomes slightly hairy."
  },
  "super_hairgrownium": {
    "name": "Super Hairgrownium",
    "category": "misc",
    "id": "super_hairgrownium",
    "path": "/datum/chemical_reaction/super_hairgrownium",
    "result": "super_hairgrownium",
    "required_reagents": {
      "iron": 1,
      "methamphetamine": 1,
      "hairgrownium": 1
    },
    "result_amount": 3,
    "mix_message": "The liquid becomes amazingly furry and smells peculiar."
  },
  "soapification": {
    "name": "Soapification",
    "category": "misc",
    "id": "soapification",
    "path": "/datum/chemical_reaction/soapification",
    "result": null,
    "required_reagents": {
      "liquidgibs": 10,
      "lye": 10
    },
    "min_temp": "T0C + 100",
    "result_amount": 1
  },
  "candlefication": {
    "name": "Candlefication",
    "category": "misc",
    "id": "candlefication",
    "path": "/datum/chemical_reaction/candlefication",
    "result": null,
    "required_reagents": {
      "liquidgibs": 5,
      "oxygen": 5
    },
    "min_temp": "T0C + 100",
    "result_amount": 1
  },
  "meatification": {
    "name": "Meatification",
    "category": "misc",
    "id": "meatification",
    "path": "/datum/chemical_reaction/meatification",
    "result": null,
    "required_reagents": {
      "liquidgibs": 10,
      "nutriment": 10,
      "carbon": 10
    },
    "result_amount": 1
  },
  "lye": {
    "name": "lye",
    "category": "misc",
    "id": "lye",
    "path": "/datum/chemical_reaction/lye",
    "result": "lye",
    "required_reagents": {
      "sodium": 1,
      "hydrogen": 1,
      "oxygen": 1
    },
    "result_amount": 3
  },
  "love": {
    "name": "pure love",
    "category": "misc",
    "id": "love",
    "path": "/datum/chemical_reaction/love",
    "result": "love",
    "required_reagents": {
      "hugs": 1,
      "chocolate": 1
    },
    "result_amount": 2,
    "mix_message": "The substance gives off a lovely scent!"
  },
  "jestosterone": {
    "name": "Jestosterone",
    "category": "misc",
    "id": "jestosterone",
    "path": "/datum/chemical_reaction/jestosterone",
    "result": "jestosterone",
    "required_reagents": {
      "blood": 1,
      "sodiumchloride": 1,
      "banana": 1,
      "lube": 1,
      "space_drugs": 1
    },
    "min_temp": "T0C + 100",
    "result_amount": 5,
    "mix_message": "The substance quickly shifts colour, cycling from red, to yellow, to green, to blue, and finally settles at a vibrant fuchsia."
  },
  "royal_bee_jelly": {
    "name": "royal bee jelly",
    "category": "misc",
    "id": "royal_bee_jelly",
    "path": "/datum/chemical_reaction/royal_bee_jelly",
    "result": "royal_bee_jelly",
    "required_reagents": {
      "mutagen": 10,
      "honey": 40
    },
    "result_amount": 5
  },
  "glycerol": {
    "name": "Glycerol",
    "category": "misc",
    "id": "glycerol",
    "path": "/datum/chemical_reaction/glycerol",
    "result": "glycerol",
    "required_reagents": {
      "cornoil": 3,
      "sacid": 1
    },
    "result_amount": 1
  },
  "condensedcapsaicin": {
    "name": "Condensed Capsaicin",
    "category": "misc",
    "id": "condensedcapsaicin",
    "path": "/datum/chemical_reaction/condensedcapsaicin",
    "result": "condensedcapsaicin",
    "required_reagents": {
      "capsaicin": 2
    },
    "required_catalysts": {
      "plasma": 5
    },
    "result_amount": 1
  },
  "sodiumchloride": {
    "name": "Sodium Chloride",
    "category": "misc",
    "id": "sodiumchloride",
    "path": "/datum/chemical_reaction/sodiumchloride",
    "result": "sodiumchloride",
    "required_reagents": {
      "sodium": 1,
      "chlorine": 1,
      "water": 1
    },
    "result_amount": 3,
    "mix_message": "The solution crystallizes with a brief flare of light."
  },
  "acetaldehyde": {
    "name": "Acetaldehyde",
    "category": "misc",
    "id": "acetaldehyde",
    "path": "/datum/chemical_reaction/acetaldehyde",
    "result": "acetaldehyde",
    "required_reagents": {
      "chromium": 1,
      "oxygen": 1,
      "copper": 1,
      "ethanol": 1
    },
    "result_amount": 3,
    "min_temp": "T0C + 275",
    "mix_message": "It smells like a bad hangover in here."
  },
  "acetic_acid": {
    "name": "Acetic Acid",
    "category": "misc",
    "id": "acetic_acid",
    "path": "/datum/chemical_reaction/acetic_acid",
    "result": "acetic_acid",
    "required_reagents": {
      "acetaldehyde": 1,
      "oxygen": 1,
      "nitrogen": 4
    },
    "result_amount": 3,
    "mix_message": "It smells like vinegar and a bad hangover in here."
  },
  "ice": {
    "name": "Ice",
    "category": "misc",
    "id": "ice",
    "path": "/datum/chemical_reaction/ice",
    "result": "ice",
    "required_reagents": {
      "water": 1
    },
    "result_amount": 1,
    "max_temp": "T0C",
    "mix_message": "Ice forms as the water freezes.",
    "mix_sound": null
  },
  "water": {
    "name": "Water",
    "category": "misc",
    "id": "water",
    "path": "/datum/chemical_reaction/water",
    "result": "water",
    "required_reagents": {
      "ice": 1
    },
    "result_amount": 1,
    "min_temp": "T0C + 29",
    "mix_message": "Water pools as the ice melts.",
    "mix_sound": null
  },
  "virusfood": {
    "name": "Virus Food",
    "category": "misc",
    "id": "virusfood",
    "path": "/datum/chemical_reaction/virus_food",
    "result": "virusfood",
    "required_reagents": {
      "water": 1,
      "milk": 1,
      "oxygen": 1
    },
    "result_amount": 3
  },
  "mutagenvirusfood": {
    "name": "mutagenic agar",
    "category": "misc",
    "id": "mutagenvirusfood",
    "path": "/datum/chemical_reaction/virus_food_mutagen",
    "result": "mutagenvirusfood",
    "required_reagents": {
      "mutagen": 1,
      "virusfood": 1
    },
    "result_amount": 1
  },
  "diphenhydraminevirusfood": {
    "name": "virus rations",
    "category": "misc",
    "id": "diphenhydraminevirusfood",
    "path": "/datum/chemical_reaction/virus_food_diphenhydramine",
    "result": "diphenhydraminevirusfood",
    "required_reagents": {
      "diphenhydramine": 1,
      "virusfood": 1
    },
    "result_amount": 1
  },
  "sugarvirusfood": {
    "name": "sucrose agar",
    "category": "misc",
    "id": "sugarvirusfood",
    "path": "/datum/chemical_reaction/virus_food_mutagen_salineglucose",
    "result": "sugarvirusfood",
    "required_reagents": {
      "salglu_solution": 1,
      "mutagenvirusfood": 1
    },
    "result_amount": 2
  },
  "mixvirus": {
    "name": "Mix Virus",
    "category": "misc",
    "id": "mixvirus",
    "path": "/datum/chemical_reaction/mix_virus",
    "result": null,
    "required_reagents": {
      "virusfood": 1
    },
    "required_catalysts": {
      "blood": 1
    }
  },
  "mixvirus2": {
    "name": "Mix Virus 2",
    "category": "misc",
    "id": "mixvirus2",
    "path": "/datum/chemical_reaction/mix_virus/mix_virus_2",
    "result": null,
    "required_reagents": {
      "mutagen": 1
    }
  },
  "mixvirus3": {
    "name": "Mix Virus 3",
    "category": "misc",
    "id": "mixvirus3",
    "path": "/datum/chemical_reaction/mix_virus/mix_virus_3",
    "result": null,
    "required_reagents": {
      "plasma_dust": 1
    }
  },
  "mixvirus4": {
    "name": "Mix Virus 4",
    "category": "misc",
    "id": "mixvirus4",
    "path": "/datum/chemical_reaction/mix_virus/mix_virus_4",
    "result": null,
    "required_reagents": {
      "uranium": 1
    }
  },
  "mixvirus5": {
    "name": "Mix Virus 5",
    "category": "misc",
    "id": "mixvirus5",
    "path": "/datum/chemical_reaction/mix_virus/mix_virus_5",
    "result": null,
    "required_reagents": {
      "mutagenvirusfood": 1
    }
  },
  "mixvirus6": {
    "name": "Mix Virus 6",
    "category": "misc",
    "id": "mixvirus6",
    "path": "/datum/chemical_reaction/mix_virus/mix_virus_6",
    "result": null,
    "required_reagents": {
      "sugarvirusfood": 1
    }
  },
  "mixvirus7": {
    "name": "Mix Virus 7",
    "category": "misc",
    "id": "mixvirus7",
    "path": "/datum/chemical_reaction/mix_virus/mix_virus_7",
    "result": null,
    "required_reagents": {
      "weakplasmavirusfood": 1
    }
  },
  "mixvirus8": {
    "name": "Mix Virus 8",
    "category": "misc",
    "id": "mixvirus8",
    "path": "/datum/chemical_reaction/mix_virus/mix_virus_8",
    "result": null,
    "required_reagents": {
      "plasmavirusfood": 1
    }
  },
  "mixvirus9": {
    "name": "Mix Virus 9",
    "category": "misc",
    "id": "mixvirus9",
    "path": "/datum/chemical_reaction/mix_virus/mix_virus_9",
    "result": null,
    "required_reagents": {
      "diphenhydraminevirusfood": 1
    }
  },
  "remvirus": {
    "name": "Devolve Virus",
    "category": "misc",
    "id": "remvirus",
    "path": "/datum/chemical_reaction/mix_virus/rem_virus",
    "result": null,
    "required_reagents": {
      "diphenhydramine": 1
    },
    "required_catalysts": {
      "blood": 1
    }
  },
  "zombiecure1": {
    "name": "Anti-Plague Sequence Alpha",
    "category": "misc",
    "id": "zombiecure1",
    "path": "/datum/chemical_reaction/zombie",
    "result": "zombiecure1",
    "required_reagents": {
      "blood": 1,
      "diphenhydramine": 1
    },
    "result_amount": 1,
    "mix_message": "The mixture into a dark green paste."
  }
}


export default misc_recipes
