from avulto import DME as dme
import json
import os.path
import os
from collections import ChainMap
import pdb

class ChemExtractor:
	def __init__(self) -> None:
		para_dir = os.environ.get("PARA_DIR")
		para_dme_path = f'{para_dir}/paradise.dme'
		if(para_dir is None or not "PARA_DIR" in os.environ):
			print("Please supply the Paradise directory with the PARA_DIR environment variable")
			exit(1)

		if(not os.path.exists(os.path.abspath(para_dir))):
			print(f'No such directory: {para_dir}')
			exit(1)

		if(not os.path.exists(os.path.abspath(f'{para_dir}/paradise.dme'))):
			print(f'No such file: {para_dme_path}')
			exit(1)

		self.para = dme.from_file(para_dme_path)
  
	def recipe_paths(self):
		return self.para.paths_prefixed("/datum/chemical_reaction/")
  
	def reagent_paths(self):
		return self.para.paths_prefixed("/datum/reagent/")
	
	def food_paths(self):
		return self.para.paths_prefixed("/obj/item/food")

	def byond_to_obj(self, path: str) -> object:
		td = self.para.typedecl(path)
		tdid = td.value('id')
		if(path.child_of('/obj/item/food')):
			tdid = str(path).split('/')[-1]
		rec = {}
		for var in td.varnames():
			if(var == "required_reagents" or var == "required_catalysts" or var == "list_reagents"):
				try:
					rec[var] = dict(ChainMap(*td.value(var)))
				except:
					rec[var] = {td.value(var): 1}
			else:
				if(var != "cooktype"):
					rec[var] = td.value(var)
				if(var == "result"):
					tdid = rec[var]
		return {tdid: rec}

	def write(self, path, content):
		with open(path, "w") as f:
			f.write(json.dumps(content))

	def extract(self) -> list:
		self.recipes = dict(ChainMap(*[self.byond_to_obj(path) for path in self.recipe_paths()]))
		self.reagents = dict(ChainMap(*[self.byond_to_obj(path) for path in self.reagent_paths()]))
		self.foods = dict(ChainMap(*[self.byond_to_obj(path) for path in self.food_paths()]))
		self.write("src/recipes/recipes.json", self.recipes)
		self.write("src/recipes/reagents.json", self.reagents)
		self.write("src/recipes/foods.json", self.foods)

ChemExtractor().extract()
