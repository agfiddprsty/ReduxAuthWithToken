import React from 'react';
import './App.css'

class ListChara extends React.Component {
	// constructor(){
	//   super();
	//   this.state = {
	// 	chara: []
	//   }
	// }

componentDidMount(){
	this.props.fetchChara();
}
render() {

	if(this.props.data.fetching){
		return(
		<p>Loading...</p>
		)
	}
	
	return (
		<div style={{overflow: 'hidden'}}>
			<li>{console.log(this.props.data.chara)}	
			{/* {this.props.data.chara && this.props.data.chara.map((chara, key) =>
				<div className="row" key={key}>
				<div className="col s6">
				<div className="row card" id="news-card">
				<div className="col-sm-9 card-content">
					<div className="flex-column">
					<p><strong>{chara.title}</strong></p>
					<br/>
					<p>{chara.text}</p>
					<p className="desc">{chara.updated_at}</p>
					</div> */}
					{/* <p id="publication-paragraph">Published on {(chara.attributes.publishedAt)} by {chara.attributes.author}</p>	 */}
				{/* </div> */}
				{/* <div className="pull-right card-image">
					<img className="article-img" src={chara.attributes.image.original} id="article-img" alt="img"/>
				</div> */}
				{/* </div>
			</div>
			</div>)}			 */}
			{/* {this.props.data.chara && this.props.data.chara.map((chara, key) => 
			<div className="row" key={key}>
				<div className="col s6">
				<div className="row card" id="news-card">
				<div className="col-sm-9 card-content">
					<div className="flex-column">
					<p><a className="title" href={"https://kitsu.io/characters/" + (chara.attributes.slug)} ><strong>{chara.attributes.canonicalName} ({chara.attributes.names.ja_jp})</strong></a></p>
					<br/>
					<p className="desc">{chara.attributes.description}</p>
					</div>
					<p id="publication-paragraph">Published on {formatDate(chara.attributes.publishedAt)} by {chara.attributes.author}</p>	
				</div>
				<div className="pull-right card-image">
					<img className="article-img" src={chara.attributes.image.original} id="article-img" alt="img"/>
				</div>
				</div>
			</div>
			</div>	)} */}
			</li>
		</div>
	)
	// function formatDate(date) {

	// 	const monthNames = ["January", "February", "March", "April", "May", "June",
	// 		"July", "August", "September", "October", "November", "December"
	// 	]
	// 	const d = new Date(date)

	// 	const year 		= d.getFullYear()
	// 	const monthName = monthNames[d.getMonth()]	
	// 	const day  		= d.getDate()

	// 	return monthName + " " + day + ", " + year
	// 	}
  	}
}

export default ListChara;
