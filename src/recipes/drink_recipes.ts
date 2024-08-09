const drink_recipes = {
  "hot_coco": {
    "name": "Hot Coco",
    "category": "drink",
    "id": "hot_coco",
    "path": "/datum/chemical_reaction/hot_coco",
    "result": "hot_coco",
    "required_reagents": {
      "water": 5,
      "cocoa": 1
    },
    "result_amount": 5,
    "mix_sound": "sound/goonstation/misc/drinkfizz.ogg"
  },
  "chocolate_milk": {
    "name": "Chocolate Milk",
    "category": "drink",
    "id": "chocolate_milk",
    "path": "/datum/chemical_reaction/chocolate_milk",
    "result": "chocolate_milk",
    "required_reagents": {
      "chocolate": 1,
      "milk": 1
    },
    "result_amount": 2,
    "mix_message": "The mixture turns a nice brown color.",
    "mix_sound": "sound/goonstation/misc/drinkfizz.ogg"
  },
  "coffee": {
    "name": "Coffee",
    "category": "drink",
    "id": "coffee",
    "path": "/datum/chemical_reaction/coffee",
    "result": "coffee",
    "required_reagents": {
      "coffeepowder": 1,
      "water": 5
    },
    "result_amount": 5,
    "mix_sound": "sound/goonstation/misc/drinkfizz.ogg"
  },
  "tea": {
    "name": "Tea",
    "category": "drink",
    "id": "tea",
    "path": "/datum/chemical_reaction/tea",
    "result": "tea",
    "required_reagents": {
      "teapowder": 1,
      "water": 5
    },
    "result_amount": 5,
    "mix_sound": "sound/goonstation/misc/drinkfizz.ogg"
  },
  "goldschlager": {
    "name": "Goldschlager",
    "category": "drink",
    "id": "goldschlager",
    "path": "/datum/chemical_reaction/goldschlager",
    "result": "goldschlager",
    "required_reagents": {
      "vodka": 10,
      "gold": 1
    },
    "result_amount": 10,
    "mix_sound": "sound/goonstation/misc/drinkfizz.ogg"
  },
  "patron": {
    "name": "Patron",
    "category": "drink",
    "id": "patron",
    "path": "/datum/chemical_reaction/patron",
    "result": "patron",
    "required_reagents": {
      "tequila": 10,
      "silver": 1
    },
    "result_amount": 10,
    "mix_sound": "sound/goonstation/misc/drinkfizz.ogg"
  },
  "bilk": {
    "name": "Bilk",
    "category": "drink",
    "id": "bilk",
    "path": "/datum/chemical_reaction/bilk",
    "result": "bilk",
    "required_reagents": {
      "milk": 1,
      "beer": 1
    },
    "result_amount": 2,
    "mix_sound": "sound/goonstation/misc/drinkfizz.ogg"
  },
  "icetea": {
    "name": "Iced Tea",
    "category": "drink",
    "id": "icetea",
    "path": "/datum/chemical_reaction/icetea",
    "result": "icetea",
    "required_reagents": {
      "ice": 1,
      "tea": 3
    },
    "result_amount": 4,
    "mix_sound": "sound/goonstation/misc/drinkfizz.ogg"
  },
  "icecoffee": {
    "name": "Iced Coffee",
    "category": "drink",
    "id": "icecoffee",
    "path": "/datum/chemical_reaction/icecoffee",
    "result": "icecoffee",
    "required_reagents": {
      "ice": 1,
      "coffee": 3
    },
    "result_amount": 4,
    "mix_sound": "sound/goonstation/misc/drinkfizz.ogg"
  },
  "nuka_cola": {
    "name": "Nuka Cola",
    "category": "drink",
    "id": "nuka_cola",
    "path": "/datum/chemical_reaction/nuka_cola",
    "result": "nuka_cola",
    "required_reagents": {
      "uranium": 1,
      "cola": 6
    },
    "result_amount": 6,
    "mix_sound": "sound/goonstation/misc/drinkfizz.ogg"
  },
  "moonshine": {
    "name": "Moonshine",
    "category": "drink",
    "id": "moonshine",
    "path": "/datum/chemical_reaction/moonshine",
    "result": "moonshine",
    "required_reagents": {
      "nutriment": 10
    },
    "required_catalysts": {
      "enzyme": 5
    },
    "result_amount": 10,
    "mix_sound": "sound/goonstation/misc/drinkfizz.ogg"
  },
  "wine": {
    "name": "Wine",
    "category": "drink",
    "id": "wine",
    "path": "/datum/chemical_reaction/wine",
    "result": "wine",
    "required_reagents": {
      "grapejuice": 10
    },
    "required_catalysts": {
      "enzyme": 5
    },
    "result_amount": 10,
    "mix_sound": "sound/goonstation/misc/drinkfizz.ogg"
  },
  "spacebeer": {
    "name": "Space Beer",
    "category": "drink",
    "id": "spacebeer",
    "path": "/datum/chemical_reaction/spacebeer",
    "result": "beer",
    "required_reagents": {
      "cornoil": 10
    },
    "required_catalysts": {
      "enzyme": 5
    },
    "result_amount": 10,
    "mix_sound": "sound/goonstation/misc/drinkfizz.ogg"
  },
  "vodka": {
    "name": "Vodka",
    "category": "drink",
    "id": "vodka",
    "path": "/datum/chemical_reaction/vodka",
    "result": "vodka",
    "required_reagents": {
      "potato": 10
    },
    "required_catalysts": {
      "enzyme": 5
    },
    "result_amount": 10,
    "mix_sound": "sound/goonstation/misc/drinkfizz.ogg"
  },
  "sake": {
    "name": "Sake",
    "category": "drink",
    "id": "sake",
    "path": "/datum/chemical_reaction/sake",
    "result": "sake",
    "required_reagents": {
      "rice": 10,
      "water": 5
    },
    "required_catalysts": {
      "enzyme": 5
    },
    "result_amount": 15,
    "mix_sound": "sound/goonstation/misc/drinkfizz.ogg"
  },
  "kahlua": {
    "name": "Kahlua",
    "category": "drink",
    "id": "kahlua",
    "path": "/datum/chemical_reaction/kahlua",
    "result": "kahlua",
    "required_reagents": {
      "coffee": 5,
      "sugar": 5,
      "rum": 5
    },
    "required_catalysts": {
      "enzyme": 5
    },
    "result_amount": 5,
    "mix_sound": "sound/goonstation/misc/drinkfizz.ogg"
  },
  "kahlauVodka": {
    "name": "KahluaVodka",
    "category": "drink",
    "id": "kahlauVodka",
    "path": "/datum/chemical_reaction/kahluaVodka",
    "result": "kahlua",
    "required_reagents": {
      "coffee": 5,
      "sugar": 5,
      "vodka": 5
    },
    "required_catalysts": {
      "enzyme": 5
    },
    "result_amount": 5,
    "mix_sound": "sound/goonstation/misc/drinkfizz.ogg"
  },
  "gintonic": {
    "name": "Gin and Tonic",
    "category": "drink",
    "id": "gintonic",
    "path": "/datum/chemical_reaction/gin_tonic",
    "result": "gintonic",
    "required_reagents": {
      "gin": 2,
      "tonic": 1
    },
    "result_amount": 3,
    "mix_message": "The tonic water and gin mix together perfectly.",
    "mix_sound": "sound/goonstation/misc/drinkfizz.ogg"
  },
  "cubalibre": {
    "name": "Cuba Libre",
    "category": "drink",
    "id": "cubalibre",
    "path": "/datum/chemical_reaction/cuba_libre",
    "result": "cubalibre",
    "required_reagents": {
      "rum": 2,
      "cola": 2,
      "limejuice": 1
    },
    "result_amount": 5,
    "mix_sound": "sound/goonstation/misc/drinkfizz.ogg"
  },
  "mojito": {
    "name": "Mojito",
    "category": "drink",
    "id": "mojito",
    "path": "/datum/chemical_reaction/mojito",
    "result": "mojito",
    "required_reagents": {
      "rum": 1,
      "sugar": 1,
      "limejuice": 1,
      "sodawater": 1,
      "mint": 1
    },
    "result_amount": 4,
    "mix_sound": "sound/goonstation/misc/drinkfizz.ogg"
  },
  "martini": {
    "name": "Classic Martini",
    "category": "drink",
    "id": "martini",
    "path": "/datum/chemical_reaction/martini",
    "result": "martini",
    "required_reagents": {
      "gin": 2,
      "vermouth": 1
    },
    "result_amount": 3,
    "mix_sound": "sound/goonstation/misc/drinkfizz.ogg"
  },
  "vodkamartini": {
    "name": "Vodka Martini",
    "category": "drink",
    "id": "vodkamartini",
    "path": "/datum/chemical_reaction/vodkamartini",
    "result": "vodkamartini",
    "required_reagents": {
      "vodka": 2,
      "vermouth": 1
    },
    "result_amount": 3,
    "mix_sound": "sound/goonstation/misc/drinkfizz.ogg"
  },
  "whiterussian": {
    "name": "White Russian",
    "category": "drink",
    "id": "whiterussian",
    "path": "/datum/chemical_reaction/white_russian",
    "result": "whiterussian",
    "required_reagents": {
      "blackrussian": 3,
      "cream": 2
    },
    "result_amount": 5,
    "mix_sound": "sound/goonstation/misc/drinkfizz.ogg"
  },
  "whiskeycola": {
    "name": "Whiskey Cola",
    "category": "drink",
    "id": "whiskeycola",
    "path": "/datum/chemical_reaction/whiskey_cola",
    "result": "whiskeycola",
    "required_reagents": {
      "whiskey": 2,
      "cola": 1
    },
    "result_amount": 3,
    "mix_sound": "sound/goonstation/misc/drinkfizz.ogg"
  },
  "screwdrivercocktail": {
    "name": "Screwdriver",
    "category": "drink",
    "id": "screwdrivercocktail",
    "path": "/datum/chemical_reaction/screwdriver",
    "result": "screwdrivercocktail",
    "required_reagents": {
      "vodka": 2,
      "orangejuice": 1
    },
    "result_amount": 3,
    "mix_sound": "sound/goonstation/misc/drinkfizz.ogg"
  },
  "bloodymary": {
    "name": "Bloody Mary",
    "category": "drink",
    "id": "bloodymary",
    "path": "/datum/chemical_reaction/bloody_mary",
    "result": "bloodymary",
    "required_reagents": {
      "vodka": 1,
      "tomatojuice": 2,
      "limejuice": 1
    },
    "result_amount": 4,
    "mix_sound": "sound/goonstation/misc/drinkfizz.ogg"
  },
  "gargleblaster": {
    "name": "Pan-Galactic Gargle Blaster",
    "category": "drink",
    "id": "gargleblaster",
    "path": "/datum/chemical_reaction/gargle_blaster",
    "result": "gargleblaster",
    "required_reagents": {
      "vodka": 1,
      "gin": 1,
      "whiskey": 1,
      "cognac": 1,
      "limejuice": 1
    },
    "result_amount": 5,
    "mix_sound": "sound/goonstation/misc/drinkfizz.ogg"
  },
  "flamingmoe": {
    "name": "Flaming Moe",
    "category": "drink",
    "id": "flamingmoe",
    "path": "/datum/chemical_reaction/flaming_homer",
    "result": "flamingmoe",
    "required_reagents": {
      "vodka": 1,
      "gin": 1,
      "cognac": 1,
      "tequila": 1,
      "salglu_solution": 1
    },
    "min_temp": "T0C + 100",
    "result_amount": 5,
    "mix_sound": "sound/goonstation/misc/drinkfizz.ogg",
    "mix_message": "The concoction bursts into flame!"
  },
  "bravebull": {
    "name": "Brave Bull",
    "category": "drink",
    "id": "bravebull",
    "path": "/datum/chemical_reaction/brave_bull",
    "result": "bravebull",
    "required_reagents": {
      "tequila": 2,
      "kahlua": 1
    },
    "result_amount": 3,
    "mix_sound": "sound/goonstation/misc/drinkfizz.ogg"
  },
  "tequilasunrise": {
    "name": "Tequila Sunrise",
    "category": "drink",
    "id": "tequilasunrise",
    "path": "/datum/chemical_reaction/tequila_sunrise",
    "result": "tequilasunrise",
    "required_reagents": {
      "tequila": 2,
      "orangejuice": 1
    },
    "result_amount": 3,
    "mix_sound": "sound/goonstation/misc/drinkfizz.ogg"
  },
  "toxinsspecial": {
    "name": "Toxins Special",
    "category": "drink",
    "id": "toxinsspecial",
    "path": "/datum/chemical_reaction/toxins_special",
    "result": "toxinsspecial",
    "required_reagents": {
      "rum": 2,
      "vermouth": 1,
      "plasma": 2
    },
    "result_amount": 5,
    "mix_sound": "sound/goonstation/misc/drinkfizz.ogg"
  },
  "beepksysmash": {
    "name": "Beepksy Smash",
    "category": "drink",
    "id": "beepksysmash",
    "path": "/datum/chemical_reaction/beepsky_smash",
    "result": "beepskysmash",
    "required_reagents": {
      "limejuice": 2,
      "whiskey": 2,
      "iron": 1
    },
    "result_amount": 4,
    "mix_sound": "sound/goonstation/misc/drinkfizz.ogg"
  },
  "doctorsdelight": {
    "name": "The Doctor's Delight",
    "category": "drink",
    "id": "doctordelight",
    "path": "/datum/chemical_reaction/doctor_delight",
    "result": "doctorsdelight",
    "required_reagents": {
      "limejuice": 1,
      "tomatojuice": 1,
      "orangejuice": 1,
      "cream": 1
    },
    "result_amount": 5,
    "mix_sound": "sound/goonstation/misc/drinkfizz.ogg"
  },
  "irishcream": {
    "name": "Irish Cream",
    "category": "drink",
    "id": "irishcream",
    "path": "/datum/chemical_reaction/irish_cream",
    "result": "irishcream",
    "required_reagents": {
      "whiskey": 2,
      "cream": 1
    },
    "result_amount": 3,
    "mix_sound": "sound/goonstation/misc/drinkfizz.ogg"
  },
  "manlydorf": {
    "name": "The Manly Dorf",
    "category": "drink",
    "id": "manlydorf",
    "path": "/datum/chemical_reaction/manly_dorf",
    "result": "manlydorf",
    "required_reagents": {
      "beer": 1,
      "ale": 2
    },
    "result_amount": 3,
    "mix_sound": "sound/goonstation/misc/drinkfizz.ogg"
  },
  "suicider": {
    "name": "Suicider",
    "category": "drink",
    "id": "suicider",
    "path": "/datum/chemical_reaction/suicider",
    "result": "suicider",
    "required_reagents": {
      "vodka": 1,
      "cider": 1,
      "fuel": 1,
      "epinephrine": 1
    },
    "result_amount": 4,
    "mix_message": "The drinks and chemicals mix together, emitting a potent smell.",
    "mix_sound": "sound/goonstation/misc/drinkfizz.ogg"
  },
  "irishcoffee": {
    "name": "Irish Coffee",
    "category": "drink",
    "id": "irishcoffee",
    "path": "/datum/chemical_reaction/irish_coffee",
    "result": "irishcoffee",
    "required_reagents": {
      "irishcream": 1,
      "coffee": 1
    },
    "result_amount": 2,
    "mix_sound": "sound/goonstation/misc/drinkfizz.ogg"
  },
  "b52": {
    "name": "B-52",
    "category": "drink",
    "id": "b52",
    "path": "/datum/chemical_reaction/b52",
    "result": "b52",
    "required_reagents": {
      "irishcream": 1,
      "kahlua": 1,
      "cognac": 1
    },
    "result_amount": 3,
    "mix_sound": "sound/goonstation/misc/drinkfizz.ogg"
  },
  "atomicbomb": {
    "name": "Atomic Bomb",
    "category": "drink",
    "id": "atomicbomb",
    "path": "/datum/chemical_reaction/atomicbomb",
    "result": "atomicbomb",
    "required_reagents": {
      "b52": 10,
      "uranium": 1
    },
    "result_amount": 10,
    "mix_sound": "sound/goonstation/misc/drinkfizz.ogg"
  },
  "margarita": {
    "name": "Margarita",
    "category": "drink",
    "id": "margarita",
    "path": "/datum/chemical_reaction/margarita",
    "result": "margarita",
    "required_reagents": {
      "tequila": 2,
      "limejuice": 1
    },
    "result_amount": 3,
    "mix_sound": "sound/goonstation/misc/drinkfizz.ogg"
  },
  "longislandicedtea": {
    "name": "Long Island Iced Tea",
    "category": "drink",
    "id": "longislandicedtea",
    "path": "/datum/chemical_reaction/longislandicedtea",
    "result": "longislandicedtea",
    "required_reagents": {
      "vodka": 1,
      "gin": 1,
      "tequila": 1,
      "cubalibre": 1
    },
    "result_amount": 4,
    "mix_sound": "sound/goonstation/misc/drinkfizz.ogg"
  },
  "threemileisland": {
    "name": "Three Mile Island Iced Tea",
    "category": "drink",
    "id": "threemileisland",
    "path": "/datum/chemical_reaction/threemileisland",
    "result": "threemileisland",
    "required_reagents": {
      "longislandicedtea": 10,
      "uranium": 1
    },
    "result_amount": 10,
    "mix_sound": "sound/goonstation/misc/drinkfizz.ogg"
  },
  "whiskeysoda": {
    "name": "Whiskey Soda",
    "category": "drink",
    "id": "whiskeysoda",
    "path": "/datum/chemical_reaction/whiskeysoda",
    "result": "whiskeysoda",
    "required_reagents": {
      "whiskey": 2,
      "sodawater": 1
    },
    "result_amount": 3,
    "mix_sound": "sound/goonstation/misc/drinkfizz.ogg"
  },
  "blackrussian": {
    "name": "Black Russian",
    "category": "drink",
    "id": "blackrussian",
    "path": "/datum/chemical_reaction/black_russian",
    "result": "blackrussian",
    "required_reagents": {
      "vodka": 3,
      "kahlua": 2
    },
    "result_amount": 5,
    "mix_sound": "sound/goonstation/misc/drinkfizz.ogg"
  },
  "manhattan": {
    "name": "Manhattan",
    "category": "drink",
    "id": "manhattan",
    "path": "/datum/chemical_reaction/manhattan",
    "result": "manhattan",
    "required_reagents": {
      "whiskey": 2,
      "vermouth": 1
    },
    "result_amount": 3,
    "mix_sound": "sound/goonstation/misc/drinkfizz.ogg"
  },
  "manhattan_proj": {
    "name": "Manhattan Project",
    "category": "drink",
    "id": "manhattan_proj",
    "path": "/datum/chemical_reaction/manhattan_proj",
    "result": "manhattan_proj",
    "required_reagents": {
      "manhattan": 10,
      "uranium": 1
    },
    "result_amount": 10,
    "mix_sound": "sound/goonstation/misc/drinkfizz.ogg"
  },
  "vodkatonic": {
    "name": "Vodka and Tonic",
    "category": "drink",
    "id": "vodkatonic",
    "path": "/datum/chemical_reaction/vodka_tonic",
    "result": "vodkatonic",
    "required_reagents": {
      "vodka": 2,
      "tonic": 1
    },
    "result_amount": 3,
    "mix_sound": "sound/goonstation/misc/drinkfizz.ogg"
  },
  "ginfizz": {
    "name": "Gin Fizz",
    "category": "drink",
    "id": "ginfizz",
    "path": "/datum/chemical_reaction/gin_fizz",
    "result": "ginfizz",
    "required_reagents": {
      "gin": 2,
      "sodawater": 1,
      "limejuice": 1
    },
    "result_amount": 4,
    "mix_sound": "sound/goonstation/misc/drinkfizz.ogg"
  },
  "bahama_mama": {
    "name": "Bahama mama",
    "category": "drink",
    "id": "bahama_mama",
    "path": "/datum/chemical_reaction/bahama_mama",
    "result": "bahama_mama",
    "required_reagents": {
      "rum": 2,
      "orangejuice": 2,
      "limejuice": 1,
      "ice": 1
    },
    "result_amount": 6,
    "mix_sound": "sound/goonstation/misc/drinkfizz.ogg"
  },
  "singulo": {
    "name": "Singulo",
    "category": "drink",
    "id": "singulo",
    "path": "/datum/chemical_reaction/singulo",
    "result": "singulo",
    "required_reagents": {
      "vodka": 5,
      "radium": 1,
      "wine": 5
    },
    "result_amount": 10,
    "mix_sound": "sound/goonstation/misc/drinkfizz.ogg"
  },
  "alliescocktail": {
    "name": "Allies Cocktail",
    "category": "drink",
    "id": "alliescocktail",
    "path": "/datum/chemical_reaction/alliescocktail",
    "result": "alliescocktail",
    "required_reagents": {
      "martini": 1,
      "vodka": 1
    },
    "result_amount": 2,
    "mix_sound": "sound/goonstation/misc/drinkfizz.ogg"
  },
  "demonsblood": {
    "name": "Demons Blood",
    "category": "drink",
    "id": "demonsblood",
    "path": "/datum/chemical_reaction/demonsblood",
    "result": "demonsblood",
    "required_reagents": {
      "rum": 1,
      "spacemountainwind": 1,
      "blood": 1,
      "dr_gibb": 1
    },
    "result_amount": 4,
    "mix_sound": "sound/goonstation/misc/drinkfizz.ogg"
  },
  "booger": {
    "name": "Booger",
    "category": "drink",
    "id": "booger",
    "path": "/datum/chemical_reaction/booger",
    "result": "booger",
    "required_reagents": {
      "cream": 1,
      "banana": 1,
      "rum": 1,
      "watermelonjuice": 1
    },
    "result_amount": 4,
    "mix_sound": "sound/goonstation/misc/drinkfizz.ogg"
  },
  "antifreeze": {
    "name": "Anti-freeze",
    "category": "drink",
    "id": "antifreeze",
    "path": "/datum/chemical_reaction/antifreeze",
    "result": "antifreeze",
    "required_reagents": {
      "vodka": 2,
      "cream": 1,
      "ice": 1
    },
    "result_amount": 4,
    "mix_sound": "sound/goonstation/misc/drinkfizz.ogg"
  },
  "adminfreeze": {
    "name": "Admin Freeze",
    "category": "drink",
    "id": "adminfreeze",
    "path": "/datum/chemical_reaction/adminfreeze",
    "result": "adminfreeze",
    "required_reagents": {
      "neurotoxin": 1,
      "toxinsspecial": 1,
      "fernet": 1,
      "moonshine": 1,
      "morphine": 1
    },
    "min_temp": "T0C + 100",
    "result_amount": 5,
    "mix_sound": "sound/effects/adminhelp.ogg"
  },
  "barefoot": {
    "name": "Barefoot",
    "category": "drink",
    "id": "barefoot",
    "path": "/datum/chemical_reaction/barefoot",
    "result": "barefoot",
    "required_reagents": {
      "berryjuice": 1,
      "cream": 1,
      "vermouth": 1
    },
    "result_amount": 3,
    "mix_sound": "sound/goonstation/misc/drinkfizz.ogg"
  },
  "daiquiri": {
    "name": "Daiquiri",
    "category": "drink",
    "id": "daiquiri",
    "path": "/datum/chemical_reaction/daquiri",
    "result": "daiquiri",
    "required_reagents": {
      "limejuice": 1,
      "sugar": 1,
      "rum": 2,
      "ice": 1
    },
    "result_amount": 4,
    "mix_sound": "sound/goonstation/misc/drinkfizz.ogg"
  },
  "sbiten": {
    "name": "Sbiten",
    "category": "drink",
    "id": "sbiten",
    "path": "/datum/chemical_reaction/sbiten",
    "result": "sbiten",
    "required_reagents": {
      "vodka": 10,
      "capsaicin": 1
    },
    "result_amount": 10,
    "mix_sound": "sound/goonstation/misc/drinkfizz.ogg"
  },
  "red_mead": {
    "name": "Red Mead",
    "category": "drink",
    "id": "red_mead",
    "path": "/datum/chemical_reaction/red_mead",
    "result": "red_mead",
    "required_reagents": {
      "blood": 1,
      "mead": 1
    },
    "result_amount": 2,
    "mix_sound": "sound/goonstation/misc/drinkfizz.ogg"
  },
  "mead": {
    "name": "Mead",
    "category": "drink",
    "id": "mead",
    "path": "/datum/chemical_reaction/mead",
    "result": "mead",
    "required_reagents": {
      "sugar": 1,
      "water": 1
    },
    "required_catalysts": {
      "enzyme": 5
    },
    "result_amount": 2,
    "mix_sound": "sound/goonstation/misc/drinkfizz.ogg"
  },
  "iced_beer": {
    "name": "Iced Beer",
    "category": "drink",
    "id": "iced_beer",
    "path": "/datum/chemical_reaction/iced_beer2",
    "result": "iced_beer",
    "required_reagents": {
      "beer": 5,
      "ice": 1
    },
    "result_amount": 6,
    "mix_sound": "sound/goonstation/misc/drinkfizz.ogg"
  },
  "grog": {
    "name": "Grog",
    "category": "drink",
    "id": "grog",
    "path": "/datum/chemical_reaction/grog",
    "result": "grog",
    "required_reagents": {
      "rum": 1,
      "water": 1
    },
    "result_amount": 2,
    "mix_sound": "sound/goonstation/misc/drinkfizz.ogg"
  },
  "soy_latte": {
    "name": "Soy Latte",
    "category": "drink",
    "id": "soy_latte",
    "path": "/datum/chemical_reaction/soy_latte",
    "result": "soy_latte",
    "required_reagents": {
      "coffee": 1,
      "soymilk": 1
    },
    "result_amount": 2,
    "mix_sound": "sound/goonstation/misc/drinkfizz.ogg"
  },
  "cafe_latte": {
    "name": "Cafe Latte",
    "category": "drink",
    "id": "cafe_latte",
    "path": "/datum/chemical_reaction/cafe_latte",
    "result": "cafe_latte",
    "required_reagents": {
      "coffee": 1,
      "milk": 1
    },
    "result_amount": 2,
    "mix_sound": "sound/goonstation/misc/drinkfizz.ogg"
  },
  "cafe_mocha": {
    "name": "Cafe Mocha",
    "category": "drink",
    "id": "cafe_mocha",
    "path": "/datum/chemical_reaction/cafe_mocha",
    "result": "cafe_mocha",
    "required_reagents": {
      "cafe_latte": 1,
      "chocolate": 1
    },
    "result_amount": 2,
    "mix_sound": "sound/goonstation/misc/drinkfizz.ogg"
  },
  "acidspit": {
    "name": "Acid Spit",
    "category": "drink",
    "id": "acidspit",
    "path": "/datum/chemical_reaction/acidspit",
    "result": "acidspit",
    "required_reagents": {
      "sacid": 1,
      "wine": 5
    },
    "result_amount": 6,
    "mix_sound": "sound/goonstation/misc/drinkfizz.ogg"
  },
  "amasec": {
    "name": "Amasec",
    "category": "drink",
    "id": "amasec",
    "path": "/datum/chemical_reaction/amasec",
    "result": "amasec",
    "required_reagents": {
      "iron": 1,
      "wine": 5,
      "vodka": 5
    },
    "result_amount": 10,
    "mix_sound": "sound/goonstation/misc/drinkfizz.ogg"
  },
  "changelingsting": {
    "name": "Changeling Sting",
    "category": "drink",
    "id": "changelingsting",
    "path": "/datum/chemical_reaction/changelingsting",
    "result": "changelingsting",
    "required_reagents": {
      "screwdrivercocktail": 1,
      "limejuice": 1,
      "lemonjuice": 1
    },
    "result_amount": 5,
    "mix_sound": "sound/goonstation/misc/drinkfizz.ogg"
  },
  "aloe": {
    "name": "Aloe",
    "category": "drink",
    "id": "aloe",
    "path": "/datum/chemical_reaction/aloe",
    "result": "aloe",
    "required_reagents": {
      "cream": 1,
      "whiskey": 1,
      "watermelonjuice": 1
    },
    "result_amount": 2,
    "mix_sound": "sound/goonstation/misc/drinkfizz.ogg"
  },
  "andalusia": {
    "name": "Andalusia",
    "category": "drink",
    "id": "andalusia",
    "path": "/datum/chemical_reaction/andalusia",
    "result": "andalusia",
    "required_reagents": {
      "rum": 1,
      "whiskey": 1,
      "lemonjuice": 1
    },
    "result_amount": 3,
    "mix_sound": "sound/goonstation/misc/drinkfizz.ogg"
  },
  "neurotoxin": {
    "name": "Neurotoxin",
    "category": "drink",
    "id": "neurotoxin",
    "path": "/datum/chemical_reaction/neurotoxin",
    "result": "neurotoxin",
    "required_reagents": {
      "gargleblaster": 1,
      "ether": 1
    },
    "result_amount": 2,
    "mix_sound": "sound/goonstation/misc/drinkfizz.ogg"
  },
  "snowwhite": {
    "name": "Snow White",
    "category": "drink",
    "id": "snowwhite",
    "path": "/datum/chemical_reaction/snowwhite",
    "result": "snowwhite",
    "required_reagents": {
      "beer": 1,
      "lemon_lime": 1
    },
    "result_amount": 2,
    "mix_sound": "sound/goonstation/misc/drinkfizz.ogg"
  },
  "dublindrop": {
    "name": "Dublin Drop",
    "category": "drink",
    "id": "dublindrop",
    "path": "/datum/chemical_reaction/dublindrop",
    "result": "dublindrop",
    "required_reagents": {
      "ale": 1,
      "irishcream": 1
    },
    "result_amount": 2,
    "mix_sound": "sound/goonstation/misc/drinkfizz.ogg"
  },
  "syndicatebomb": {
    "name": "Syndicate Bomb",
    "category": "drink",
    "id": "syndicatebomb",
    "path": "/datum/chemical_reaction/syndicatebomb",
    "result": "syndicatebomb",
    "required_reagents": {
      "beer": 1,
      "whiskeycola": 1
    },
    "result_amount": 2,
    "mix_sound": "sound/goonstation/misc/drinkfizz.ogg"
  },
  "erikasurprise": {
    "name": "Erika Surprise",
    "category": "drink",
    "id": "erikasurprise",
    "path": "/datum/chemical_reaction/erikasurprise",
    "result": "erikasurprise",
    "required_reagents": {
      "ale": 1,
      "limejuice": 1,
      "whiskey": 1,
      "banana": 1,
      "ice": 1
    },
    "result_amount": 5,
    "mix_sound": "sound/goonstation/misc/drinkfizz.ogg"
  },
  "devilskiss": {
    "name": "Devils Kiss",
    "category": "drink",
    "id": "devilskiss",
    "path": "/datum/chemical_reaction/devilskiss",
    "result": "devilskiss",
    "required_reagents": {
      "blood": 1,
      "kahlua": 1,
      "rum": 1
    },
    "result_amount": 3,
    "mix_sound": "sound/goonstation/misc/drinkfizz.ogg"
  },
  "hippiesdelight": {
    "name": "Hippies Delight",
    "category": "drink",
    "id": "hippiesdelight",
    "path": "/datum/chemical_reaction/hippiesdelight",
    "result": "hippiesdelight",
    "required_reagents": {
      "psilocybin": 1,
      "gargleblaster": 1
    },
    "result_amount": 2,
    "mix_sound": "sound/goonstation/misc/drinkfizz.ogg"
  },
  "bananahonk": {
    "name": "Banana Honk",
    "category": "drink",
    "id": "bananahonk",
    "path": "/datum/chemical_reaction/bananahonk",
    "result": "bananahonk",
    "required_reagents": {
      "banana": 1,
      "cream": 1,
      "sugar": 1
    },
    "result_amount": 3,
    "mix_sound": "sound/goonstation/misc/drinkfizz.ogg"
  },
  "silencer": {
    "name": "Silencer",
    "category": "drink",
    "id": "silencer",
    "path": "/datum/chemical_reaction/silencer",
    "result": "silencer",
    "required_reagents": {
      "nothing": 1,
      "cream": 1,
      "sugar": 1
    },
    "result_amount": 3,
    "mix_sound": "sound/goonstation/misc/drinkfizz.ogg"
  },
  "driestmartini": {
    "name": "Driest Martini",
    "category": "drink",
    "id": "driestmartini",
    "path": "/datum/chemical_reaction/driestmartini",
    "result": "driestmartini",
    "required_reagents": {
      "nothing": 1,
      "gin": 1
    },
    "result_amount": 2,
    "mix_sound": "sound/goonstation/misc/drinkfizz.ogg"
  },
  "lemonade": {
    "name": "Lemonade",
    "category": "drink",
    "id": "lemonade",
    "path": "/datum/chemical_reaction/lemonade",
    "result": "lemonade",
    "required_reagents": {
      "lemonjuice": 1,
      "sugar": 1,
      "water": 1
    },
    "result_amount": 3,
    "mix_sound": "sound/goonstation/misc/drinkfizz.ogg"
  },
  "kiraspecial": {
    "name": "Kira Special",
    "category": "drink",
    "id": "kiraspecial",
    "path": "/datum/chemical_reaction/kiraspecial",
    "result": "kiraspecial",
    "required_reagents": {
      "orangejuice": 1,
      "limejuice": 1,
      "sodawater": 1
    },
    "result_amount": 2,
    "mix_sound": "sound/goonstation/misc/drinkfizz.ogg"
  },
  "brownstar": {
    "name": "Brown Star",
    "category": "drink",
    "id": "brownstar",
    "path": "/datum/chemical_reaction/brownstar",
    "result": "brownstar",
    "required_reagents": {
      "orangejuice": 2,
      "cola": 1
    },
    "result_amount": 2,
    "mix_sound": "sound/goonstation/misc/drinkfizz.ogg"
  },
  "milkshake": {
    "name": "Milkshake",
    "category": "drink",
    "id": "milkshake",
    "path": "/datum/chemical_reaction/milkshake",
    "result": "milkshake",
    "required_reagents": {
      "cream": 1,
      "ice": 2,
      "milk": 2
    },
    "result_amount": 5,
    "mix_sound": "sound/goonstation/misc/drinkfizz.ogg"
  },
  "rewriter": {
    "name": "Rewriter",
    "category": "drink",
    "id": "rewriter",
    "path": "/datum/chemical_reaction/rewriter",
    "result": "rewriter",
    "required_reagents": {
      "spacemountainwind": 1,
      "coffee": 1
    },
    "result_amount": 2,
    "mix_sound": "sound/goonstation/misc/drinkfizz.ogg"
  },
  "ginsonic": {
    "name": "ginsonic",
    "category": "drink",
    "id": "ginsonic",
    "path": "/datum/chemical_reaction/ginsonic",
    "result": "ginsonic",
    "required_reagents": {
      "gintonic": 1,
      "methamphetamine": 1
    },
    "result_amount": 2,
    "mix_message": "The drink turns electric blue and starts quivering violently.",
    "mix_sound": "sound/goonstation/misc/drinkfizz.ogg"
  },
  "applejack": {
    "name": "applejack",
    "category": "drink",
    "id": "applejack",
    "path": "/datum/chemical_reaction/applejack",
    "result": "applejack",
    "required_reagents": {
      "cider": 2
    },
    "max_temp": "T0C",
    "result_amount": 1,
    "mix_message": "The drink darkens as the water freezes, leaving the concentrated cider behind.",
    "mix_sound": null
  },
  "jackrose": {
    "name": "jackrose",
    "category": "drink",
    "id": "jackrose",
    "path": "/datum/chemical_reaction/jackrose",
    "result": "jackrose",
    "required_reagents": {
      "applejack": 4,
      "lemonjuice": 1
    },
    "result_amount": 5,
    "mix_sound": "sound/goonstation/misc/drinkfizz.ogg"
  },
  "synthanol": {
    "name": "Synthanol",
    "category": "drink",
    "id": "synthanol",
    "path": "/datum/chemical_reaction/synthanol",
    "result": "synthanol",
    "required_reagents": {
      "lube": 1,
      "plasma": 1,
      "fuel": 1
    },
    "result_amount": 3,
    "mix_message": "The chemicals mix to create shiny, blue substance.",
    "mix_sound": "sound/goonstation/misc/drinkfizz.ogg"
  },
  "robottears": {
    "name": "Robot Tears",
    "category": "drink",
    "id": "robottears",
    "path": "/datum/chemical_reaction/synthanol/robottears",
    "result": "robottears",
    "required_reagents": {
      "synthanol": 1,
      "oil": 1,
      "sodawater": 1
    },
    "result_amount": 3,
    "mix_message": "The ingredients combine into a stiff, dark goo."
  },
  "trinary": {
    "name": "Trinary",
    "category": "drink",
    "id": "trinary",
    "path": "/datum/chemical_reaction/synthanol/trinary",
    "result": "trinary",
    "required_reagents": {
      "synthanol": 1,
      "limejuice": 1,
      "orangejuice": 1
    },
    "result_amount": 3,
    "mix_message": "The ingredients mix into a colorful substance."
  },
  "servo": {
    "name": "Servo",
    "category": "drink",
    "id": "servo",
    "path": "/datum/chemical_reaction/synthanol/servo",
    "result": "servo",
    "required_reagents": {
      "synthanol": 2,
      "cream": 1,
      "hot_coco": 1
    },
    "result_amount": 4,
    "mix_message": "The ingredients mix into a dark brown substance."
  },
  "uplink": {
    "name": "Uplink",
    "category": "drink",
    "id": "uplink",
    "path": "/datum/chemical_reaction/synthanol/uplink",
    "result": "uplink",
    "required_reagents": {
      "rum": 1,
      "vodka": 1,
      "tequila": 1,
      "whiskey": 1,
      "synthanol": 1
    },
    "result_amount": 5,
    "mix_message": "The chemicals mix to create a shiny, orange substance."
  },
  "synthnsoda": {
    "name": "Synth 'n Soda",
    "category": "drink",
    "id": "synthnsoda",
    "path": "/datum/chemical_reaction/synthanol/synthnsoda",
    "result": "synthnsoda",
    "required_reagents": {
      "synthanol": 1,
      "cola": 1
    },
    "result_amount": 2,
    "mix_message": "The chemicals mix to create a smooth, fizzy substance."
  },
  "synthignon": {
    "name": "Synthignon",
    "category": "drink",
    "id": "synthignon",
    "path": "/datum/chemical_reaction/synthanol/synthignon",
    "result": "synthignon",
    "required_reagents": {
      "synthanol": 1,
      "wine": 1
    },
    "result_amount": 2,
    "mix_message": "The chemicals mix to create a fine, red substance."
  },
  "triple_citrus": {
    "name": "triple_citrus",
    "category": "drink",
    "id": "triple_citrus",
    "path": "/datum/chemical_reaction/triple_citrus",
    "result": "triple_citrus",
    "required_reagents": {
      "lemonjuice": 1,
      "limejuice": 1,
      "orangejuice": 1
    },
    "result_amount": 3,
    "mix_message": "The citrus juices begin to blend together.",
    "mix_sound": "sound/goonstation/misc/drinkfizz.ogg"
  },
  "chocolatepudding": {
    "name": "Chocolate Pudding",
    "category": "drink",
    "id": "chocolatepudding",
    "path": "/datum/chemical_reaction/chocolatepudding",
    "result": "chocolatepudding",
    "required_reagents": {
      "cocoa": 5,
      "milk": 5,
      "egg": 5
    },
    "result_amount": 20,
    "mix_sound": "sound/goonstation/misc/drinkfizz.ogg"
  },
  "vanillapudding": {
    "name": "Vanilla Pudding",
    "category": "drink",
    "id": "vanillapudding",
    "path": "/datum/chemical_reaction/vanillapudding",
    "result": "vanillapudding",
    "required_reagents": {
      "vanilla": 5,
      "milk": 5,
      "egg": 5
    },
    "result_amount": 20,
    "mix_sound": "sound/goonstation/misc/drinkfizz.ogg"
  },
  "cherryshake": {
    "name": "Cherry Shake",
    "category": "drink",
    "id": "cherryshake",
    "path": "/datum/chemical_reaction/cherryshake",
    "result": "cherryshake",
    "required_reagents": {
      "cherryjelly": 1,
      "ice": 1,
      "cream": 1
    },
    "result_amount": 3,
    "mix_sound": "sound/goonstation/misc/drinkfizz.ogg"
  },
  "bluecherryshake": {
    "name": "Blue Cherry Shake",
    "category": "drink",
    "id": "bluecherryshake",
    "path": "/datum/chemical_reaction/bluecherryshake",
    "result": "bluecherryshake",
    "required_reagents": {
      "bluecherryjelly": 1,
      "ice": 1,
      "cream": 1
    },
    "result_amount": 3,
    "mix_sound": "sound/goonstation/misc/drinkfizz.ogg"
  },
  "drunkenblumpkin": {
    "name": "Drunken Blumpkin",
    "category": "drink",
    "id": "drunkenblumpkin",
    "path": "/datum/chemical_reaction/drunkenblumpkin",
    "result": "drunkenblumpkin",
    "required_reagents": {
      "blumpkinjuice": 1,
      "irishcream": 2,
      "ice": 1
    },
    "result_amount": 4,
    "mix_sound": "sound/goonstation/misc/drinkfizz.ogg"
  },
  "pumpkin_latte": {
    "name": "Pumpkin space latte",
    "category": "drink",
    "id": "pumpkin_latte",
    "path": "/datum/chemical_reaction/pumpkin_latte",
    "result": "pumpkin_latte",
    "required_reagents": {
      "pumpkinjuice": 5,
      "coffee": 5,
      "cream": 5
    },
    "result_amount": 15,
    "mix_sound": "sound/goonstation/misc/drinkfizz.ogg"
  },
  "gibbfloats": {
    "name": "Gibb Floats",
    "category": "drink",
    "id": "gibbfloats",
    "path": "/datum/chemical_reaction/gibbfloats",
    "result": "gibbfloats",
    "required_reagents": {
      "dr_gibb": 5,
      "ice": 5,
      "cream": 5
    },
    "result_amount": 15,
    "mix_sound": "sound/goonstation/misc/drinkfizz.ogg"
  },
  "grapesoda": {
    "name": "grape soda",
    "category": "drink",
    "id": "grapesoda",
    "path": "/datum/chemical_reaction/grape_soda",
    "result": "grapesoda",
    "required_reagents": {
      "grapejuice": 1,
      "sodawater": 1
    },
    "result_amount": 2,
    "mix_sound": "sound/goonstation/misc/drinkfizz.ogg"
  },
  "eggnog": {
    "name": "eggnog",
    "category": "drink",
    "id": "eggnog",
    "path": "/datum/chemical_reaction/eggnog",
    "result": "eggnog",
    "required_reagents": {
      "rum": 5,
      "cream": 5,
      "egg": 5
    },
    "result_amount": 15,
    "mix_message": "The eggs nog together. Pretend that \"nog\" is a verb.",
    "mix_sound": "sound/goonstation/misc/drinkfizz.ogg"
  },
  "hooch": {
    "name": "Hooch",
    "category": "drink",
    "id": "hooch",
    "path": "/datum/chemical_reaction/hooch",
    "result": "hooch",
    "required_reagents": {
      "ethanol": 2,
      "fuel": 1
    },
    "result_amount": 3,
    "required_catalysts": {
      "enzyme": 1
    }
  },
  "bacchus_blessing": {
    "name": "Bacchus' Blessing",
    "category": "drink",
    "id": "bacchus_blessing",
    "path": "/datum/chemical_reaction/bacchus_blessing",
    "result": "bacchus_blessing",
    "required_reagents": {
      "hooch": 1,
      "absinthe": 1,
      "manlydorf": 1,
      "syndicatebomb": 1
    },
    "result_amount": 4,
    "mix_message": "<span class='warning'>The mixture turns to a sickening froth.</span>"
  },
  "icecoco": {
    "name": "Iced Cocoa",
    "category": "drink",
    "id": "icecoco",
    "path": "/datum/chemical_reaction/icecoco",
    "result": "icecoco",
    "required_reagents": {
      "ice": 1,
      "hot_coco": 3
    },
    "result_amount": 4,
    "mix_sound": "sound/goonstation/misc/drinkfizz.ogg"
  },
  "fernet_cola": {
    "name": "Fernet Cola",
    "category": "drink",
    "id": "fernet_cola",
    "path": "/datum/chemical_reaction/fernet_cola",
    "result": "fernet_cola",
    "required_reagents": {
      "fernet": 1,
      "cola": 2
    },
    "result_amount": 3,
    "mix_message": "The ingredients mix into a dark brown godly substance",
    "mix_sound": "sound/goonstation/misc/drinkfizz.ogg"
  },
  "arnold_palmer": {
    "name": "Arnold Palmer",
    "category": "drink",
    "id": "arnold_palmer",
    "path": "/datum/chemical_reaction/arnold_palmer",
    "result": "arnold_palmer",
    "required_reagents": {
      "icetea": 1,
      "lemonade": 1
    },
    "result_amount": 2,
    "mix_sound": "sound/goonstation/misc/drinkfizz.ogg"
  },
  "gimlet": {
    "name": "Gimlet",
    "category": "drink",
    "id": "gimlet",
    "path": "/datum/chemical_reaction/gimlet",
    "result": "gimlet",
    "required_reagents": {
      "gin": 1,
      "limejuice": 1,
      "sugar": 1
    },
    "result_amount": 3,
    "mix_sound": "sound/goonstation/misc/drinkfizz.ogg"
  },
  "sidecar": {
    "name": "Sidecar",
    "category": "drink",
    "id": "sidecar",
    "path": "/datum/chemical_reaction/sidecar",
    "result": "sidecar",
    "required_reagents": {
      "cognac": 1,
      "orangejuice": 1,
      "lemonjuice": 1
    },
    "result_amount": 3,
    "mix_sound": "sound/goonstation/misc/drinkfizz.ogg"
  },
  "whiskeysour": {
    "name": "Whiskey Sour",
    "category": "drink",
    "id": "whiskeysour",
    "path": "/datum/chemical_reaction/whiskey_sour",
    "result": "whiskeysour",
    "required_reagents": {
      "whiskey": 1,
      "lemonjuice": 1,
      "sugar": 1,
      "egg": 1
    },
    "result_amount": 4,
    "mix_sound": "sound/goonstation/misc/drinkfizz.ogg"
  },
  "mintjulep": {
    "name": "Mint Julep",
    "category": "drink",
    "id": "mintjulep",
    "path": "/datum/chemical_reaction/mint_julep",
    "result": "mintjulep",
    "required_reagents": {
      "whiskey": 1,
      "sugar": 1,
      "ice": 1,
      "mint": 1
    },
    "result_amount": 4,
    "mix_sound": "sound/goonstation/misc/drinkfizz.ogg"
  },
  "pinacolada": {
    "name": "Pina Colada",
    "category": "drink",
    "id": "pinacolada",
    "path": "/datum/chemical_reaction/pina_colada",
    "result": "pinacolada",
    "required_reagents": {
      "rum": 3,
      "pineapplejuice": 2,
      "cream": 1
    },
    "result_amount": 6,
    "mix_sound": "sound/goonstation/misc/drinkfizz.ogg"
  },
  "bilkshake": {
    "name": "Bilkshake",
    "category": "drink",
    "id": "bilkshake",
    "path": "/datum/chemical_reaction/bilkshake",
    "result": "bilkshake",
    "required_reagents": {
      "cream": 1,
      "bilk": 2,
      "ice": 2
    },
    "result_amount": 5
  },
  "sontse": {
    "name": "Sontse",
    "category": "drink",
    "id": "sontse",
    "path": "/datum/chemical_reaction/sontse",
    "result": "sontse",
    "required_reagents": {
      "tequilasunrise": 2,
      "flamingmoe": 1
    },
    "result_amount": 3,
    "mix_sound": "sound/goonstation/misc/drinkfizz.ogg"
  },
  "ahdomaieclipse": {
    "name": "Ahdomai Eclipse",
    "category": "drink",
    "id": "ahdomaieclipse",
    "path": "/datum/chemical_reaction/ahdomai_eclipse",
    "result": "ahdomaieclipse",
    "required_reagents": {
      "antifreeze": 1,
      "ice": 5
    },
    "result_amount": 5,
    "mix_sound": "sound/goonstation/misc/drinkfizz.ogg",
    "max_temp": "T0C"
  },
  "beachfeast": {
    "name": "Feast by the Beach",
    "category": "drink",
    "id": "beachfeast",
    "path": "/datum/chemical_reaction/beach_feast",
    "result": "beachfeast",
    "required_reagents": {
      "vodka": 1,
      "limejuice": 1,
      "grapejuice": 1,
      "silicon": 1
    },
    "result_amount": 4,
    "mix_sound": "sound/goonstation/misc/drinkfizz.ogg",
    "min_temp": "T0C + 100"
  },
  "fyrsskartears": {
    "name": "Tears of Fyrsskar",
    "category": "drink",
    "id": "fyrsskartears",
    "path": "/datum/chemical_reaction/fyrsskar_tears",
    "result": "fyrsskartears",
    "required_reagents": {
      "plasma": 1,
      "oxygen": 1,
      "triple_citrus": 1
    },
    "result_amount": 3,
    "mix_sound": "sound/goonstation/misc/drinkfizz.ogg"
  },
  "junglevox": {
    "name": "Jungle Vox",
    "category": "drink",
    "id": "junglevox",
    "path": "/datum/chemical_reaction/jungle_vox",
    "result": "junglevox",
    "required_reagents": {
      "rum": 1,
      "limejuice": 1,
      "sugar": 1,
      "kahlua": 1,
      "nitrogen": 1
    },
    "result_amount": 5,
    "mix_sound": "sound/goonstation/misc/drinkfizz.ogg"
  },
  "dieseife": {
    "name": "Die Seife",
    "category": "drink",
    "id": "dieseife",
    "path": "/datum/chemical_reaction/die_seife",
    "result": "dieseife",
    "required_reagents": {
      "lye": 1,
      "whiskey": 1,
      "iced_beer": 1
    },
    "result_amount": 3,
    "mix_sound": "sound/goonstation/misc/drinkfizz.ogg"
  },
  "slimemold": {
    "name": "Slime Mold",
    "category": "drink",
    "id": "slimemold",
    "path": "/datum/chemical_reaction/slime_mold",
    "result": "slimemold",
    "required_reagents": {
      "booger": 2,
      "slimejelly": 2,
      "egg": 1
    },
    "result_amount": 5,
    "mix_sound": "sound/goonstation/misc/drinkfizz.ogg"
  },
  "aciddreams": {
    "name": "Acid Dreams",
    "category": "drink",
    "id": "aciddreams",
    "path": "/datum/chemical_reaction/acid_dreams",
    "result": "aciddreams",
    "required_reagents": {
      "sacid": 1,
      "gargleblaster": 1,
      "sugar": 1
    },
    "result_amount": 3,
    "mix_sound": "sound/goonstation/misc/drinkfizz.ogg"
  },
  "islaywhiskey": {
    "name": "Islay Whiskey",
    "category": "drink",
    "id": "islaywhiskey",
    "path": "/datum/chemical_reaction/islay_whiskey",
    "result": "islaywhiskey",
    "required_reagents": {
      "eznutrient": 1,
      "whiskey": 1,
      "nutriment": 1
    },
    "result_amount": 3,
    "mix_sound": "sound/goonstation/misc/drinkfizz.ogg"
  },
  "dionasmash": {
    "name": "Diona Smash",
    "category": "drink",
    "id": "dionasmash",
    "path": "/datum/chemical_reaction/diona_smash",
    "result": "dionasmash",
    "required_reagents": {
      "nutriment": 4,
      "sugar": 1,
      "gin": 1
    },
    "result_amount": 5,
    "mix_sound": "sound/goonstation/misc/drinkfizz.ogg"
  },
  "ultramatter": {
    "name": "Ultramatter",
    "category": "drink",
    "id": "ultramatter",
    "path": "/datum/chemical_reaction/ultramatter",
    "result": "ultramatter",
    "required_reagents": {
      "singulo": 5,
      "plasma_dust": 1
    },
    "result_amount": 5,
    "mix_sound": "sound/goonstation/misc/drinkfizz.ogg"
  },
  "howler": {
    "name": "Howler",
    "category": "drink",
    "id": "howler",
    "path": "/datum/chemical_reaction/howler",
    "result": "howler",
    "required_reagents": {
      "limejuice": 1,
      "lemon_lime": 1,
      "orangejuice": 1,
      "tequila": 2
    },
    "result_amount": 5,
    "mix_sound": "sound/goonstation/misc/drinkfizz.ogg"
  },
  "lean": {
    "name": "Lean",
    "category": "drink",
    "id": "lean",
    "path": "/datum/chemical_reaction/lean",
    "result": "lean",
    "required_reagents": {
      "space_drugs": 1,
      "sodawater": 1,
      "grapejuice": 1
    },
    "result_amount": 5,
    "mix_sound": "sound/goonstation/misc/drinkfizz.ogg"
  }
}

export default drink_recipes
