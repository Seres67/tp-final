import { Router } from "express";
import movieController from "../controllers/movie.controller";
import verifyAuth from "../middlewares/auth.middleware";
import multer from "../middlewares/multer.middleware";

const router = Router({ mergeParams: true });

router.get("/", movieController.getAllMovies);
router.get("/:movieId", movieController.findById);
router.post("/", verifyAuth, multer.single("imageUrl"), movieController.create);
router.put("/:movieId", verifyAuth, movieController.update);
router.delete("/:movieId", verifyAuth, movieController.destroy);

export default router;
