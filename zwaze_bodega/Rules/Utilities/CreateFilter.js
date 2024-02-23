export default function createFilter(filterPropertyName, filterOperator, filterOperandType, filterOperand) {
    let filter = `${filterPropertyName} ${filterOperator} `;
    if (filterOperandType === "string") {
        filter += "'" + filterOperand + "'";
    } else if (filterOperandType === "date" || filterOperandType === "datetime") {
        filter += `datetime'${filterOperand}'`;
    }
    return filter;
}