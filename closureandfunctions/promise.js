const fs = require('fs');


//função retorna promesa que é determinar quando uma função vai retornar, no caso abaixo retorna um setTimeout com outra função dentro
function time(ms){
    return  new Promise((resolve, reject)=> {
        setTimeout(resolve, ms)
    })}

    //ms é o valor em milisegundos, e resolve é o conteúdo de .then
    time(2000).then(() => console.log('opa'))



    //Função pra ler o arquivo que será declarado no local de do parâmetro file
    const readFile= (file)=>{
        return new Promise((resolve, reject)=>{ 
            fs.readFile(file,(err,contents)=>{
                if(err){
                    reject(err)
                }else{
                    resolve(contents.toString())
                }
            })
        })
    }
//função pra escrever, primeiro parâmetro cria arquivo e o segundo parâmetro é o conteúdo que será escrito
    const writeFile = (file,contents) => {
        // a promesa primeiro parãmetro rodar o codigo e o segundo paramentro para o código
  return new Promise((resolve, reject)=>{
    //escreve arquivo primeiro parâmetro nome do arquivo segundo conteúdo do arquivo
    fs.writeFile(file, contents, (err)=>{
        if(err){
            reject(err)
        }else{
            resolve()
        }
     })
   })
 }
//ler arquivo declarado o parâmetro
 readFile('promise.js')
 //pega o conteúdo do arquivo lido e através do writeFile cria um novo arquivo e adiciona o conteudo do arquivo declardo como parâmetro de readFile
 .then((contents) =>writeFile('tst.js', contents))
 
 //esse metodo usa o .bind pra isolar o primeiro parâmetro o que cria o arquivo file deixando nulo fazendo com que ele escreva o arquivo declado em readFile com o contéudo que esta no segundo parâmetro de writeFile
 .then(writeFile.bind(null,'tst2.js'))