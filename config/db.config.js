const {
    MONGDB_USER,
    MONGDB_PASSWORD,
    MONGDB_HOST,
    MONGDB_DOCKER_PORT,
    MONGDB_DATABASE,
  } = process.env;
 module.exports = {
    url: `mongodb://${MONGDB_USER}:${MONGDB_PASSWORD}@${MONGDB_HOST}:${MONGDB_DOCKER_PORT}/${MONGDB_DATABASE}?authSource=admin`
  };
/*module.exports = {
    url: "mongodb://localhost:27017/userData"
};*/