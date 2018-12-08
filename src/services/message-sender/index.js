const redis = require('redis');

const { redis: { host, port } } = require('../../config');

const pub = redis.createClient({ host, port });

const sendMessageToRoom = (message) => {
  pub.publish(`rooms/${message.room.id}`, JSON.stringify(message));
};

module.exports = {
  sendMessageToRoom,
};
