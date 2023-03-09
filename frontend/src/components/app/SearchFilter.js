import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};


export default function SearchFilter({variants, backgroundColor = 'background.paper'}) {
  const [variantName, setVariantName] = React.useState([
  ]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;

    console.log(value);

    let duplicateRemoved = [];

    value.forEach((item) => {
      if (duplicateRemoved.findIndex((o) => o.id === item.id) >= 0) {
        duplicateRemoved = duplicateRemoved.filter((x) => x.id === item.id);
      } else {
        duplicateRemoved.push(item);
      }
    });

    setVariantName(duplicateRemoved);
  };


  return (
   
      <FormControl sx={{width: 240 }}>
        <InputLabel sx ={{display:'flex', alignItems:'center', backgroundColor}}>
            <FilterAltOutlinedIcon />
            Group By
        </InputLabel>
        <Select
          multiple
          value={variantName}
          onChange={handleChange}
          
          renderValue={(selected) => selected.map((x) => x.label).join(', ')}
          MenuProps={MenuProps}
        >
          {variants.map((variant) => (
            <MenuItem key={variant.id} value={variant}>
              <Checkbox
                checked={
                  variantName.findIndex((item) => item.id === variant.id) >= 0
                }
              />
              <ListItemText primary={variant.label} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>

  );
}
  