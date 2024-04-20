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
            element.style.transform = `scaleX(${scaleY}) scaleY(${scaleY})`
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

export class TempDB {
    constructor(
        private table: string = "default",
        private name: string = "default",
        private ver: number = 1
    ) {}
    
    private async openConnection (): Promise<IDBDatabase> {
        return new Promise((res, rej) => {
            const request = indexedDB.open(this.name, this.ver)
            request.onerror = ev => rej(request.error)
            request.onupgradeneeded = ev => {
                if (!request.result.objectStoreNames.contains(this.table)) {
                    console.log("dupa")
                    request.result.createObjectStore(this.table)
                }
            }
            request.onsuccess = ev => res(request.result)
        })
    }

    public async put (key: number | string, value: object): Promise<void> {
        const connection = await this.openConnection()
        if (!connection) {console.error("no connection could be opened"); return}
        const transaction = connection.transaction(this.table, 'readwrite')
        const score = transaction.objectStore(this.table)
        transaction.oncomplete = () => connection.close()
        return new Promise((res, rej) => {
            const dupa = score.put(value, key)
            dupa.onerror = ev => rej(dupa.error)
            dupa.onsuccess = ev => res()
        })
    }    

    public async get (key: number | string): Promise<any> {
        const connection = await this.openConnection()
        if (!connection) {console.error("no connection could be opened"); return}
        const transaction = connection.transaction(this.table, 'readwrite')
        const score = transaction.objectStore(this.table)
        transaction.oncomplete = () => connection.close()
        return new Promise((res, rej) => {
            const value = score.get(key)
            value.onerror = ev => rej(value.error)
            value.onsuccess = ev => res(value.result)
        })
    }
}

export async function updateRecord<T>(tablename: string, newrecord: T): Promise<void> {
    const db = new TempDB()
    const initialData = (await db.get(tablename)) as Array<T>
    initialData.push(newrecord)
    await db.put(tablename, initialData)
    return
}

export async function deleteEntry<T extends { id: number }>(tablename: string, id: number): Promise<void> {
    const db = new TempDB()
    const initialData = (await db.get(tablename)) as Array<T>
    const toDelete = initialData.findIndex(e => e.id == id)
    initialData.splice(toDelete, 1)
    await db.put(tablename, initialData)
    return
}

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
        mapArray.push(<div key={count} className={`${"col-span-"+colSpan} row-span-1 rounded-[16px] bg-main-dark`}></div>)
        count = count + colSpan
    }
    return mapArray
}