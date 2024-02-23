export default function modifyDateValue(datePickerObject) {
    let valueDatePicker = datePickerObject.getValue().toISOString();
    valueDatePicker = valueDatePicker.split('T')[0];
    valueDatePicker += "T00:00:00";
    return valueDatePicker;
}
