
module.exports.index =  function (req, res) {
    res.status(200).json("Post index");
}

module.exports.getPostById = (req, res) => {
    res.status(200).json("Post getPostById");
}


module.exports.updatePost =   (req, res) => {
    console.log(req.body);
    const {title} = req.body;
    console.log(`Title : ${title}`);
    res.status(201).json(req.body);
}

module.exports.deletePost =   (req, res) => {
    console.log("Delete Post..");
    res.status(200).json("Post");
}

module.exports.createPost =   (req, res) => {
    console.log(req.body);
    const {title} = req.body;
    console.log(`Title : ${title}`);
    res.status(201).json(req.body);
}

module.exports.updatePost =   (req, res) => {
    console.log(req.body);
    const {title} = req.body;
    console.log(`Title : ${title}`);
    res.status(201).json(req.body);
}

module.exports.deletePost =   (req, res) => {
    console.log("Delete Post..");
    console.log(req.body);
    const {title} = req.body;
    console.log(`Title : ${title}`);
    res.status(201).json(req.body);
}

