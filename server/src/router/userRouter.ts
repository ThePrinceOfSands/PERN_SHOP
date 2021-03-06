import Router from "express";

import userController from "../controllers/userController";

const router = Router();

router.post("/registration", userController.registration);
router.post("/login", userController.login);
router.get("/auth", userController.checkAuth);

export default router;
