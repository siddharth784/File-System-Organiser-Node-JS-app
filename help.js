function helpfn(dirPath){
    console.log("help function implemented for "+dirPath);
    console.log(`list of commands that you can enter:
    node main.js help
    node main.js organise <directory path>
    node main.js tree <directory path>            
    `)
}
module.exports={
    helpkey:helpfn
}