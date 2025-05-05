import { create } from "zustand";

// 定義對話框的類型
type DialogType = "create" | "edit" | null; // 管理不同的 dialog >> 如果有多個 dialog，要不就是要提供 id，否則就是在區域管理 isOpen

interface DialogProps {
  isOpen: boolean;
  dialogType: DialogType;
  showDialog: (type: DialogType) => void;
  closeDialog: () => void;
}

const useDialogStore = create<DialogProps>((set) => ({
  isOpen: false,
  dialogType: null,

  showDialog: (type: DialogType) => {
    set(() => ({
      isOpen: true,
      dialogType: type,
    }));
  },

  // 關閉對話框
  closeDialog: () =>
    set(() => ({
      isOpen: false,
      dialogType: null,
    })),
}));

export default useDialogStore;
