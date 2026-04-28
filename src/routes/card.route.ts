import { Router } from "express";
import { validateCard } from "../controllers/card.controller";
const router = Router();

//Endpoint
router.post("/validate-card", validateCard);

//export router
export default router;