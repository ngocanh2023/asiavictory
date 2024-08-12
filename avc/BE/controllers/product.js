const Product = require("../models/product")

exports.postDataAdmin = (req, res) => {
    const selectedValue = req.body.selectedValue;
    const image = req.body.image;
    const title = req.body.title;
    const content = req.body.content;
    const time = req.body.time;

    const dataNew = new Product({
        selectedValue: selectedValue,
        image: image,
        title: title,
        content: content,
        time: time,
    })
    console.log('req.body', req.body);

    dataNew.save()
        .then((result) => {
            res.json({ success: true, message: "Successful Updated Data!" })
        })
        .catch(e => { console.log(e) });

}
exports.getData = (req, res) => {
    Product.find()
        .then(pro => { console.log(pro); res.json(pro) })
        .catch(e => { console.log(e) })
}
exports.getDataByDate = (req, res) => {
    const selectedTitle = req.query.title;
    console.log('selectedTitle', selectedTitle, typeof selectedTitle);

    Product.find({ selectedValue: selectedTitle })
        .sort({ time: -1 }) // Sắp xếp theo thời gian giảm dần tăng dân time: 1
        .limit(1) // Chỉ lấy bản ghi đầu tiên (ngắn nhất về thời gian)
        .then(result => { res.json(result) })
        .catch(e => console.log(e))
}
exports.getDataByTitle = (req, res) => {
    const selectedTitle = req.query.title;
    console.log('selectedTitle', selectedTitle, typeof selectedTitle);

    Product.find({ selectedValue: selectedTitle })
        .then(result => { res.json(result) })
        .catch(e => console.log(e))
}