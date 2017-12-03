import React from 'react'
import axios from 'axios'
// import { fetchPopularGithubRepos } from '../utility/api'

const SelectLanguage = (props) => {
	const languages = ['All', 'Javascript', 'Ruby', 'Java', 'CSS', 'Python']

	return (
		<ul className='languages'>
			{languages.map((lang) => 
				<button
          className={lang === props.selectedLanguage ? `btn btn-primary list-btn hvr-underline-from-center`: `btn btn-light list-btn hvr-underline-from-center`}
          onClick={props.updateLanguage.bind(null, lang)}
          key={lang}>
          {lang}
        </button>
			)}
		</ul>
	)
}

function RepoGrid (props) {
  return (
    <ul className='popular-list'>
      {props.repos.map(function (repo, index) {
        return (
          <li key={repo.name} className='popular-item hvr-grow-shadow'>
            <div className='popular-rank'>#{index + 1}</div>
            <ul className='space-list-items'>
              <li>
                <img
                  className='avatar'
                  src={repo.owner.avatar_url}
                  alt={'Avatar for ' + repo.owner.login}
                />
              </li>
              <li><a href={repo.html_url}>{repo.name}</a></li>
              <li>@{repo.owner.login}</li>
              <li>{repo.stargazers_count} stars</li>
            </ul>
          </li>
        )
      })}
    </ul>
  )
}

class Popular extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedLanguage: 'All',
			repos: null
		}
		console.log('init state')
	}

	componentDidMount() {
		this.updateLanguage(this.state.selectedLanguage)
		console.log('component did mount')
	}

	updateLanguage = (lang) => {
		this.setState({
			selectedLanguage: lang,
			repos: null
		})
		console.log('update language trigered')

		let encodedURI = window.encodeURI('https://api.github.com/search/repositories?q=stars:>1+language:'+ lang + '&sort=stars&order=desc&type=Repositories')
		
		axios.get(encodedURI)
			.then((response) => {
				this.setState({
					repos: response.data.items
				})
			})
			.catch((error) => console.log(error))
			console.log('send get')
	}	
	
	render() {
		console.log('component rendered')
		return (
			<div>
				<SelectLanguage 
					selectedLanguage={this.state.selectedLanguage}
					updateLanguage={this.updateLanguage}
				/>
				{!this.state.repos
          ? <p>LOADING!</p>
          : <RepoGrid repos={this.state.repos} />}
			</div>
		)
	}
}

export default Popular