export interface BtnProps {
  label: string;
  onclick?: () => void;
  size?: "small" | "big";
  custom?: string;
  variant?: "primary" | "secondary";
  loading?: boolean;
  icon?: React.ReactNode;
  disabled?: boolean;
  type?: "button" | "submit";
}
