import React from "react";
import { IconButton } from "@chakra-ui/react";

export const TableIconButton = ({
  icon,
  onClick,
  isDisabled,
  children,
  colorScheme,
  ...rest
}) => {
  return (
    <IconButton
      size="sm"
      icon={icon}
      borderWidth={1}
      onClick={onClick}
      // colorScheme={colorScheme}
      isDisabled={isDisabled}
      // background={"brand.500"}
      _hover={{
        background: "brand.500",
      }}
      {...rest}
    >
      {children}
    </IconButton>
  );
};

TableIconButton.defaultProps = {
  colorScheme: "gray",
};
