export interface Character {
    id:number,
    name:string,
    imageURL:string,
    titre: string,
    famille: string,
}

export const Character =(
    id : number,
    name: string,
    imageURL : string,
    titre : string,
    famille : string,

): Character =>({
    id,
    name,
    imageURL,
    titre,
    famille,
});