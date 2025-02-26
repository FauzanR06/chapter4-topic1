const studentUsecase = require("../usecase/student");

exports.getStudents = async (req, res, next) => {
  try {
    const data = await studentUsecase.getStudents();

    res.status(200).json({
      message: "Successs",
      data,
    });
  } catch (error) {
    next(error);
  }
};
exports.getStudent = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await studentUsecase.getStudent(id);

    if (!data) {
      return next({
        message: `Student with id ${id} is not found!`,
        statusCode: 404,
      });
    }

    res.status(200).json({
      message: "Successs",
      data,
    });
  } catch (error) {
    next(error);
  }
};

exports.createStudent = async (req, res, next) => {
  try {
    const { name, photo, class_id } = req.body;
    if (!name || name == "") {
      return next({
        message: "name must be provided!",
        statusCode: 400,
      });
    }
    if (!photo || photo == "") {
      return next({
        message: "photo must be provided!",
        statusCode: 400,
      });
    }
    if (!class_id || class_id == "") {
      return next({
        message: "class_id must be provided!",
        statusCode: 400,
      });
    }
    const data = await studentUsecase.createStudent({ name, photo, class_id });

    res.status(200).json({
      message: "Successs",
      data,
    });
  } catch (error) {
    next(error);
  }
};

exports.updateStudent = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, photo, class_id } = req.body;
    if (!name || name == "") {
      return next({
        message: "name must be provided!",
        statusCode: 400,
      });
    }
    if (!photo || photo == "") {
      return next({
        message: "photo must be provided!",
        statusCode: 400,
      });
    }
    if (!class_id || class_id == "") {
      return next({
        message: "class_id must be provided!",
        statusCode: 400,
      });
    }
    const data = await studentUsecase.updateStudent(id, {
      name,
      photo,
      class_id,
    });

    res.status(200).json({
      message: "Successs",
      data,
    });
  } catch (error) {
    next(error);
  }
};

exports.deleteStudent = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await studentUsecase.deleteStudent(id);

    res.status(200).json({
      message: "Successs",
      data,
    });
  } catch (error) {
    next(error);
  }
};
