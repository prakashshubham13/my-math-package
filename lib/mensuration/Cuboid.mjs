const volumeCuboid = (length=0, breath=0, height=0) => {
    return length*breath*height;
}

const totalSurfaceAreaCuboid = (length=0, breath=0, height=0) => {
    return 2*(length*breath + breath*height + length*height);
}

const curvedSurfaceAreaCuboid = (length=0, breath=0, height=0) => {
    return 2*height(length + breath);
}

export { volumeCuboid, totalSurfaceAreaCuboid, curvedSurfaceAreaCuboid };