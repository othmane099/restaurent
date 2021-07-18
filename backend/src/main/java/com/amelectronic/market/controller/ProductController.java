package com.amelectronic.market.controller;

import com.amelectronic.market.model.Product;
import com.amelectronic.market.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:4200")
@RequestMapping("/api")
public class ProductController {

    private ProductService productService;

    @Autowired
    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    // http://localhost:8080/api/allProducts?page={value}&size={value}
    @GetMapping("/allProducts")
    public List<Product> getAllProducts(@RequestParam int page,@RequestParam int size){
        return productService.getAllProducts(page,size);
    }

    // http://localhost:8080/api/category?id={value}&page={value}&size={value}
    @GetMapping("/category")
    public List<Product> getAllOrderByCategoryId(@RequestParam Long id ,@RequestParam int page,@RequestParam int size){
        return productService.getProductByCategoryId(id ,page,size);
    }

    // http://localhost:8080/api/search?word={key}&page={value}&size={value}
    @GetMapping("/search")
    public List<Product> getProductsByKey(@RequestParam String word ,@RequestParam int page,@RequestParam int size){
        return productService.getProductsByNameContaining(word ,page,size);
    }

    // http://localhost:8080/api/product?id={value}
    @GetMapping("/product")
    public Product getProductById(Long id){
        return productService.getProductById(id);
    }

    // http://localhost:8080/api/productscount
    @GetMapping("/productscount")
    public long productsCount(){
        return productService.getAllProductsCount();
    }

    // http://localhost:8080/api/ctegoryidsize?id={value}
    @GetMapping("/categoryidsize")
    public long geProductsByIdCategorySize(@RequestParam Long id){
        return productService.getProductsByCategoryIdLength(id);
    }

    // http://localhost:8080/api/keysize?key={value}
    @GetMapping("/keysize")
    public long sizeOfProductsByKey(@RequestParam String key){
        return productService.getProductsSizeByKey(key);
    }
}
