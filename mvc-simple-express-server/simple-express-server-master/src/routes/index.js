mealsController = require("../controllers/mealsController");

//
const appRoute = router => {
  router.get("/menu", mealsController.getMenuController);
};

module.exports = appRoute;