export interface Character {
    id:number,
    name:string,
    imageURL:string
}

export const Character =(
    id : number,
    name: string,
    imageURL : string

): Character =>({
    id,
    name,
    imageURL
});