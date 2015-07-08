module.exports = {
  connection: 'localMysqlServer',
  attributes: {
    key:{
      type:"string",
      required:true,
      minLength: 3
    },
    value:{
      type:"text",
      required:true
    },
    group:{
      type:"string",
      required:true
    }
  }
};
