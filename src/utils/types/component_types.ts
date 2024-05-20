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

export interface SelectProps {
  label?: string;
  placeholder?: string;
  data: any[];
  searchable?: boolean;
  selectedValue: string;
  setSelectedvalue: React.Dispatch<React.SetStateAction<string>>;
}
