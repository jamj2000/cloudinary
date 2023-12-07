// https://cloudinary.com/documentation/admin_api
import {v2 as cloudinary} from 'cloudinary';

cloudinary.config({
  cloud_name: 'demo',
  api_key: '465997383997254',
  api_secret: 'sO-QQtHtLfseNI0vhhbPJma7zVA'
});



// LIST RESOURCES
//const callback = (result) => console.log(result)                                // callback
//cloudinary.api.resources({max_results: 500, tags: true }).then(callback)       // con callback

const result = await cloudinary.api.resources({max_results: 500, tags: true })    // con top-level await
result.resources.map ( i => console.log(i.type, i.format, i.public_id, i.secure_url, i.tags) )
//console.log(result) // toda la información


// UPLOAD RESOURCE
 // desde url
//cloudinary.uploader.upload(
//  "https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg",
//  { use_filename: true },
//  function(error, result) {console.log(result); }
//);


/* // desde sistema de archivos
cloudinary.uploader.upload(
  "avatar.png",
  { public_id: "avatar" },
  function(error, result) {console.log(result); }
);
*/


// LIST MAIN FOLDERS
//cloudinary.api.root_folders().then(callback);

// const { folders } = await cloudinary.api.root_folders()
// console.log (folders.map ( f => f.path))


// LIST SUBFOLDERS
//cloudinary.api.sub_folders('samples', {}).then(callback);

//const { folders : subfolders } = await cloudinary.api.sub_folders('samples', {})
//console.log (subfolders.map (f => f.path))


// DESTROY A RESOURCE
//cloudinary.uploader.destroy('olympic_flag', {}).then(callback);

// RENAME A RESOURCE
//cloudinary.uploader.rename('logo', 'avatar', {}).then(callback);


//TRANSFORMATION
//const image = await cloudinary.image("samples/people/smiling-man", {transformation: [
//  {gravity: "face", height: 200, width: 200, crop: "thumb"},
//  {radius: "max"},
//  {fetch_format: "auto"}
//]})
//console.log(image)

// const url = cloudinary.url("samples/people/smiling-man", {background: "blue", height: 300, width: 300, crop: "pad"})
// console.log(url)

// Transformaciones en Cloudinary
// https://cloudinary.com/documentation/image_transformations
// https://cloudinary.com/blog/8-image-transformations-developers-can-make-on-the-fly-learning-by-example
// https://res.cloudinary.com/<cloud_name>/<asset_type>/<delivery_type>/<transformations>/<version>/<public_id>.<extension>
// https://res.cloudinary.com/demo/image/upload/c_thumb,g_face,h_200,w_200/r_max/f_auto/woman-blackdress-stairs.png
