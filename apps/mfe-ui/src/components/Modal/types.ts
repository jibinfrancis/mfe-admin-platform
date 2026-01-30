export type ModalVariant = "center" | "side";

export type ModalWidth = "sm" | "md" | "lg";

export interface ModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  variant?: ModalVariant;
  width?: ModalWidth;
}
