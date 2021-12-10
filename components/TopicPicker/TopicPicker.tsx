import React, {useState} from 'react'
import { useRecoilState } from 'recoil'
import {currentValue} from '../../atom/currentValueAtom'
import {openState} from '../../atom/openAtom'
import DropDownPicker from 'react-native-dropdown-picker';

const TopicPicker = () => {

    const[open, setOpen] = useRecoilState<any>(openState)
    const[value, setValue] = useRecoilState<any>(currentValue)
    const[items, setItems] = useState<any>([
        {label: 'All', value: 'all'},
        {label: 'India', value: 'national'},
        {label: 'Business', value: 'business'},
        {label: 'Sports', value: 'sports'},
        {label: 'World', value: 'world'},
        {label: 'Politics', value: 'politics'},
        {label: 'Technology', value: 'technology'},
        {label: 'Startup', value: 'startup'},
        {label: 'Entertainment', value: 'entertainment'},
        {label: 'Miscellaneous', value: 'miscellaneous'},
        {label: 'Hatke', value: 'hatke'},
        {label: 'Science', value: 'science'},
        {label: 'Automobile', value: 'automobile'},
    ])

    return (
        <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            style={{
                width: 150,
            }}
            dropDownContainerStyle={{
                backgroundColor: "white",
                width: 150
            }}
        />
    )
}

export default TopicPicker
