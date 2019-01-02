const path = require( "path" );
const fs = require( "fs" );

const sourcePath = path.resolve( __dirname, "../../" );
const targetPath = path.resolve( __dirname, "../../dist/" );

copyToTarget( sourcePath, "LICENCE", targetPath );
copyToTarget( sourcePath, "README.md", targetPath );

const sourcePackageObj = JSON.parse(
  fs.readFileSync(
    path.resolve( sourcePath, "package.json" )
  )
);

const publishedProperties = Object.getOwnPropertyNames( sourcePackageObj )
  .filter(
    prop => prop !== "devDependencies" && prop !== "scripts"
  );

const targetPackageObj = {};

publishedProperties.forEach( prop => {
  targetPackageObj[ prop ] = sourcePackageObj[ prop ];
});

targetPackageObj.main = "./utils.js";

fs.writeFileSync(
  path.resolve( targetPath, "package.json" ),
  JSON.stringify( targetPackageObj, null, 2 )
);

function copyToTarget( sourceDir, fileName, targetDir ) {
  fs.copyFileSync(
    path.resolve( sourceDir, fileName ),
    path.resolve( targetDir, fileName )
  );
}

