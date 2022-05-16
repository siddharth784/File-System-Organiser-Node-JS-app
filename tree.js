const fs=require('fs')
const path=require('path')
function treefn(dirPath){
    // console.log("tree function implemented for "+dirPath);
    if(dirPath==undefined){
        // console.log("enter a path");
        // return;
        treeHelper(process.cwd(),"");
        return;
    }
    else if(fs.existsSync(dirPath)){
        treeHelper(dirPath,"");
    }
    else{
        console.log("enter a valid path");
    }
}



function treeHelper(dirPath,indent){
    //check first if file or folder
    let isFile = fs.lstatSync(dirPath).isFile();
    if(isFile==true){
        let fileName=path.basename(dirPath);
        console.log(indent+"├──"+fileName);
    }
    else{
        let folderName=path.basename(dirPath);
        console.log(indent+"└──"+folderName);
        let children=fs.readdirSync(dirPath);
        for(let i=0;i<children.length;i++){
            let childPath=path.join(dirPath,children[i]);
            // console.log(children[i]);
            treeHelper(childPath,indent+"  ");
        }
    }
}

module.exports={
    treekey:treefn
}