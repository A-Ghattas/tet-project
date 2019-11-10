import {products} from './product.model'

export const getProducts = async (req, res) => {
    let results = [];
    if (req.body.searchString == null || req.body.searchString === '') {
        res.status(200).json({products: products})
    } else {
        products.forEach((product) => {
            for (const property in product) {
                if (product[property].includes(req.body.searchString)) {
                    results.push(product)
                }
            }
        })
        res.status(200).json({products: results})
    }
}
