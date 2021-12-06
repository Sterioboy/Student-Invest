const { User } = require("../db/models");

exports.getAllInvestors = async (req, res) => {
  const data = [
    {
      id: 1,
      user: "John Brown",
      language: "English, French",
      country: "Canada",
      info: "Aliquam congue pulvinar aliquam. Nunc vehicula at libero et euismod. Integer at viverra mi. Donec.",
      image: null,
      interests: "business, finance",
    },
    {
      id: 2,
      user: "John Smith",
      language: "English, French",
      country: "Canada",
      info: "Aliquam congue pulvinar aliquam. Nunc vehicula at libero et euismod. Integer at viverra mi. Donec.",
      image: null,
      interests: "business, finance",
    },
    {
      id: 3,
      user: "McGill University",
      country: "Canada",
      info: "Integer convallis ultricies mauris eu facilisis. Integer fermentum hendrerit lorem eu pulvinar. Ut elementum nisl et faucibus sollicitudin. Aliquam scelerisque.",
    },
  ];
  console.log(data);
  res.json(data);
};
