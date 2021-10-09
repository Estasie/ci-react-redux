export default function ValidateForm(fields) {
    let errors = [];
    for (let field in fields){
        if (fields[field] === '' || fields[field] === undefined || fields[field].length < 1 ){
            errors.push(field)
        }
        
    }
    return errors;
}
