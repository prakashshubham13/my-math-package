const volumeCube = (side=0) => {
    return side*side*side;
}

const surfaceAreaCube = (side=0) => {
    return 6*side*side;
}

export { volumeCube, surfaceAreaCube };