import { Router } from "express";
import User from "../model/userModel.js";

export const router = Router();

router.get("/", async (req, res) => {
    try {
        let limit = req.query?.limit;
        if (!limit) limit = 50

        const users = await User.find().limit(limit).select({ id: 0 });

        if (!users) throw new Error();

        return res.json(users);
    } catch (err) {
        res.status(500).json({ message: "Internal Server Error" });
    }
})

router.get("/:field", async (req, res) => {
    try {
        const field = req.params?.field;
        let limit = req.query?.limit;
        if (!limit) limit = 50;
        console.log(limit)
        const details = await User.find().select({ [field]: 1 }).limit(limit).exec();

        if (!details) throw new Error();
        return res.json(details);
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Internal Server Error" });
    }
})

export default router;