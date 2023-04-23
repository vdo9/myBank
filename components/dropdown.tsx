import DropDownPicker from "react-native-dropdown-picker";
import React from "react";
import { useState } from "react";
import { TranslatorProvider } from "react-native-translator";
import { AppContext }  from '../context/AppContext';
import { useContext } from "react";
import { View } from "react-native";

const Dropdown = ({ setLanguage }) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);

  // context setting
  // const [selectedLanguage, setSelectedLanguage] = useContext(AppContext);

  const [selectedLanguage, setSelectedLanguage] = useState("Korean")


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
    {
      label: "Chinese",
      value: "chinese"
    },
    {
      label: "Spanish",
      value: "spanish"
    },
    {
      label: "Vietnamese",
      value: "vietnamese"
    }
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
      placeholder="Select Language"
      onSelectItem={(selectedLanguage) => {
        console.log(selectedLanguage);
        setLanguage(selectedLanguage.value);
        setSelectedLanguage(selectedLanguage.value);
      }}
    />
  );
};

export default Dropdown;
