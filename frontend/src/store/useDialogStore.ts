import { create } from "zustand";

type DialogType = null | "create" | "edit";

interface DialogProps {
  dialog: DialogType; // 取代 isOpen >> 可以管理更多 dialog
  showCreateDialog: () => void;
  showEditDialog: () => void;
  closeDialog: () => void;
}

const useDialogStore = create<DialogProps>((set) => ({
  dialog: null,

  showCreateDialog: () => {
    set(() => ({
      dialog: "create",
    }));
  },
  showEditDialog: () => {
    set(() => ({
      dialog: "edit",
    }));
  },
  closeDialog: () =>
    set(() => ({
      dialog: null,
    })),
}));
export default useDialogStore;
