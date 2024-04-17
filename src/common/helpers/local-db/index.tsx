class TempDB {
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

export default TempDB