import RecipeCalculator from './components/RecipeCalculator'
import './App.css'
import GithubCorner from './components/GithubCorner'

function App() {

  return (
    <>
      <GithubCorner href="https://github.com/asciodev/ChemTrainer3000"></GithubCorner>
      <RecipeCalculator></RecipeCalculator>
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <p className="col-md-4 mb-0 text-body-secondary">&copy; 2568 ChemMaster Appliances</p>
        <div className="d-flex justify-content-end col-md-4 align-items-left"><p className="mb-0 text-body-secondary">Made with <a href="https://github.com/warriorstar-orion/avulto">Avulto</a>!</p></div>
      </footer>
    </>
  )
}

export default App
