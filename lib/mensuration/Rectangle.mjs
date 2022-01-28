const areaRectangle = (length=0, breath=0) => {
    return length*breath;
}

const perimeterRectangle = (length=0, breath=0) => {
    return 2*(length+breath);
}

export {areaRectangle, perimeterRectangle};