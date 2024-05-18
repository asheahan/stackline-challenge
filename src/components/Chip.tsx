import MaterialChip, { ChipProps } from "@mui/material/Chip";

function Chip(props: ChipProps) {
  return (
    <MaterialChip
      variant="outlined"
      size="small"
      {...props}
      sx={{
        ...props.sx,
        borderRadius: "4px",
        paddingX: "12px",
        borderColor: "grey",
      }}
    />
  );
}

export default Chip;
