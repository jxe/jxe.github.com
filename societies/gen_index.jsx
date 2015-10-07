import React from 'react'
import ReactDOMServer from 'react-dom/server'
import marked from 'marked'

// var base = require('airtable').base('appjIKQ1eAEJ4BHta')
// curl "https://api.airtable.com/v0/appjIKQ1eAEJ4BHta/rituals?view=all" -H "Authorization: Bearer key45hB5ezeHNSpJ5" > rituals.json
// curl "https://api.airtable.com/v0/appjIKQ1eAEJ4BHta/societies?view=all" -H "Authorization: Bearer key45hB5ezeHNSpJ5" > societies.json

var societies  = require('./societies.json').records
var allRituals = require('./rituals.json').records.reduce((acc, rec) => (
  acc[rec.id] = rec.fields, acc
), {})

var Page = ({societies}) => (
  <html>
    <link rel="stylesheet" href="gameslib.css"></link>
    <div className="Intro">
      <h1>A Library of Rituals and Games</h1>
      <p>
        There is a future society I'd like to be part of, but I'm not sure how to draw its outline. Here are three imagined societies, each an exploration of a set of values and of the rituals which might reproduce them.  All these rituals and games have been tried and tested, and some are in regular use by various groups.
      </p>
      <ul>
        {societies.map( x => <li><a href={`#${x.id}`}>{x.fields.name}</a></li> )}
      </ul>
      <p>
        Within each society, the first games listed are good for beginners, then harder games, followed by those that take advanced training. A few of these rituals (as noted) are by other designers.  Some rituals appear in more than one society.
      </p>
    </div>
    {societies.map( x => <Society id={x.id} {...x.fields} /> )}
    <div className="Outro">
      <p>
        Thanks for visiting the library. Contact me with any questions, send photos or comments if you play these games, and let's work together on these societies or on the societies that will come after.
      </p>
    </div>
  </html>
);

var Society = ({id, name, description, rituals}) => {
  var games = rituals.map( id => allRituals[id] )
  var easyGames = games.filter( x => x.difficulty == 'easy' )
  var mediumGames = games.filter( x => x.difficulty == 'medium' )
  var hardGames = games.filter( x => x.difficulty == 'hard' )
  var desc = {__html: marked(description || "")}

  return <div id={id} className="Society">
    <h2>{name}</h2>
    <div className="blurb">
      <span dangerouslySetInnerHTML={desc}></span>
      <span className="attribution">--Joe</span>
    </div>

    {easyGames.length && <h3>Rituals accessible to initiates</h3>}
    {easyGames.map( x => <Game {...x} /> )}

    {mediumGames.length && <h3>More difficult rituals</h3>}
    {mediumGames.map( x => <Game {...x} /> )}

    {hardGames.length && <h3>Advanced and challenging rituals</h3>}
    {hardGames.map( x => <Game {...x} /> )}
  </div>
};

var Game = ({title, author, instructions, niche, values, skills, media}) => (
  <div className="Game">
    <h4>
      {title}
      {
        author != "Joe Edelman" && <span className="attribution"> by {author}</span>
      }
    </h4>
    <p>{instructions}</p>
    {
      media && media.length &&
      <ul className="thumbnails">{
        media.map( x => (
          x.thumbnails && <a href={x.url}>
            <img src={x.thumbnails.small.url}/>
          </a>
        ))
      }</ul>
    }
    <dl>
      <dt>Key values</dt><dd>{values && values.map( x => <span>{x}</span>)}</dd>
      <dt>Play during</dt> <dd><span>{niche}</span></dd>
    </dl>
  </div>
);

// <dt>Skills trained</dt>      <dd>{skills && skills.map( x => <span>{x}</span>)}</dd>


var s = ReactDOMServer.renderToStaticMarkup( <Page societies={societies} /> );
process.stdout.write(s + '\n');
