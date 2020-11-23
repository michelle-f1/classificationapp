module.exports = {
  mongoURI: "mongodb://localhost:27017/data_auth",
  secret: "thesecret",
};

if(process.env.NODE_ENV === 'production'){
  module.exports = {
    mongoURI: "mongodb+srv://cluster0.gkdoh.mongodb.net/data_auth",
    secret: "thesecret"
  }
}else{
  module.exports ={
  mongoURI: "mongodb+srv://cluster0.gkdoh.mongodb.net/data_auth",
  secret : "thesecret"
  }
}
