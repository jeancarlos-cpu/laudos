import React, { useEffect } from "react";
import Select from "react-select";
import { makeStyles } from "@material-ui/core/styles";
import { width } from "@material-ui/system";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  select: {
    marginTop: "20px",
    fontSize: "1.2em",
    width: "80%"
  }
}));

const FetchField = ({ data }) => {
  const classes = useStyles();

  const [options, setOptions] = React.useState([]);
  const [currentOption, setCurrentOption] = React.useState(null);

  useEffect(() => {
    setOptions(
      data.map((item, index) => ({
        label: Object.values(item).reduce(
          (acc, value) => acc.concat(" - ", value),
          ""
        ),
        value: index
      }))
    );
  }, []);

  return (
    <div className={classes.root}>
      <Select
        className={classes.select}
        value={currentOption}
        maxMenuHeight={390}
        styles={{
          menu: provided => ({ ...provided, zIndex: 9999 })
        }}
        theme={theme => ({
          ...theme,
          borderRadius: 5,
          colors: {
            ...theme.colors,
            primary25: "#D8D6D9",
            primary: "#3f51b5"
          },
          spacing: {
            baseUnit: 8.5
          }
        })}
        TextFieldProps={{
          label: "data"
        }}
        placeholder="Selecionar Laudo (Empresa, Codigo, Mina, Complexo, Responsável, NIT, Data Emissão, Data Validade)"
        options={options}
        onChange={e => setCurrentOption(e)}
      />
    </div>
  );
};

export default FetchField;
