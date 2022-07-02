import React from "react";
import ClassComponent from "./pembahasan/ClassComponent";
import FunctionalComponent from "./pembahasan/FunctionalComponent";

export default class KomponenC extends React.Component {

    render() {

        return (
            <div>
                <ClassComponent nama="Aries" />
                {/* <FunctionalComponent nama="Aries Kurniawan" /> */}
                <FunctionalComponent nama="Aries" /> 
            </div>
        )
    }
}