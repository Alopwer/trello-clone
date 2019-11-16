const checkDate = (date) => {
    if (!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(date))
        return false;

    const monthLength = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];
    const [day, month, year] = getDateParts(date)

    if (year < 2001 || year > 3000 || month === 0 || month > 12)
        return false;

    if (year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0))
        monthLength[1] = 29;

    return day > 0 && day <= monthLength[month - 1]
}

const getDateParts = (date) => {
    const parts = date.split("/");
    const day = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10);
    const year = parseInt(parts[2], 10);
    return [day, month, year]
}

export {
    checkDate,
    getDateParts
}