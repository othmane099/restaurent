package com.amelectronic.market.service;

import com.amelectronic.market.dao.ProductRepository;
import com.amelectronic.market.model.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService{

    private ProductRepository productRepository;

    @Autowired
    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public List<Product> getAllProducts(int page,int size){
        Pageable pageable = PageRequest.of(page,size);
        return productRepository.findAll(pageable).getContent();
    }

    public List<Product> getProductByCategoryId(Long id,int page,int size){
        Pageable pageable = PageRequest.of(page,size);
        return productRepository.findByCategoryId(id,pageable).getContent();
    }

    public List<Product> getProductsByNameContaining(String name,int page,int size){
        Pageable pageable = PageRequest.of(page,size);
        return productRepository.findByNameContaining(name,pageable).getContent();
    }

    public Product getProductById(Long id){
        return productRepository.findById(id).get();
    }

    public long getAllProductsCount() {
        return productRepository.count();
    }

    public long getProductsByCategoryIdLength(Long id) {
        return productRepository.getProductsLengthByCategoryId(id);
    }

    public long getProductsSizeByKey(String key) {
        return productRepository.getProductsSizeByKey(key);
    }
}
