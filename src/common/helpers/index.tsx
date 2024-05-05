export function createContainerBlankMap(count: number, maxSize: number, maxContainerCount = 24) {
    const mapArray = []
    const getRandint = (max: number): number => {
        return Math.floor(Math.random() * Math.round(max)) + 1
    }
    const getColSpan = (count: number) => {
        if (maxContainerCount - count < maxSize) {
            if (maxContainerCount - count == 1) return 1
            return getRandint(maxContainerCount - count)
        }
        const spaceLeft = 6 - count % 6
        if (spaceLeft < maxSize) {
            if (spaceLeft == 1) return 1
            return getRandint(spaceLeft)
        }
        return getRandint(maxSize)
    }
    while (count < maxContainerCount) {
        const colSpan = getColSpan(count)
        mapArray.push(colSpan)
        count = count + colSpan
    }
    return mapArray
}

export function apply2pxHover(elementId: string) {
    const element = document.getElementById(elementId)
    if (element) {
        const presicion = 1000
        const [height, width] = [element.clientHeight, element.clientWidth]
        const [scaleY, scaleX] = [1 + Math.round(2 / element.clientHeight * presicion) / presicion, 1 + Math.round(2 / element.clientWidth * presicion) / presicion]
        element.addEventListener("mouseover", () => {
            // element.style.height = `${height + 4}px`
            // element.style.marginTop = "-2px"
            // element.style.marginBottom = "-2px"
            // element.style.width = `${width + 4}px`
            element.style.transform = `scaleX(${scaleX}) scaleY(${scaleY})`
        })
        element.addEventListener("mouseleave", () => {
            // element.style.height = `${height}px`
            // element.style.marginTop = "0"
            // element.style.marginBottom = "0"
            // element.style.width = `${width}px`
            element.style.transform = "scale(1)"
        })
    }
}