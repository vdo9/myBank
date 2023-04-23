import DropDownPicker from "react-native-dropdown-picker";
import React from "react";
import { useState } from "react";
import { TranslatorProvider } from "react-native-translator";
import { View } from "react-native/types";

const Dropdown = ({ setLanguage }) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);

  const [languages, setInitialLangs] = useState([
    {
      label: "English",
      value: "english",
    },
    {
      label: "Korean",
      value: "korean",
    },
    {
      label: "Japanese",
      value: "japanese",
    },
  ]);


  return (
    <DropDownPicker
      style={{marginRight: 28}}
      open={open}
      value={value}
      items={languages}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setInitialLangs}
      onSelectItem={(selectedLanguage) => {
        console.log(selectedLanguage);
        setLanguage(selectedLanguage.value);
      }}
    />
  );
};

export default Dropdown;
