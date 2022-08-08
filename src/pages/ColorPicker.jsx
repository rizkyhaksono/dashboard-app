import React from "react";
import { ColorPickerComponent } from "@syncfusion/ej2-react-inputs";

import { EditorData } from "../data/dummy";
import { Header } from "../components";

const ColorPicker = () => {
    return (
        <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
            <Header category="App" title="Color Picker" />
            <div className="text-center">
                <div id="preview"></div>
                <div className="flex justify-center items-center gap-20 flex-wrap">
                    <div>
                        <p classNamme="text-2xl font-semibold mt-2 mb-4">Inline Palettes</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ColorPicker;
