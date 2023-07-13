import {useState} from "react";
import {SaveIcon} from "../icons";

export const SaveButton = ({defaultState}) => {
    const [IsSave, setIsSave] = useState(false);

    const handleSave = () => {
        setIsSave(!IsSave)
    };

    return (
        <button className="flex items-center gap-1" onClick={handleSave}>
            <SaveIcon fill={IsSave}/>
            <span className="text-sm font-medium">Save</span>
        </button>
    );
};

