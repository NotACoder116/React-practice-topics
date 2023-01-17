import { useState } from "react";

const CustomUseToggle = (initialValue) => {
    const [value, setValue] = useState(initialValue);

    const ToggleValue = (value) => {
        setValue(currentValue => 
            typeof value === 'boolean' ? value : !currentValue
        );
    }

    return [value, ToggleValue];
}

export default CustomUseToggle;