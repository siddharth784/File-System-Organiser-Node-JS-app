const fs=require('fs')
const path=require('path')
function organisefn(dirPath){
    // console.log("organise function implemented for "+dirPath);
    if(dirPath==undefined){     //meaning no path has been entered
        // console.log("enter a path");
        // return;
        //*process.cwd() gives the current working directory that we are currently working on and it's better to operate on current working directory(cwd) if no path is entered as it can be assumed as the default directory/path     *//
        organisefn(process.cwd());
        return;
    }
    if(fs.existsSync(dirPath)){
        let destPath=path.join(dirPath,"organised files");
        if(fs.existsSync(destPath)==false){
            fs.mkdirSync(destPath);
        }
        organisehelper(dirPath,destPath);
    }
    else{
        console.log("enter a valid path");
        return;
    }
}


function organisehelper(src,dest){
    //identify filetype of files in directory path so that they can be pasted in the correct folder inside destination path
    let filenames=fs.readdirSync(src);
    // console.log(filenames);
    for(let i=0;i<filenames.length;i++){
        let filepath=path.join(src,filenames[i]);
        console.log(filepath);
        if(fs.lstatSync(filepath).isFile()){
            // console.log(filenames[i]+" is indeed a file");
            let category = getCategory(filenames[i]);
            // console.log(filenames[i]+" belongs to "+category+" category");
            sendFiles(filepath,dest,category);
        }
    }
}

let categories={
    media:["mp4","mkv"],
    documents:["pdf","cpp","sce","txt","cpp","java","class"],
    archive:["zip","rar","iso","xz"]
}

function getCategory(filename){
     let extension = path.extname(filename).substring(1);
    //  console.log(extension);
     for(let category in categories){       //dont do let category:categories like in java. do let category in categories
        let categoryArr=categories[category];
         for(let j=0;j<categoryArr.length;j++){
             if(extension==categoryArr[j]){
                 return category;
             }
         }
     }
     return "others";
}



function sendFiles(filepath,dest,category){
    let categoryPath=path.join(dest,category);
    if(fs.existsSync(categoryPath)==false){
        fs.mkdirSync(categoryPath);
    }
    let filename=path.basename(filepath);
    let destFilePath=path.join(categoryPath,filename);
    fs.copyFileSync(filepath,destFilePath);
    console.log(filename+" copied to "+category);
    fs.unlinkSync(filepath);    //delete the file from original folder now
}


module.exports={
    organisekey:organisefn
}