import { create } from "zustand";

type ProModalStore = {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
};

export const useProModal = create<ProModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
