
import {
  CheckboxControl, ColorPicker
} from '@wordpress/components';
import { useState } from '@wordpress/element';

const MultiSelect = ({ stockArrayName, stokArray, type, option, setAttributes }) => {
  //チェックボックスクリック時にstokArrayの内容を書き換え
  const handleOptionChange = (optionValue, checked) => {
    if (checked) {
      setAttributes({ [stockArrayName]: [...stokArray, optionValue] });
    } else {
      setAttributes({ [stockArrayName]: stokArray.filter((value) => value !== optionValue) });
    }
  };

  //選択されたColorItemの色を保持する状態変数
  const [activeColorIndex, setActiveColorIndex] = useState(null);
  //ColorItemがクリックされたときの処理
  const handleColorItemClick = (index) => {
    setActiveColorIndex(index === activeColorIndex ? null : index);
  };
  //ColorPickerで色が設定されたときの処理
  const handleColorPickerChange = (color) => {
    const updatedArray = [...stokArray];
    updatedArray[activeColorIndex] = color.hex;
    setAttributes({ [stockArrayName]: updatedArray });
    setActiveColorIndex(null); // ColorPickerの処理完了後にactiveColorIndexをnullに設定
  };


  return (
    <div>
      {type === 'checkBox' &&
        React.Children.map(option, (label) => {
          return (
            <CheckboxControl
              label={label}
              checked={stokArray.includes(label)}
              onChange={(checked) => handleOptionChange(label, checked)}
            />

          );
        })
      }
      {type === 'colorPicker' && (
        <>
          {stokArray.map((color, index) => (
            <div className='color_item' style={{ backgroundColor: color }} onClick={() => handleColorItemClick(index)} />
          ))}
          {activeColorIndex !== null && (
            <ColorPicker
              color={stokArray[activeColorIndex]}
              onChangeComplete={handleColorPickerChange}
            />
          )}
        </>
      )}
    </div>
  );
};

export default MultiSelect;
