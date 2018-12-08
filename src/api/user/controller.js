const { User, Room } = require('database-module/models');

const { sendMessageToRoom } = require('../../services/message-sender');

const login = (req, res, next) => User.login(req.body)
  .then((user) => {
    req.session.userId = user.id;
    res.status(200).json(user);
    return Promise.all([
      Room.findOne({ where: { title: 'Auth' } }),
      user,
    ]);
  })
  .then(([room, user]) => {
    if (room) {
      sendMessageToRoom({
        text: `User ${user.name} logged in`,
        user,
        room,
      });
    }
  })
  .catch(err => next(err));

module.exports = {
  login,
};
