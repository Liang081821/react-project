import { create } from "zustand";

interface DialogProps {
  isOpen: boolean;
  showDialog: () => void;
  closeDialog: () => void;
}

const useDialogStore = create<DialogProps>((set) => ({
  isOpen: false,

  showDialog: () => {
    set(() => ({
      isOpen: true,
    }));
  },

  closeDialog: () =>
    set(() => ({
      isOpen: false,
    })),
}));
export default useDialogStore;
