package com.amelectronic.market.dao;

import com.amelectronic.market.model.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {

    Page<Product> findByCategoryId(Long id, Pageable page);

    Page<Product> findByNameContaining(String name, Pageable page);

    @Query("select count (id) from Product where category.id = ?1")
    long getProductsLengthByCategoryId(long id);

    @Query("select count (id) from Product where name LIKE %?1%")
    long getProductsSizeByKey(String key);
}
