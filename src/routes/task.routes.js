import { Router } from "express";
const router = Router();

import { taskFormAdd } from "../controllers/task.controllers";

router.get('/tast/add', taskFormAdd);

module.export = router;
// export default router;