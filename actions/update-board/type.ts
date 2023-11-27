import {z} from "zod"

import { ActionState } from "@/lib/create-safe-action"
import { UpdateBoard } from "./schema"
import { Board } from "@prisma/client"

export type InputType = z.infer<typeof UpdateBoard>
export type ReturnType = ActionState<InputType, Board>