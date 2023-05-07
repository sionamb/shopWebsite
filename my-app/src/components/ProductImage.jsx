function ProductImage(props) {
    const products = props.products;
    return (
        <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
            <img
                src={products[0].src}
                class="w-100 shadow-1-strong rounded mb-4"
                alt={products[0].alt}
            />
            <img
                src={products[1].src}
                class="w-100 shadow-1-strong rounded mb-4"
                alt={products[1].alt}
            />
            <img
                src={products[2].src}
                class="w-100 shadow-1-strong rounded mb-4"
                alt={products[2].alt}
            />
        </div>
    );
}

export default ProductImage;
