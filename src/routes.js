var React = require('react'),
    { Route, DefaultRoute, NotFoundRoute } = require('react-router'),

    App = require('./app.jsx'),
    PlayGame = require('./components/playgame.jsx'),
    StartScreen = require('./components/startscreen.jsx'),
    GameOver = require('./components/gameover.jsx'),
    GameWin = require('./components/gamewin.jsx');

module.exports = (
    <Route path='/' handler={App}>
        <DefaultRoute name='startscreen' handler={StartScreen}/>
        <Route name='play' path='/play/?' handler={PlayGame} key={Math.random()}/>
        <Route name='gameover' path='/gameover/?' handler={GameOver}/>
        <Route name='gamewin' path='/gamewin/?' handler={GameWin}/>
    </Route>
);
