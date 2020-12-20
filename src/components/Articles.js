import React from 'react';

const Articles=(props)=>{
	return(
		<article>
			<a href={`https://www.reddit.com/${props.article.permalink}`} rel="noreferrer" target='_blank'>
				<h3>{props.article.title}</h3>
			</a>
		</article>
	)
}

export default Articles;