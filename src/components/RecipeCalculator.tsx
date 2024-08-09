import { useState } from 'react';
import './RecipeCalculator.css'
import recipes from '../recipes/recipes';
import RecipeRow from './RecipeRow';
import Fuse from 'fuse.js';

function RecipeCalculator() {
  const [searchData, setSearchData] = useState("");
  const fuse = new Fuse(Object.keys(recipes));
  const results = fuse.search(searchData);
  function search(query: string) {
    setSearchData(query);
  }
  return <>
    <h1>ChemTrainer 3000 BETA</h1>
    <div id="betatesterwelcome">
      <p>Thank you for applying to be a beta tester for the ChemTrainer 3000, part of the ChemMaster 3000 software suite.</p>
      <p className="legal">This software is provided for testing purposes only. Neither ChemMaster nor its subsidiaries are liable for any unauthorized use of information obtained with the ChemTrainer 3000 software. If you suspect someone is using this software illegally, you should report it to your nearest Trans-Solar Federation Patent Magistrate immediately or risk becoming liable as an accomplice, in which case you will be located and prosecuted to the fullest extent allowable by Space Law.</p>
    </div>
    <form>
      <div className="mb-3">
        <label htmlFor="chemical_out" className="form-label">Recipe for chemical:</label>
        <input type="search" className="form-control" id="chemical_out" placeholder="Chemical name" value={searchData} onChange={(e)=>search(e.target.value)}></input>
      </div>
    </form>
    <hr/>
    <table className="table table-striped-columns table-bordered">
      <thead>
        <tr>
          <th scope="col">Output</th>
          <th scope="col">Recipe</th>
        </tr>
      </thead>
      <tbody>
        {results.map(recipe_name => <>
          <RecipeRow recipe={recipes[recipe_name.item]} />
        </>)}
      </tbody>
    </table>
  </>;
}

export default RecipeCalculator
