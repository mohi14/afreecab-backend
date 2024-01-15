import express from "express";
import { isAuth } from "../../utils/middleware";
import { loginUser, registerUser } from "./user.controller";




const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);

// router.get("/", isAuth, getAllUsers);
// router.get("/myInfo", isAuth, getloggedInUserInfo);
// router.get("/userInfo/:id", isAuth, getUser);

// router.delete("/deleteUser/:id", isAdmin, deleteUser);

// router.patch("/updateUserInfo", isAuth, upload.single("image"), updateUserInfo);

export default router;