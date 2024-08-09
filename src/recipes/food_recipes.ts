const food_recipes = {
  "tofu": {
    "name": "Tofu",
    "category": "food",
    "id": "tofu",
    "path": "/datum/chemical_reaction/tofu",
    "result": null,
    "required_reagents": {
      "soymilk": 10
    },
    "required_catalysts": {
      "enzyme": 5
    },
    "result_amount": 1
  },
  "chocolate_bar": {
    "name": "Chocolate Bar",
    "category": "food",
    "id": "chocolate_bar",
    "path": "/datum/chemical_reaction/chocolate_bar2",
    "result": null,
    "required_reagents": {
      "milk": 2,
      "cocoa": 2,
      "sugar": 2
    },
    "result_amount": 1
  },
  "soysauce": {
    "name": "Soy Sauce",
    "category": "food",
    "id": "soysauce",
    "path": "/datum/chemical_reaction/soysauce",
    "result": "soysauce",
    "required_reagents": {
      "soymilk": 1,
      "sodiumchloride": 1,
      "water": 8
    },
    "result_amount": 10
  },
  "oliveoil": {
    "name": "Olive Oil",
    "category": "food",
    "id": "oliveoil",
    "path": "/datum/chemical_reaction/oliveoil",
    "result": "oliveoil",
    "required_reagents": {
      "olivepaste": 5,
      "water": 5
    },
    "result_amount": 10
  },
  "mayonnaise": {
    "name": "Mayonnaise",
    "category": "food",
    "id": "mayonnaise",
    "path": "/datum/chemical_reaction/mayonnaise",
    "result": "mayonnaise",
    "required_reagents": {
      "egg": 5,
      "sodiumchloride": 1,
      "oliveoil": 5
    },
    "result_amount": 10
  },
  "bbqsauce": {
    "name": "BBQ Sauce",
    "category": "food",
    "id": "bbqsauce",
    "path": "/datum/chemical_reaction/bbqsauce",
    "result": "bbqsauce",
    "required_reagents": {
      "ash": 10,
      "tomatojuice": 10,
      "blackpepper": 1
    },
    "result_amount": 10
  },
  "cheesewheel": {
    "name": "Cheesewheel",
    "category": "food",
    "id": "cheesewheel",
    "path": "/datum/chemical_reaction/cheesewheel",
    "result": null,
    "required_reagents": {
      "milk": 40
    },
    "required_catalysts": {
      "enzyme": 5
    },
    "result_amount": 1
  },
  "syntiflesh": {
    "name": "Syntiflesh",
    "category": "food",
    "id": "syntiflesh",
    "path": "/datum/chemical_reaction/syntiflesh",
    "result": null,
    "required_reagents": {
      "blood": 5,
      "cryoxadone": 1
    },
    "result_amount": 1
  },
  "hot_ramen": {
    "name": "Hot Ramen",
    "category": "food",
    "id": "hot_ramen",
    "path": "/datum/chemical_reaction/hot_ramen",
    "result": "hot_ramen",
    "required_reagents": {
      "water": 1,
      "dry_ramen": 3
    },
    "result_amount": 3
  },
  "hell_ramen": {
    "name": "Hell Ramen",
    "category": "food",
    "id": "hell_ramen",
    "path": "/datum/chemical_reaction/hell_ramen",
    "result": "hell_ramen",
    "required_reagents": {
      "capsaicin": 1,
      "hot_ramen": 6
    },
    "result_amount": 6
  },
  "dough": {
    "name": "Dough",
    "category": "food",
    "id": "dough",
    "path": "/datum/chemical_reaction/cookiedough",
    "result": null,
    "required_reagents": {
      "milk": 10,
      "flour": 10,
      "sugar": 5
    },
    "result_amount": 1,
    "mix_message": "The ingredients form a dough. It smells sweet and yummy."
  },
  "cookiedough": {
    "name": "Dough",
    "category": "food",
    "id": "dough",
    "path": "/datum/chemical_reaction/cookiedough",
    "result": null,
    "required_reagents": {
      "milk": 10,
      "flour": 10,
      "sugar": 5
    },
    "result_amount": 1,
    "mix_message": "The ingredients form a dough. It smells sweet and yummy."
  },
  "corn_syrup": {
    "name": "corn_syrup",
    "category": "food",
    "id": "corn_syrup",
    "path": "/datum/chemical_reaction/corn_syrup",
    "result": "corn_syrup",
    "required_reagents": {
      "corn_starch": 1,
      "sacid": 1
    },
    "result_amount": 2,
    "min_temp": "T0C + 100",
    "mix_message": "The mixture forms a viscous, clear fluid!"
  },
  "vhfcs": {
    "name": "vhfcs",
    "category": "food",
    "id": "vhfcs",
    "path": "/datum/chemical_reaction/vhfcs",
    "result": "vhfcs",
    "required_reagents": {
      "corn_syrup": 1
    },
    "required_catalysts": {
      "enzyme": 1
    },
    "result_amount": 1,
    "mix_message": "The mixture emits a sickly-sweet smell."
  },
  "cola": {
    "name": "cola",
    "category": "food",
    "id": "cola",
    "path": "/datum/chemical_reaction/cola",
    "result": "cola",
    "required_reagents": {
      "carbon": 1,
      "oxygen": 1,
      "water": 1,
      "sugar": 1
    },
    "result_amount": 4,
    "mix_message": "The mixture begins to fizz.",
    "mix_sound": "sound/goonstation/misc/drinkfizz.ogg"
  },
  "fake_cheese": {
    "name": "Fake cheese",
    "category": "food",
    "id": "fake_cheese",
    "path": "/datum/chemical_reaction/fake_cheese",
    "result": "fake_cheese",
    "required_reagents": {
      "vomit": 5,
      "milk": 5
    },
    "result_amount": 5,
    "mix_message": "The mixture curdles up."
  },
  "weird_cheese": {
    "name": "Weird cheese",
    "category": "food",
    "id": "weird_cheese",
    "path": "/datum/chemical_reaction/weird_cheese",
    "result": null,
    "required_reagents": {
      "green_vomit": 5,
      "milk": 5
    },
    "result_amount": 1,
    "mix_message": "The disgusting mixture sloughs together horribly, emitting a foul stench.",
    "mix_sound": "sound/goonstation/misc/gurggle.ogg"
  },
  "hydrogenated_soybeanoil": {
    "name": "Partially hydrogenated space-soybean oil",
    "category": "food",
    "id": "hydrogenated_soybeanoil",
    "path": "/datum/chemical_reaction/hydrogenated_soybeanoil",
    "result": "hydrogenated_soybeanoil",
    "required_reagents": {
      "soybeanoil": 1,
      "hydrogen": 1
    },
    "result_amount": 2,
    "min_temp": "T0C + 250",
    "mix_message": "The mixture emits a burnt, oily smell."
  },
  "meatslurry": {
    "name": "Meat Slurry",
    "category": "food",
    "id": "meatslurry",
    "path": "/datum/chemical_reaction/meatslurry",
    "result": "meatslurry",
    "required_reagents": {
      "corn_starch": 1,
      "blood": 1
    },
    "result_amount": 2,
    "mix_message": "The mixture congeals into a bloody mass.",
    "mix_sound": "sound/effects/blobattack.ogg"
  },
  "gravy": {
    "name": "Gravy",
    "category": "food",
    "id": "gravy",
    "path": "/datum/chemical_reaction/gravy",
    "result": "gravy",
    "required_reagents": {
      "porktonium": 1,
      "corn_starch": 1,
      "milk": 1
    },
    "result_amount": 3,
    "min_temp": "T0C + 100",
    "mix_message": "The substance thickens and takes on a meaty odor."
  },
  "enzyme": {
    "name": "Universal enzyme",
    "category": "food",
    "id": "enzyme",
    "path": "/datum/chemical_reaction/enzyme2",
    "result": "enzyme",
    "required_reagents": {
      "green_vomit": 1,
      "sugar": 1
    },
    "result_amount": 2,
    "min_temp": "T0C + 480",
    "mix_message": "The mixture emits a horrible smell as you heat up the contents. Luckily, enzymes don't stink.",
    "mix_sound": "sound/goonstation/misc/fuse.ogg"
  },
  "vinegar": {
    "name": "Vinegar",
    "category": "food",
    "id": "vinegar",
    "path": "/datum/chemical_reaction/vinegar",
    "result": "vinegar",
    "required_reagents": {
      "acetic_acid": 1,
      "water": 9
    },
    "result_amount": 10
  }
}


export default food_recipes
