import React from "react";
import { Select } from "@mantine/core";
import { SelectProps } from "@/utils/types/component_types";
import { ArrowDown } from "@/icons";

const SelectDropdown = ({
  data,
  label = "",
  placeholder = "",
  selectedValue,
  setSelectedvalue,
  searchable,
  styles,
  classNames,
  withCheckIcon,
  allowDeselect,
}: SelectProps) => {
  return (
    <Select
      label={label}
      classNames={classNames}
      value={selectedValue}
      onChange={(value) => setSelectedvalue(value as string)}
      placeholder={placeholder}
      data={data}
      searchable={searchable}
      checkIconPosition="right"
      styles={styles}
      rightSection={<ArrowDown />}
      withCheckIcon={withCheckIcon}
      allowDeselect={allowDeselect}
    />
  );
};

export { SelectDropdown };
