import React from 'react'
import ReactDOMServer from 'react-dom/server'
import marked from 'marked'
// var base = require('airtable').base('appjIKQ1eAEJ4BHta')

var societies  = require('./societies.json').records
var allRituals = require('./rituals.json').records.reduce((acc, rec) => (
  acc[rec.id] = rec.fields, acc
), {})

var Page = ({societies}) => (
  <html>
    <title>A Library of Rituals and Games</title>
    <link rel="stylesheet" href="gameslib.css"></link>
    <a href=".."><div className="me_photo" /></a>
    <div className="Intro">
      <div className="blurb">
        <p>
          There is a future society I'd like to be part of, but I cannot quite see its outline. I've gathered here notes for three societies, an ongoing exploration of different social values and of the rituals which might reproduce them. The rituals and games here have been tried, have been tested, their instructions refined. Many are played regularly. But the societies that could unite them are not (yet) real.
        </p>
        <p>
          Within each society, the first games listed are good for beginners, then harder games, and lastly those requiring advanced training. A few of these rituals (as noted) are by other designers.  A few appear in more than one society. -- Joe
        </p>
      </div>
      <h1>
        <small>Before you, in boxes,</small>
        a library of rituals and group games
      </h1>
      <ul>
        {societies.map( x => (
          <li>
            <a href={`#${x.id}`}>{x.fields.name}</a>
            <br/>
            <p className="byline">{x.fields.byline}</p>
          </li>
        ))}
      </ul>
    </div>
    {societies.map( x => <Society id={x.id} {...x.fields} /> )}
    <div className="Outro blurb">
      <p>
        Thanks for visiting the library. Contact me with any questions, send photos or comments if you play these games, and let's work together on these societies or on the societies that will come after.
      </p>
    </div>
  </html>
);

var Society = ({id, name, byline, description, rituals}) => {
  var desc = {__html: marked(description || "")}
  var games = rituals.map( id => allRituals[id] )
  var [ easy, medium, hard ] = [ "easy", "medium", "hard" ].map( lvl => (
    games.filter( x => x.difficulty == lvl )
  ))

  return <div id={id} className="Society">
    <h2>{name}</h2>
    <p className="byline">{byline}</p>
    <div className="blurb">
      <span dangerouslySetInnerHTML={desc}></span>
      <span className="attribution">--Joe</span>
    </div>

    {easy.length && <h3>Rituals accessible to initiates</h3>}
    {easy.map( x => <Game {...x} /> )}
    {medium.length && <h3>More difficult rituals</h3>}
    {medium.map( x => <Game {...x} /> )}
    {hard.length && <h3>Advanced and challenging</h3>}
    {hard.map( x => <Game {...x} /> )}
  </div>
};

var Game = ({title, author, instructions, niche, values, skills, media}) => (
  <div className="Game">
    <h4>
      {title}
      {
        author != "Joe Edelman" &&
        <span className="attribution"> by {author}</span>
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

// <dt>Skills trained</dt><dd>{skills && skills.map( x => <span>{x}</span>)}</dd>

var s = ReactDOMServer.renderToStaticMarkup( <Page societies={societies} /> );
process.stdout.write(s + '\n');
