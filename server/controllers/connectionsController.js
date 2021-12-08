const { Connections, User, Sequelize } = require("../db/models");


exports.connectionsGet = async (req, res) => {
  const users = await User.findAll({
    attributes: ["login", "id"],
  });
  console.log(users);

  const connections = await Connections.findAll();
  console.log(connections);
  if (connections) {
    const resArr = connections.map((el) => {
      let studentLogin;
      let investorLogin;
      //Search for Student
      for(let i of users) {
        if(i.dataValues.id === el.dataValues.student_id) {
          studentLogin = i.dataValues.login;
        }
        if(i.dataValues.id === el.dataValues.investor_id) {
          investorLogin = i.dataValues.login;
        }
      }

      return {
        id: el.dataValues.id,
        investor: investorLogin,
        student: studentLogin,
        status: el.dataValues.status,
      }
    });
    console.log("32 Line", resArr);
    res.json(resArr);
  }
}


exports.connectionsUpdate = async (req, res) => {
  const connection = await Connections.findOne({
    where: {
      student_id: req.session.user.id,
      investor_id: req.body.investor_id,
    },
  });
  if (connection === null) {
    const newConnection = new Connections({
      student_id: req.session.user.id,
      investor_id: req.body.investor_id,
      status: req.body.status,
    });
    await newConnection.save();

    //Search for Users
    const student = await User.findOne({
      where: { id: newConnection.student_id },
    });
    const investor = await User.findOne({
      where: { id: newConnection.investor_id },
    });

    res.json({
      id: newConnection.id,
      investor: investor.login,
      student: student.login,
      status: newConnection.status,
    });
  } else {
    res.json({ err: "Connection is already created!" });
  }
};