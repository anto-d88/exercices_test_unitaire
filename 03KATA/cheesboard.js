export function echequier(){

    let line = 8;

    let colone = "";

    let objet = { cheesboard : "" };

    let array = [];

    for( let i = 1; i <= line; i++){

        for( let j = 1; j <= line; j++){

            if((i+j)%2 == 0){
                colone += " "
            }
            else{
                colone += "#"
            }
        }
        colone += "\n"
        objet.cheesboard = colone
        array.push(objet)
    }

    return array
}