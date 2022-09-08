

export const filterProducts = (defaultProducts, filters) => {
    
    const filteredProducts = defaultProducts.filter(product => 
        
        (filters.categories.indexOf(product.category) !== -1) &&
        (filters.brands.indexOf(product.details.brand) !== -1) && 
        (filters.price[0] <= product.price && filters.price[1] >= product.price) && 
        (parseFloat(filters.discount) <= product.discountPercentage)

    )

    console.log(filteredProducts)
    return filteredProducts;
}