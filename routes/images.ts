import { Router } from "express";
import { getImages } from "../controllers/images";

const router = Router();

router.get('/', getImages);

export default router;