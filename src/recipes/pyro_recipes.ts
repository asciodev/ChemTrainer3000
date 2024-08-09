const pyro_recipes = {
  "explosion_potassium": {
    "name": "Explosion",
    "category": "pyro",
    "id": "explosion_potassium",
    "path": "/datum/chemical_reaction/explosion_potassium",
    "result": null,
    "required_reagents": {
      "water": 1,
      "potassium": 1
    },
    "result_amount": 2,
    "mix_message": "The mixture explodes!"
  },
  "emp_pulse": {
    "name": "EMP Pulse",
    "category": "pyro",
    "id": "emp_pulse",
    "path": "/datum/chemical_reaction/emp_pulse",
    "result": null,
    "required_reagents": {
      "uranium": 1,
      "iron": 1
    },
    "result_amount": 2
  },
  "beesplosion": {
    "name": "Bee Explosion",
    "category": "pyro",
    "id": "beesplosion",
    "path": "/datum/chemical_reaction/beesplosion",
    "result": null,
    "required_reagents": {
      "honey": 1,
      "lazarus_reagent": 1,
      "radium": 1
    },
    "result_amount": 1
  },
  "nitroglycerin": {
    "name": "Nitroglycerin",
    "category": "pyro",
    "id": "nitroglycerin",
    "path": "/datum/chemical_reaction/nitroglycerin",
    "result": "nitroglycerin",
    "required_reagents": {
      "glycerol": 1,
      "facid": 1,
      "sacid": 1
    },
    "result_amount": 2
  },
  "stabilizing_agent": {
    "name": "stabilizing_agent",
    "category": "pyro",
    "id": "stabilizing_agent",
    "path": "/datum/chemical_reaction/stabilizing_agent",
    "result": "stabilizing_agent",
    "required_reagents": {
      "iron": 1,
      "oxygen": 1,
      "hydrogen": 1
    },
    "result_amount": 2,
    "mix_message": "The mixture becomes a yellow liquid!"
  },
  "clf3": {
    "name": "Chlorine Trifluoride",
    "category": "pyro",
    "id": "clf3",
    "path": "/datum/chemical_reaction/clf3",
    "result": "clf3",
    "required_reagents": {
      "chlorine": 1,
      "fluorine": 3
    },
    "result_amount": 2,
    "min_temp": "T0C + 150"
  },
  "sorium": {
    "name": "Sorium",
    "category": "pyro",
    "id": "sorium",
    "path": "/datum/chemical_reaction/sorium",
    "result": "sorium",
    "required_reagents": {
      "mercury": 1,
      "carbon": 1,
      "nitrogen": 1,
      "oxygen": 1,
      "stabilizing_agent": 1
    },
    "result_amount": 4,
    "mix_message": "The mixture pops and crackles before settling down."
  },
  "sorium_explosion": {
    "name": "Sorium Explosion",
    "category": "pyro",
    "id": "sorium_explosion",
    "path": "/datum/chemical_reaction/sorium_explosion",
    "result": null,
    "required_reagents": {
      "mercury": 1,
      "carbon": 1,
      "nitrogen": 1,
      "oxygen": 1
    },
    "result_amount": 1,
    "mix_message": "The mixture explodes with a big bang."
  },
  "sorium_vortex": {
    "name": "sorium_vortex",
    "category": "pyro",
    "id": "sorium_vortex",
    "path": "/datum/chemical_reaction/sorium_explosion/sorium",
    "result": null,
    "required_reagents": {
      "sorium": 1
    },
    "min_temp": "T0C + 200",
    "mix_sound": null,
    "mix_message": null
  },
  "liquid_dark_matter": {
    "name": "Liquid Dark Matter",
    "category": "pyro",
    "id": "liquid_dark_matter",
    "path": "/datum/chemical_reaction/liquid_dark_matter",
    "result": "liquid_dark_matter",
    "required_reagents": {
      "plasma": 1,
      "radium": 1,
      "carbon": 1,
      "stabilizing_agent": 1
    },
    "result_amount": 4,
    "mix_message": "The mixture begins to glow in a dark purple."
  },
  "implosion": {
    "name": "Implosion",
    "category": "pyro",
    "id": "implosion",
    "path": "/datum/chemical_reaction/ldm_implosion",
    "result": null,
    "required_reagents": {
      "plasma": 1,
      "radium": 1,
      "carbon": 1
    },
    "result_amount": 1,
    "mix_message": "The mixture implodes suddenly."
  },
  "ldm_vortex": {
    "name": "LDM Vortex",
    "category": "pyro",
    "id": "ldm_vortex",
    "path": "/datum/chemical_reaction/ldm_implosion/liquid_dark_matter",
    "result": null,
    "required_reagents": {
      "liquid_dark_matter": 1
    },
    "min_temp": "T0C + 200",
    "mix_sound": null,
    "mix_message": null
  },
  "blackpowder": {
    "name": "Black Powder",
    "category": "pyro",
    "id": "blackpowder",
    "path": "/datum/chemical_reaction/blackpowder",
    "result": "blackpowder",
    "required_reagents": {
      "saltpetre": 1,
      "charcoal": 1,
      "sulfur": 1
    },
    "result_amount": 3,
    "mix_sound": "sound/goonstation/misc/fuse.ogg"
  },
  "blackpowder_explosion": {
    "name": "Black Powder Kaboom",
    "category": "pyro",
    "id": "blackpowder_explosion",
    "path": "/datum/chemical_reaction/blackpowder_explosion",
    "result": null,
    "required_reagents": {
      "blackpowder": 1
    },
    "result_amount": 1,
    "min_temp": "T0C + 200",
    "mix_message": null,
    "mix_sound": null
  },
  "flash_powder": {
    "name": "Flash powder",
    "category": "pyro",
    "id": "flash_powder",
    "path": "/datum/chemical_reaction/flash_powder",
    "result": "flash_powder",
    "required_reagents": {
      "aluminum": 1,
      "potassium": 1,
      "sulfur": 1,
      "chlorine": 1,
      "stabilizing_agent": 1
    },
    "result_amount": 5,
    "mix_message": "The chemicals hiss and fizz briefly before falling still."
  },
  "flash": {
    "name": "Flash",
    "category": "pyro",
    "id": "flash",
    "path": "/datum/chemical_reaction/flash",
    "result": null,
    "required_reagents": {
      "aluminum": 1,
      "potassium": 1,
      "sulfur": 1,
      "chlorine": 1
    },
    "mix_message": "The chemicals catch fire, burning brightly and violently!",
    "mix_sound": "sound/effects/bang.ogg"
  },
  "flash_powder_flash": {
    "name": "flash_powder_flash",
    "category": "pyro",
    "id": "flash_powder_flash",
    "path": "/datum/chemical_reaction/flash/flash_powder",
    "result": null,
    "required_reagents": {
      "flash_powder": 1
    },
    "min_temp": "T0C + 100",
    "mix_message": null
  },
  "phlogiston": {
    "name": "Phlogiston",
    "category": "pyro",
    "id": "phlogiston",
    "path": "/datum/chemical_reaction/phlogiston",
    "result": "phlogiston",
    "required_reagents": {
      "phosphorus": 1,
      "plasma": 1,
      "sacid": 1,
      "stabilizing_agent": 1
    },
    "result_amount": 4,
    "mix_message": "The substance becomes sticky and extremely warm."
  },
  "phlogiston_dust": {
    "name": "Phlogiston Dust",
    "category": "pyro",
    "id": "phlogiston_dust",
    "path": "/datum/chemical_reaction/phlogiston_dust",
    "result": "phlogiston_dust",
    "required_reagents": {
      "phlogiston": 1,
      "charcoal": 1,
      "phosphorus": 1,
      "sulfur": 1
    },
    "result_amount": 2,
    "mix_message": "The substance becomes a pile of burning dust."
  },
  "phlogiston_fire": {
    "name": "Phlogiston Fire",
    "category": "pyro",
    "id": "phlogiston_fire",
    "path": "/datum/chemical_reaction/phlogiston_fire",
    "result": "phlogiston",
    "required_reagents": {
      "phosphorus": 1,
      "plasma": 1,
      "sacid": 1
    },
    "mix_message": "The substance erupts into wild flames."
  },
  "napalm": {
    "name": "Napalm",
    "category": "pyro",
    "id": "napalm",
    "path": "/datum/chemical_reaction/napalm",
    "result": "napalm",
    "required_reagents": {
      "fuel": 1,
      "sugar": 1,
      "ethanol": 1
    },
    "result_amount": 3,
    "mix_message": "The mixture congeals into a sticky gel."
  },
  "smoke_powder": {
    "name": "smoke_powder",
    "category": "pyro",
    "id": "smoke_powder",
    "path": "/datum/chemical_reaction/smoke_powder",
    "result": "smoke_powder",
    "required_reagents": {
      "potassium": 1,
      "sugar": 1,
      "phosphorus": 1,
      "stabilizing_agent": 1
    },
    "result_amount": 3,
    "mix_message": "The mixture sets into a greyish powder!"
  },
  "smoke": {
    "name": "smoke",
    "category": "pyro",
    "id": "smoke",
    "path": "/datum/chemical_reaction/smoke",
    "result": null,
    "required_reagents": {
      "potassium": 1,
      "sugar": 1,
      "phosphorus": 1
    },
    "result_amount": 1,
    "mix_message": "The mixture quickly turns into a pall of smoke!"
  },
  "smoke_powder_smoke": {
    "name": "smoke_powder_smoke",
    "category": "pyro",
    "id": "smoke_powder_smoke",
    "path": "/datum/chemical_reaction/smoke/smoke_powder",
    "result": null,
    "required_reagents": {
      "smoke_powder": 1
    },
    "min_temp": "T0C + 100",
    "result_amount": 1,
    "mix_sound": null
  },
  "sonic_powder": {
    "name": "sonic_powder",
    "category": "pyro",
    "id": "sonic_powder",
    "path": "/datum/chemical_reaction/sonic_powder",
    "result": "sonic_powder",
    "required_reagents": {
      "oxygen": 1,
      "cola": 1,
      "phosphorus": 1,
      "stabilizing_agent": 1
    },
    "result_amount": 2,
    "mix_message": "The mixture begins to bubble slighly!"
  },
  "sonic_deafen": {
    "name": "sonic_deafen",
    "category": "pyro",
    "id": "sonic_deafen",
    "path": "/datum/chemical_reaction/sonic_deafen",
    "result": null,
    "required_reagents": {
      "oxygen": 1,
      "cola": 1,
      "phosphorus": 1
    },
    "mix_message": "The mixture begins to bubble furiously!",
    "mix_sound": "sound/effects/bang.ogg"
  },
  "sonic_powder_deafen": {
    "name": "sonic_powder_deafen",
    "category": "pyro",
    "id": "sonic_powder_deafen",
    "path": "/datum/chemical_reaction/sonic_deafen/sonic_powder",
    "result": null,
    "required_reagents": {
      "sonic_powder": 1
    },
    "min_temp": "T0C + 100",
    "mix_message": null
  },
  "cryostylane": {
    "name": "cryostylane",
    "category": "pyro",
    "id": "cryostylane",
    "path": "/datum/chemical_reaction/cryostylane",
    "result": "cryostylane",
    "required_reagents": {
      "water": 1,
      "plasma": 1,
      "nitrogen": 1
    },
    "result_amount": 3,
    "mix_sound": "sound/goonstation/misc/drinkfizz.ogg"
  },
  "pyrosium": {
    "name": "pyrosium",
    "category": "pyro",
    "id": "pyrosium",
    "path": "/datum/chemical_reaction/pyrosium",
    "result": "pyrosium",
    "required_reagents": {
      "plasma": 1,
      "radium": 1,
      "phosphorus": 1
    },
    "result_amount": 3
  },
  "azide": {
    "name": "azide",
    "category": "pyro",
    "id": "azide",
    "path": "/datum/chemical_reaction/azide",
    "result": null,
    "required_reagents": {
      "chlorine": 1,
      "oxygen": 1,
      "nitrogen": 1,
      "ammonia": 1,
      "sodium": 1,
      "silver": 1
    },
    "result_amount": 1,
    "mix_message": "The substance violently detonates!",
    "mix_sound": "sound/effects/bang.ogg"
  },
  "firefighting_foam": {
    "name": "firefighting_foam",
    "category": "pyro",
    "id": "firefighting_foam",
    "path": "/datum/chemical_reaction/firefighting_foam",
    "result": "firefighting_foam",
    "required_reagents": {
      "carbon": 1,
      "chlorine": 1,
      "sulfur": 1
    },
    "result_amount": 3,
    "mix_message": "The mixture bubbles gently.",
    "mix_sound": "sound/goonstation/misc/drinkfizz.ogg"
  },
  "clf3_firefighting": {
    "name": "clf3_firefighting",
    "category": "pyro",
    "id": "clf3_firefighting",
    "path": "/datum/chemical_reaction/clf3_firefighting",
    "result": null,
    "required_reagents": {
      "firefighting_foam": 1,
      "clf3": 1
    },
    "result_amount": 1,
    "mix_message": "The substance violently detonates!",
    "mix_sound": "sound/effects/bang.ogg"
  },
  "shock_explosion": {
    "name": "shock_explosion",
    "category": "pyro",
    "id": "shock_explosion",
    "path": "/datum/chemical_reaction/shock_explosion",
    "result": null,
    "required_reagents": {
      "teslium": 5,
      "uranium": 5
    },
    "result_amount": 1,
    "mix_message": "<span class='danger'>The reaction releases an electrical blast!</span>",
    "mix_sound": "sound/magic/lightningbolt.ogg"
  },
  "thermite": {
    "name": "Thermite",
    "category": "pyro",
    "id": "thermite",
    "path": "/datum/chemical_reaction/thermite",
    "result": "thermite",
    "required_reagents": {
      "aluminum": 1,
      "iron": 1,
      "oxygen": 1
    },
    "result_amount": 3
  },
  "confetti": {
    "name": "Confetti",
    "category": "pyro",
    "id": "confetti",
    "path": "/datum/chemical_reaction/confetti",
    "result": "confetti",
    "required_reagents": {
      "cyanide": 1,
      "colorful_reagent": 1
    },
    "result_amount": 5,
    "mix_message": "The mixture congeals into a dry powder."
  },
  "confettibomb": {
    "name": "confettibomb",
    "category": "pyro",
    "id": "confettibomb",
    "path": "/datum/chemical_reaction/confetti/confettibomb",
    "result": null,
    "required_reagents": {
      "confetti": 1
    },
    "min_temp": "T0C + 300",
    "mix_sound": "sound/effects/confetti_partywhistle.ogg",
    "mix_message": "The powder starts vibrating quickly!"
  }
}


export default pyro_recipes
