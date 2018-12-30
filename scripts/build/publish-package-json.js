const path = require( "path" );
const fs = require( "fs" );

const sourcePath = path.resolve( __dirname, "../../package.json" );
const targetPath = path.resolve( __dirname, "../../dist/package.json" );

const sourceObj = JSON.parse( fs.readFileSync( sourcePath ) );

const publishedProperties = Object.getOwnPropertyNames( sourceObj ).filter(
  prop => prop !== "devDependencies" && prop !== "scripts"
);

const targetObj = {};

publishedProperties.forEach( prop => {
  targetObj[ prop ] = sourceObj[ prop ];
});

fs.writeFileSync(
  targetPath,
  JSON.stringify( targetObj, null, 2 )
);

