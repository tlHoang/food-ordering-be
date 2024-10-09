import express  from "express";
import MyUserController from "../controllers/MyUserController";
import { jwtCheck } from "../middleware/auth";

const router = express.Router();

// api/my/user
router.post("/", jwtCheck,MyUserController.createCurrentUser);
// router.post('/',  (req, res) =>{
//     res.json({ message: "Hello" });
// });

export default router;
