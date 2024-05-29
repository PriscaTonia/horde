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
  withCheckIcon?: boolean;
  allowDeselect?: boolean;
  data: any[];
  styles?: any;
  classNames?: any;
  searchable?: boolean;
  selectedValue: string;
  setSelectedvalue: React.Dispatch<React.SetStateAction<string>>;
}

export interface CreateBudgetAmountProps {
  selectedCurrency: string;
  budgetAmount: number;
  handleSetBudgetAmount: (e: any) => void;
  currencies: { value: string; label: string }[];
  setSelectedCurrency: React.Dispatch<React.SetStateAction<string>>;
}

export interface CreateBudgetAddCategoryProps {
  handleAdd: (item: any) => void;
}
