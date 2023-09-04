const mealModel = require("../models/mealModel");

//function to get all meals from mealModel
const getMenuController = (req, res, next) => {
  const meals = mealModel.getMeals();

  res.render("menu", { meals });
};

module.exports = getMenuController