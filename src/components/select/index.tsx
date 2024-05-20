import React from "react";
import { Select } from "@mantine/core";
import { SelectProps } from "@/utils/types/component_types";

const SelectDropdown = ({
  data,
  label = "",
  placeholder = "",
  selectedValue,
  setSelectedvalue,
  searchable,
}: SelectProps) => {
  return (
    <Select
      label={label}
      value={selectedValue}
      onChange={(value) => setSelectedvalue(value as string)}
      placeholder={placeholder}
      data={data}
      searchable={searchable}
      checkIconPosition="right"
    />
  );
};

export { SelectDropdown };
