package com.amelectronic.market.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.OneToMany;
import java.util.Set;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Category extends CategoryProduct {

    private String iconClass;

    @JsonIgnore
    @OneToMany(mappedBy = "category")
    private Set<Product> products;
}
