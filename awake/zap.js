
// THE ENGINE
//
// Players watch for updates for their own situation, like when they have a new
// task, when speech recognition has identified that they've finished a task,
// or when they are outside of any scene but might be able to join one or start
// one.
//
// Based on their situation, they trigger events on scenes: completing tasks,
// trying to join scenes, trying to start scenes.
//
// Because scenes have no state, the event can be run on the scene within the
// client's world, and any changes to players that are made can be synced out.
// When scenes modify the pool of players, if they want a change to be
// persisted, they set the 'DIRTY' key on those players and at the end of the
// tick the dirtied player objects are updated globally.


function zap(options){
  let {playerId, storage, scenes, localTaskManagers} = options
  let {onPlayersChanged, updateDirtyPlayers, updatePlayerTask} = storage

  onPlayersChanged( players => {
    if (!players[playerId]) players[playerId] = { id: playerId }
    let me = my = player = players[playerId]
    let context = { players, player, playerId }

    // 1. Star in the shell if sceneless
    if (!my.scene){
      scenes['DEFAULT'].handle('playerTriesToStarIn', context)
    }

    // 2. If I've finished a task, tell my current scene
    if (my.task && my.task.is == 'done'){
      scenes[my.scene.type].handle('playerTaskIsOver', context)
    }

    // 3. If I have a new task I can start locally, kick it off
    if (my.task && my.task.is == 'new'){
      let tm = localTaskManagers[my.task.type]
      if (tm){
        me.DIRTY = true
        my.task.is = 'ongoing'
        setTimeout(() => tm(my.task, cs => updatePlayerTask(playerId, cs)), 0)
      }
    }

    // always flush changes
    updateDirtyPlayers(players)
  })

}




// chrome doesnt have this yet :/
if (!Object.values) Object.values = function(x){
  return Object.keys(x).reduce((p,c) => (p.push(x[c]), p), [])
}






// There are players and scenes.
//
// Active people, in the room, walking around and doing things, are players.
//
// Players can be:
// * assigned a task by setting 'task'
// * claimed for a scene by setting 'scene'
// * released from a scene by nulling 'scene' and 'task'
// * routed to another scene by setting 'nextScene' (now handled by shell)
//
// Here's what a player looks like.

let examplePlayer = {
  id: 'Player1287391287391',
  task: {
    type: 'displayText',       // displayText, recordAudio, speak, etc
    text: 'Walk across the room.',
    is: 'new'                  // can be 'new', 'ongoing', or 'done'
  },
  scene: {
    type: 'spanishInquisition', // a sceneId
    performance: '<117263213>',
    extraSceneData: 'ashdkasd',     // used by the current scene
    likeForInstanceRole: 'grandInquisitor'
  },
  nextScene: {
    type: 'debriefing',
    performance: '<debriefing:128739123>', // (optional)
    andWhateverElseTheSceneMightNeed: 'interviewer'
  }
}



// Potential interactions between people, or people and exhibits, or group games
// to play, etc, are scenes.
//
// There could be a scene around an exhibit, for instance. Or if Rob is working
// at the desk, there could be a scene around him, and if I am sceneless then
// merely approaching him might make me eligible to join his scene in a
// supporting role.
//
// Scenes are strategies for dealing with three types of events. Their sole
// response to these events is to modify players in the room. they don't have
// their own state. later, they'll be declared w/o code, and live loaded
// from the db.



let exampleScene = {
  type: 'exampleScene',
  handle(event, context){
    // event can be  'playerTriesToJoin', 'playerTriesToStarIn',
    // 'playerTaskIsOver', or 'playerTriesToLeaveAbruptly'
    //
    // context = { playerId, player, players }
    //
    // modify some players, maybe give the new guy a task, maybe
    // change someone elses task to include them. or maybe ignore the join
    // attempt if the attemping player is in the wrong area or something
  }
}
