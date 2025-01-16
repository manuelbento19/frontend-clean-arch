export function fakeAPI<T>(data: T): Promise<T>{
    return new Promise((resolve)=>{
        setTimeout(()=>resolve(data),1000)
    })
}