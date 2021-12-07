const { Connections, User } = require("../db/models");

/* const getStudent = async (id) => {
  const student = await User.findOne({
    where: { id: id },
  });
  console.log(student);

  return student
}

exports.connectionsGet = async (req, res) => {
  const connections = await Connections.findAll();
  console.log("13 Line", connections);
  if (connections) {
    const resArr = connections.map((el) => {
      //Search for Users
      console.log("17 Line", el.dataValues.id);
      const student = getStudent(el.dataValues.id);
      console.log("19 Line", student)

      return {
        id: el.dataValues.id,
        investor: investor.login,
        student: student.login,
        status: el.dataValues.status,
      }
    });
    console.log("32 Line", resArr);
    res.json(resArr);
  }
  //res.json([]);
}; */
//TO BE DONE

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
