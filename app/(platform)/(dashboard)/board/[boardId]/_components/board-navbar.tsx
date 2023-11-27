import { auth } from "@clerk/nextjs";
import { Board } from "@prisma/client";
import { BoardTitleForm } from "./board-title-form";
import BoardOptions from "./board-options";

interface BoardNavbarProps {
  id: string;
  board: Board;
}

const BoardNavbar = async ({ id, board }: BoardNavbarProps) => {
  const { orgId } = auth();

  return (
    <div className="w-full h-14 z-[40] bg-black/50 fixed top-14 flex items-center px-6 gap-x-4 text-white">
      <BoardTitleForm
        data={board}
      />
      <div className="ml-auto">
        <BoardOptions id={board.id}/>
      </div>
    </div>
  );
};

export default BoardNavbar;
